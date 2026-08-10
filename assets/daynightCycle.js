// daynightCycle.js
// Lightweight DayNightCycle for PIXI - piecewise-linear (precomputed table) RGB multipliers + intensity overlay
// Usage: import { DayNightCycle } from './daynightCycle.js';
// In Game constructor: this.dayNight = new DayNightCycle(this, { dayLength: 600, tableSteps: 360 });
// In gameLoop ticker callback: this.dayNight.step(delta);

export class DayNightCycle {
  constructor(game, opts = {}) {
    this.game = game;
    this.app = game.app; // PIXI.Application
    this.dayLength = opts.dayLength ?? 600; // seconds per full day
    this.steps = opts.tableSteps ?? 360; // precomputed table size (no per-frame lerp required)

    // Internal time in seconds
    this.time = 0;
    
    // For tracking in-game time display
    this.lastDisplayedSecond = -1;

    // Build keyframes (time fraction 0..1) and target rgb multipliers + alpha intensity
    // Night: 8pm-5am (cool blue, alpha 0.55-0.70)
    // Dawn golden: 5:30-6am (warm orange peak)
    // Day: 8am-4pm (neutral)
    // Dusk golden: 6pm (warm orange peak)
    // Twilight: 7-8pm (purple → blue)
    this.keyframes = [
      { t: 0.000, rgb: [0.50, 0.58, 1.10], alpha: 0.70, bg: 0x040812 }, // 12am — deep night
      { t: 0.083, rgb: [0.50, 0.58, 1.10], alpha: 0.70, bg: 0x040812 }, // 2am — still deep
      { t: 0.167, rgb: [0.55, 0.62, 1.05], alpha: 0.55, bg: 0x080c1a }, // 4am — pre-dawn lighten
      { t: 0.208, rgb: [0.80, 0.75, 0.90], alpha: 0.28, bg: 0x1a1528 }, // 5am — dawn subtle
      { t: 0.229, rgb: [1.15, 0.90, 0.75], alpha: 0.28, bg: 0xffaa60 }, // 5:30am — golden rise
      { t: 0.250, rgb: [1.25, 1.00, 0.85], alpha: 0.18, bg: 0xffcc88 }, // 6am — sunrise peak
      { t: 0.292, rgb: [1.05, 1.02, 1.00], alpha: 0.04, bg: 0xd0e4ff }, // 7am — morning
      { t: 0.333, rgb: [1.00, 1.00, 1.00], alpha: 0.00, bg: 0xffffff }, // 8am — neutral day
      { t: 0.667, rgb: [1.00, 1.00, 1.00], alpha: 0.00, bg: 0xffffff }, // 4pm — neutral ends
      { t: 0.708, rgb: [1.05, 1.00, 0.90], alpha: 0.05, bg: 0xfff0d0 }, // 5pm — afternoon warm
      { t: 0.750, rgb: [1.25, 0.95, 0.70], alpha: 0.25, bg: 0xffb050 }, // 6pm — sunset golden
      { t: 0.792, rgb: [0.85, 0.78, 0.90], alpha: 0.35, bg: 0x3a1a45 }, // 7pm — dusk purple
      { t: 0.833, rgb: [0.60, 0.65, 1.05], alpha: 0.55, bg: 0x0e0a22 }, // 8pm — night settling
      { t: 0.875, rgb: [0.50, 0.58, 1.10], alpha: 0.65, bg: 0x060a18 }, // 9pm — night
      { t: 0.958, rgb: [0.50, 0.58, 1.10], alpha: 0.70, bg: 0x040812 }, // 11pm — deep night
      { t: 1.000, rgb: [0.50, 0.58, 1.10], alpha: 0.70, bg: 0x040812 }, // loop to midnight
    ];

    // Precompute table of length this.steps containing {r,g,b,alpha,bg}
    this.table = new Array(this.steps);
    this._buildTable();

    // Current sampled value
    this.current = { r: 1, g: 1, b: 1, alpha: 0, bg: 0xffffff };

    // Create full-screen multiply overlay sprite (white texture) that will multiply the whole scene
    this.overlay = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.overlay.anchor.set(0, 0);
    this.overlay.width = this.app.renderer.width;
    this.overlay.height = this.app.renderer.height;
        this.overlay.blendMode = 'multiply';
    this.overlay.zIndex = 9999;
    this.overlay.interactive = false;
    this.overlay.renderable = true;
    this.overlay.autoResize = false;

    // Place overlay above regular world rendering; add to stage
    // If you use layers, add to UI layer instead.
    this.app.stage.addChild(this.overlay);

    // Listen for resize to keep overlay covering screen
    window.addEventListener('resize', () => this._onResize());

    // initialisely sample
    this._sampleAndApply(0);
  }

  _onResize() {
    this.overlay.width = this.app.renderer.width;
    this.overlay.height = this.app.renderer.height;
  }

  _lerp(a, b, t) { return a + (b - a) * t; }

  _buildTable() {
    // For each table index compute time fraction and find which keyframe segment it lies in,
    // then linearly interpolate rgb + alpha + bg across that segment (cheap, done once)
    for (let i = 0; i < this.steps; i++) {
      const tf = i / this.steps; // fraction 0..(1-1/steps)
      // find segment
      let a = this.keyframes[0];
      let b = null;
      for (let k = 1; k < this.keyframes.length; k++) {
        if (tf <= this.keyframes[k].t) { b = this.keyframes[k]; break; }
        a = this.keyframes[k];
      }
      if (!b) { b = this.keyframes[this.keyframes.length - 1]; }
      const segT = (tf - a.t) / (b.t - a.t || 1);
      const r = this._lerp(a.rgb[0], b.rgb[0], segT);
      const g = this._lerp(a.rgb[1], b.rgb[1], segT);
      const bl = this._lerp(a.rgb[2], b.rgb[2], segT);
      const alpha = this._lerp(a.alpha, b.alpha, segT);
      // background color we interpolate as integer RGB channels
      const a_bg = a.bg; const b_bg = b.bg;
      const aR = (a_bg >> 16) & 0xff, aG = (a_bg >> 8) & 0xff, aB = a_bg & 0xff;
      const bR = (b_bg >> 16) & 0xff, bG = (b_bg >> 8) & 0xff, bB = b_bg & 0xff;
      const outR = Math.round(this._lerp(aR, bR, segT));
      const outG = Math.round(this._lerp(aG, bG, segT));
      const outB = Math.round(this._lerp(aB, bB, segT));
      const bgInt = (outR << 16) | (outG << 8) | outB;
      this.table[i] = { r, g, b: bl, alpha, bg: bgInt };
    }
  }

  _sampleAndApply(stepIndex) {
    const e = this.table[stepIndex % this.steps];
    this.current.r = e.r; this.current.g = e.g; this.current.b = e.b; this.current.alpha = e.alpha; this.current.bg = e.bg;

    // Apply to overlay tint and alpha - tint expects a hex color
    const tintHex = ((Math.round(e.r * 255) & 0xff) << 16) | ((Math.round(e.g * 255) & 0xff) << 8) | (Math.round(e.b * 255) & 0xff);
    this.overlay.tint = tintHex;
    this.overlay.alpha = e.alpha;

    // Optionally update renderer background to match sky tint (subtle)
    this.app.renderer.backgroundColor = e.bg;
  }

  // Helper method to format time for display
  _formatTime() {
    // Calculate hours and minutes based on day progress
    const dayProgress = this.time / this.dayLength;
    const totalMinutes = 24 * 60 * dayProgress;
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = Math.floor(totalMinutes % 60);
    
    // Determine period (AM/PM)
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    
    return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  step(delta) {
    // delta is tick delta (frames) from PIXI.ticker; convert to seconds using ticker.deltaMS
    const dt = (this.game.app.ticker.deltaMS / 1000) * (delta || 1);
    this.time = (this.time + dt) % this.dayLength;
    const dayProgress = this.time / this.dayLength; // 0..1
    const idx = Math.floor(dayProgress * this.steps) % this.steps;
    this._sampleAndApply(idx);
    
    // Display time in console every in-game second
    const currentSecond = Math.floor(this.time);
    if (currentSecond !== this.lastDisplayedSecond) {
      this.lastDisplayedSecond = currentSecond;
      console.log(`Game Time: ${this._formatTime()}`);
    }
  }

  // Utility to get current multiplier for shader or other systems
  getCurrentMultiplier() {
    return { r: this.current.r, g: this.current.g, b: this.current.b, alpha: this.current.alpha };
  }

  // optional: allow setting time of day programmatically (seconds)
  setTimeSeconds(sec) {
    this.time = ((sec % this.dayLength) + this.dayLength) % this.dayLength;
    const idx = Math.floor((this.time / this.dayLength) * this.steps) % this.steps;
    this._sampleAndApply(idx);
  }

  shiftHours(n) {
    const hourSec = this.dayLength / 24;
    this.setTimeSeconds(this.time + hourSec * n);
  }
}


// ----------------------
// PATCH for game.js (what to add)
// 1) add import at top:
//    import { DayNightCycle } from './daynightCycle.js';
// 2) in Game.constructor after creating this.weaponRenderer:
//    this.dayNight = new DayNightCycle(this, { dayLength: 600, tableSteps: 360 });
// 3) in the ticker callback inside gameLoop (near other updates) call:
//    this.dayNight.step(delta);
// 4) optionally, to access current multipliers anywhere: this.dayNight.getCurrentMultiplier()
// ----------------------

// Notes & rationale:
// - This avoids per-pixel shader math or heavy per-frame lerps: the table is precomputed once and sampled cheaply.
// - The multiply overlay gives approximate per-channel multiplication so "orange things" change less under warm light.
// - You can reduce tableSteps (e.g. 180) for even less memory. 360 is a good balance: 360 entries * small objects.
// - If you have UI elements that you DON'T want tinted, render them in a separate container and add after overlay, or set overlay.parent to world container only.
// - If you want even subtler per-hue responses per-object, you can use getCurrentMultiplier() to pass to specific shaders or multiply per-sprite tint in batches.

// End of file