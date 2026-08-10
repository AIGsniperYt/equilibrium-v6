var Game = (function (exports) {
  'use strict';

  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _awaitAsyncGenerator(e) {
    return new _OverloadYield(e, 0);
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorAsync(n, e, r, t, o) {
    var a = _regeneratorAsyncGen(n, e, r, t, o);
    return a.next().then(function (n) {
      return n.done ? n.value : a.next();
    });
  }
  function _regeneratorAsyncGen(r, e, t, o, n) {
    return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise);
  }
  function _regeneratorAsyncIterator(t, e) {
    function n(r, o, i, f) {
      try {
        var c = t[r](o),
          u = c.value;
        return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) {
          n("next", t, i, f);
        }, function (t) {
          n("throw", t, i, f);
        }) : e.resolve(u).then(function (t) {
          c.value = t, i(c);
        }, function (t) {
          return n("throw", t, i, f);
        });
      } catch (t) {
        f(t);
      }
    }
    var r;
    this.next || (_regeneratorDefine(_regeneratorAsyncIterator.prototype), _regeneratorDefine(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
      return this;
    })), _regeneratorDefine(this, "_invoke", function (t, o, i) {
      function f() {
        return new e(function (e, r) {
          n(t, i, e, r);
        });
      }
      return r = r ? r.then(f, f) : f();
    }, !0);
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // config.js
  var Config = {
    // config.js
    DEBUG: {
      SHOW_CHUNK_BORDERS: false,
      SHOW_ENEMY_HITBOXES: false,
      SHOW_ENEMY_AI_DEBUG: false,
      SHOW_ENEMY_MOVEMENT_DEBUG: false,
      SHOW_PLAYER_HITBOX: false,
      SHOW_FPS: true,
      SHOW_HEALTHBAR: true
    },
    TILE: {
      WIDTH: 64,
      HEIGHT: 32,
      DEPTH: 16
    },
    COLORS: {
      BACKGROUND: 0x090705
    },
    PLAYER: {
      WIDTH: 64,
      HEIGHT: 64,
      SPEED: 0.1,
      CHUNK_LOAD_DISTANCE: 2,
      HITBOX_WIDTH: 40,
      HITBOX_HEIGHT: 40,
      ATTACK_COOLDOWN: 100,
      // ms
      ATTACK_RANGE: 3,
      // tiles
      ATTACK_DAMAGE: 3,
      MAX_HEALTH: 100,
      WOUNDING: {
        MIN_SPEED: 0.02,
        // slowest movement speed when near death
        SOUL_LEAK_INTERVAL: 100 // ms between soul leak particle spawns
      },
      REPAIR: {
        HEAL_RATE: 8,
        // health per second while channeling
        SOUL_COST: 18,
        // soul consumed per health healed (active conversion is expensive)
        SPEED_MULT: 0.3,
        // movement speed while channeling
        MIN_SOUL: 5 // minimum soul to begin repairing
      }
    },
    CAMERA: {
      ZOOM: 1.5,
      OFFSET_Y: 0,
      FOLLOW_SMOOTHING: 0.08,
      // lerp factor per frame (lower = smoother/laggier)
      FOLLOW_LAG: 1.75,
      // steady-state trailing distance behind raw target (scales smoothing with speed)
      LOOK_AHEAD: {
        DISTANCE: 2.0 // how far ahead of the player to look (world units)
      },
      TELEPORT_TRANSITION_DURATION: 400,
      // ms for camera to move to new position
      TELEPORT_EASE_TYPE: "quadratic",
      // or "linear", "cubic", "exponential"
      SHAKE: {
        SHAKE_INTENSITY: 2.25,
        // global multiplier — scales all shakes
        DECAY_RATE: 0.85,
        // per-frame — lower = shorter position decay (~0.5s at 0.85)
        TRAUMA_DECAY: 0.92,
        // micro-noise lifetime — lower = shorter vibration tail (~0.9s at 0.92)
        MICRO_AMPLITUDE: 1.2,
        // max micro-noise offset per trauma unit
        MAX_OFFSET: 10,
        // hard clamp per axis (px)
        DAMAGE_INTENSITY: 2.0,
        // shake when player takes damage
        DAMAGE_EXTRA_TRAUMA: 0.15,
        // extra trauma added on player damage for reeling tail
        ROTATION_DECAY: 0.88,
        // rotation decay per frame
        ROTATION_MICRO: 0.008,
        // rotational micro-noise amplitude per trauma unit
        MAX_ROTATION: 0.022,
        // max rotation in radians (~1.3 degrees)
        DEATH_INTENSITY: 7,
        // shake when player dies
        ENABLED: true // accessibility toggle
      }
    },
    DASH: {
      SPEED_MULTIPLIER: 5,
      DURATION: 200,
      // ms
      COOLDOWN: 300 // ms
    },
    SOUL: {
      MAX_SOUL: 250,
      MAX_TIERS: 12,
      ABSORB_RANGE: 5,
      BLEED_BASE_RATE: 0.25,
      BLEED_MAX_RATE: 5,
      AMBIENT_TOTAL_INTAKE: 8,
      // total raw soul/s absorbed from environment (hidden, unified pool)
      SOUL_PER_HP_PASSIVE: 12,
      // soul cost to passively heal 1 HP via ambient absorption
      SOUL_LEAK_RATE: 2
    },
    TIME_FREEZE: {
      TIME_SCALE: 0.05,
      // simulation speed during freeze (0 = absolute stop, 0.05 = barely drifting)
      DESATURATE_AMOUNT: 0.9,
      // 0 = full color, 1 = full greyscale
      ZOOM_MULTIPLIER: 1.08,
      // camera zoom-in during freeze (1 = no change)
      ZOOM_LERP_SPEED: 0.08 // per-frame lerp toward target zoom
    },
    ENEMY: {
      WIDTH: 32,
      HEIGHT: 32,
      HITBOX_RADIUS: 0.5,
      SPAWN_RATE: 1,
      SEPARATION_FORCE: 0.2,
      ATTACK_DAMAGE: 12,
      FOV_ANGLE: Math.PI * 0.83,
      // 150° field of view
      VISUAL_RANGE: 8,
      // tiles — max distance enemy can see
      CLOSE_DETECT_RANGE: 3,
      // tiles — detect behind you (non-FOV) with delay
      PROXIMITY_SUSPICION_DELAY: 1500,
      // ms — delay before proximity sense triggers suspicion
      SEARCH_DURATION: 3000,
      // ms — how long to search before giving up
      PANIC_DURATION: 2500,
      // ms — how long enemy flees before calming to suspicious
      PANIC_RADIUS: 5,
      // tiles — max distance to panic from death/danger
      DEATH_KNOCKBACK_DELAY: 500,
      // ms — delay after lethal hit before exploding into particles
      WOUNDING: {
        MIN_SPEED: 0.02,
        // slowest movement speed when near death
        FULL_HP_RESISTANCE: 0.3,
        // velocity retained per frame at full HP (snappy stop)
        DYING_RESISTANCE: 0.85,
        // velocity retained per frame when near death (long slide)
        FULL_HP_TACKLE_DURATION: 400,
        // fastest tackle when healthy
        WOUNDED_TACKLE_DURATION: 800,
        // slowest tackle when wounded
        SOUL_LEAK_INTERVAL: 100 // ms between soul leak particle spawns
      },
      PROPAGATE_RADIUS: 3,
      // tiles — alert/panic spreads to nearby enemies
      PROPAGATE_PANIC_RADIUS: 4,
      // tiles — panic spreads from panicked enemies
      PROPAGATE_SUSPICION_RADIUS: 5,
      // tiles — suspicion spreads from suspicious enemies
      ARROW_NOTICE_RADIUS: 3,
      // tiles — max distance to notice an arrow fly past
      ARROW_NEARMISS_ALERT_RADIUS: 1.5,
      // tiles — alert if arrow passes this close
      SOUND_RANGES: {
        ATTACK: 6,
        // tiles — player attacking
        DASH: 3,
        // tiles — player dashing
        DEATH: 5,
        // tiles — enemy dying
        FOOTSTEP: 1.5 // tiles — player walking
      }
    },
    ASSETS: {
      PLAYER: "assets/player.png",
      GRASS_ATLAS: "assets/grass-atlas.png",
      // Contains all grass variants
      SLIME: "assets/slime.png",
      GRASS_OBJECT: "assets/grass.png"
    },
    GRASS: {
      WIDTH: 64,
      HEIGHT: 64,
      OFFSET_Y: 0,
      SCALE: 2.0
    },
    ATLAS_INFO: {
      GRASS: {
        TILE_WIDTH: 64,
        // Must match individual tile width
        TILE_HEIGHT: 32,
        // Must match individual tile height
        COUNT: 3 // Number of variants in the atlas
      }
    },
    ATTACK: {
      SLASH: "SLASH",
      QUICK: "QUICK",
      HEAVY: "HEAVY",
      THRUST: "THRUST",
      SHOOT: "SHOOT"
    },
    ATTACK_TYPES: {
      SLASH: {
        PRECISE: false,
        DAMAGE: 3,
        KNOCKBACK: 0.3,
        COOLDOWN: 200,
        RANGE: 3,
        SWING_TIME: 120
      },
      QUICK: {
        PRECISE: false,
        DAMAGE: 1,
        KNOCKBACK: 0.6,
        RANGE: 1.5,
        COOLDOWN: 50,
        SWING_TIME: 80
      },
      HEAVY: {
        PRECISE: false,
        DAMAGE: 5,
        KNOCKBACK: 0.8,
        COOLDOWN: 300,
        RANGE: 2.5,
        SWING_TIME: 160
      },
      THRUST: {
        PRECISE: true,
        DAMAGE: 8,
        // High damage
        KNOCKBACK: 0,
        // No push on hit — skewer pull on lethal instead
        COOLDOWN: 500,
        SWING_TIME: 400,
        RANGE: 4,
        // Longer range
        WIDTH: 0.5 // Narrow attack width
      },
      SHOOT: {
        PRECISE: true,
        DAMAGE: 20,
        COOLDOWN: 250,
        KNOCKBACK: 0.35,
        PROJECTILE_SPEED: 0.3,
        RANGE: 10
      }
    },
    // FISTS — the "no weapon equipped" attack. Easily tweakable.
    // Deliberately weaker than the Basic Sword's SLASH (damage 3, range 3):
    // short range, low damage, a slightly slower jab. Only the main (SLASH)
    // attack is available while unarmed.
    FISTS: {
      PRECISE: false,
      DAMAGE: 2,
      KNOCKBACK: 0.2,
      COOLDOWN: 220,
      // ms — a touch punchier than the sword (200)
      RANGE: 1.5,
      // tiles — you can't reach far with bare hands
      SWING_TIME: 110,
      // ms
      ARC: Math.PI / 2 // swing arc
    },
    WORLD: {
      CHUNK_SIZE: 16,
      // Must match World class value
      MAX_POOL_SIZE: 500 // Maximum sprites to keep in pool
    }
  };
  /* File structure for grass_atlas.png:
     [grass1][grass2][grass3] in a single row
     Total width: 192px (3 tiles × 64px)
     Height: 32px
  */

  /*
  tasks:
  add trees
  add particles

  */

  class Particle {
    constructor(game, x, z) {
      var _options$expandStartS, _options$implosionPul, _this$game$player$x, _this$game, _this$game$player$z, _this$game2;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      this.game = game;
      this.x = x;
      this.z = z;
      this.lifetime = options.lifetime || 1000;
      this._container = options.container || null;
      this._noFreeze = options.noFreeze || false;
      this.rawSize = options.size || 4;
      this.rawAlpha = options.alpha || 1;
      this.size = Math.round(this.rawSize);
      this.size = Math.max(2, Math.min(40, this.size));
      this.alpha = Math.round(this.rawAlpha * 3) / 3;
      this.alpha = Math.max(0.3, Math.min(1.0, this.alpha));
      this.color = options.color || 0xffffff;
      this.velocity = options.velocity || {
        x: 0,
        z: 0
      };
      this.gravity = options.gravity || 0;
      this.gravityDelay = options.gravityDelay || 0;
      this.stopAtZ = options.stopAtZ;
      this.friction = options.friction || 0.96;
      this.rotation = options.rotation || 0;
      this.rotationSpeed = options.rotationSpeed || 0;
      this.scaleOverTime = options.scaleOverTime || false;
      this.screenSpace = options.screenSpace || false;
      this.expand = options.expand || false;
      this.expandStartScale = (_options$expandStartS = options.expandStartScale) !== null && _options$expandStartS !== void 0 ? _options$expandStartS : 0.15;
      this.soulValue = options.soulValue !== undefined ? options.soulValue : this.color === 0xffffff ? Math.max(1, Math.round(this.rawSize * 0.3)) : 0;
      this.ambient = options.ambient || false;
      this.playerRelative = options.playerRelative || false;
      this.implosion = options.implosion || false;
      this.implosionPull = (_options$implosionPul = options.implosionPull) !== null && _options$implosionPul !== void 0 ? _options$implosionPul : 0.04;
      this._spawnX = this.x;
      this._spawnZ = this.z;
      this._prevPlayerX = (_this$game$player$x = (_this$game = this.game) === null || _this$game === void 0 || (_this$game = _this$game.player) === null || _this$game === void 0 ? void 0 : _this$game.x) !== null && _this$game$player$x !== void 0 ? _this$game$player$x : this.x;
      this._prevPlayerZ = (_this$game$player$z = (_this$game2 = this.game) === null || _this$game2 === void 0 || (_this$game2 = _this$game2.player) === null || _this$game2 === void 0 ? void 0 : _this$game2.z) !== null && _this$game$player$z !== void 0 ? _this$game$player$z : this.z;
      this._baseScale = this.rawSize / this.size;
      this.createdAt = Date.now();
      this._age = 0;
      this.destroyed = false;
      var key = "".concat(this.size, "_").concat(this.color, "_").concat(this.alpha.toFixed(1));
      var tex = Particle.textureCache.get(key);
      if (!tex) {
        Particle.cacheMisses++;
        var g = new PIXI.Graphics();
        g.circle(0, 0, this.size);
        g.fill({
          color: this.color,
          alpha: this.alpha
        });
        tex = this.game.app.renderer.generateTexture(g);
        g.destroy({
          children: true,
          texture: false
        });
        Particle.textureCache.set(key, tex);
        if (Particle.textureCache.size > Particle.MAX_CACHE_SIZE) {
          var firstKey = Particle.textureCache.keys().next().value;
          Particle.textureCache.delete(firstKey);
        }
      } else {
        Particle.cacheHits++;
      }
      this.texture = tex;
      this.sprite = new PIXI.Sprite(this.texture);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.scale.set(this.rawSize / this.size);
      this.sprite.alpha = this.rawAlpha;
      this.updateSpritePosition();
      var target = this._container || this.game.renderer.particleContainer;
      target.addChild(this.sprite);
    }
    update(delta) {
      var _this$game3, _this$game$player$x2, _this$game4, _this$game$player$z2, _this$game5, _this$game6, _this$game7, _this$game8;
      if (this.destroyed) return false;
      this._age += delta * (1000 / 60);
      var elapsed = this._age;
      if (elapsed >= this.lifetime) {
        this.destroy();
        return false;
      }

      // Player-relative particles track the player so they never get left behind
      if (this.playerRelative && (_this$game3 = this.game) !== null && _this$game3 !== void 0 && _this$game3.player) {
        this.x += this.game.player.x - this._prevPlayerX;
        this.z += this.game.player.z - this._prevPlayerZ;
      }
      this._prevPlayerX = (_this$game$player$x2 = (_this$game4 = this.game) === null || _this$game4 === void 0 || (_this$game4 = _this$game4.player) === null || _this$game4 === void 0 ? void 0 : _this$game4.x) !== null && _this$game$player$x2 !== void 0 ? _this$game$player$x2 : this.x;
      this._prevPlayerZ = (_this$game$player$z2 = (_this$game5 = this.game) === null || _this$game5 === void 0 || (_this$game5 = _this$game5.player) === null || _this$game5 === void 0 ? void 0 : _this$game5.z) !== null && _this$game$player$z2 !== void 0 ? _this$game$player$z2 : this.z;
      this.x += this.velocity.x * delta;
      this.z += this.velocity.z * delta;
      if (elapsed >= this.gravityDelay) {
        if (this.screenSpace) {
          var g = this.gravity * delta / 2;
          this.velocity.x += g;
          this.velocity.z += g;
        } else {
          this.velocity.z += this.gravity * delta;
        }
      }
      if (this.stopAtZ !== undefined && this.z > this.stopAtZ) {
        this.z = this.stopAtZ;
        if (this.screenSpace) {
          // Screen-space particles slow but don't lock — lets absorption pull work
          this.velocity.x *= 0.85;
          this.velocity.z *= 0.85;
        } else {
          this.velocity.x *= 0.85;
          this.velocity.z = 0;
        }
        this.gravity = 0;
      }

      // Soul absorption — only attract in last 30% of lifetime
      if (this.soulValue > 0 && (_this$game6 = this.game) !== null && _this$game6 !== void 0 && _this$game6.player && !this.game.player.isDead) {
        var pct = this._age / this.lifetime;
        if (pct >= 0.7) {
          var dx = this.game.player.x - this.x;
          var dz = this.game.player.z - this.z;
          var dist = Math.hypot(dx, dz);
          if (dist < 0.5) {
            this.game.player.collectSoul(this.soulValue);
            return false;
          }
          if (dist < Config.SOUL.ABSORB_RANGE) {
            var pull = 0.025 * (1 - dist / Config.SOUL.ABSORB_RANGE) * delta;
            this.velocity.x += dx / dist * pull;
            this.velocity.z += dz / dist * pull;
          }
        }
      }

      // Implosion — active conversion visual (burst out, then suck back in)
      if (this.implosion && (_this$game7 = this.game) !== null && _this$game7 !== void 0 && _this$game7.player) {
        var _pct = this._age / this.lifetime;
        var turnPoint = 0.2;
        if (_pct > turnPoint) {
          var _dx = this.game.player.x - this.x;
          var _dz = this.game.player.z - this.z;
          var d = Math.hypot(_dx, _dz);
          if (d < 0.3) {
            this.destroy();
            return false;
          }
          var _pull = this.implosionPull * ((_pct - turnPoint) / (1 - turnPoint)) * delta;
          this.velocity.x += _dx / d * _pull;
          this.velocity.z += _dz / d * _pull;
        }
      }

      // Ambient — fade-in absorption mote, collected when within player aura
      if (this.ambient && (_this$game8 = this.game) !== null && _this$game8 !== void 0 && _this$game8.player) {
        var _dx2 = this.game.player.x - this.x;
        var _dz2 = this.game.player.z - this.z;
        if (Math.hypot(_dx2, _dz2) < 0.6) {
          if (this.soulValue > 0) this.game.player.collectSoul(this.soulValue);
          this.destroy();
          return false;
        }
      }
      var f = Math.pow(this.friction, delta);
      this.velocity.x *= f;
      this.velocity.z *= f;
      this.rotation += this.rotationSpeed * delta;
      if (this.implosion) {
        var lifePct = elapsed / this.lifetime;
        var s;
        if (lifePct < 0.2) {
          // Burst out — big, transparent, expanding
          s = 0.8 + 0.2 * (lifePct / 0.2);
        } else if (lifePct < 0.55) {
          // Condense — shrink, become more opaque
          var t = (lifePct - 0.2) / 0.35;
          s = 1.0 - 0.65 * t;
        } else {
          // Implode — fade into nothing
          var _t = (lifePct - 0.55) / 0.45;
          s = 0.35 * (1 - _t);
        }
        this.sprite.scale.set(this._baseScale * Math.max(0.05, s));
      } else if (this.ambient) {
        var _lifePct = elapsed / this.lifetime;
        var _s;
        if (_lifePct < 0.15) {
          // Materialize — spread-out faint form appears
          var _t2 = _lifePct / 0.15;
          _s = 0.3 + 0.5 * _t2;
        } else if (_lifePct < 0.6) {
          // Condense — shrinks and compresses toward player
          var _t3 = (_lifePct - 0.15) / 0.45;
          _s = 0.8 - 0.55 * _t3;
        } else {
          // Drift in — small, dense, absorbed at proximity
          var _t4 = (_lifePct - 0.6) / 0.4;
          _s = 0.25 - 0.15 * _t4;
        }
        this.sprite.scale.set(this._baseScale * Math.max(0.05, _s));
      } else if (this.expand) {
        var progress = elapsed / this.lifetime;
        var scale = this._baseScale * (this.expandStartScale + (1 - this.expandStartScale) * progress);
        this.sprite.scale.set(scale);
      } else if (this.scaleOverTime) {
        var _progress = elapsed / this.lifetime;
        var _scale = Math.max(0, 1 - _progress);
        this.sprite.scale.set(_scale);
      }
      if (this.ambient) {
        var _lifePct2 = elapsed / this.lifetime;
        var a;
        if (_lifePct2 < 0.15) {
          // Materialize — dim spark appears
          a = 0.4 * (_lifePct2 / 0.15);
        } else if (_lifePct2 < 0.6) {
          // Condense — brightens as it compresses
          a = 0.4 + 0.6 * ((_lifePct2 - 0.15) / 0.45);
        } else {
          // Drift in — stays bright, fades sharply at end
          a = 1.0 * (1 - (_lifePct2 - 0.6) / 0.4);
        }
        this.sprite.alpha = this.rawAlpha * Math.max(0, a);
      } else if (this.implosion) {
        var _lifePct3 = elapsed / this.lifetime;
        if (_lifePct3 < 0.2) {
          // Burst — somewhat transparent
          this.sprite.alpha = this.rawAlpha * 0.5;
        } else if (_lifePct3 < 0.55) {
          // Condense — solidify
          var _t5 = (_lifePct3 - 0.2) / 0.35;
          this.sprite.alpha = this.rawAlpha * (0.5 + 0.5 * _t5);
        } else {
          // Implode — fade out
          var _t6 = (_lifePct3 - 0.55) / 0.45;
          this.sprite.alpha = this.rawAlpha * Math.max(0, 1 - _t6);
        }
      } else {
        var alphaProgress = elapsed / this.lifetime;
        this.sprite.alpha = this.rawAlpha * (1 - alphaProgress ** 3);
      }
      this.updateSpritePosition();
      this.sprite.rotation = this.rotation;
      return true;
    }
    updateSpritePosition() {
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);
    }
    destroy() {
      if (this.destroyed) return;
      this.destroyed = true;
      if (this.sprite) {
        try {
          if (this.sprite.parent) {
            this.sprite.parent.removeChild(this.sprite);
          }
          this.sprite.destroy({
            children: true,
            texture: false
          });
        } catch (e) {
          console.warn("Error destroying particle sprite:", e);
        }
        this.sprite = null;
      }
      this.game = null;
    }
  }
  _defineProperty(Particle, "textureCache", new Map());
  _defineProperty(Particle, "MAX_CACHE_SIZE", 500);
  _defineProperty(Particle, "cacheHits", 0);
  _defineProperty(Particle, "cacheMisses", 0);
  class ParticleSystem {
    static createDamageParticles(game, x, z, attackType, direction) {
      var _Config$ATTACK_TYPES$, _Config$ATTACK_TYPES$2;
      var healthRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var isPrecise = ((_Config$ATTACK_TYPES$ = Config.ATTACK_TYPES[attackType]) === null || _Config$ATTACK_TYPES$ === void 0 ? void 0 : _Config$ATTACK_TYPES$.PRECISE) || false;
      var dmg = 1 - healthRatio;
      var sizeMult = 1 + dmg * 0.6;
      var speedMult = 1 + dmg * 0.5;
      var particleCount = isPrecise ? Math.ceil(8 * (1 + dmg)) : Math.ceil(5 * (1 + dmg * 1.5));
      var particles = [];
      var atkDmg = ((_Config$ATTACK_TYPES$2 = Config.ATTACK_TYPES[attackType]) === null || _Config$ATTACK_TYPES$2 === void 0 ? void 0 : _Config$ATTACK_TYPES$2.DAMAGE) || 1;
      var dmgMult = 1 + atkDmg * 0.05;
      if (isPrecise) {
        // Three impact streams punching back toward the player
        var revX = -direction.x;
        var revZ = -direction.z;
        for (var _i = 0, _arr = [-0.35, 0, 0.35]; _i < _arr.length; _i++) {
          var angleOffset = _arr[_i];
          var cos = Math.cos(angleOffset);
          var sin = Math.sin(angleOffset);
          var baseX = revX * cos - revZ * sin;
          var baseZ = revX * sin + revZ * cos;
          for (var j = 0; j < 3; j++) {
            var spread = (Math.random() - 0.5) * 0.1;
            var c = Math.cos(spread);
            var s = Math.sin(spread);
            var dX = baseX * c - baseZ * s;
            var dZ = baseX * s + baseZ * c;
            var speed = (0.06 + Math.random() * 0.12) * speedMult;
            var rawSize = (3 + Math.random() * 2) * sizeMult;
            var soulVal = Math.max(1, Math.round(rawSize * 0.3 * dmgMult));
            particles.push(new Particle(game, x, z, {
              velocity: {
                x: dX * speed,
                z: dZ * speed
              },
              lifetime: 500 + Math.random() * 400,
              size: rawSize,
              gravity: 0.001,
              rotationSpeed: (Math.random() - 0.5) * 0.1,
              soulValue: soulVal
            }));
          }
        }
      } else {
        var perpendicular = {
          x: -direction.z,
          z: direction.x
        };
        for (var i = 0; i < particleCount; i++) {
          var side = Math.random() > 0.5 ? 1 : -1;
          var dirX = perpendicular.x * side;
          var dirZ = perpendicular.z * side;
          var randomAngle = Math.random() * Math.PI / 4 - Math.PI / 8;
          var _cos = Math.cos(randomAngle);
          var _sin = Math.sin(randomAngle);
          var finalDirX = dirX * _cos - dirZ * _sin;
          var finalDirZ = dirX * _sin + dirZ * _cos;
          var _rawSize = (2 + Math.random() * 3) * sizeMult;
          var _soulVal = Math.max(1, Math.round(_rawSize * 0.3 * dmgMult));
          particles.push(new Particle(game, x, z, {
            velocity: {
              x: finalDirX * (0.08 + Math.random() * 0.04) * speedMult,
              z: finalDirZ * (0.08 + Math.random() * 0.04) * speedMult
            },
            lifetime: 500 + Math.random() * 300,
            size: _rawSize,
            gravity: 0.0005,
            rotationSpeed: (Math.random() - 0.5) * 0.08,
            soulValue: _soulVal
          }));
        }
      }
      return particles;
    }
    static createDeathParticles(game, x, z) {
      var particles = [];

      // Burst — fast outward explosion
      for (var i = 0; i < 12; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 0.04 + Math.random() * 0.1;
        particles.push(new Particle(game, x, z, {
          velocity: {
            x: Math.cos(angle) * speed,
            z: Math.sin(angle) * speed
          },
          lifetime: 1200 + Math.random() * 1600,
          size: 3 + Math.random() * 5,
          gravity: -0.00003,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          scaleOverTime: true
        }));
      }

      // Float — slow rising souls that linger
      for (var _i2 = 0; _i2 < 12; _i2++) {
        var _angle = Math.random() * Math.PI * 2;
        var _speed = 0.002 + Math.random() * 0.015;
        particles.push(new Particle(game, x + (Math.random() - 0.5) * 0.8, z + (Math.random() - 0.5) * 0.8, {
          velocity: {
            x: Math.cos(_angle) * _speed,
            z: Math.sin(_angle) * _speed
          },
          lifetime: 2000 + Math.random() * 2000,
          size: 4 + Math.random() * 5,
          gravity: -0.0001 - Math.random() * 0.00015,
          alpha: 0.5 + Math.random() * 0.5,
          rotationSpeed: (Math.random() - 0.5) * 0.06,
          scaleOverTime: true
        }));
      }
      return particles;
    }
  }

  var textureCache = new Map();
  var loadingPromises = new Map();
  var registeredAliases = new Set();
  function normalizePath(path) {
    if (!path) return null;
    return String(path).replace(/\\/g, "/").replace(/^\.\//, "");
  }
  function getAssetUrl(path) {
    if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
    return new URL(path, document.baseURI || window.location.href).href;
  }
  function setNearest(texture) {
    if (texture !== null && texture !== void 0 && texture.source) texture.source.scaleMode = "nearest";
    return texture;
  }
  function rememberTexture(path, texture) {
    if (!texture) return null;
    var key = normalizePath(path);
    setNearest(texture);
    if (key) {
      textureCache.set(key, texture);
      textureCache.set(getAssetUrl(key), texture);
    }
    return texture;
  }
  function getCachedTexture(path) {
    var key = normalizePath(path);
    if (!key) return null;
    return textureCache.get(key) || textureCache.get(getAssetUrl(key)) || null;
  }
  function getAssetTexture(path) {
    var key = normalizePath(path);
    if (!key) return null;
    var url = getAssetUrl(key);
    var texture = PIXI.Assets.get(key) || PIXI.Assets.get(url);
    return texture ? rememberTexture(key, texture) : null;
  }
  function registerAlias(path) {
    var key = normalizePath(path);
    if (!key || registeredAliases.has(key)) return key;
    registeredAliases.add(key);
    try {
      PIXI.Assets.add({
        alias: key,
        src: getAssetUrl(key)
      });
    } catch (error) {
      // Pixi throws when an alias is already registered. In that case the
      // alias is still usable, so this is only diagnostic noise.
      if (!String((error === null || error === void 0 ? void 0 : error.message) || "").toLowerCase().includes("already")) {
        console.warn("[Assets] Could not register ".concat(key, ":"), error);
      }
    }
    return key;
  }
  function loadImageTexture(path) {
    var key, image;
    return _regeneratorAsync(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          key = normalizePath(path);
          if (key) {
            _context.n = 1;
            break;
          }
          return _context.a(2, null);
        case 1:
          image = new Image();
          image.decoding = "async";
          image.src = getAssetUrl(key);
          if (!(typeof image.decode === "function")) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return _awaitAsyncGenerator(image.decode());
        case 2:
          _context.n = 4;
          break;
        case 3:
          _context.n = 4;
          return _awaitAsyncGenerator(new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = reject;
          }));
        case 4:
          return _context.a(2, rememberTexture(key, PIXI.Texture.from(image)));
      }
    }, null, null, null, Promise);
  }
  function isTextureReady(texture) {
    return !!texture && (texture.valid || texture.width > 0 && texture.height > 0);
  }
  function onTextureReady(texture, callback) {
    if (!texture || typeof callback !== "function") return false;
    if (isTextureReady(texture)) {
      setNearest(texture);
      callback(texture);
      return true;
    }
    var done = () => {
      setNearest(texture);
      callback(texture);
    };
    if (texture.source && typeof texture.source.once === "function") {
      texture.source.once("update", done);
    } else if (typeof texture.once === "function") {
      texture.once("update", done);
    } else {
      requestAnimationFrame(done);
    }
    return false;
  }
  function loadTexture(path) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var key = normalizePath(path);
    if (!key) return fallback ? loadTexture(fallback) : null;
    var cached = getCachedTexture(key);
    if (cached) return cached;
    var assetTexture = getAssetTexture(key);
    if (assetTexture) return assetTexture;
    if (fallback) return loadTexture(fallback);
    registerAlias(key);
    try {
      return rememberTexture(key, PIXI.Texture.from(getAssetUrl(key)));
    } catch (error) {
      console.warn("[Assets] Could not create texture for ".concat(key, ":"), error);
      return null;
    }
  }
  function loadTextureAsync(path) {
    var fallback,
      key,
      cached,
      promise,
      _args3 = arguments;
    return _regeneratorAsync(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          fallback = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
          key = normalizePath(path);
          if (key) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, fallback ? loadTextureAsync(fallback) : null);
        case 1:
          cached = getCachedTexture(key);
          if (!cached) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, cached);
        case 2:
          if (!loadingPromises.has(key)) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, loadingPromises.get(key));
        case 3:
          promise = (() => {
            var texture, _t3;
            return _regeneratorAsync(function (_context2) {
              while (1) switch (_context2.p = _context2.n) {
                case 0:
                  registerAlias(key);
                  texture = null;
                  _context2.p = 1;
                  _context2.n = 2;
                  return _awaitAsyncGenerator(PIXI.Assets.load(key));
                case 2:
                  texture = _context2.v;
                  _context2.n = 10;
                  break;
                case 3:
                  _context2.p = 3;
                  _context2.v;
                  _context2.p = 4;
                  _context2.n = 5;
                  return _awaitAsyncGenerator(PIXI.Assets.load(getAssetUrl(key)));
                case 5:
                  texture = _context2.v;
                  _context2.n = 10;
                  break;
                case 6:
                  _context2.p = 6;
                  _context2.v;
                  _context2.p = 7;
                  _context2.n = 8;
                  return _awaitAsyncGenerator(loadImageTexture(key));
                case 8:
                  texture = _context2.v;
                  _context2.n = 10;
                  break;
                case 9:
                  _context2.p = 9;
                  _t3 = _context2.v;
                  console.warn("[Assets] Failed to load ".concat(key, ":"), _t3);
                case 10:
                  if (!texture) texture = getAssetTexture(key);
                  if (!texture) {
                    _context2.n = 11;
                    break;
                  }
                  return _context2.a(2, rememberTexture(key, texture));
                case 11:
                  return _context2.a(2, fallback ? loadTextureAsync(fallback) : null);
              }
            }, null, null, [[7, 9], [4, 6], [1, 3]], Promise);
          })();
          loadingPromises.set(key, promise);
          return _context3.a(2, promise);
      }
    }, null, null, null, Promise);
  }
  function preloadTextures(paths) {
    var uniquePaths;
    return _regeneratorAsync(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          uniquePaths = [...new Set(paths.map(normalizePath).filter(Boolean))];
          _context4.n = 1;
          return _awaitAsyncGenerator(Promise.allSettled(uniquePaths.map(path => loadTextureAsync(path))));
        case 1:
          return _context4.a(2);
      }
    }, null, null, null, Promise);
  }

  // ---------------------------------------------------------------------------
  // Constants & Pool
  // ---------------------------------------------------------------------------
  var SLIME_IDENTITY_MAT = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
  var SLIME_WHITE_MAT = new Float32Array([0, 0, 0, 0, 0.86, 0, 0, 0, 0, 0.86, 0, 0, 0, 0, 0.86, 0, 0, 0, 1, 0]);
  var ENEMY_POOL = [];
  function acquireContainer() {
    if (ENEMY_POOL.length) return ENEMY_POOL.pop();
    var c = new PIXI.Container();
    c.sprite = new PIXI.Sprite();
    c.hitbox = new PIXI.Graphics();
    return c;
  }
  function releaseContainer(c) {
    c.sprite.texture = null;
    c.sprite.filters = null;
    c.hitbox.clear();
    while (c.children.length) c.removeChild(c.children[0]);
    ENEMY_POOL.push(c);
  }

  // ---------------------------------------------------------------------------
  // Slime
  // ---------------------------------------------------------------------------
  class Slime {
    constructor(game, x, z) {
      // -- Identity --
      this.game = game;
      this.x = x;
      this.z = z;
      this.health = 30;
      this.maxHealth = 30;
      this.radius = Config.ENEMY.HITBOX_RADIUS;
      this.destroyed = false;

      // -- Combat stats --
      this.speed = 0.05;
      this.attackRange = 1.5;
      this.attackDamage = Config.ENEMY.ATTACK_DAMAGE;

      // -- Physics --
      this.knockbackX = 0;
      this.knockbackZ = 0;
      this.knockbackResistance = 0.7;
      this.isKnockedback = false;

      // -- Movement velocity (smooth acceleration/deceleration) --
      this._moveVelX = 0;
      this._moveVelZ = 0;

      // -- Visual --
      this.facingDirection = 'right';
      this._facingX = 1;
      this._facingZ = 0;
      this.container = acquireContainer();
      this.sprite = this.container.sprite;
      this.sprite.texture = loadTexture(Config.ASSETS.SLIME);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.width = Config.ENEMY.WIDTH;
      this.sprite.height = Config.ENEMY.HEIGHT;
      if (!this.sprite.parent) this.container.addChild(this.sprite);
      this.damageFilter = new PIXI.ColorMatrixFilter();
      this.sprite.filters = [this.damageFilter];
      this.damageFilter.matrix = SLIME_IDENTITY_MAT;
      this._flashEnd = 0;

      // -- Hitbox debug --
      this._hitboxGraph = new PIXI.Graphics();
      this._hitboxGraph.visible = Config.DEBUG.SHOW_ENEMY_HITBOXES;
      this.container.addChild(this._hitboxGraph);

      // -- Simulation time (consistent across all gameplay timers) --
      this._simTimeMs = 0;

      // -- Detection state --
      this._detectionState = 'unaware'; // unaware | sensing | suspicious | alert | panicked
      this._searchUntil = 0; // sim time when search expires
      this._lastKnownX = 0;
      this._lastKnownZ = 0;
      this._dangerX = 0;
      this._dangerZ = 0;
      this._panicEndTime = 0;
      this._sensingUntil = 0; // sim time when 'sensing' state expires → suspicious
      this._visualDeathPanicAt = 0; // sim time when visual death → panic triggers

      // -- Suspicion phases (arrow near-miss response) --
      this._suspicionPhase = null; // null | notice | look | creep
      this._suspicionPhaseStart = 0;
      this._suspicionSeenX = 0;
      this._suspicionSeenZ = 0;
      this._suspicionOriginX = 0;
      this._suspicionOriginZ = 0;
      this._noticeScanBias = 0;
      this._creepPauseTimer = 0;
      this._creepPauseInterval = 600;
      this._creepPauseDuration = 300;

      // -- Combat state machine --
      this._state = 'circle'; // circle | windup | tackle | cooldown
      this._stateUntil = 2000 + Math.random() * 4000; // sim time relative (fixed: was performance.now())
      this._tackleDuration = 400;
      this._tackleTargetX = 0;
      this._tackleTargetZ = 0;
      this._tackleStartX = 0;
      this._tackleStartZ = 0;
      this._tackleStartTime = 0;

      // -- Orbit --
      this._circleDir = Math.random() < 0.5 ? 1 : -1;
      this._orbitRadius = 2.0 + Math.random() * 3.0;
      this._circleWeight = 0.8 + Math.random() * 1.2;
      this._nextDirFlip = 2000 + Math.random() * 4000; // sim time relative (fixed: was performance.now())

      // -- Facing --
      this._nextLookTime = 1000 + Math.random() * 2000;
      var startAngle = Math.random() * Math.PI * 2;
      this._lookBiasX = Math.cos(startAngle);
      this._lookBiasZ = Math.sin(startAngle);
      this._facingX = this._lookBiasX;
      this._facingZ = this._lookBiasZ;

      // -- Wander noise (replaces sine wobble) --
      this._wanderNoise = 0;
      this._wanderTarget = 0;
      this._wanderTimer = 0;

      // -- Idle pause (before orbit direction change) --
      this._isIdle = false;
      this._idleTimer = 0;

      // -- Wounding --
      this._soulLeakTimer = 0;
      this._deathSoulLeakTimer = 0;
      this._trailTimer = 0;
      this._ambientMoteTimer = Math.random() * 500;

      // -- Dying --
      this._dying = false;
      this._deathTimer = 0;
      this._killType = null;
      this._debugSteerX = 0;
      this._debugSteerZ = 0;
    }

    // =========================================================================
    // MAIN UPDATE PIPELINE
    // =========================================================================
    update(delta) {
      if (this.destroyed || !this.game) return;

      // 1. Dying state — handle death slide, then explode
      if (this._dying) return void this._updateDying(delta);

      // 2. Distance culling
      var distToPlayer = Math.hypot(this.x - this.game.player.x, this.z - this.game.player.z);
      if (distToPlayer > 20) return;

      // 3. Wounding — interpolate speed, resistance, tackle duration by health ratio
      this._updateWounding(delta);

      // 4. Advance simulation time (all gameplay timers use _simTimeMs)
      this._simTimeMs += delta * (1000 / 60);

      // 5. Visual flash (uses performance.now())
      this._updateFlash();

      // 6. Knockback — if active, handle it and skip rest of AI
      if (this.isKnockedback) return void this._updateKnockback(delta);

      // Shared direction data used by perception, facing, combat, and steering
      var toPlayerX = this.game.player.x - this.x;
      var toPlayerZ = this.game.player.z - this.z;
      var playerDist = Math.hypot(toPlayerX, toPlayerZ) || 1;
      var toPlayerNormX = toPlayerX / playerDist;
      var toPlayerNormZ = toPlayerZ / playerDist;

      // 7. Perception — detection state transitions, awareness propagation
      this._updatePerception(playerDist, toPlayerNormX, toPlayerNormZ);

      // 8. Suspicion phase timers — notice → look → creep
      this._updateSuspicionPhases(delta);

      // 9. Facing — decoupled from movement direction
      this._updateFacing(playerDist, toPlayerNormX, toPlayerNormZ);

      // 10. Combat state machine (skipped while panicked)
      if (this._detectionState !== 'panicked') {
        this._updateCombat(playerDist);
      }

      // 11. Wander noise (replaces sine wobble — smooth, biased toward straight)
      this._updateWander();

      // 12. Orbit direction flip with idle pause
      if (!this._isIdle && this._simTimeMs >= this._nextDirFlip) {
        this._isIdle = true;
        this._idleTimer = 600 + Math.random() * 600;
      }
      if (this._isIdle) {
        this._idleTimer -= delta * (1000 / 60);
        if (this._idleTimer <= 0) {
          this._circleDir *= -1;
          this._isIdle = false;
          this._nextDirFlip = this._simTimeMs + 2000 + Math.random() * 4000;
        }
      }

      // 13. Steering & movement
      this._updateMovement(delta, playerDist, toPlayerNormX, toPlayerNormZ);

      // 14. Fast-movement trail — slime leaves droplets when pursuing
      this._trailTimer += delta;
      if (this._trailTimer > 4 && (this._detectionState === 'alert' || this._detectionState === 'panicked')) {
        var vel = Math.hypot(this._moveVelX, this._moveVelZ);
        if (vel > 0.01) {
          this._trailTimer = 0;
          var backX = -(this._moveVelX / vel) * 0.015;
          var backZ = -(this._moveVelZ / vel) * 0.015;
          for (var i = 0; i < 2; i++) {
            this._spawnSoulParticle(this.x + (Math.random() - 0.5) * 0.3, this.z + (Math.random() - 0.5) * 0.3, {
              x: backX + (Math.random() - 0.5) * 0.004,
              z: backZ + (Math.random() - 0.5) * 0.004
            }, 500 + Math.random() * 400, 2 + Math.random() * 2, 0.2, -0.00005, false, {
              color: 0xeeeeff
            });
          }
        }
      }

      // 15. Ambient absorption motes (enemies too — all spirits breathe soul)
      this._ambientMoteTimer += delta;
      if (this._ambientMoteTimer > 500) {
        this._ambientMoteTimer = 0;
        var angle = Math.random() * Math.PI * 2;
        var dist = 2 + Math.random() * 2;
        var mx = this.x + Math.cos(angle) * dist;
        var mz = this.z + Math.sin(angle) * dist;
        var toEntityX = this.x - mx;
        var toEntityZ = this.z - mz;
        var td = Math.hypot(toEntityX, toEntityZ) || 1;
        var p = new Particle(this.game, mx, mz, {
          velocity: {
            x: toEntityX / td * (0.001 + Math.random() * 0.002),
            z: toEntityZ / td * (0.001 + Math.random() * 0.002)
          },
          lifetime: 3000 + Math.random() * 2000,
          size: 1 + Math.random() * 2,
          color: 0xffffff,
          alpha: 0.2 + Math.random() * 0.2,
          gravity: 0,
          friction: 0.99,
          ambient: true,
          soulValue: 0
        });
        this.game.particles.push(p);
      }

      // 16. Visual idle wobble
      this.sprite.y = Math.sin(this._simTimeMs * 0.004) * 1.2;

      // 17. Debug overlay
      this._renderDebug();
    }

    // =========================================================================
    // SUB-UPDATES
    // =========================================================================

    // -- FOV check (pure) --
    _isPlayerInFOV(dist, normX, normZ) {
      if (dist > Config.ENEMY.VISUAL_RANGE) return false;
      var dot = normX * this._facingX + normZ * this._facingZ;
      return dot >= Math.cos(Config.ENEMY.FOV_ANGLE / 2);
    }

    // -- Dying: corpse slide + gushing soul streak + explosion --
    _updateDying(delta) {
      var _Config$ATTACK_TYPES$;
      if (performance.now() >= this._deathTimer) {
        this.game.world.destroyEnemy(this);
        return;
      }
      var prevX = this.x;
      var prevZ = this.z;
      if (this.isKnockedback) {
        var newX = this.x + this.knockbackX * delta;
        var newZ = this.z + this.knockbackZ * delta;
        this.knockbackX *= Config.ENEMY.WOUNDING.DYING_RESISTANCE;
        this.knockbackZ *= Config.ENEMY.WOUNDING.DYING_RESISTANCE;
        if (Math.abs(this.knockbackX) < 0.01 && Math.abs(this.knockbackZ) < 0.01) {
          this.knockbackX = 0;
          this.knockbackZ = 0;
          this.isKnockedback = false;
        }
        this.game.world.moveEnemy(this, newX, newZ);
      }

      // Soul gush — dense splatter streak trailing the corpse slide
      var isPreciseKill = (_Config$ATTACK_TYPES$ = Config.ATTACK_TYPES[this._killType]) === null || _Config$ATTACK_TYPES$ === void 0 ? void 0 : _Config$ATTACK_TYPES$.PRECISE;
      this._deathSoulLeakTimer += delta * (1000 / 60);
      if (this._deathSoulLeakTimer > Config.ENEMY.WOUNDING.SOUL_LEAK_INTERVAL * (isPreciseKill ? 0.2 : 0.4)) {
        this._deathSoulLeakTimer = 0;
        var kbMag = Math.hypot(this.knockbackX, this.knockbackZ);
        var count = isPreciseKill ? 5 + Math.floor(Math.random() * 5) : 4 + Math.floor(Math.random() * 5);
        for (var i = 0; i < count; i++) {
          var px = prevX + (Math.random() - 0.5) * (isPreciseKill ? 0.5 : 0.8);
          var pz = prevZ + (Math.random() - 0.5) * (isPreciseKill ? 0.5 : 0.8);
          var vx = void 0,
            vz = void 0;
          if (kbMag > 0.01) {
            var oppX = -(this.knockbackX / kbMag);
            var oppZ = -(this.knockbackZ / kbMag);
            var spread = (Math.random() - 0.5) * (isPreciseKill ? 0.6 : 1.4);
            var ca = Math.cos(spread);
            var sa = Math.sin(spread);
            var speed = isPreciseKill ? 0.01 + Math.random() * 0.025 : 0.003 + Math.random() * 0.011;
            vx = (oppX * ca - oppZ * sa) * speed;
            vz = (oppX * sa + oppZ * ca) * speed;
          } else {
            vx = (Math.random() - 0.5) * (isPreciseKill ? 0.025 : 0.010);
            vz = (Math.random() - 0.5) * (isPreciseKill ? 0.025 : 0.010);
          }
          this._spawnSoulParticle(px, pz, {
            x: vx,
            z: vz
          }, isPreciseKill ? 2000 + Math.random() * 2000 : 1800 + Math.random() * 2200, isPreciseKill ? 7 + Math.random() * 7 : 5 + Math.random() * 5, 0.8 + Math.random() * 0.2, -0.0001 - Math.random() * 0.00015);
        }
      }
    }

    // -- Wounding: health ratio drives speed, resistance, tackle duration --
    _updateWounding(delta) {
      var healthRatio = this.health / this.maxHealth;
      // Base speed from wounding (full HP = 0.05, near death = MIN_SPEED)
      var baseSpeed = Config.ENEMY.WOUNDING.MIN_SPEED + (0.05 - Config.ENEMY.WOUNDING.MIN_SPEED) * healthRatio;
      // Agentic speed multiplier: slime moves slower when idle/patrolling,
      // faster when engaged in combat or fleeing
      var stateSpeedMult = {
        unaware: 0.5,
        suspicious: 0.7,
        alert: 1.0,
        panicked: 1.0
      }[this._detectionState] || 0.5;
      this.speed = baseSpeed * stateSpeedMult;
      this.knockbackResistance = Config.ENEMY.WOUNDING.FULL_HP_RESISTANCE + (Config.ENEMY.WOUNDING.DYING_RESISTANCE - Config.ENEMY.WOUNDING.FULL_HP_RESISTANCE) * (1 - healthRatio);
      this._tackleDuration = Config.ENEMY.WOUNDING.FULL_HP_TACKLE_DURATION + (Config.ENEMY.WOUNDING.WOUNDED_TACKLE_DURATION - Config.ENEMY.WOUNDING.FULL_HP_TACKLE_DURATION) * (1 - healthRatio);

      // Soul leak — drops like blood, then expands + fades into mist
      this._soulLeakTimer += delta * (1000 / 60);
      if (healthRatio < 1 && this._soulLeakTimer > Config.ENEMY.WOUNDING.SOUL_LEAK_INTERVAL) {
        this._soulLeakTimer = 0;
        var dmg = 1 - healthRatio;
        var leakCount = 1 + Math.ceil(dmg * 3);
        for (var i = 0; i < leakCount; i++) {
          var angle = Math.random() * Math.PI * 2;
          var speed = 0.001 + Math.random() * 0.003;
          this._spawnSoulParticle(this.x + (Math.random() - 0.5) * 0.4, this.z + (Math.random() - 0.5) * 0.4, {
            x: Math.cos(angle) * speed,
            z: Math.sin(angle) * speed
          }, 800 + Math.random() * 800, 4 + dmg * 2 + Math.random() * 2, 0.5 + dmg * 0.4, 0.0003 + dmg * 0.0002, true);
        }
      }
    }

    // -- Shared soul particle spawner --
    _spawnSoulParticle(px, pz, vel, lifetime, size, alpha, gravity) {
      var expand = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var extra = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
      var p = new Particle(this.game, px, pz, _objectSpread2({
        velocity: vel,
        lifetime,
        size,
        color: 0xffffff,
        alpha,
        gravity,
        scaleOverTime: !expand,
        expand
      }, extra));
      this.game.particles.push(p);
    }

    // -- Visual hit flash --
    _updateFlash() {
      if (!this._flashEnd) return;
      var wall = performance.now();
      if (wall >= this._flashEnd) {
        this.damageFilter.matrix = SLIME_IDENTITY_MAT;
        this._flashEnd = 0;
      }
    }

    // -- Knockback: resistance decay, movement --
    _updateKnockback(delta) {
      var newX = this.x + this.knockbackX * delta;
      var newZ = this.z + this.knockbackZ * delta;
      this.knockbackX *= this.knockbackResistance;
      this.knockbackZ *= this.knockbackResistance;
      if (Math.abs(this.knockbackX) < 0.01 && Math.abs(this.knockbackZ) < 0.01) {
        this.knockbackX = 0;
        this.knockbackZ = 0;
        this.isKnockedback = false;
      }
      this.game.world.moveEnemy(this, newX, newZ);
    }

    // -- Wander noise: Perlin-like smooth noise biased toward straight --
    // Most of the time the noise drifts toward 0 (straight movement).
    // Occasionally it picks a random target for a gentle, organic turn.
    _updateWander() {
      var sim = this._simTimeMs;
      if (sim >= this._wanderTimer) {
        if (Math.random() < 0.7) {
          this._wanderTarget *= -0.5;
        } else {
          this._wanderTarget = (Math.random() - 0.5) * 0.4;
        }
        this._wanderTimer = sim + 600 + Math.random() * 1400;
      }
      this._wanderNoise += (this._wanderTarget - this._wanderNoise) * 0.03;
    }

    // =========================================================================
    // PERCEPTION — detection states, FOV, awareness propagation
    // =========================================================================
    _updatePerception(distToPlayer, toPlayerNormX, toPlayerNormZ) {
      var sim = this._simTimeMs;
      var playerSeen = this._isPlayerInFOV(distToPlayer, toPlayerNormX, toPlayerNormZ);
      var playerClose = distToPlayer < Config.ENEMY.CLOSE_DETECT_RANGE;

      // Detection chain (first match wins)
      if (playerSeen) {
        // Seen in FOV — instant alert
        this._setDetection('alert');
        this._lastKnownX = this.game.player.x;
        this._lastKnownZ = this.game.player.z;
      } else if (playerClose) {
        // Unseen but close — proximity sense with delay
        if (this._detectionState === 'unaware') {
          this._setDetection('sensing');
          this._sensingUntil = sim + Config.ENEMY.PROXIMITY_SUSPICION_DELAY;
        } else if (this._detectionState === 'sensing' && sim >= this._sensingUntil) {
          this._setDetection('suspicious');
          this._lastKnownX = this.game.player.x;
          this._lastKnownZ = this.game.player.z;
          this._searchUntil = sim + Config.ENEMY.SEARCH_DURATION;
        }
      } else if (this._detectionState === 'sensing') {
        // Player left range — forget it
        this._setDetection('unaware');
      }

      // State transitions (when player is not applying any detection pressure)
      if (!playerSeen && !playerClose) {
        if (this._detectionState === 'panicked') {
          if (sim >= this._panicEndTime) {
            this._setDetection('unaware');
          }
        } else if (this._detectionState === 'alert') {
          this._setDetection('suspicious');
          this._lastKnownX = this.game.player.x;
          this._lastKnownZ = this.game.player.z;
          this._searchUntil = sim + Config.ENEMY.SEARCH_DURATION;
        } else if (this._detectionState === 'suspicious' && sim >= this._searchUntil) {
          this._setDetection('unaware');
        } else if (this._detectionState === 'suspicious' && this._visualDeathPanicAt > 0 && sim >= this._visualDeathPanicAt) {
          this._panicEndTime = sim + Config.ENEMY.PANIC_DURATION;
          this._dangerX = this._suspicionOriginX;
          this._dangerZ = this._suspicionOriginZ;
          this._setDetection('panicked');
        }
      }

      // Awareness propagation from nearby enemies
      var propEnemies = this.game.world.getNearbyEnemies(this.x, this.z, 1);
      var _iterator = _createForOfIteratorHelper(propEnemies),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var other = _step.value;
          if (other === this || other.destroyed) continue;
          var d = Math.hypot(other.x - this.x, other.z - this.z);
          if (d < Config.ENEMY.PROPAGATE_RADIUS && other._detectionState === 'alert' && this._detectionState !== 'alert') {
            this._setDetection('alert');
            this._lastKnownX = this.game.player.x;
            this._lastKnownZ = this.game.player.z;
            break;
          }
          if (d < Config.ENEMY.PROPAGATE_PANIC_RADIUS && other._detectionState === 'panicked' && this._detectionState !== 'panicked' && this._detectionState !== 'alert') {
            this._setDetection('panicked');
            this._dangerX = other._dangerX;
            this._dangerZ = other._dangerZ;
            this._panicEndTime = Math.max(this._panicEndTime, other._panicEndTime);
            break;
          }
          if (d < Config.ENEMY.PROPAGATE_SUSPICION_RADIUS && other._detectionState === 'suspicious' && (this._detectionState === 'unaware' || this._detectionState === 'sensing')) {
            this._setDetection('suspicious');
            this._lastKnownX = other._lastKnownX;
            this._lastKnownZ = other._lastKnownZ;
            this._searchUntil = sim + Config.ENEMY.SEARCH_DURATION;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    // Clean detection state transition — clears stale timers and phases
    _setDetection(newState) {
      if (newState !== 'suspicious') {
        this._suspicionPhase = null;
        this._visualDeathPanicAt = 0;
      }
      if (newState !== 'sensing') {
        this._sensingUntil = 0;
      }
      this._detectionState = newState;
    }

    // =========================================================================
    // SUSPICION PHASES — notice → look → creep (arrow near-miss response)
    // =========================================================================
    _updateSuspicionPhases(delta) {
      if (this._detectionState !== 'suspicious' || !this._suspicionPhase) return;
      var sim = this._simTimeMs;
      var elapsed = sim - this._suspicionPhaseStart;
      if (this._suspicionPhase === 'notice' && elapsed > 400 + (this._noticeScanBias * 200 + 200)) {
        this._suspicionPhase = 'look';
        this._suspicionPhaseStart = sim;
      } else if (this._suspicionPhase === 'look' && elapsed > 700 + Math.random() * 400) {
        this._suspicionPhase = 'creep';
        this._suspicionPhaseStart = sim;
        this._creepPauseTimer = 0;
        this._creepPauseInterval = 400 + Math.random() * 300;
        this._creepPauseDuration = 200 + Math.random() * 200;
      }
      if (this._suspicionPhase === 'creep') {
        this._creepPauseTimer += delta * (1000 / 60);
      }
    }

    // =========================================================================
    // FACING — decoupled from movement, communicates intent
    // =========================================================================
    _updateFacing(distToPlayer, toPlayerNormX, toPlayerNormZ) {
      if (this._detectionState === 'alert') {
        this._facingX += (toPlayerNormX - this._facingX) * 0.2;
        this._facingZ += (toPlayerNormZ - this._facingZ) * 0.2;
        var flen = Math.hypot(this._facingX, this._facingZ) || 1;
        this._facingX /= flen;
        this._facingZ /= flen;
      } else if (this._detectionState === 'panicked') {
        var dx = this.x - this._dangerX;
        var dz = this.z - this._dangerZ;
        var d = Math.hypot(dx, dz) || 1;
        var fleeX = dx / d;
        var fleeZ = dz / d;
        this._facingX += (fleeX - this._facingX) * 0.2;
        this._facingZ += (fleeZ - this._facingZ) * 0.2;
        var _flen = Math.hypot(this._facingX, this._facingZ) || 1;
        this._facingX /= _flen;
        this._facingZ /= _flen;
      } else if (this._detectionState === 'suspicious') {
        this._updateFacingSuspicious();
      } else {
        this._updateFacingUnaware();
      }

      // Apply to sprite
      this.facingDirection = this._facingX > 0 ? 'right' : 'left';
    }
    _updateFacingSuspicious() {
      if (this._suspicionPhase === 'notice') {
        // Frozen — fearful scanning along projectile trajectory
        var dx = this._suspicionSeenX - this.x;
        var dz = this._suspicionSeenZ - this.z;
        var d = Math.hypot(dx, dz) || 1;
        var scanT = this._simTimeMs * 0.003;
        this._noticeScanBias = Math.sin(scanT) * 0.15 + Math.sin(scanT * 0.7 + 1.3) * 0.1;
        var perpX = -dz / d;
        var perpZ = dx / d;
        this._facingX = dx / d + perpX * this._noticeScanBias;
        this._facingZ = dz / d + perpZ * this._noticeScanBias;
        var flen = Math.hypot(this._facingX, this._facingZ) || 1;
        this._facingX /= flen;
        this._facingZ /= flen;
      } else if (this._suspicionPhase === 'look') {
        // Slowly turn from seen → origin with nervous wobble
        var elapsed = this._simTimeMs - this._suspicionPhaseStart;
        var t = Math.min(1, elapsed / (700 + Math.random() * 400));
        var seenX = this._suspicionSeenX - this.x;
        var seenZ = this._suspicionSeenZ - this.z;
        var seenLen = Math.hypot(seenX, seenZ) || 1;
        var originX = this._suspicionOriginX - this.x;
        var originZ = this._suspicionOriginZ - this.z;
        var originLen = Math.hypot(originX, originZ) || 1;
        this._facingX = seenX / seenLen * (1 - t) + originX / originLen * t;
        this._facingZ = seenZ / seenLen * (1 - t) + originZ / originLen * t;
        var wobble = Math.sin(this._simTimeMs * 0.005) * 0.06 * (1 - t);
        var _perpX = -this._facingZ;
        var _perpZ = this._facingX;
        this._facingX += _perpX * wobble;
        this._facingZ += _perpZ * wobble;
        var _flen2 = Math.hypot(this._facingX, this._facingZ) || 1;
        this._facingX /= _flen2;
        this._facingZ /= _flen2;
      } else {
        // Default suspicious / creep — face last known, lerped smoothly
        var _dx = this._lastKnownX - this.x;
        var _dz = this._lastKnownZ - this.z;
        var _d = Math.hypot(_dx, _dz) || 1;
        var targetX = _dx / _d;
        var targetZ = _dz / _d;
        this._facingX += (targetX - this._facingX) * 0.15;
        this._facingZ += (targetZ - this._facingZ) * 0.15;
        var glance = Math.sin(this._simTimeMs * 0.002) * 0.08;
        var _perpX2 = -this._facingZ;
        var _perpZ2 = this._facingX;
        this._facingX += _perpX2 * glance;
        this._facingZ += _perpZ2 * glance;
        var _flen3 = Math.hypot(this._facingX, this._facingZ) || 1;
        this._facingX /= _flen3;
        this._facingZ /= _flen3;
      }
    }
    _updateFacingUnaware() {
      // Pick a new look target periodically
      if (this._simTimeMs >= this._nextLookTime) {
        var angle = Math.random() * Math.PI * 2;
        // Occasionally glance toward a nearby slime (watch each other's back)
        if (Math.random() < 0.3) {
          var nearby = this.game.world.getNearbyEnemies(this.x, this.z, 1);
          var bestD = Infinity,
            bestX = 1,
            bestZ = 0;
          var _iterator2 = _createForOfIteratorHelper(nearby),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var other = _step2.value;
              if (other === this) continue;
              var dx = other.x - this.x,
                dz = other.z - this.z;
              var d = dx * dx + dz * dz;
              if (d < bestD) {
                bestD = d;
                bestX = dx;
                bestZ = dz;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (bestD < Infinity && bestD > 0.25) {
            angle = Math.atan2(bestZ, bestX) + (Math.random() - 0.5) * 0.8;
          }
        }
        this._lookBiasX = Math.cos(angle);
        this._lookBiasZ = Math.sin(angle);
        this._nextLookTime = this._simTimeMs + 1500 + Math.random() * 3000;
      }
      // Smoothly lerp facing toward look target
      this._facingX += (this._lookBiasX - this._facingX) * 0.06;
      this._facingZ += (this._lookBiasZ - this._facingZ) * 0.06;
      var flen = Math.hypot(this._facingX, this._facingZ) || 1;
      this._facingX /= flen;
      this._facingZ /= flen;
    }

    // =========================================================================
    // COMBAT — circle → windup → tackle → cooldown
    // =========================================================================
    _updateCombat(distToPlayer) {
      var sim = this._simTimeMs;
      if (this._state === 'circle') {
        if (sim >= this._stateUntil && distToPlayer > 0.5 && distToPlayer < 8 && this._detectionState === 'alert') {
          this._state = 'windup';
          this._stateUntil = sim + 200;
        }
        // Anti-clustering: flip direction if another same-direction enemy is close
        var nearbyFlip = this.game.world.getNearbyEnemies(this.x, this.z, 1);
        var _iterator3 = _createForOfIteratorHelper(nearbyFlip),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var other = _step3.value;
            if (other === this || other._circleDir !== this._circleDir) continue;
            if (Math.hypot(other.x - this.x, other.z - this.z) < this._orbitRadius * 0.6) {
              this._circleDir *= -1;
              this._nextDirFlip = sim + 2000 + Math.random() * 2000;
              break;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else if (this._state === 'windup') {
        if (sim >= this._stateUntil) {
          if (distToPlayer > 8 || this.game.player.isDead) {
            this._state = 'cooldown';
            this._stateUntil = sim + 400 + Math.random() * 400;
            return;
          }
          this._tackleTargetX = this.game.player.x;
          this._tackleTargetZ = this.game.player.z;
          this._tackleStartX = this.x;
          this._tackleStartZ = this.z;
          this._tackleStartTime = sim;
          this._state = 'tackle';
        }
        // Windup is stationary — return to skip steering
        return;
      } else if (this._state === 'tackle') {
        var elapsed = sim - this._tackleStartTime;
        var progress = Math.min(elapsed / this._tackleDuration, 1);
        var eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        var newX = this._tackleStartX + (this._tackleTargetX - this._tackleStartX) * eased;
        var newZ = this._tackleStartZ + (this._tackleTargetZ - this._tackleStartZ) * eased;
        this.game.world.moveEnemy(this, newX, newZ);
        if (progress >= 1) {
          var landDist = Math.hypot(this.x - this.game.player.x, this.z - this.game.player.z);
          if (landDist < this.attackRange && !this._hitPlayerThisPass) {
            var dirX = this.x - this.game.player.x;
            var dirZ = this.z - this.game.player.z;
            var d = Math.hypot(dirX, dirZ) || 1;
            this.game.player.takeDamage(this.attackDamage, dirX / d, dirZ / d);
            this._hitPlayerThisPass = true;
          }
          this._state = 'cooldown';
          this._stateUntil = sim + 800 + Math.random() * 400;
        }
        return;
      } else if (this._state === 'cooldown') {
        if (sim >= this._stateUntil) {
          this._state = 'circle';
          this._stateUntil = sim + 400 + Math.random() * 1000;
        }
      }
    }

    // -- Acceleration base rates vary by detection state (relaxed → urgent) --
    _getAcceleration() {
      var rates = {
        unaware: 0.12,
        suspicious: 0.18,
        alert: 0.28,
        panicked: 0.4
      };
      return rates[this._detectionState] || 0.12;
    }

    // =========================================================================
    // STEERING & MOVEMENT — vector-weighted sum (replaces 16-bin scoring)
    // =========================================================================
    _updateMovement(delta, distToPlayer, toPlayerNormX, toPlayerNormZ) {
      // Determine desired displacement for this frame
      var desiredX = 0;
      var desiredZ = 0;
      var len = 0;
      var frozen = this._state === 'windup' || this._state === 'tackle' || this._detectionState === 'suspicious' && this._suspicionPhase === 'notice';
      if (!frozen) {
        var steer = this._accumulateBehavior(delta, distToPlayer, toPlayerNormX, toPlayerNormZ);
        this._debugSteerX = steer.dirX;
        this._debugSteerZ = steer.dirZ;
        len = Math.hypot(steer.dirX, steer.dirZ);
        if (len >= 0.005) {
          desiredX = steer.dirX / len * this.speed * delta;
          desiredZ = steer.dirZ / len * this.speed * delta;
        }
      }

      // Detect braking: desired is near-zero, or direction is reversing (dot product negative)
      var baseRate = this._getAcceleration();
      var curLen = Math.hypot(this._moveVelX, this._moveVelZ);
      var isBraking = curLen > 0.001 && (len < 0.005 || desiredX * this._moveVelX + desiredZ * this._moveVelZ < 0);
      // Double rate on brake so stopping is decisive, never > 0.95
      var rate = isBraking ? Math.min(baseRate * 2.5, 0.95) : baseRate;
      this._moveVelX += (desiredX - this._moveVelX) * rate;
      this._moveVelZ += (desiredZ - this._moveVelZ) * rate;

      // Clamp velocity to max speed (prevent overshoot)
      var maxSpeed = this.speed * delta;
      var velLen = Math.hypot(this._moveVelX, this._moveVelZ);
      if (velLen > maxSpeed) {
        this._moveVelX = this._moveVelX / velLen * maxSpeed;
        this._moveVelZ = this._moveVelZ / velLen * maxSpeed;
      }

      // Dead zone: snap to zero to eliminate the barely-moving tail
      if (Math.abs(this._moveVelX) < 0.0005 && Math.abs(this._moveVelZ) < 0.0005) return;
      var newX = this.x + this._moveVelX;
      var newZ = this.z + this._moveVelZ;

      // Collision slide
      var normX = velLen > 0 ? this._moveVelX / velLen : 0;
      var normZ = velLen > 0 ? this._moveVelZ / velLen : 0;
      if (this.checkCollision(newX, newZ)) {
        var slideResult = this._trySlide(newX, newZ, normX, normZ, delta);
        newX = slideResult.x;
        newZ = slideResult.z;
      }

      // Separation push if still colliding
      if (this.checkCollision(newX, newZ)) {
        var push = this._computeSeparation();
        newX += push.x;
        newZ += push.z;
      }

      // Player proximity guard (non-cooldown states)
      if (this._state !== 'cooldown') {
        var pdx = newX - this.game.player.x;
        var pdz = newZ - this.game.player.z;
        var minDist = this.radius + Config.PLAYER.HITBOX_WIDTH / Config.TILE.WIDTH / 2;
        if (pdx * pdx + pdz * pdz < minDist * minDist) return;
      }
      this.game.world.moveEnemy(this, newX, newZ);
    }

    // -- Accumulate behavioral weights into a single direction vector --
    _accumulateBehavior(delta, distToPlayer, toPlayerNormX, toPlayerNormZ) {
      var dirX = 0;
      var dirZ = 0;
      var nearby = this.game.world.getNearbyEnemies(this.x, this.z, 1);

      // Seek player (alert only)
      if (this._detectionState === 'alert' && this._state !== 'cooldown') {
        var seekWeight = Math.max(Math.min(distToPlayer / 3, 1), 0.3);
        dirX += toPlayerNormX * seekWeight;
        dirZ += toPlayerNormZ * seekWeight;
      }

      // Seek last known (suspicious)
      if (this._detectionState === 'suspicious') {
        var toLastX = this._lastKnownX - this.x;
        var toLastZ = this._lastKnownZ - this.z;
        var toLastDist = Math.hypot(toLastX, toLastZ) || 1;
        var suspectWeight = 0;
        if (this._suspicionPhase === 'creep') {
          var cyclePos = this._creepPauseTimer % (this._creepPauseInterval + this._creepPauseDuration);
          var isPaused = cyclePos > this._creepPauseInterval;
          if (!isPaused) suspectWeight = 0.25;
        } else if (this._suspicionPhase === 'look') {
          var elapsed = this._simTimeMs - this._suspicionPhaseStart;
          var t = Math.min(1, elapsed / (700 + Math.random() * 400));
          suspectWeight = t * 0.12;
        } else {
          suspectWeight = 0.5;
        }
        dirX += toLastX / toLastDist * suspectWeight;
        dirZ += toLastZ / toLastDist * suspectWeight;
      }

      // Cooldown retreat
      if (this._detectionState === 'alert' && this._state === 'cooldown') {
        dirX += -toPlayerNormX * 0.8;
        dirZ += -toPlayerNormZ * 0.8;
      }

      // Panic flee + scatter
      if (this._detectionState === 'panicked') {
        var fromDangerX = this.x - this._dangerX;
        var fromDangerZ = this.z - this._dangerZ;
        var fromDangerDist = Math.hypot(fromDangerX, fromDangerZ) || 1;
        var fleeX = fromDangerX / fromDangerDist;
        var fleeZ = fromDangerZ / fromDangerDist;
        dirX += fleeX * 1.2;
        dirZ += fleeZ * 1.2;
        var perpX = -fleeZ * this._circleDir;
        var perpZ = fleeX * this._circleDir;
        dirX += perpX * 0.6;
        dirZ += perpZ * 0.6;
      }

      // Orbit tangent (alert only — unaware slimes don't know where the player is)
      if (this._detectionState === 'alert' && !this._isIdle && this._state !== 'cooldown') {
        var tangX = -toPlayerNormZ * this._circleDir;
        var tangZ = toPlayerNormX * this._circleDir;
        var distFactor = Math.max(0, 1 - Math.abs(distToPlayer - this._orbitRadius) / this._orbitRadius);
        var orbitWeight = 0.3 + this._circleWeight * distFactor;
        dirX += tangX * orbitWeight;
        dirZ += tangZ * orbitWeight;
      }

      // Outward push (alert only — unaware slimes don't know where the player is)
      if (this._detectionState === 'alert' && !this._isIdle && distToPlayer < this._orbitRadius * 0.6) {
        var pushWeight = (1 - distToPlayer / (this._orbitRadius * 0.6)) * 0.6;
        dirX += -toPlayerNormX * pushWeight;
        dirZ += -toPlayerNormZ * pushWeight;
      }

      // Enemy avoidance (85% perpendicular + 15% direct away)
      // Social cohesion: gentle pull toward nearby slimes (forms loose groups naturally)
      // Strongest at ~2 tiles, fades to zero at 5 tiles, suppressed during combat pursuit
      var inCombat = this._detectionState === 'alert' && this._state !== 'cooldown';
      if (!inCombat) {
        var avgX = 0,
          avgZ = 0,
          count = 0;
        var _iterator4 = _createForOfIteratorHelper(nearby),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var other = _step4.value;
            if (other === this) continue;
            var dx = other.x - this.x;
            var dz = other.z - this.z;
            var d = Math.hypot(dx, dz);
            if (d > 0.5 && d < 5) {
              avgX += other.x;
              avgZ += other.z;
              count++;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        if (count > 0) {
          var toGroupX = avgX / count - this.x;
          var toGroupZ = avgZ / count - this.z;
          var groupDist = Math.hypot(toGroupX, toGroupZ) || 1;
          dirX += toGroupX / groupDist * 0.12;
          dirZ += toGroupZ / groupDist * 0.12;
        }
      }

      // Separation: push apart when overlapping
      var _iterator5 = _createForOfIteratorHelper(nearby),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _other = _step5.value;
          if (_other === this) continue;
          var _dx2 = this.x - _other.x;
          var _dz2 = this.z - _other.z;
          var _d2 = Math.hypot(_dx2, _dz2) || 0.001;
          if (_d2 < 2) {
            var strength = (1 - _d2 / 2) * 2;
            var _perpX3 = -_dz2 / _d2;
            var _perpZ3 = _dx2 / _d2;
            dirX += (_perpX3 * 0.85 + _dx2 / _d2 * 0.15) * strength;
            dirZ += (_perpZ3 * 0.85 + _dz2 / _d2 * 0.15) * strength;
          }
        }

        // Wander noise — base direction (primary for unaware) + perturbs existing direction
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (Math.abs(this._wanderNoise) > 0.001) {
        var wanderX = Math.cos(this._wanderNoise);
        var wanderZ = Math.sin(this._wanderNoise);
        dirX += wanderX * 0.2;
        dirZ += wanderZ * 0.2;
        var rotX = dirX * wanderX - dirZ * wanderZ;
        var rotZ = dirZ * wanderX + dirX * wanderZ;
        dirX = dirX * 0.85 + rotX * 0.15;
        dirZ = dirZ * 0.85 + rotZ * 0.15;
      }
      return {
        dirX,
        dirZ
      };
    }

    // -- Slide to nearest valid direction when blocked --
    _trySlide(newX, newZ, desiredX, desiredZ, delta) {
      var directions = [{
        x: 1,
        z: 0
      }, {
        x: -1,
        z: 0
      }, {
        x: 0,
        z: 1
      }, {
        x: 0,
        z: -1
      }, {
        x: 0.707,
        z: 0.707
      }, {
        x: -0.707,
        z: 0.707
      }, {
        x: 0.707,
        z: -0.707
      }, {
        x: -0.707,
        z: -0.707
      }];
      directions.sort((a, b) => b.x * desiredX + b.z * desiredZ - (a.x * desiredX + a.z * desiredZ));
      for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
        var dir = _directions[_i];
        var tx = this.x + dir.x * this.speed * delta * 0.5;
        var tz = this.z + dir.z * this.speed * delta * 0.5;
        if (!this.checkCollision(tx, tz)) return {
          x: tx,
          z: tz
        };
      }
      return {
        x: newX,
        z: newZ
      };
    }

    // -- Separation push when stuck on enemies --
    _computeSeparation() {
      var pushX = 0;
      var pushZ = 0;
      var nearby = this.game.world.getNearbyEnemies(this.x, this.z, 1);
      var _iterator6 = _createForOfIteratorHelper(nearby),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var other = _step6.value;
          if (other === this) continue;
          var dx = this.x - other.x;
          var dz = this.z - other.z;
          var distSq = dx * dx + dz * dz;
          var otherRadius = typeof other.radius === 'number' ? other.radius : Config.ENEMY.HITBOX_RADIUS;
          var minDist = this.radius + otherRadius;
          if (distSq < minDist * minDist) {
            var d = Math.sqrt(distSq) || 0.0001;
            var overlap = minDist - d;
            pushX += dx / d * overlap * Config.ENEMY.SEPARATION_FORCE;
            pushZ += dz / d * overlap * Config.ENEMY.SEPARATION_FORCE;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return {
        x: pushX,
        z: pushZ
      };
    }

    // =========================================================================
    // COLLISION
    // =========================================================================
    checkCollision(newX, newZ) {
      var pdx = newX - this.game.player.x;
      var pdz = newZ - this.game.player.z;
      var playerMin = this.radius + Config.PLAYER.HITBOX_WIDTH / Config.TILE.WIDTH / 2;
      if (pdx * pdx + pdz * pdz < playerMin * playerMin) return true;
      var _iterator7 = _createForOfIteratorHelper(this.game.world.enemies),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var enemy = _step7.value;
          if (enemy === this) continue;
          var dx = newX - enemy.x;
          var dz = newZ - enemy.z;
          var otherR = typeof enemy.radius === 'number' ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
          if (dx * dx + dz * dz < (this.radius + otherR) ** 2) return true;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return false;
    }

    // =========================================================================
    // DEBUG OVERLAY
    // =========================================================================
    _renderDebug() {
      var cx = Config.TILE.WIDTH;
      var cy = Config.TILE.HEIGHT;

      // Hitbox ellipse (accurate isometric projection of world-space collision radius)
      this._hitboxGraph.clear();

      // AI debug overlay (FOV + look arrow + state label)
      if (this._debugGraph) {
        this._debugGraph.clear();
        var fovHalf = Config.ENEMY.FOV_ANGLE / 2;
        var range = Config.ENEMY.VISUAL_RANGE;
        var arcSteps = 16;
        this._debugGraph.moveTo(0, 0);
        for (var i = 0; i <= arcSteps; i++) {
          var angle = i / arcSteps * fovHalf * 2 - fovHalf;
          var cosA = Math.cos(angle);
          var sinA = Math.sin(angle);
          var wx = this._facingX * cosA - this._facingZ * sinA;
          var wz = this._facingX * sinA + this._facingZ * cosA;
          this._debugGraph.lineTo((wx - wz) * range * cx / 2, (wx + wz) * range * cy / 2);
        }
        this._debugGraph.closePath();
        this._debugGraph.fill({
          color: 0x8888ff,
          alpha: 0.2
        });
        this._debugGraph.stroke({
          width: 1,
          color: 0x8888ff,
          alpha: 0.6
        });
        var lookLen = cx * 1.5;
        var lookSX = (this._facingX - this._facingZ) * cx / 2;
        var lookSY = (this._facingX + this._facingZ) * cy / 2;
        var lookSLen = Math.hypot(lookSX, lookSY) || 1;
        var lx = lookSX / lookSLen * lookLen;
        var ly = lookSY / lookSLen * lookLen;
        this._debugGraph.moveTo(0, 0);
        this._debugGraph.lineTo(lx, ly);
        this._debugGraph.stroke({
          width: 2,
          color: 0xffdd00,
          alpha: 0.9
        });
        var backAngle = Math.atan2(lookSY, lookSX) + Math.PI;
        var ah = 6;
        this._debugGraph.moveTo(lx, ly);
        this._debugGraph.lineTo(lx + Math.cos(backAngle + 0.4) * ah, ly + Math.sin(backAngle + 0.4) * ah);
        this._debugGraph.moveTo(lx, ly);
        this._debugGraph.lineTo(lx + Math.cos(backAngle - 0.4) * ah, ly + Math.sin(backAngle - 0.4) * ah);
        this._debugGraph.stroke({
          width: 2,
          color: 0xffdd00,
          alpha: 0.9
        });
        if (this._debugState) {
          this._debugState.text = "".concat(this._state, " ").concat(this._detectionState);
          var colors = {
            panicked: 0xff4444,
            alert: 0xff8844,
            suspicious: 0xffdd44
          };
          this._debugState.style.fill = colors[this._detectionState] || 0xffffff;
        }
      }

      // Movement debug — steering direction line (independent of AI debug flag)
      if (this._debugMoveGraph) {
        this._debugMoveGraph.clear();
        var steerLen = Math.hypot(this._debugSteerX, this._debugSteerZ);
        if (steerLen > 0.001) {
          var sx = (this._debugSteerX - this._debugSteerZ) * cx / 2;
          var sy = (this._debugSteerX + this._debugSteerZ) * cy / 2;
          var sLen = Math.hypot(sx, sy) || 1;
          var lineLen = cx * 2;
          this._debugMoveGraph.moveTo(0, 0);
          this._debugMoveGraph.lineTo(sx / sLen * lineLen, sy / sLen * lineLen);
          this._debugMoveGraph.stroke({
            width: 2,
            color: 0x44ff44,
            alpha: 0.7
          });
        }
      }
    }

    // =========================================================================
    // EXTERNAL INTERFACES
    // =========================================================================

    takeDamage(amount, knockbackForce, knockbackDirection) {
      var _Config$ATTACK_TYPES$2;
      var attackType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'SLASH';
      if (this._dying) return false;
      this.health -= amount;
      this.flashWhite();
      this._setDetection('alert');
      this._lastKnownX = this.game.player.x;
      this._lastKnownZ = this.game.player.z;
      this.game.world.alertNearbyEnemies(this.x, this.z, Config.ENEMY.SOUND_RANGES.ATTACK, 'attack');
      var healthRatio = Math.max(0, this.health / this.maxHealth);
      var damageParticles = ParticleSystem.createDamageParticles(this.game, this.x, this.z, attackType, knockbackDirection, healthRatio);
      this.game.particles.push(...damageParticles);

      // Non-lethal exit-wound spray for precise attacks
      if ((_Config$ATTACK_TYPES$2 = Config.ATTACK_TYPES[attackType]) !== null && _Config$ATTACK_TYPES$2 !== void 0 && _Config$ATTACK_TYPES$2.PRECISE && knockbackDirection && this.health > 0) {
        var exitX = knockbackDirection.x;
        var exitZ = knockbackDirection.z;
        for (var i = 0; i < 6; i++) {
          var spread = (Math.random() - 0.5) * 0.6;
          var ca = Math.cos(spread);
          var sa = Math.sin(spread);
          var speed = 0.04 + Math.random() * 0.06;
          var p = new Particle(this.game, this.x + exitX * 0.3 + (Math.random() - 0.5) * 0.2, this.z + exitZ * 0.3 + (Math.random() - 0.5) * 0.2, {
            velocity: {
              x: (exitX * ca - exitZ * sa) * speed,
              z: (exitX * sa + exitZ * ca) * speed
            },
            lifetime: 400 + Math.random() * 400,
            size: 4 + Math.random() * 3,
            color: 0xffffff,
            alpha: 0.6,
            gravity: -0.00005,
            scaleOverTime: true
          });
          this.game.particles.push(p);
        }
      }
      if (knockbackForce > 0 && knockbackDirection) {
        if (this._state === 'windup' || this._state === 'tackle') {
          this._state = 'cooldown';
          this._stateUntil = this._simTimeMs + 800 + Math.random() * 400;
        }
        this.knockbackX = knockbackDirection.x * knockbackForce;
        this.knockbackZ = knockbackDirection.z * knockbackForce;
        this.isKnockedback = true;
      }
      if (this.health <= 0) {
        var _Config$ATTACK_TYPES$3;
        this._dying = true;
        this._deathTimer = performance.now() + Config.ENEMY.DEATH_KNOCKBACK_DELAY;
        this._killType = attackType;
        if ((_Config$ATTACK_TYPES$3 = Config.ATTACK_TYPES[attackType]) !== null && _Config$ATTACK_TYPES$3 !== void 0 && _Config$ATTACK_TYPES$3.PRECISE && knockbackDirection) {
          var _exitX = knockbackDirection.x;
          var _exitZ = knockbackDirection.z;
          for (var _i2 = 0; _i2 < 18; _i2++) {
            var _spread = (Math.random() - 0.5) * 0.5;
            var _ca = Math.cos(_spread);
            var _sa = Math.sin(_spread);
            var _speed = 0.09 + Math.random() * 0.14;
            var _p = new Particle(this.game, this.x + _exitX * 0.3 + (Math.random() - 0.5) * 0.3, this.z + _exitZ * 0.3 + (Math.random() - 0.5) * 0.3, {
              velocity: {
                x: (_exitX * _ca - _exitZ * _sa) * _speed,
                z: (_exitX * _sa + _exitZ * _ca) * _speed
              },
              lifetime: 800 + Math.random() * 1200,
              size: 7 + Math.random() * 7,
              color: 0xffffff,
              alpha: 0.9,
              gravity: -0.0001 - Math.random() * 0.00015,
              scaleOverTime: true
            });
            this.game.particles.push(_p);
          }
          if (attackType === Config.ATTACK.THRUST) {
            var pull = 0.07;
            this.knockbackX = -_exitX * pull;
            this.knockbackZ = -_exitZ * pull;
            this.isKnockedback = true;
          }
        }
      }
      return false;
    }
    reactToProjectile(projX, projZ, originX, originZ) {
      if (this._detectionState === 'alert' || this.destroyed || this._dying) return;
      var dx = projX - this.x;
      var dz = projZ - this.z;
      var dist = Math.hypot(dx, dz);
      if (dist > Config.ENEMY.VISUAL_RANGE) return;

      // Near-miss — sense the arrow whizzing past (sound/air, no FOV needed)
      if (dist < Config.ENEMY.ARROW_NEARMISS_ALERT_RADIUS) {
        this._setDetection('alert');
        this._lastKnownX = originX;
        this._lastKnownZ = originZ;
        return;
      }

      // Visual detection — must be within FOV cone
      var normX = dx / dist;
      var normZ = dz / dist;
      var dot = normX * this._facingX + normZ * this._facingZ;
      if (dot < Math.cos(Config.ENEMY.FOV_ANGLE / 2)) return;

      // Panicked slime flees from the arrow's origin, doesn't investigate
      if (this._detectionState === 'panicked') {
        this._dangerX = originX;
        this._dangerZ = originZ;
        this._panicEndTime = this._simTimeMs + Config.ENEMY.PANIC_DURATION;
        return;
      }
      this._setDetection('suspicious');
      this._lastKnownX = originX;
      this._lastKnownZ = originZ;
      this._searchUntil = this._simTimeMs + Config.ENEMY.SEARCH_DURATION;
      this._suspicionPhase = 'notice';
      this._suspicionPhaseStart = this._simTimeMs;
      this._suspicionSeenX = projX;
      this._suspicionSeenZ = projZ;
      this._suspicionOriginX = originX;
      this._suspicionOriginZ = originZ;
    }
    flashWhite() {
      var now = performance.now();
      this._flashEnd = Math.max(this._flashEnd, now + 100);
      this.damageFilter.matrix = SLIME_WHITE_MAT;
    }
    destroy() {
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.destroyed) return;
      this.destroyed = true;
      if (!silent) {
        this.dropItems();
        var deathParticles = ParticleSystem.createDeathParticles(this.game, this.x, this.z);
        this.game.particles.push(...deathParticles);
      }
      if (this.sprite) {
        try {
          if (this.sprite.filters) this.sprite.filters = null;
        } catch (e) {/* noop */}
      }
      if (this.container) {
        try {
          var _this$container$paren;
          (_this$container$paren = this.container.parent) === null || _this$container$paren === void 0 || _this$container$paren.removeChild(this.container);
        } catch (e) {/* noop */}
        releaseContainer(this.container);
        this.container = null;
      }
      try {
        if (this._debugGraph) this._debugGraph.destroy();
      } catch (e) {/* noop */}
      this._debugGraph = null;
      try {
        if (this._debugMoveGraph) this._debugMoveGraph.destroy();
      } catch (e) {/* noop */}
      this._debugMoveGraph = null;
      try {
        if (this._hitboxGraph) this._hitboxGraph.destroy();
      } catch (e) {/* noop */}
      this._hitboxGraph = null;
      try {
        if (this.damageFilter && !this.damageFilter._destroyed) this.damageFilter.destroy();
      } catch (e) {/* noop */}
      this.damageFilter = null;
      this.sprite = null;
      this.game = null;
    }
    dropItems() {
      // defined in world.js getEnemyDrops()
    }
  }

  // grass.js - updated version
  class Grass {
    constructor(game, x, z) {
      var variant = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.game = game;
      this.x = x;
      this.z = z;
      this.variant = variant;
      this.yOffset = 0;
      this.interactive = true;
      this.wiggleOffset = Math.random() * Math.PI * 2; // For animation variation

      // Create sprite
      this.sprite = new PIXI.Sprite(loadTexture(Config.ASSETS.GRASS_OBJECT));
      this.sprite.anchor.set(0.5, 1); // Anchor at bottom center

      // Apply scaling - start with the config size, then apply additional scale
      this.sprite.width = Config.GRASS.WIDTH;
      this.sprite.height = Config.GRASS.HEIGHT;
      this.sprite.scale.set(Config.GRASS.SCALE );

      // Set texture scaling mode
      this.sprite.texture.source.scaleMode = 'nearest';

      // Add a slight tint variation for more natural look
      var tintVariation = Math.random() * 0.2 - 0.1;
      this.sprite.tint = this.adjustColor(0x88ff88, tintVariation);

      // Position the grass
      this.updateSpritePosition();
    }

    // Helper method to adjust color with variation
    adjustColor(color, variation) {
      var r = Math.min(255, Math.max(0, (color >> 16 & 0xff) * (1 + variation)));
      var g = Math.min(255, Math.max(0, (color >> 8 & 0xff) * (1 + variation)));
      var b = Math.min(255, Math.max(0, (color & 0xff) * (1 + variation)));
      return r << 16 | g << 8 | b;
    }
    updateSpritePosition() {
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2 + Config.GRASS.OFFSET_Y + this.yOffset;
      this.sprite.position.set(screenX, screenY);
    }
    interact() {
      console.log("Grass interacted with at", this.x, this.z);

      // More pronounced animation when interacted with
      this.yOffset = -8;
      this.sprite.tint = 0xffffaa; // Yellow tint when interacted with

      setTimeout(() => {
        this.yOffset = 0;
        this.sprite.tint = 0x88ff88; // Return to normal color
        this.updateSpritePosition();
      }, 300);
    }
  }

  var ITEM_DEFINITIONS = {
    "basic_sword": {
      id: "basic_sword",
      name: "Basic Sword",
      type: "weapon",
      damage: Config.PLAYER.ATTACK_DAMAGE,
      range: Config.PLAYER.ATTACK_RANGE,
      attacks: ["QUICK", "THRUST", "HEAVY", "SLASH"],
      weaponTexture: null,
      uiTexture: "assets/sword-ui.png",
      weaponScale: 2,
      uiScale: 2,
      stackable: false,
      maxStack: 1
    },
    "wooden_bow": {
      id: "wooden_bow",
      name: "Wooden Bow",
      type: "ranged",
      damage: 30,
      range: Config.ATTACK_TYPES.SHOOT.RANGE,
      attacks: ["SHOOT"],
      cooldown: Config.ATTACK_TYPES.SHOOT.COOLDOWN,
      projectileSpeed: Config.ATTACK_TYPES.SHOOT.PROJECTILE_SPEED,
      maxChargeTime: 1000,
      weaponTexture: "assets/bow.png",
      uiTexture: "assets/bow-ui.png",
      weaponScale: 1.5,
      uiScale: 2,
      knockback: 0.35,
      stackable: false,
      maxStack: 1
    },
    "shadow_kunai": {
      id: "shadow_kunai",
      name: "Shadow Kunai",
      type: "ranged",
      damage: 0,
      range: 15,
      attacks: ["SHOOT"],
      cooldown: Config.ATTACK_TYPES.SHOOT.COOLDOWN,
      projectileSpeed: Config.ATTACK_TYPES.SHOOT.PROJECTILE_SPEED,
      maxChargeTime: 500,
      weaponTexture: "assets/kunai.png",
      uiTexture: "assets/kunai-ui.png",
      weaponScale: 1.2,
      uiScale: 2,
      special: "teleport",
      stackable: false,
      maxStack: 1
    },
    "slime": {
      id: "slime",
      name: "Slime",
      type: "resource",
      category: "monster_drop",
      uiTexture: "assets/slime-item.png",
      uiScale: 2,
      stackable: true,
      maxStack: 99,
      description: "A gooey slime dropped by slimes."
    },
    "wood": {
      id: "wood",
      name: "Wood",
      type: "resource",
      category: "material",
      uiTexture: "assets/wood.png",
      uiScale: 2,
      stackable: true,
      maxStack: 99,
      description: "Basic wood for crafting."
    },
    "stone": {
      id: "stone",
      name: "Stone",
      type: "resource",
      category: "material",
      uiTexture: "assets/stone.png",
      uiScale: 2,
      stackable: true,
      maxStack: 99,
      description: "A sturdy piece of stone."
    },
    "arrow": {
      id: "arrow",
      name: "Arrow",
      type: "resource",
      category: "ammo",
      uiTexture: "assets/arrow.png",
      uiScale: 2,
      stackable: true,
      maxStack: 99,
      description: "A crafted arrow. Used with a bow."
    }
  };

  class Collectible {
    constructor(game, x, z, itemId) {
      var quantity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      this.game = game;
      this.x = x;
      this.z = z;
      this.itemId = itemId;
      this.quantity = quantity;
      this.collected = false;
      this.itemDef = ITEM_DEFINITIONS[itemId];
      if (!this.itemDef) {
        console.warn("Item definition not found for: ".concat(itemId));
        return;
      }
      this.bounceHeight = 0.3;
      this.bounceSpeed = 0.005;
      this.bounceOffset = 0;
      this.bounceTime = 0;
      this.rotation = 0;
      this.rotationSpeed = 0;
      this.collectionRange = 1.5;
      this.container = new PIXI.Container();
      this.sprite = new PIXI.Sprite();
      this.sprite.anchor.set(0.5, 0.5);
      this.container.addChild(this.sprite);
      this.createSprite();
      this.addToWorld();
    }
    createSprite() {
      if (!this.sprite) {
        this.sprite = new PIXI.Sprite();
        this.container.addChild(this.sprite);
      }
      this.sprite.anchor.set(0.5, 0.5);
      var path = this.itemDef.uiTexture || 'assets/default-item.png';
      var texture = loadTexture(path, 'assets/default-item.png');
      if (!texture) {
        this.onTextureError();
        return;
      }
      onTextureReady(texture, readyTexture => {
        this.onTextureLoaded(readyTexture);
      });
    }
    onTextureLoaded(texture) {
      if (!this.sprite || this.collected) return;
      this.sprite.texture = texture;
      this.sprite.texture.source.scaleMode = 'nearest';
      var baseSize = Config.TILE.WIDTH * 0.5;
      var textureSize = Math.max(texture.width, texture.height);
      var scale = baseSize / textureSize;
      this.sprite.scale.set(Math.max(0.5, Math.min(2, scale)));
      if (this.quantity > 1 && this.itemDef.stackable) {
        this.addQuantityText();
      }
      this.createGlow();
      this.updatePosition();
    }
    onTextureError() {
      if (this.sprite && !this.collected) {
        var g = new PIXI.Graphics();
        g.circle(0, 0, 10);
        g.fill({
          color: 0xFF0000,
          alpha: 1
        });
        var texture = this.game.app.renderer.generateTexture(g);
        this.sprite.texture = texture;
        this.sprite.scale.set(1);
        g.destroy();
        this.updatePosition();
      }
    }
    addQuantityText() {
      if (!this.sprite) return;
      if (this.quantityText && this.quantityText.parent) {
        this.quantityText.parent.removeChild(this.quantityText);
        this.quantityText.destroy();
      }
      this.quantityText = new PIXI.Text({
        text: this.quantity.toString(),
        style: {
          fontSize: 14,
          fill: 0xFFFFFF,
          fontWeight: "bold",
          stroke: 0x000000,
          strokeThickness: 3,
          align: "center"
        }
      });
      this.quantityText.anchor.set(0.5, 0.5);
      this.quantityText.position.set(15, -15);
      this.container.addChild(this.quantityText);
    }
    createGlow() {
      if (!this.sprite) return;
      this.glowFilter = new PIXI.ColorMatrixFilter();
      var glowColor = [0.1, 0.1, 0.1];
      switch (this.itemDef.type) {
        case "weapon":
        case "ranged":
          glowColor = [0.2, 0, 0];
          break;
        case "resource":
          glowColor = [0, 0.2, 0];
          break;
        case "consumable":
          glowColor = [0.1, 0.1, 0];
          break;
      }
      this.glowFilter.matrix = [1, 0, 0, 0, glowColor[0], 0, 1, 0, 0, glowColor[1], 0, 0, 1, 0, glowColor[2], 0, 0, 0, 1, 0];
      this.sprite.filters = [this.glowFilter];
    }
    addToWorld() {
      var _this$game$renderer;
      if (!this.container || !((_this$game$renderer = this.game.renderer) !== null && _this$game$renderer !== void 0 && _this$game$renderer.collectibleContainer)) return;
      this.game.renderer.collectibleContainer.addChild(this.container);
      this.createSpawnParticles();
    }
    createSpawnParticles() {
      var _this = this;
      var particleCount = 8;
      var _loop = function _loop() {
        var angle = i / particleCount * Math.PI * 2;
        var distance = 0.3 + Math.random() * 0.2;
        var g = new PIXI.Graphics();
        g.circle(0, 0, 2 + Math.random() * 3);
        g.fill({
          color: 0xFFFFFF,
          alpha: 0.7
        });
        var sprite = new PIXI.Sprite({
          texture: _this.game.app.renderer.generateTexture(g)
        });
        sprite.anchor.set(0.5, 0.5);
        var worldX = _this.x + Math.cos(angle) * distance;
        var worldZ = _this.z + Math.sin(angle) * distance;
        var screenX = (worldX - worldZ) * Config.TILE.WIDTH / 2;
        var screenY = (worldX + worldZ) * Config.TILE.HEIGHT / 2;
        sprite.position.set(screenX, screenY);
        _this.game.renderer.particleContainer.addChild(sprite);
        var startTime = Date.now();
        var animate = () => {
          var elapsed = Date.now() - startTime;
          if (elapsed > 500) {
            if (sprite.parent) sprite.parent.removeChild(sprite);
            sprite.destroy();
            g.destroy();
            return;
          }
          var progress = elapsed / 500;
          sprite.alpha = 1 - progress;
          sprite.scale.set(1 + progress);
          requestAnimationFrame(animate);
        };
        animate();
      };
      for (var i = 0; i < particleCount; i++) {
        _loop();
      }
    }
    update(delta) {
      if (this.collected || !this.sprite) return false;
      this.bounceTime += delta;
      this.bounceOffset = Math.sin(this.bounceTime * this.bounceSpeed) * this.bounceHeight;
      if (this.glowFilter) {
        var pulse = Math.sin(this.bounceTime * 0.1) * 0.15 + 0.15;
        this.glowFilter.matrix[4] = pulse;
        this.glowFilter.matrix[9] = pulse;
        this.glowFilter.matrix[14] = pulse;
      }
      this.updatePosition();
      this.checkCollection();
      return true;
    }
    updatePosition() {
      if (!this.sprite) return;
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2 - this.bounceOffset * Config.TILE.HEIGHT;
      this.container.position.set(screenX, screenY);
    }
    checkCollection() {
      var player = this.game.player;
      if (!player) return;
      var dx = this.x - player.x;
      var dz = this.z - player.z;
      var distance = Math.sqrt(dx * dx + dz * dz);
      if (distance <= this.collectionRange) {
        this.collect();
      }
    }
    collect() {
      if (this.collected) return;
      this.collected = true;
      var success = this.game.player.collectItem(this.itemId, this.quantity);
      if (success) {
        this.createCollectionEffect();
      }
      this.destroy();
    }
    createCollectionEffect() {
      var _this2 = this;
      var particleCount = 6;
      var _loop2 = function _loop2() {
        var angle = i / particleCount * Math.PI * 2;
        var speed = 0.05 + Math.random() * 0.03;
        var g = new PIXI.Graphics();
        g.circle(0, 0, 3 + Math.random() * 2);
        g.fill({
          color: 0xFFFF00,
          alpha: 0.8
        });
        var sprite = new PIXI.Sprite({
          texture: _this2.game.app.renderer.generateTexture(g)
        });
        sprite.anchor.set(0.5, 0.5);
        var worldX = _this2.x + Math.cos(angle) * 0.3;
        var worldZ = _this2.z + Math.sin(angle) * 0.3;
        var screenX = (worldX - worldZ) * Config.TILE.WIDTH / 2;
        var screenY = (worldX + worldZ) * Config.TILE.HEIGHT / 2;
        sprite.position.set(screenX, screenY);
        _this2.game.renderer.particleContainer.addChild(sprite);
        var startTime = Date.now();
        var vx = Math.cos(angle) * speed;
        var vy = Math.sin(angle) * speed;
        var animate = () => {
          var elapsed = Date.now() - startTime;
          if (elapsed > 400) {
            if (sprite.parent) sprite.parent.removeChild(sprite);
            sprite.destroy();
            g.destroy();
            return;
          }
          var progress = elapsed / 400;
          var currentWorldX = worldX + vx * progress;
          var currentWorldZ = worldZ + vy * progress;
          var currentScreenX = (currentWorldX - currentWorldZ) * Config.TILE.WIDTH / 2;
          var currentScreenY = (currentWorldX + currentWorldZ) * Config.TILE.HEIGHT / 2;
          sprite.position.set(currentScreenX, currentScreenY);
          sprite.alpha = 1 - progress;
          sprite.scale.set(1 - progress * 0.5);
          requestAnimationFrame(animate);
        };
        animate();
      };
      for (var i = 0; i < particleCount; i++) {
        _loop2();
      }
    }
    destroy() {
      var _this$game;
      if (this._destroyed) return;
      this._destroyed = true;
      if ((_this$game = this.game) !== null && _this$game !== void 0 && (_this$game = _this$game.world) !== null && _this$game !== void 0 && (_this$game = _this$game.collectibles) !== null && _this$game !== void 0 && _this$game.has(this)) {
        this.game.world.collectibles.delete(this);
      }
      if (this.sprite) {
        if (this.sprite.filters) {
          this.sprite.filters = null;
        }
        if (this.container) {
          if (this.container.parent) {
            this.container.parent.removeChild(this.container);
          }
          try {
            this.container.destroy({
              children: true,
              texture: false
            });
          } catch (e) {}
        }
        this.sprite = null;
        this.container = null;
      }
      if (this.quantityText) {
        try {
          if (this.quantityText.parent) {
            this.quantityText.parent.removeChild(this.quantityText);
          }
          this.quantityText.destroy();
        } catch (e) {}
        this.quantityText = null;
      }
      if (this.glowFilter) {
        try {
          this.glowFilter.destroy();
        } catch (e) {}
        this.glowFilter = null;
      }
      this.game = null;
      this.itemDef = null;
    }
  }

  class World {
    constructor(game) {
      this.game = game;

      // Terrain chunks (tiles)
      this.chunks = new Map(); // Map<"cx,cz", { blocks, needsUpdate }>
      this.chunkGrass = new Map(); // Map<"cx,cz", Set<Grass>>

      // Enemy spatial index (single source of truth)
      this.chunkEnemies = new Map(); // Map<"cx,cz", Set<Enemy>>

      // Collectibles management
      this.collectibles = new Set();

      // Use config if provided
      this.chunkSize = Config.WORLD && Config.WORLD.CHUNK_SIZE ? Config.WORLD.CHUNK_SIZE : 16;
      console.log("[World] Initialized with chunk size", this.chunkSize);

      // Add cache properties
      this._enemiesDirty = true;
      this._cachedEnemiesArray = [];
    }

    // ---------------------------
    // Public read-only aggregate:
    // ---------------------------
    get enemies() {
      return this.enemiesArray;
    }
    get enemiesArray() {
      if (this._enemiesDirty) {
        var result = [];
        var _iterator = _createForOfIteratorHelper(this.chunkEnemies.values()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var set = _step.value;
            var _iterator2 = _createForOfIteratorHelper(set),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var e = _step2.value;
                result.push(e);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._cachedEnemiesArray = result;
        this._enemiesDirty = false;
      }
      return this._cachedEnemiesArray;
    }

    // ---------------------------
    // Enemy lifecycle
    // ---------------------------
    spawnEnemy(x, z) {
      // NOTE: later switch to pool.acquire(x,z)
      var enemy = new Slime(this.game, x, z);
      var chunkId = this.getChunkId(x, z);
      this._addEnemyToChunk(enemy, chunkId);
      this._enemiesDirty = true;
      return enemy;
    }
    moveEnemy(enemy, newX, newZ) {
      var oldChunk = this.getChunkId(enemy.x, enemy.z);
      var newChunk = this.getChunkId(newX, newZ);
      if (oldChunk !== newChunk) {
        this._removeEnemyFromAllChunks(enemy);
        this._addEnemyToChunk(enemy, newChunk);
        this._enemiesDirty = true;
      }
      enemy.x = newX;
      enemy.z = newZ;
    }
    destroyEnemy(enemy) {
      var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!silent) {
        this.dropItemsFromEnemy(enemy);
        this.alertNearbyEnemies(enemy.x, enemy.z, Config.ENEMY.VISUAL_RANGE, 'death');
      }
      this._removeEnemyFromAllChunks(enemy);
      this._enemiesDirty = true;
      try {
        if (enemy && typeof enemy.destroy === "function") {
          enemy.destroy(silent);
        }
      } catch (e) {
        console.warn("[World] error destroying enemy:", e);
      }
    }
    dropItemsFromEnemy(enemy) {
      var drops = this.getEnemyDrops(enemy);
      drops.forEach(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
          itemId = _ref2[0],
          quantity = _ref2[1];
        // Create physical collectible in the world
        var collectible = new Collectible(this.game, enemy.x, enemy.z, itemId, quantity);
        if (collectible.itemDef) {
          // Only add if item definition exists
          this.collectibles.add(collectible);

          // Add slight random offset for multiple drops
          if (drops.length > 1) {
            collectible.x += (Math.random() - 0.5) * 0.5;
            collectible.z += (Math.random() - 0.5) * 0.5;
          }
        }
      });
    }
    getEnemyDrops(enemy) {
      var drops = [];
      if (enemy.constructor.name === 'Slime') {
        // Slime always drops 1 slime
        drops.push(['slime', 1]);

        // Random chance for additional drops
        if (Math.random() < 0.1) {
          // 10% chance
          drops.push(['health_potion', 1]);
        }

        // Rare drop chance for weapons
        if (Math.random() < 0.02) {
          // 2% chance
          drops.push(['shadow_kunai', 1]);
        }
      }

      // Add more enemy types here
      // if (enemy.constructor.name === 'Goblin') {
      //     drops.push(['gold_coin', Math.floor(Math.random() * 3) + 1]);
      //     if (Math.random() < 0.05) {
      //         drops.push(['basic_sword', 1]);
      //     }
      // }

      return drops;
    }
    updateCollectibles(delta) {
      var _iterator3 = _createForOfIteratorHelper(this.collectibles),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var collectible = _step3.value;
          if (!collectible.update(delta)) {
            // Remove if update returns false (collected)
            this.removeCollectible(collectible);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    // Add method to remove collectible
    removeCollectible(collectible) {
      collectible.destroy();
      this.collectibles.delete(collectible);
    }
    // Add method to spawn collectible directly (for testing/chests)
    spawnCollectible(x, z, itemId) {
      var quantity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var collectible = new Collectible(this.game, x, z, itemId, quantity);
      if (collectible.itemDef) {
        this.collectibles.add(collectible);
        return collectible;
      }
      return null;
    }
    stressSpawn() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
      for (var i = 0; i < count; i++) {
        var x = (Math.random() - 0.5) * 20; // 200x200 area
        var z = (Math.random() - 0.5) * 20;
        this.spawnEnemy(x, z);
      }
    }

    // More explicit remove API (useful when pooling later)
    removeEnemyReference(enemy) {
      // Removes references without destroying (for pooling)
      this._removeEnemyFromAllChunks(enemy);
      this._enemiesDirty = true;
    }

    // ---------------------------
    // Spatial queries
    // ---------------------------
    getEnemiesInChunk(chunkId) {
      // Return a new Set copy so callers can't mutate internal sets
      var s = this.chunkEnemies.get(chunkId);
      return s ? new Set(s) : new Set();
    }
    getNearbyEnemies(x, z) {
      var chunkRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var cx = Math.floor(x / this.chunkSize);
      var cz = Math.floor(z / this.chunkSize);
      var nearby = new Set();
      for (var dx = -chunkRadius; dx <= chunkRadius; dx++) {
        for (var dz = -chunkRadius; dz <= chunkRadius; dz++) {
          var id = "".concat(cx + dx, ",").concat(cz + dz);
          var set = this.chunkEnemies.get(id);
          if (set) {
            var _iterator4 = _createForOfIteratorHelper(set),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var e = _step4.value;
                nearby.add(e);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
      }
      return nearby;
    }

    // ---------------------------
    // Chunk / terrain management
    // ---------------------------
    updateChunks(centerX, centerZ) {
      var chunkX = Math.floor(centerX / this.chunkSize);
      var chunkZ = Math.floor(centerZ / this.chunkSize);
      for (var dx = -Config.PLAYER.CHUNK_LOAD_DISTANCE; dx <= Config.PLAYER.CHUNK_LOAD_DISTANCE; dx++) {
        for (var dz = -Config.PLAYER.CHUNK_LOAD_DISTANCE; dz <= Config.PLAYER.CHUNK_LOAD_DISTANCE; dz++) {
          var targetX = chunkX + dx;
          var targetZ = chunkZ + dz;
          var id = "".concat(targetX, ",").concat(targetZ);
          if (!this.chunks.has(id)) {
            this.chunks.set(id, {
              blocks: this.generateTerrain(targetX, targetZ),
              needsUpdate: true
            });

            // Generate grass for this chunk
            var grassSet = this.generateGrass(targetX, targetZ);
            this.chunkGrass.set(id, grassSet);

            // Random enemy spawning
            if (Math.random() < Config.ENEMY.SPAWN_RATE) {
              var worldX = targetX * this.chunkSize + Math.random() * this.chunkSize;
              var worldZ = targetZ * this.chunkSize + Math.random() * this.chunkSize;
              this.spawnEnemy(worldX, worldZ);
            }
          }
        }
      }

      // Unload distant chunks (and their enemies/grass)
      this.unloadDistantChunks(centerX, centerZ);
    }
    generateGrass(chunkX, chunkZ) {
      var grassSet = new Set();
      var grassDensity = 0.2; // 20% of tiles will have grass
      var size = this.chunkSize;
      for (var x = 0; x < size; x++) {
        for (var z = 0; z < size; z++) {
          if (Math.random() < grassDensity) {
            var worldX = chunkX * this.chunkSize + x + 0.5;
            var worldZ = chunkZ * this.chunkSize + z + 0.5;
            var grass = new Grass(this.game, worldX, worldZ);
            grassSet.add(grass);
          }
        }
      }
      return grassSet;
    }
    generateTerrain(chunkX, chunkZ) {
      var size = this.chunkSize;
      // Previously used shared object via fill(...). Create unique objects per cell.
      var blocks = new Array(size);
      for (var i = 0; i < size; i++) {
        blocks[i] = new Array(size);
        for (var j = 0; j < size; j++) {
          blocks[i][j] = {
            type: "grass"
          }; // unique object
        }
      }
      return blocks;
    }

    // Add method to get nearby grass:
    getNearbyGrass(x, z) {
      var chunkRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var cx = Math.floor(x / this.chunkSize);
      var cz = Math.floor(z / this.chunkSize);
      var nearby = new Set();
      for (var dx = -chunkRadius; dx <= chunkRadius; dx++) {
        for (var dz = -chunkRadius; dz <= chunkRadius; dz++) {
          var id = "".concat(cx + dx, ",").concat(cz + dz);
          var set = this.chunkGrass.get(id);
          if (set) {
            var _iterator5 = _createForOfIteratorHelper(set),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var g = _step5.value;
                nearby.add(g);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }
      }
      return nearby;
    }
    unloadDistantChunks(playerX, playerZ) {
      var px = Math.floor(playerX / this.chunkSize);
      var pz = Math.floor(playerZ / this.chunkSize);
      var removeIds = [];
      var _iterator6 = _createForOfIteratorHelper(this.chunks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 1),
            chunkId = _step6$value[0];
          var _chunkId$split$map = chunkId.split(",").map(Number),
            _chunkId$split$map2 = _slicedToArray(_chunkId$split$map, 2),
            cx = _chunkId$split$map2[0],
            cz = _chunkId$split$map2[1];
          var dist = Math.max(Math.abs(cx - px), Math.abs(cz - pz));
          if (dist > Config.PLAYER.CHUNK_LOAD_DISTANCE) removeIds.push(chunkId);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      for (var _i = 0, _removeIds = removeIds; _i < _removeIds.length; _i++) {
        var id = _removeIds[_i];
        // Destroy grass objects for this chunk (avoid leaving sprite/listener refs)
        var grassSet = this.chunkGrass.get(id);
        if (grassSet) {
          var _iterator7 = _createForOfIteratorHelper(grassSet),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var grass = _step7.value;
              try {
                if (grass && typeof grass.destroy === "function") grass.destroy();
              } catch (e) {
                console.warn("[World] error destroying grass:", e);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          this.chunkGrass.delete(id);
        }

        // Remove enemies in this chunk: destroy them and clear references
        var set = this.chunkEnemies.get(id);
        if (set) {
          var _iterator8 = _createForOfIteratorHelper(set),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var enemy = _step8.value;
              this.destroyEnemy(enemy, true);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        // Remove terrain chunk
        this.chunks.delete(id);
      }
      this._enemiesDirty = true;
    }

    // ---------------------------
    // Terrain helpers
    // ---------------------------
    getBlock(x, z) {
      var _chunk$blocks;
      var chunk = this.getChunk(x, z);
      var localX = (Math.floor(x) % this.chunkSize + this.chunkSize) % this.chunkSize;
      var localZ = (Math.floor(z) % this.chunkSize + this.chunkSize) % this.chunkSize;
      return (chunk === null || chunk === void 0 || (_chunk$blocks = chunk.blocks) === null || _chunk$blocks === void 0 || (_chunk$blocks = _chunk$blocks[localX]) === null || _chunk$blocks === void 0 ? void 0 : _chunk$blocks[localZ]) || null;
    }
    getChunk(x, z) {
      var id = this.getChunkId(x, z);
      return this.chunks.get(id);
    }
    getChunkId(x, z) {
      var cx = Math.floor(x / this.chunkSize);
      var cz = Math.floor(z / this.chunkSize);
      return "".concat(cx, ",").concat(cz);
    }

    // ---------------------------
    // Internal helpers (index maintenance)
    // ---------------------------
    _addEnemyToChunk(enemy, chunkId) {
      if (!this.chunkEnemies.has(chunkId)) this.chunkEnemies.set(chunkId, new Set());
      this.chunkEnemies.get(chunkId).add(enemy);
      this._enemiesDirty = true;
    }
    _removeEnemyFromAllChunks(enemy) {
      var emptyChunks = [];
      var removed = false;
      var _iterator9 = _createForOfIteratorHelper(this.chunkEnemies),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = _slicedToArray(_step9.value, 2),
            _cid = _step9$value[0],
            set = _step9$value[1];
          if (set.delete(enemy)) {
            removed = true;
            if (set.size === 0) emptyChunks.push(_cid);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      for (var _i2 = 0, _emptyChunks = emptyChunks; _i2 < _emptyChunks.length; _i2++) {
        var cid = _emptyChunks[_i2];
        this.chunkEnemies.delete(cid);
      }
      if (removed) this._enemiesDirty = true;
    }
    alertNearbyEnemies(x, z, radius) {
      var eventType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'attack';
      var chunkRad = Math.ceil(radius / this.chunkSize) + 1;
      var nearby = this.getNearbyEnemies(x, z, chunkRad);
      var _iterator0 = _createForOfIteratorHelper(nearby),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var enemy = _step0.value;
          var d = Math.hypot(enemy.x - x, enemy.z - z);
          if (d >= radius) continue;
          if (eventType === 'death') {
            // 1. Sound-based immediate panic (close death — heard it loud and clear)
            if (d < Config.ENEMY.PANIC_RADIUS && enemy._detectionState !== 'alert') {
              if (enemy._detectionState !== 'panicked') {
                enemy._panicEndTime = enemy._simTimeMs + Config.ENEMY.PANIC_DURATION;
              } else {
                enemy._panicEndTime = Math.max(enemy._panicEndTime, enemy._simTimeMs + Config.ENEMY.PANIC_DURATION);
              }
              enemy._setDetection('panicked');
              enemy._dangerX = x;
              enemy._dangerZ = z;

              // 2. Visual freeze → panic (beyond sound range, but death is visible in FOV)
            } else if (d > 0 && d <= Config.ENEMY.VISUAL_RANGE && enemy._detectionState !== 'alert' && enemy._detectionState !== 'panicked') {
              var normX = (x - enemy.x) / d;
              var normZ = (z - enemy.z) / d;
              var dot = normX * enemy._facingX + normZ * enemy._facingZ;
              if (dot >= Math.cos(Config.ENEMY.FOV_ANGLE / 2)) {
                enemy._setDetection('suspicious');
                enemy._lastKnownX = x;
                enemy._lastKnownZ = z;
                enemy._searchUntil = enemy._simTimeMs + Config.ENEMY.SEARCH_DURATION;
                enemy._suspicionPhase = 'notice';
                enemy._suspicionPhaseStart = enemy._simTimeMs;
                enemy._suspicionSeenX = x;
                enemy._suspicionSeenZ = z;
                enemy._suspicionOriginX = x;
                enemy._suspicionOriginZ = z;
                var noticeDuration = 400 + (enemy._noticeScanBias * 200 + 200);
                enemy._visualDeathPanicAt = enemy._simTimeMs + noticeDuration + 200;

                // 3. Sound-based distant suspicion (heard something but not clear, and not in FOV)
              } else if (enemy._detectionState !== 'panicked') {
                enemy._setDetection('suspicious');
                enemy._lastKnownX = x;
                enemy._lastKnownZ = z;
                enemy._searchUntil = enemy._simTimeMs + Config.ENEMY.SEARCH_DURATION;
              }
            }
          } else if (eventType === 'attack' && enemy._detectionState !== 'alert' && enemy._detectionState !== 'panicked') {
            // Sound-based — omniscient within radius
            enemy._setDetection('suspicious');
            enemy._lastKnownX = x;
            enemy._lastKnownZ = z;
            enemy._searchUntil = enemy._simTimeMs + Config.ENEMY.SEARCH_DURATION;
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
    }

    // ---------------------------
    // Full cleanup (call when destroying the game)
    // ---------------------------
    destroy() {
      // destroy all enemies
      var _iterator1 = _createForOfIteratorHelper(this.chunkEnemies.values()),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var set = _step1.value;
          var _iterator12 = _createForOfIteratorHelper(set),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var enemy = _step12.value;
              try {
                if (enemy && typeof enemy.destroy === "function") enemy.destroy();
              } catch (e) {}
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      this.chunkEnemies.clear();
      this._cachedEnemiesArray = [];
      this._enemiesDirty = true;

      // Clean up collectibles
      var _iterator10 = _createForOfIteratorHelper(this.collectibles),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var collectible = _step10.value;
          try {
            if (collectible && typeof collectible.destroy === "function") {
              collectible.destroy();
            }
          } catch (e) {}
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      this.collectibles.clear();

      // destroy all grass
      var _iterator11 = _createForOfIteratorHelper(this.chunkGrass.values()),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _set = _step11.value;
          var _iterator13 = _createForOfIteratorHelper(_set),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var grass = _step13.value;
              try {
                if (grass && typeof grass.destroy === "function") grass.destroy();
              } catch (e) {}
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      this.chunkGrass.clear();

      // destroy chunks (no GPU assets here but allow GC)
      this.chunks.clear();

      // sever reference to game
      this.game = null;
    }
  }

  class IsometricRenderer {
    constructor(app, world, game) {
      this.app = app;
      this.world = world;
      this.game = game;
      this.app.stage.sortableChildren = true;
      this.worldContainer = new PIXI.Container();
      this.worldContainer.zIndex = 1;
      this.app.stage.addChild(this.worldContainer);
      this.entityContainer = new PIXI.Container();
      this.entityContainer.sortableChildren = true;
      this.entityContainer.zIndex = 5;
      this.worldContainer.addChild(this.entityContainer);

      // Persistent containers — added once, stay forever
      this.trailContainer = new PIXI.Container();
      this.entityContainer.addChild(this.trailContainer);
      this.playerContainer = new PIXI.Container();
      this.entityContainer.addChild(this.playerContainer);
      this.projectileContainer = new PIXI.Container();
      this.entityContainer.addChild(this.projectileContainer);
      this.particleContainer = new PIXI.Container();
      this.entityContainer.addChild(this.particleContainer);

      // Track grass sprites for diff add/remove
      this._grassSpritesInContainer = new Set();

      // kept as alias for collectible.js
      this.collectibleContainer = this.entityContainer;
      this._currentZoom = Config.CAMERA.ZOOM;
      this.cameraSmoothing = Config.CAMERA.FOLLOW_SMOOTHING;
      this._prevPlayerX = 0;
      this._prevPlayerZ = 0;
      this._smoothedCamX = 0;
      this._smoothedCamZ = 0;
      this.cameraTransition = {
        active: false,
        startTime: 0,
        duration: 0,
        startX: 0,
        startZ: 0,
        targetX: 0,
        targetZ: 0,
        easeType: "quadratic"
      };
      this.cameraTargetX = 0;
      this.cameraTargetZ = 0;
      this._shakeOffset = {
        x: 0,
        z: 0
      };
      this._shakeTrauma = 0;
      this._shakeRotation = 0;
      this._shakeTime = 0;
      this.spritePool = [];
      this.atlas = {
        grass: {
          texture: loadTexture(Config.ASSETS.GRASS_ATLAS),
          frames: []
        }
      };
      var _Config$ATLAS_INFO$GR = Config.ATLAS_INFO.GRASS,
        TILE_WIDTH = _Config$ATLAS_INFO$GR.TILE_WIDTH,
        TILE_HEIGHT = _Config$ATLAS_INFO$GR.TILE_HEIGHT,
        COUNT = _Config$ATLAS_INFO$GR.COUNT;
      for (var i = 0; i < COUNT; i++) {
        var frame = new PIXI.Rectangle(i * TILE_WIDTH, 0, TILE_WIDTH, TILE_HEIGHT);
        this.atlas.grass.frames.push(new PIXI.Texture({
          source: this.atlas.grass.texture.source,
          frame: frame
        }));
      }
      this.atlas.grass.texture.source.scaleMode = 'nearest';
      this.chunkContainers = new Map();
      this.tileData = new WeakMap();
      this.debugContainer = new PIXI.Container();
      this.debugContainer.zIndex = 20;
      this.worldContainer.addChild(this.debugContainer);
      this.worldContainer.sortableChildren = true;
      this.particleContainer.zIndex = 9999;
      this.chunkBorderGraphics = new PIXI.Graphics();
      this.debugContainer.addChild(this.chunkBorderGraphics);
    }
    startCameraTransition(targetX, targetZ) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Config.CAMERA.TELEPORT_TRANSITION_DURATION;
      var easeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Config.CAMERA.TELEPORT_EASE_TYPE;
      this.cameraTransition = {
        active: true,
        startTime: Date.now(),
        duration: duration,
        startX: this.cameraTargetX,
        startZ: this.cameraTargetZ,
        targetX: targetX,
        targetZ: targetZ,
        easeType: easeType
      };
    }
    render() {
      this.world.chunks.forEach((chunk, chunkId) => {
        if (!this.chunkContainers.has(chunkId)) this.createChunkContainer(chunkId, chunk);
      });
      var _iterator = _createForOfIteratorHelper(this.chunkContainers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            chunkId = _step$value[0],
            _container = _step$value[1];
          if (!this.world.chunks.has(chunkId)) this.destroyChunkContainer(chunkId);
        }

        // Re-apply desaturation to chunk containers that might have been created after freeze started
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var desatFilter = this.game._timeFrozen ? this.game._desaturateFilter : null;
      if (desatFilter) {
        var _iterator2 = _createForOfIteratorHelper(this.chunkContainers.values()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var container = _step2.value;
            if (!container.filters || container.filters.length === 0) {
              container.filters = [desatFilter];
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      // ---- depth-sorted entities (persistent — no full clear) ----

      // Player
      var playerEntity = this.game.player;
      var px = (playerEntity.x - playerEntity.z) * Config.TILE.WIDTH / 2;
      var py = (playerEntity.x + playerEntity.z) * Config.TILE.HEIGHT / 2;
      this.playerContainer.position.set(px, py);
      var pc = playerEntity.container;
      this.playerContainer.addChild(pc);
      var PLAYER_FOOT_OFFSET = Config.PLAYER.HEIGHT / Config.TILE.HEIGHT;
      this.playerContainer.zIndex = this.game.player.x + this.game.player.z + PLAYER_FOOT_OFFSET;
      this.trailContainer.zIndex = this.game.player.x + this.game.player.z;

      // Grass — diff: add new, remove stale
      var nearbyGrass = this.world.getNearbyGrass(this.game.player.x, this.game.player.z, 2);
      var currentGrass = new Set(nearbyGrass);
      var _iterator3 = _createForOfIteratorHelper(this._grassSpritesInContainer),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var g = _step3.value;
          if (!currentGrass.has(g)) {
            this.entityContainer.removeChild(g.sprite);
            this._grassSpritesInContainer.delete(g);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(nearbyGrass),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var grass = _step4.value;
          if (!this._grassSpritesInContainer.has(grass)) {
            this._grassSpritesInContainer.add(grass);
            this.entityContainer.addChild(grass.sprite);
          }
          grass.updateSpritePosition();
          grass.sprite.zIndex = grass.x + grass.z;
          if (desatFilter) {
            if (!grass.sprite.filters || !grass.sprite.filters.includes(desatFilter)) {
              grass.sprite.filters = [desatFilter];
            }
          } else if (grass.sprite.filters) {
            var cleaned = Array.from(grass.sprite.filters).filter(f => f !== this.game._desaturateFilter);
            grass.sprite.filters = cleaned.length ? cleaned : null;
          }
        }

        // Enemies — add if new, destroy removes itself
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var _iterator5 = _createForOfIteratorHelper(this.world.enemies),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var e = _step5.value;
          var screenX = (e.x - e.z) * Config.TILE.WIDTH / 2;
          var screenY = (e.x + e.z) * Config.TILE.HEIGHT / 2;
          e.container.position.set(screenX, screenY);
          if (!e.sprite.filters || !e.sprite.filters.includes(e.damageFilter)) {
            e.sprite.filters = this.game._timeFrozen && this.game._desaturateFilter ? [e.damageFilter, this.game._desaturateFilter] : [e.damageFilter];
          }
          if (e.facingDirection === 'left' && e.sprite.scale.x > 0) {
            e.sprite.scale.x = -Math.abs(e.sprite.scale.x);
          } else if (e.facingDirection === 'right' && e.sprite.scale.x < 0) {
            e.sprite.scale.x = Math.abs(e.sprite.scale.x);
          }
          if (!e.container.parent) {
            this.entityContainer.addChild(e.container);
          }
          var ENEMY_FOOT_OFFSET = Config.ENEMY.HEIGHT / Config.TILE.HEIGHT;
          e.container.zIndex = e.x + e.z + ENEMY_FOOT_OFFSET;
        }

        // Collectibles — already managed by addToWorld / destroy
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(this.world.collectibles),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var c = _step6.value;
          if (!c.container.parent) {
            this.entityContainer.addChild(c.container);
          }
          c.container.zIndex = c.x + c.z;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this.entityContainer.sortChildren();
      this.renderChunkBorders();
    }
    renderChunkBorders() {
      this.chunkBorderGraphics.clear();
      return;
    }
    createChunkContainer(chunkId, chunk) {
      var container = new PIXI.Container();
      var _chunkId$split$map3 = chunkId.split(",").map(Number),
        _chunkId$split$map4 = _slicedToArray(_chunkId$split$map3, 2),
        chunkX = _chunkId$split$map4[0],
        chunkZ = _chunkId$split$map4[1];
      var offsetX = (chunkX - chunkZ) * (Config.TILE.WIDTH / 2) * this.world.chunkSize;
      var offsetY = (chunkX + chunkZ) * (Config.TILE.HEIGHT / 2) * this.world.chunkSize;
      container.position.set(offsetX, offsetY);
      for (var x = 0; x < this.world.chunkSize; x++) {
        for (var z = 0; z < this.world.chunkSize; z++) {
          if (chunk.blocks[x][z]) {
            var sprite = this.getPooledSprite();
            this.setupTileSprite(sprite, chunkId, x, z);
            container.addChild(sprite);
          }
        }
      }
      this.chunkContainers.set(chunkId, container);
      this.worldContainer.addChild(container);
    }
    destroyChunkContainer(chunkId) {
      var container = this.chunkContainers.get(chunkId);
      if (!container) return;
      try {
        container.destroy({
          children: true,
          texture: false
        });
      } catch (e) {
        console.warn("Error destroying chunk container:", e);
      }
      this.worldContainer.removeChild(container);
      this.chunkContainers.delete(chunkId);
    }
    getPooledSprite() {
      return this.spritePool.pop() || new PIXI.Sprite();
    }
    returnSpriteToPool(sprite) {
      sprite.texture = null;
      sprite.visible = false;
      this.spritePool.push(sprite);
      var max = Config.WORLD && Config.WORLD.MAX_POOL_SIZE || 500;
      if (this.spritePool.length > max) this.spritePool.length = max;
    }
    setupTileSprite(sprite, chunkId, x, z) {
      var seed = "".concat(chunkId, "-").concat(x, "-").concat(z);
      var hash = 0;
      for (var i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0;
      }
      var texIndex = Math.abs(hash) % this.atlas.grass.frames.length;
      sprite.texture = this.atlas.grass.frames[texIndex];
      sprite.anchor.set(0.5, 0.5);
      sprite.position.set((x - z) * Config.TILE.WIDTH / 2, (x + z) * Config.TILE.HEIGHT / 2);
      sprite.visible = true;
      this.tileData.set(sprite, {
        chunkId,
        x,
        z
      });
    }
    updateCamera() {
      var cfg = Config.CAMERA.SHAKE;
      this._shakeTime += 0.12;

      // Decay the offset — peak is on the impact frame, then settles
      this._shakeOffset.x *= cfg.DECAY_RATE;
      this._shakeOffset.z *= cfg.DECAY_RATE;

      // Trauma decay — drives micro-noise amplitude
      this._shakeTrauma *= cfg.TRAUMA_DECAY;

      // Micro-noise — layered sine waves for smooth, organic vibration + subtle grit
      if (this._shakeTrauma > 0.01) {
        var t = this._shakeTime;
        var noiseX = Math.sin(t * 5.1) * 0.5 + Math.sin(t * 11.3) * 0.3 + Math.sin(t * 23.7) * 0.2;
        var noiseZ = Math.sin(t * 7.3 + 1.5) * 0.5 + Math.sin(t * 15.1 + 2.1) * 0.3 + Math.sin(t * 29.3 + 3.7) * 0.2;
        var grit = (Math.random() - 0.5) * 0.1;
        var noiseAmp = this._shakeTrauma * cfg.MICRO_AMPLITUDE;
        this._shakeOffset.x += (noiseX * 0.9 + grit) * noiseAmp;
        this._shakeOffset.z += (noiseZ * 0.9 + (Math.random() - 0.5) * 0.1) * noiseAmp;
      }

      // Clamp so the world never visibly jumps
      var max = cfg.MAX_OFFSET;
      this._shakeOffset.x = Math.max(-max, Math.min(max, this._shakeOffset.x));
      this._shakeOffset.z = Math.max(-max, Math.min(max, this._shakeOffset.z));

      // Rotation decay
      this._shakeRotation *= cfg.ROTATION_DECAY;

      // Rotational micro-noise — smooth vibration + subtle grit while trauma is active
      if (this._shakeTrauma > 0.01) {
        var _t = this._shakeTime;
        var rotNoise = Math.sin(_t * 8.9 + 0.7) * 0.5 + Math.sin(_t * 17.3 + 1.9) * 0.3 + Math.sin(_t * 31.1 + 4.2) * 0.2;
        this._shakeRotation += (rotNoise * 0.9 + (Math.random() - 0.5) * 0.1) * this._shakeTrauma * cfg.ROTATION_MICRO;
      }

      // Clamp rotation
      var maxRot = cfg.MAX_ROTATION;
      this._shakeRotation = Math.max(-maxRot, Math.min(maxRot, this._shakeRotation));

      // Camera target — smooth follow with look-ahead, instant during transitions
      if (this.cameraTransition.active) {
        var elapsed = Date.now() - this.cameraTransition.startTime;
        var _t2 = Math.min(1, elapsed / this.cameraTransition.duration);
        if (this.cameraTransition.easeType === "quadratic") {
          _t2 = _t2 < 0.5 ? 2 * _t2 * _t2 : -1 + (4 - 2 * _t2) * _t2;
        }
        this.cameraTargetX = this.cameraTransition.startX + (this.cameraTransition.targetX - this.cameraTransition.startX) * _t2;
        this.cameraTargetZ = this.cameraTransition.startZ + (this.cameraTransition.targetZ - this.cameraTransition.startZ) * _t2;
        if (elapsed >= this.cameraTransition.duration) {
          this.cameraTransition.active = false;
          this.cameraTargetX = this.cameraTransition.targetX;
          this.cameraTargetZ = this.cameraTransition.targetZ;
          this._smoothedCamX = this.cameraTargetX;
          this._smoothedCamZ = this.cameraTargetZ;
        }
      } else {
        var laCfg = Config.CAMERA.LOOK_AHEAD;

        // Player velocity (world-space displacement this frame)
        var velX = this.game.player.x - this._prevPlayerX;
        var velZ = this.game.player.z - this._prevPlayerZ;
        this._prevPlayerX = this.game.player.x;
        this._prevPlayerZ = this.game.player.z;

        // Desired look-ahead: normalized direction × distance
        var speed = Math.hypot(velX, velZ);
        var laTargetX = speed > 0.001 ? velX / speed * laCfg.DISTANCE : 0;
        var laTargetZ = speed > 0.001 ? velZ / speed * laCfg.DISTANCE : 0;

        // Raw target = player + look-ahead (look-ahead is direct, follow smoothing handles ease)
        var rawX = this.game.player.x + laTargetX;
        var rawZ = this.game.player.z + laTargetZ;

        // Smooth follow — scale with speed so trailing distance is constant at all speeds
        var followSmoothing = speed > 0.001 ? Math.min(1, speed / Config.CAMERA.FOLLOW_LAG) : this.cameraSmoothing;
        this._smoothedCamX += (rawX - this._smoothedCamX) * followSmoothing;
        this._smoothedCamZ += (rawZ - this._smoothedCamZ) * followSmoothing;
        this.cameraTargetX = this._smoothedCamX;
        this.cameraTargetZ = this._smoothedCamZ;
      }
      var screenX = (this.cameraTargetX - this.cameraTargetZ) * Config.TILE.WIDTH / 2;
      var screenY = (this.cameraTargetX + this.cameraTargetZ) * Config.TILE.HEIGHT / 2;
      var targetZoom = this.game._timeFrozen ? Config.CAMERA.ZOOM * Config.TIME_FREEZE.ZOOM_MULTIPLIER : Config.CAMERA.ZOOM;
      this._currentZoom += (targetZoom - this._currentZoom) * Config.TIME_FREEZE.ZOOM_LERP_SPEED;
      this.worldContainer.pivot.set(screenX, screenY);
      this.worldContainer.position.set(this.app.screen.width / 2 + this._shakeOffset.x, this.app.screen.height / 2 + Config.CAMERA.OFFSET_Y + this._shakeOffset.z);
      this.worldContainer.rotation = this._shakeRotation;
      this.worldContainer.scale.set(this._currentZoom);
    }
    triggerShake(intensity) {
      var dirX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var dirZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var i = intensity * Config.CAMERA.SHAKE.SHAKE_INTENSITY;
      // Project world-space direction to screen-space via isometric transform
      var sdx = (dirX - dirZ) * Config.TILE.WIDTH / 2;
      var sdy = (dirX + dirZ) * Config.TILE.HEIGHT / 2;
      var len = Math.sqrt(sdx * sdx + sdy * sdy);
      var nx = len > 0 ? sdx / len : 0;
      var ny = len > 0 ? sdy / len : 0;
      // Instant displacement — camera snaps in the projected hit direction
      this._shakeOffset.x += nx * i;
      this._shakeOffset.z += ny * i;
      // Trauma accumulates for micro-noise, capped
      this._shakeTrauma = Math.min(1, this._shakeTrauma + i * 0.08);
      // Rotation impulse — slight twist based on hit direction
      this._shakeRotation += (dirX - dirZ) * i * 0.002;
    }
    _applyFilterTo(displayObj, frozen, filter) {
      if (!displayObj) return;
      if (frozen) {
        var existing = displayObj.filters ? Array.from(displayObj.filters) : [];
        if (!existing.includes(filter)) {
          existing.push(filter);
          displayObj.filters = existing;
        }
      } else {
        if (displayObj.filters) {
          var cleaned = Array.from(displayObj.filters).filter(f => f !== filter);
          displayObj.filters = cleaned.length ? cleaned : null;
        }
      }
    }
    setTimeFreeze(frozen, filter) {
      var _iterator8 = _createForOfIteratorHelper(this.chunkContainers.values()),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var container = _step8.value;
          container.filters = frozen ? [filter] : [];
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this.projectileContainer.filters = frozen ? [filter] : [];
      this.trailContainer.filters = frozen ? [filter] : [];
      this.particleContainer.filters = frozen ? [filter] : [];
      var _iterator9 = _createForOfIteratorHelper(this.world.enemies),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var e = _step9.value;
          this._applyFilterTo(e.sprite, frozen, filter);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var _iterator0 = _createForOfIteratorHelper(this._grassSpritesInContainer),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var grass = _step0.value;
          this._applyFilterTo(grass.sprite, frozen, filter);
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
    }
  }

  function segmentEllipseIntersect(x1, z1, x2, z2, cx, cz, rx, rz) {
    var dx = (x2 - x1) / rx;
    var dz = (z2 - z1) / rz;
    var fx = (x1 - cx) / rx;
    var fz = (z1 - cz) / rz;
    var a = dx * dx + dz * dz;
    var b = 2 * (fx * dx + fz * dz);
    var c = fx * fx + fz * fz - 1;
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return false;
    discriminant = Math.sqrt(discriminant);
    var t1 = (-b - discriminant) / (2 * a);
    var t2 = (-b + discriminant) / (2 * a);
    return t1 >= 0 && t1 <= 1 || t2 >= 0 && t2 <= 1;
  }
  class Arrow {
    constructor(game, x, z, direction, speed, damage, maxDistance) {
      var knockback = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      this.game = game;
      this.x = x;
      this.z = z;
      this.prevX = x;
      this.prevZ = z;
      this.direction = {
        x: direction.x,
        z: direction.z
      };
      this.speed = speed;
      this.damage = damage;
      this.distanceTraveled = 0;
      this.maxDistance = maxDistance;
      this.destroyed = false;
      this.knockback = knockback;
      this.scale = 1.5;
      this.attackType = Config.ATTACK.SHOOT;
      this.originX = x;
      this.originZ = z;
      this.sprite = new PIXI.Sprite(loadTexture('assets/arrow.png'));
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.texture.source.scaleMode = 'nearest';
      this.sprite.scale.set(this.scale);
      if (!this.sprite.texture.valid) {
        this.sprite.texture.source.once('update', () => {
          this.sprite.scale.set(this.scale);
        });
      }
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);
      var dx = this.direction.x;
      var dz = this.direction.z;
      var screenDX = (dx - dz) * (Config.TILE.WIDTH / 2);
      var screenDY = (dx + dz) * (Config.TILE.HEIGHT / 2);
      this.sprite.rotation = Math.atan2(screenDY, screenDX);
      this.game.renderer.projectileContainer.addChild(this.sprite);
    }
    update(delta) {
      if (this.destroyed) return false;

      // store previous position
      this.prevX = this.x;
      this.prevZ = this.z;

      // move
      var moveX = this.direction.x * this.speed * delta;
      var moveZ = this.direction.z * this.speed * delta;
      this.x += moveX;
      this.z += moveZ;
      this.distanceTraveled += Math.hypot(moveX, moveZ);
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);
      var screenDX = this.direction.x - this.direction.z;
      var screenDY = this.direction.x + this.direction.z;
      this.sprite.rotation = Math.atan2(screenDY * (Config.TILE.HEIGHT / 2), screenDX * (Config.TILE.WIDTH / 2));
      if (this.checkCollisions()) return false;
      if (this.distanceTraveled >= this.maxDistance) {
        this.destroy();
        return false;
      }
      return true;
    }

    // line segment vs ellipse intersection
    segmentEllipseIntersect(x1, z1, x2, z2, cx, cz, rx, rz) {
      return segmentEllipseIntersect(x1, z1, x2, z2, cx, cz, rx, rz);
    }
    checkCollisions() {
      if (this.destroyed) return true;
      var nearbyEnemies = this.game.world.getNearbyEnemies(this.x, this.z, 2);
      var _iterator = _createForOfIteratorHelper(nearbyEnemies),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var enemy = _step.value;
          if (enemy._dying) continue;
          // default: circle hitbox
          var rx = void 0,
            rz = void 0;
          if (typeof enemy.rx === 'number' && typeof enemy.rz === 'number') {
            rx = enemy.rx;
            rz = enemy.rz;
          } else {
            var r = typeof enemy.radius === 'number' ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
            rx = r;
            rz = r;
          }
          if (this.segmentEllipseIntersect(this.prevX, this.prevZ, this.x, this.z, enemy.x, enemy.z, rx, rz)) {
            var died = enemy.takeDamage(this.damage, this.knockback, this.direction, this.attackType);
            this.game.renderer.triggerShake(2.0 * this.knockback + (died ? 0.4 : 0), this.direction.x, this.direction.z);
            if (died) this.game.world.destroyEnemy(enemy);
            this.destroy();
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
    destroy() {
      if (this.destroyed) return;
      this.destroyed = true;
      if (this.sprite && this.sprite.parent) this.sprite.parent.removeChild(this.sprite);
      this.sprite = null;
    }
  }

  // Add to projectile.js
  class ShadowKunai {
    constructor(game, x, z, direction, speed, maxDistance) {
      this.game = game;
      this.x = x;
      this.z = z;
      this.prevX = x;
      this.prevZ = z;
      this.direction = {
        x: direction.x,
        z: direction.z
      };
      this.speed = speed;
      this.distanceTraveled = 0;
      this.maxDistance = maxDistance;
      this.destroyed = false;
      this.scale = 1.2;
      // Add trail particles array
      this.trailParticles = [];
      this.trailInterval = 50; // ms between trail particles
      this.lastTrailTime = Date.now();
      this.sprite = new PIXI.Sprite(loadTexture('assets/kunai.png'));
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.texture.source.scaleMode = 'nearest';
      this.sprite.scale.set(this.scale);
      if (!this.sprite.texture.valid) {
        this.sprite.texture.source.once('update', () => {
          this.sprite.scale.set(this.scale);
        });
      }
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);
      var dx = this.direction.x;
      var dz = this.direction.z;
      var screenDX = (dx - dz) * (Config.TILE.WIDTH / 2);
      var screenDY = (dx + dz) * (Config.TILE.HEIGHT / 2);
      this.sprite.rotation = Math.atan2(screenDY, screenDX);
      this.game.renderer.projectileContainer.addChild(this.sprite);
    }
    update(delta) {
      if (this.destroyed) return false;
      // Create trail particles
      var now = Date.now();
      if (now - this.lastTrailTime > this.trailInterval) {
        this.createTrailParticle();
        this.lastTrailTime = now;
      }

      // store previous position
      this.prevX = this.x;
      this.prevZ = this.z;

      // move
      var moveX = this.direction.x * this.speed * delta;
      var moveZ = this.direction.z * this.speed * delta;
      this.x += moveX;
      this.z += moveZ;
      this.distanceTraveled += Math.hypot(moveX, moveZ);
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);
      var screenDX = this.direction.x - this.direction.z;
      var screenDY = this.direction.x + this.direction.z;
      this.sprite.rotation = Math.atan2(screenDY * (Config.TILE.HEIGHT / 2), screenDX * (Config.TILE.WIDTH / 2));
      if (this.checkCollisions()) return false;
      if (this.distanceTraveled >= this.maxDistance) {
        this.destroy();
        return false;
      }
      return true;
    }
    createTrailParticle() {
      var particle = new Particle(this.game, this.x, this.z, {
        velocity: {
          x: -this.direction.x * 0.02,
          z: -this.direction.z * 0.02
        },
        lifetime: 600,
        size: 2 + Math.random() * 1,
        color: 0x3333AA,
        alpha: 0.7,
        gravity: 0.0002,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        scaleOverTime: true
      });
      this.trailParticles.push(particle);
      this.game.particles.push(particle);
    }
    segmentEllipseIntersect(x1, z1, x2, z2, cx, cz, rx, rz) {
      return segmentEllipseIntersect(x1, z1, x2, z2, cx, cz, rx, rz);
    }
    checkCollisions() {
      if (this.destroyed) return true;
      var nearbyEnemies = this.game.world.getNearbyEnemies(this.x, this.z, 2);
      var _iterator2 = _createForOfIteratorHelper(nearbyEnemies),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var enemy = _step2.value;
          if (enemy._dying) continue;
          // default: circle hitbox
          var rx = void 0,
            rz = void 0;
          if (typeof enemy.rx === 'number' && typeof enemy.rz === 'number') {
            rx = enemy.rx;
            rz = enemy.rz;
          } else {
            var r = typeof enemy.radius === 'number' ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
            rx = r;
            rz = r;
          }
          if (this.segmentEllipseIntersect(this.prevX, this.prevZ, this.x, this.z, enemy.x, enemy.z, rx, rz)) {
            // Teleport player behind the enemy
            this.teleportPlayerBehindEnemy(enemy);
            this.destroy();
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
    teleportPlayerBehindEnemy(enemy) {
      // Use enemy facing direction to determine "behind"
      var behindX = -enemy._facingX;
      var behindZ = -enemy._facingZ;
      var len = Math.hypot(behindX, behindZ) || 1;

      // Position player behind the enemy
      var teleportDistance = 1.5;
      var newX = enemy.x + behindX / len * teleportDistance;
      var newZ = enemy.z + behindZ / len * teleportDistance;

      // Store old position for trail effect
      var oldX = this.game.player.x;
      var oldZ = this.game.player.z;

      // Set player position
      this.game.player.x = newX;
      this.game.player.z = newZ;

      // Spawn player afterimage at origin — long-lasting
      this.game.player.spawnAfterimage(oldX, oldZ, 0.5, 1.2);

      // Face toward the enemy
      this.game.player.facing.x = enemy._facingX;
      this.game.player.facing.z = enemy._facingZ;
      this.game.player._recomputeFacing();

      // Create teleportation trail between old and new positions
      this.createTeleportTrail(oldX, oldZ, newX, newZ);

      // Create teleportation effect at destination
      this.createTeleportEffect();
    }
    createTeleportTrail(oldX, oldZ, newX, newZ) {
      var distance = Math.hypot(newX - oldX, newZ - oldZ);
      var numParticles = Math.floor(distance * 5); // More particles for longer distances

      for (var i = 0; i < numParticles; i++) {
        var t = i / numParticles;
        var x = oldX + (newX - oldX) * t;
        var z = oldZ + (newZ - oldZ) * t;

        // Add some randomness to the position
        var randomOffset = 1;
        var finalX = x + (Math.random() - 0.5) * randomOffset;
        var finalZ = z + (Math.random() - 0.5) * randomOffset;
        var particle = new Particle(this.game, finalX, finalZ, {
          velocity: {
            x: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
          },
          lifetime: 2000 + Math.random() * 200,
          size: 10 + Math.random() * 2,
          color: 0x3333AA,
          alpha: 0.6,
          gravity: 0.0001,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          scaleOverTime: true
        });
        this.game.particles.push(particle);
      }
    }
    createTeleportEffect() {
      // Destination effect - purple/blue particles
      for (var i = 0; i < 12; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 0.04 + Math.random() * 0.03;
        var particle = new Particle(this.game, this.game.player.x, this.game.player.z, {
          velocity: {
            x: Math.cos(angle) * speed,
            z: Math.sin(angle) * speed
          },
          lifetime: 500 + Math.random() * 300,
          size: 2 + Math.random() * 3,
          color: 0x6633FF,
          // Purple-blue color
          alpha: 0.8,
          gravity: 0.0006,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          scaleOverTime: true
        });
        this.game.particles.push(particle);
      }

      // Origin effect - dark particles
      for (var _i = 0; _i < 8; _i++) {
        var _angle = Math.random() * Math.PI * 2;
        var _speed = 0.03 + Math.random() * 0.02;
        var _particle = new Particle(this.game, this.prevX, this.prevZ, {
          velocity: {
            x: Math.cos(_angle) * _speed,
            z: Math.sin(_angle) * _speed
          },
          lifetime: 400 + Math.random() * 200,
          size: 3 + Math.random() * 2,
          color: 0x333333,
          gravity: 0.0005,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          scaleOverTime: true
        });
        this.game.particles.push(_particle);
      }
    }
    destroy() {
      // Clean up trail particles
      var _iterator3 = _createForOfIteratorHelper(this.trailParticles),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var particle = _step3.value;
          particle.destroy();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.trailParticles = [];
      if (this.destroyed) return;
      this.destroyed = true;
      if (this.sprite && this.sprite.parent) this.sprite.parent.removeChild(this.sprite);
      this.sprite = null;
    }
  }

  class Combat {
    constructor(player, game) {
      this.player = player;
      this.game = game;
      this.swing = new PIXI.Graphics();
      this.swing.visible = false;
      this.player.container.addChildAt(this.swing, 0);
      this._swingTimer = 0;
      this._lastAttackTimes = Object.create(null);
      this._globalLockMs = 30;
      this._globalLockUntil = 0;
      this._chargeStartTime = 0;
      this._isCharging = false;
      this._chargePower = 0;
      this._isQuickShot = false;
      this._chargeVisual = null;
      this._arrowSprite = null;
      this._arrowStartDistance = 1.0;
      this._arrowPullbackDistance = 0.6;
      this._quickShotStartTime = 0;
      this._quickShotDuration = 150;
      this._effects = [];
    }
    quickAttack() {
      if (!this.player.inventory.getEquippedItem()) return;
      this.attack(Config.ATTACK.QUICK);
    }
    thrustAttack() {
      if (!this.player.inventory.getEquippedItem()) return;
      this.attack(Config.ATTACK.THRUST);
    }
    heavyAttack() {
      if (!this.player.inventory.getEquippedItem()) return;
      this.attack(Config.ATTACK.HEAVY);
    }
    startCharge() {
      var instantFullCharge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var weapon = this.player.inventory.getEquippedItem();
      if (!weapon || weapon.type !== "ranged") return;
      var now = Date.now();
      if (now < this._globalLockUntil) return;
      this._isCharging = true;
      this._isQuickShot = instantFullCharge;
      this._chargeStartTime = now;
      this._chargePower = instantFullCharge ? 0.5 : 0;
      this._createChargeVisual();
      this._createArrowSprite();
      if (instantFullCharge) {
        this._animateQuickShotDraw();
      }
    }
    _animateQuickShotDraw() {
      if (!this._isQuickShot) return;
      this._quickShotStartTime = Date.now();
    }
    _createArrowSprite() {
      this._removeArrowSprite();
      this._arrowSprite = new PIXI.Sprite(loadTexture("assets/arrow.png"));
      this._arrowSprite.anchor.set(0.5, 0.5);
      this._arrowSprite.scale.set(1.5);
      this._arrowSprite.texture.source.scaleMode = 'nearest';
      this._updateArrowPosition();
      this.player.container.addChild(this._arrowSprite);
    }
    _removeArrowSprite() {
      if (this._arrowSprite && this._arrowSprite.parent) {
        this._arrowSprite.parent.removeChild(this._arrowSprite);
      }
      this._arrowSprite = null;
    }
    _updateArrowPosition() {
      if (!this._arrowSprite) return;
      var distance = this._arrowStartDistance - this._chargePower * this._arrowPullbackDistance;
      var offsetX = this.player.facing.x * distance;
      var offsetZ = this.player.facing.z * distance;
      var screenX = (offsetX - offsetZ) * Config.TILE.WIDTH / 2;
      var screenY = (offsetX + offsetZ) * Config.TILE.HEIGHT / 2;
      this._arrowSprite.position.set(screenX, screenY);
      var screenDX = this.player.facing.x - this.player.facing.z;
      var screenDY = this.player.facing.x + this.player.facing.z;
      var angle = Math.atan2(screenDY * (Config.TILE.HEIGHT / 2), screenDX * (Config.TILE.WIDTH / 2));
      this._arrowSprite.rotation = angle;
    }
    releaseCharge() {
      var _ref, _weapon$cooldown;
      var forcedPower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!this._isCharging && forcedPower == null) return;
      var weapon = this.player.inventory.getEquippedItem();
      if (!weapon || weapon.type !== "ranged") {
        this._cleanupCharge();
        return;
      }
      var now = Date.now();
      var rawPower;
      if (forcedPower !== null) {
        rawPower = Math.max(0, Math.min(1, forcedPower));
      } else {
        var _weapon$maxChargeTime;
        var elapsed = Math.max(0, now - this._chargeStartTime);
        var maxCharge = (_weapon$maxChargeTime = weapon.maxChargeTime) !== null && _weapon$maxChargeTime !== void 0 ? _weapon$maxChargeTime : 450;
        rawPower = Math.min(1, elapsed / maxCharge);
        var minTapMs = 50;
        if (elapsed < minTapMs) rawPower = 0.08;
      }
      var attackKey = Config.ATTACK.SHOOT;
      var attackConfig = Config.ATTACK_TYPES && Config.ATTACK_TYPES.SHOOT || {};
      var specificCooldown = (_ref = (_weapon$cooldown = weapon.cooldown) !== null && _weapon$cooldown !== void 0 ? _weapon$cooldown : attackConfig.COOLDOWN) !== null && _ref !== void 0 ? _ref : this.player.attackCooldown;
      var last = this._lastAttackTimes[attackKey] || 0;
      if (now - last >= specificCooldown && now >= this._globalLockUntil) {
        this._lastAttackTimes[attackKey] = now;
        this._globalLockUntil = now + this._globalLockMs;
        var distance = this._arrowStartDistance - this._chargePower * this._arrowPullbackDistance;
        var arrowX = this.player.x + this.player.facing.x * distance;
        var arrowZ = this.player.z + this.player.facing.z * distance;
        this.shoot(rawPower, arrowX, arrowZ);
        this.player.lastAttackTime = now;
      }
      this._cleanupCharge();
    }
    _cleanupCharge() {
      this._isCharging = false;
      this._isQuickShot = false;
      this._chargeStartTime = 0;
      this._quickShotStartTime = 0;
      this._chargePower = 0;
      this._removeChargeVisual();
      this._removeArrowSprite();
    }

    // Attack stats for the current weapon state. Unarmed (no equipped item)
    // uses the dedicated, moddable Config.FISTS block instead of reusing a
    // weapon's SLASH profile (which would make fists as strong as a sword).
    _attackSettings(attackType) {
      var _Config$ATTACK_TYPES;
      if (!this.player.inventory.getEquippedItem()) return Config.FISTS || {};
      return ((_Config$ATTACK_TYPES = Config.ATTACK_TYPES) === null || _Config$ATTACK_TYPES === void 0 ? void 0 : _Config$ATTACK_TYPES[attackType]) || Config.ATTACK_TYPES.SLASH || {};
    }
    _createChargeVisual() {
      this._removeChargeVisual();
      this._chargeVisual = new PIXI.Graphics();
      this.player.container.addChild(this._chargeVisual);
      this._updateChargeVisual();
    }
    _updateChargeVisual() {
      if (!this._chargeVisual) return;
      this._chargeVisual.clear();
      var rBase = 18;
      var radius = rBase + this._chargePower * 40;
      var alpha = 0.25 + this._chargePower * 0.6;
      this._chargeVisual.circle(0, 0, radius);
      this._chargeVisual.fill({
        color: 0x00ffff,
        alpha: alpha * 0.25
      });
      this._chargeVisual.stroke({
        width: 2,
        color: 0x00ffff,
        alpha: alpha
      });
      this._chargeVisual.circle(0, 0, 4);
      this._chargeVisual.fill({
        color: 0x000000,
        alpha: 0.4
      });
    }
    _removeChargeVisual() {
      if (this._chargeVisual && this._chargeVisual.parent) {
        this._chargeVisual.parent.removeChild(this._chargeVisual);
      }
      this._chargeVisual = null;
    }
    _drawSwingVisual(attackType) {
      var _attackConfig$RANGE;
      this.swing.clear();
      var attackConfig = this._attackSettings(attackType);
      var R = (_attackConfig$RANGE = attackConfig.RANGE) !== null && _attackConfig$RANGE !== void 0 ? _attackConfig$RANGE : this.player.attackRange;
      if (attackType === Config.ATTACK.THRUST) {
        var _attackConfig$WIDTH;
        var width = (_attackConfig$WIDTH = attackConfig.WIDTH) !== null && _attackConfig$WIDTH !== void 0 ? _attackConfig$WIDTH : 0.3;
        var W = Config.TILE.WIDTH;
        var H = Config.TILE.HEIGHT;
        var tipX = (this.player.facing.x - this.player.facing.z) * W / 2 * R;
        var tipY = (this.player.facing.x + this.player.facing.z) * H / 2 * R;
        var perpX = -this.player.facing.z;
        this.player.facing.x;
        var base1X = (this.player.facing.x * 0.5 + perpX * width - this.player.facing.z * 0.5) * W / 2;
        var base1Y = (this.player.facing.x * 0.5 + perpX * width + this.player.facing.z * 0.5) * H / 2;
        var base2X = (this.player.facing.x * 0.5 - perpX * width - this.player.facing.z * 0.5) * W / 2;
        var base2Y = (this.player.facing.x * 0.5 - perpX * width + this.player.facing.z * 0.5) * H / 2;
        this.swing.moveTo(0, 0);
        this.swing.lineTo(base1X, base1Y);
        this.swing.lineTo(tipX, tipY);
        this.swing.lineTo(base2X, base2Y);
        this.swing.closePath();
        this.swing.fill({
          color: 0x00ffff,
          alpha: 0.15
        });
        this.swing.stroke({
          width: 2,
          color: 0x00ffff,
          alpha: 0.8
        });
      } else {
        var _attackConfig$ARC;
        var cosHalfArc = Math.cos(((_attackConfig$ARC = attackConfig.ARC) !== null && _attackConfig$ARC !== void 0 ? _attackConfig$ARC : this.player.attackArc) / 2);
        this.swing.moveTo(0, 0);
        var angle1 = Math.acos(cosHalfArc);
        var angle2 = -angle1;
        var _W = Config.TILE.WIDTH;
        var _H = Config.TILE.HEIGHT;
        var segments = 16;
        for (var i = 0; i <= segments; i++) {
          var t = i / segments;
          var angle = angle1 + t * (angle2 - angle1);
          var wx = this.player.facing.x * Math.cos(angle) - this.player.facing.z * Math.sin(angle);
          var wz = this.player.facing.x * Math.sin(angle) + this.player.facing.z * Math.cos(angle);
          var sx = (wx - wz) * _W / 2 * R;
          var sy = (wx + wz) * _H / 2 * R;
          this.swing.lineTo(sx, sy);
        }
        this.swing.closePath();
        this.swing.fill({
          color: 0xffffff,
          alpha: 0.15
        });
        this.swing.stroke({
          width: 2,
          color: 0xffffff,
          alpha: 0.8
        });
      }
      this.swing.alpha = 1;
      this.swing.visible = true;
    }
    attack() {
      var _attackConfig$COOLDOW, _attackConfig$SWING_T, _attackConfig$RANGE2, _attackConfig$WIDTH2, _attackConfig$ARC2, _ref2;
      var attackType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SLASH";
      var weapon = this.player.inventory.getEquippedItem();
      var attackConfig = this._attackSettings(attackType);
      var now = Date.now();
      if (now < this._globalLockUntil) return;
      var specificCooldown = (_attackConfig$COOLDOW = attackConfig.COOLDOWN) !== null && _attackConfig$COOLDOW !== void 0 ? _attackConfig$COOLDOW : this.player.attackCooldown;
      var last = this._lastAttackTimes[attackType] || 0;
      if (now - last < specificCooldown) return;
      if (weapon && weapon.type === "ranged" && attackType !== Config.ATTACK.SHOOT) {
        return;
      }
      this._lastAttackTimes[attackType] = now;
      this._globalLockUntil = now + this._globalLockMs;
      this.player.lastAttackTime = now;
      this.player.game.world.alertNearbyEnemies(this.player.x, this.player.z, Config.ENEMY.SOUND_RANGES.ATTACK, 'attack');
      if (attackType === Config.ATTACK.SHOOT) {
        var powerToUse = this._chargePower || 1;
        this._chargePower = 0;
        this.shoot(powerToUse);
        return;
      }
      this._swingTimer = (_attackConfig$SWING_T = attackConfig.SWING_TIME) !== null && _attackConfig$SWING_T !== void 0 ? _attackConfig$SWING_T : this.player.attackSwingTime;
      this._drawSwingVisual(attackType);
      var R = (_attackConfig$RANGE2 = attackConfig.RANGE) !== null && _attackConfig$RANGE2 !== void 0 ? _attackConfig$RANGE2 : this.player.attackRange;
      var halfArc = attackType === Config.ATTACK.THRUST ? Math.atan2((_attackConfig$WIDTH2 = attackConfig.WIDTH) !== null && _attackConfig$WIDTH2 !== void 0 ? _attackConfig$WIDTH2 : 0.3, R) : ((_attackConfig$ARC2 = attackConfig.ARC) !== null && _attackConfig$ARC2 !== void 0 ? _attackConfig$ARC2 : this.player.attackArc) / 2;
      var cosHalf = Math.cos(halfArc);
      var searchChunks = (_ref2 = Config.PLAYER && Config.PLAYER.SEARCH_CHUNKS) !== null && _ref2 !== void 0 ? _ref2 : 2;
      var nearby = Array.from(this.game.world.getNearbyEnemies(this.player.x, this.player.z, searchChunks));
      var toKill = [];
      for (var _i = 0, _nearby = nearby; _i < _nearby.length; _i++) {
        var enemy = _nearby[_i];
        var dx = enemy.x - this.player.x;
        var dz = enemy.z - this.player.z;
        var dist = Math.hypot(dx, dz);
        var er = typeof enemy.radius === "number" ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
        if (dist <= R + er) {
          var nx = dist > 0 ? dx / dist : this.player.facing.x;
          var nz = dist > 0 ? dz / dist : this.player.facing.z;
          var dot = nx * this.player.facing.x + nz * this.player.facing.z;
          var angleExt = dist > 0 ? Math.asin(Math.min(er / dist, 1)) : Math.PI / 2;
          if (dot >= Math.cos(Math.acos(cosHalf) + angleExt)) {
            var _attackConfig$DAMAGE, _attackConfig$KNOCKBA, _attackConfig$KNOCKBA2;
            var knockbackDir = {
              x: attackType === Config.ATTACK.THRUST ? this.player.facing.x : nx,
              z: attackType === Config.ATTACK.THRUST ? this.player.facing.z : nz
            };
            var died = enemy.takeDamage((_attackConfig$DAMAGE = attackConfig.DAMAGE) !== null && _attackConfig$DAMAGE !== void 0 ? _attackConfig$DAMAGE : this.player.attackDamage, (_attackConfig$KNOCKBA = attackConfig.KNOCKBACK) !== null && _attackConfig$KNOCKBA !== void 0 ? _attackConfig$KNOCKBA : 0, knockbackDir, attackType);
            var enemyDmg = 1 - Math.max(0, enemy.health) / (enemy.maxHealth || 1);
            var healthMult = 1 + 2 * enemyDmg;
            var shakeAmount = (attackType === Config.ATTACK.THRUST ? 1.0 : 2.0 * ((_attackConfig$KNOCKBA2 = attackConfig.KNOCKBACK) !== null && _attackConfig$KNOCKBA2 !== void 0 ? _attackConfig$KNOCKBA2 : 0.3)) * healthMult;
            this.game.renderer.triggerShake(shakeAmount, -knockbackDir.x, -knockbackDir.z);
            if (died) toKill.push(enemy);
          }
        }
      }
      for (var _i2 = 0, _toKill = toKill; _i2 < _toKill.length; _i2++) {
        var e = _toKill[_i2];
        this.game.world.destroyEnemy(e);
      }
    }
    shoot() {
      var _weapon$knockback;
      var chargePower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var startX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var startZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var weapon = this.player.inventory.getEquippedItem();
      if (!weapon || weapon.type !== "ranged") return;
      var arrowX = startX !== null ? startX : this.player.x + this.player.facing.x * 0.6;
      var arrowZ = startZ !== null ? startZ : this.player.z + this.player.facing.z * 0.6;
      if (weapon.special === "teleport") {
        var _speed = weapon.projectileSpeed || 0.3;
        var _range = weapon.range || 10;
        var kunai = new ShadowKunai(this.game, arrowX, arrowZ, {
          x: this.player.facing.x,
          z: this.player.facing.z
        }, _speed, _range);
        this.game.projectiles.push(kunai);
        return;
      }
      var curveExp = 1.8;
      var scaled = Math.pow(Math.max(0, Math.min(1, chargePower)), curveExp);
      var minDamage = weapon.damage || 2;
      var maxDamage = weapon.maxDamage || minDamage * 2;
      var damage = Math.round(minDamage + (maxDamage - minDamage) * scaled);
      var minSpeed = weapon.projectileSpeed || 0.2;
      var maxSpeed = weapon.maxProjectileSpeed || minSpeed * 1.5;
      var speed = minSpeed + (maxSpeed - minSpeed) * scaled;
      var minRange = weapon.range || 10;
      var maxRange = weapon.maxRange || minRange * 1.5;
      var range = minRange + (maxRange - minRange) * scaled;
      var baseKnock = (_weapon$knockback = weapon.knockback) !== null && _weapon$knockback !== void 0 ? _weapon$knockback : 0.2;
      var knockback = baseKnock * (0.5 + 1.5 * scaled);
      var arrow = new Arrow(this.game, arrowX, arrowZ, {
        x: this.player.facing.x,
        z: this.player.facing.z
      }, speed, damage, range, knockback);
      this.game.projectiles.push(arrow);

      // Bow release shake — forward snap as string releases, scaled by charge
      var releaseShake = 0.05 + scaled * 0.6;
      this.game.renderer.triggerShake(releaseShake, this.player.facing.x, this.player.facing.z);
      this._createShootEffect(scaled);
    }
    _createShootEffect(chargeScaled) {
      if (this._destroyed) return;
      var effect = new PIXI.Graphics();
      effect.circle(0, 0, 8 + chargeScaled * 28);
      effect.fill({
        color: 0xffff00,
        alpha: 0.25
      });
      effect.stroke({
        width: 2,
        color: 0xffff00,
        alpha: 0.85
      });
      this.player.container.addChild(effect);
      this._effects.push({
        graphic: effect,
        startTime: Date.now(),
        duration: 220
      });
    }
    destroy() {
      this._destroyed = true;
      this._cleanupCharge();
      var _iterator = _createForOfIteratorHelper(this._effects),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _fx$graphic;
          var fx = _step.value;
          if (fx.graphic && fx.graphic.parent) fx.graphic.parent.removeChild(fx.graphic);
          (_fx$graphic = fx.graphic) === null || _fx$graphic === void 0 || _fx$graphic.destroy();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._effects = [];
    }
    update(delta) {
      if (this._swingTimer > 0) {
        var dt = this.game.app.ticker.deltaMS || delta * (1000 / 60);
        this._swingTimer -= dt;
        var swingTime = this.player.attackSwingTime;
        this.swing.alpha = Math.max(0, this._swingTimer / swingTime);
        if (this._swingTimer <= 0) {
          this.swing.visible = false;
          this.swing.clear();
        }
      }
      if (this._isCharging) {
        var weapon = this.player.inventory.getEquippedItem();
        if (!weapon || weapon.type !== "ranged") {
          this._cleanupCharge();
        } else if (this._isQuickShot) {
          var elapsed = Date.now() - this._quickShotStartTime;
          var progress = Math.min(1, elapsed / this._quickShotDuration);
          this._chargePower = 0.5 * progress;
          this._updateChargeVisual();
          this._updateArrowPosition();
          if (progress >= 1) {
            this.releaseCharge(0.5);
          }
        } else {
          var now = Date.now();
          var maxCharge = weapon.maxChargeTime || 450;
          var _elapsed = Math.max(0, now - this._chargeStartTime);
          this._chargePower = Math.min(1, _elapsed / maxCharge);
          this._updateChargeVisual();
          this._updateArrowPosition();

          // Bow draw tremble — micro-vibration that builds with charge
          var tremble = 0.01 + this._chargePower * 0.02;
          this.game.renderer.triggerShake(tremble, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
        }
      }
      for (var i = this._effects.length - 1; i >= 0; i--) {
        var fx = this._effects[i];
        if (!fx.graphic || fx.graphic._destroyed) {
          this._effects.splice(i, 1);
          continue;
        }
        var _elapsed2 = Date.now() - fx.startTime;
        var _progress = Math.min(1, _elapsed2 / fx.duration);
        fx.graphic.alpha = 1 - _progress;
        fx.graphic.scale.set(1 + _progress * 1.8);
        if (_progress >= 1) {
          if (fx.graphic.parent) fx.graphic.parent.removeChild(fx.graphic);
          fx.graphic.destroy();
          this._effects.splice(i, 1);
        }
      }
    }
  }

  var RECIPES = {
    arrow: {
      id: "arrow",
      name: "Arrow",
      ingredients: {
        wood: 1,
        stone: 1
      },
      result: {
        id: "arrow",
        quantity: 1
      }
    }
  };

  class Inventory {
    constructor(player) {
      this.player = player;
      this.items = [];
      this.equippedItem = null;
      this.maxSlots = 10;

      // Resource tracking (for stackable items like slime, wood, etc.)
      this.resources = new Map();

      // Event callbacks
      this.equipmentChangeCallbacks = [];
      this.inventoryUpdateCallbacks = [];
      this.itemDefinitions = ITEM_DEFINITIONS;

      // Initialize with basic items
      this.addItem("basic_sword");
      this.addItem("wooden_bow");
      this.addItem("shadow_kunai");
    }

    // Event listeners
    onEquipmentChange(callback) {
      this.equipmentChangeCallbacks.push(callback);
    }
    onInventoryUpdate(callback) {
      this.inventoryUpdateCallbacks.push(callback);
    }

    // Trigger events
    _notifyEquipmentChange() {
      this.equipmentChangeCallbacks.forEach(callback => callback());
    }
    _notifyInventoryUpdate() {
      this.inventoryUpdateCallbacks.forEach(callback => callback());
    }

    // Main item management methods
    addItem(itemId) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var itemDef = this.itemDefinitions[itemId];
      if (!itemDef) {
        console.warn("Item ".concat(itemId, " not found in definitions"));
        return false;
      }

      // Handle stackable items (resources, consumables)
      if (itemDef.stackable) {
        var currentQuantity = this.resources.get(itemId) || 0;
        this.resources.set(itemId, currentQuantity + quantity);
        this._notifyInventoryUpdate();
        return true;
      }

      // Handle non-stackable items (weapons, armor, unique items)
      if (this.items.length >= this.maxSlots) return false;

      // Check if item already exists in inventory (for non-stackable)
      var existingIndex = this.items.findIndex(item => item.id === itemId);
      if (existingIndex !== -1) {
        // Non-stackable items can't have duplicates (unless specified)
        return false;
      }
      this.items.push(_objectSpread2({}, itemDef));
      this._notifyInventoryUpdate();
      return true;
    }
    removeItem(itemId) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var itemDef = this.itemDefinitions[itemId];
      if (!itemDef) return false;

      // Handle stackable items
      if (itemDef.stackable) {
        var currentQuantity = this.resources.get(itemId) || 0;
        if (currentQuantity < quantity) return false;
        var newQuantity = currentQuantity - quantity;
        if (newQuantity <= 0) {
          this.resources.delete(itemId);
        } else {
          this.resources.set(itemId, newQuantity);
        }

        // If unequipping a stackable item that was equipped somehow
        if (this.equippedItem && this.equippedItem.id === itemId) {
          this.unequipItem();
        }
        this._notifyInventoryUpdate();
        return true;
      }

      // Handle non-stackable items
      var index = this.items.findIndex(item => item.id === itemId);
      if (index === -1) return false;

      // If unequipping, unequip first
      if (this.equippedItem && this.equippedItem.id === itemId) {
        this.unequipItem();
      }
      this.items.splice(index, 1);
      this._notifyInventoryUpdate();
      return true;
    }
    getItemQuantity(itemId) {
      var itemDef = this.itemDefinitions[itemId];
      if (!itemDef) return 0;
      if (itemDef.stackable) {
        return this.resources.get(itemId) || 0;
      } else {
        // For non-stackable, return 1 if in inventory, 0 otherwise
        return this.items.some(item => item.id === itemId) ? 1 : 0;
      }
    }
    hasItem(itemId) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.getItemQuantity(itemId) >= quantity;
    }
    equipItem(itemId) {
      var item = this.getItem(itemId);
      if (!item || !this.canEquip(item)) return false;

      // If already equipped, unequip instead
      if (this.equippedItem && this.equippedItem.id === itemId) {
        this.unequipItem();
        return false;
      }
      this.equippedItem = item;
      this.player.updateWeaponStats();
      this._notifyEquipmentChange();
      return true;
    }
    canEquip(item) {
      // Check if item is equippable
      return ['weapon', 'ranged', 'armor', 'accessory'].includes(item.type);
    }
    getItem(itemId) {
      // Check in items array first (non-stackable)
      var item = this.items.find(item => item.id === itemId);

      // If not found, check if it's a stackable resource we have
      if (!item && this.resources.has(itemId)) {
        var itemDef = this.itemDefinitions[itemId];
        if (itemDef) {
          item = _objectSpread2(_objectSpread2({}, itemDef), {}, {
            quantity: this.resources.get(itemId)
          });
        }
      }
      return item;
    }
    unequipItem() {
      this.equippedItem = null;
      this.player.updateWeaponStats();
      this._notifyEquipmentChange();
    }

    // Get all inventory items (both stackable and non-stackable)
    getInventory() {
      var allItems = [...this.items];

      // Add stackable resources as pseudo-items for UI display
      var _iterator = _createForOfIteratorHelper(this.resources),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            itemId = _step$value[0],
            quantity = _step$value[1];
          var itemDef = this.itemDefinitions[itemId];
          if (itemDef) {
            allItems.push(_objectSpread2(_objectSpread2({}, itemDef), {}, {
              quantity: quantity,
              isStackable: true
            }));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return allItems;
    }

    // Get only equipped items (for equipment slots)
    getEquippedItem() {
      return this.equippedItem;
    }

    // Get equipped items by type (for multiple equipment slots)
    getEquippedItems() {
      var equipped = {};
      if (this.equippedItem) {
        equipped[this.equippedItem.type] = this.equippedItem;
      }
      return equipped;
    }

    // Get resources only (for crafting/UI)
    getResources() {
      return new Map(this.resources);
    }

    // Use consumable item
    useItem(itemId) {
      var item = this.getItem(itemId);
      if (!item || item.type !== 'consumable') return false;

      // Apply effect based on item
      switch (item.effect) {
        case 'heal':
          if (this.player.health) {
            this.player.health = Math.min(this.player.maxHealth || 100, this.player.health + (item.value || 0));
          }
          break;
        // Add more effects as needed
      }

      // Remove one from stack
      return this.removeItem(itemId, 1);
    }

    // Crafting helper
    canCraft(recipe) {
      for (var _i = 0, _Object$entries = Object.entries(recipe.ingredients); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          itemId = _Object$entries$_i[0],
          requiredQty = _Object$entries$_i[1];
        if (!this.hasItem(itemId, requiredQty)) {
          return false;
        }
      }
      return true;
    }
    craft(recipe) {
      if (!this.canCraft(recipe)) return false;

      // Remove ingredients
      for (var _i2 = 0, _Object$entries2 = Object.entries(recipe.ingredients); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          itemId = _Object$entries2$_i[0],
          requiredQty = _Object$entries2$_i[1];
        this.removeItem(itemId, requiredQty);
      }

      // Add result
      this.addItem(recipe.result.id, recipe.result.quantity || 1);
      return true;
    }
    craftById(recipeId) {
      var recipe = RECIPES[recipeId];
      if (!recipe) return false;
      return this.craft(recipe);
    }
    getAvailableRecipes() {
      return Object.values(RECIPES).filter(r => this.canCraft(r));
    }
    craftFirstAvailable() {
      var available = this.getAvailableRecipes();
      if (available.length === 0) return null;
      var crafted = this.craft(available[0]);
      return crafted ? available[0].id : null;
    }

    // Clear inventory (debug/utility)
    clear() {
      this.items = [];
      this.resources.clear();
      this.equippedItem = null;
      this._notifyInventoryUpdate();
      this._notifyEquipmentChange();
    }

    // Save/load inventory state
    getState() {
      return {
        items: this.items.map(item => item.id),
        resources: Array.from(this.resources.entries()),
        equippedItemId: this.equippedItem ? this.equippedItem.id : null
      };
    }
    loadState(state) {
      this.clear();

      // Load non-stackable items
      state.items.forEach(itemId => this.addItem(itemId));

      // Load stackable resources
      state.resources.forEach(_ref => {
        var _this$itemDefinitions;
        var _ref2 = _slicedToArray(_ref, 2),
          itemId = _ref2[0],
          quantity = _ref2[1];
        if ((_this$itemDefinitions = this.itemDefinitions[itemId]) !== null && _this$itemDefinitions !== void 0 && _this$itemDefinitions.stackable) {
          this.resources.set(itemId, quantity);
        }
      });

      // Load equipped item
      if (state.equippedItemId) {
        this.equipItem(state.equippedItemId);
      }
    }
  }

  class Player {
    constructor(game) {
      this.game = game;
      this.x = 0;
      this.z = 0;
      this.lastAttackTime = 0;
      this.inventory = new Inventory(this);
      this.attackRange = 1.6;
      this.attackDamage = 1;
      this.attackCooldown = 200;
      this.attackArc = Math.PI / 2;
      this.attackSwingTime = 120;
      this.inventory.equipItem('basic_sword');
      this.mouseScreen = {
        x: 1,
        y: 0
      };
      this.facing = {
        x: 1,
        z: 0
      };
      this._recomputeFacing();
      this.container = new PIXI.Container();
      this.sprite = new PIXI.Sprite(loadTexture(Config.ASSETS.PLAYER));
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.width = Config.PLAYER.WIDTH;
      this.sprite.height = Config.PLAYER.HEIGHT;
      this.container.addChild(this.sprite);
      this.hitboxVisual = new PIXI.Graphics();
      this.hitboxVisual.ellipse(0, 0, Config.PLAYER.HITBOX_WIDTH / 2, Config.PLAYER.HITBOX_HEIGHT / 2).stroke({
        width: 1,
        color: 0x00FF00
      });
      this.hitboxVisual.visible = Config.DEBUG.SHOW_PLAYER_HITBOX;
      this.container.addChild(this.hitboxVisual);
      this.maxHealth = Config.PLAYER.MAX_HEALTH;
      this.health = this.maxHealth;
      this.damageFilter = new PIXI.ColorMatrixFilter();
      this.sprite.filters = [this.damageFilter];
      this._damageFlashEnd = 0;
      this.soul = 0;
      this.soulTier = 0;
      this.voidVolume = 0;
      this.voidPurity = 0;
      this._ambientMoteAccum = 0;
      this._repairing = false;
      this.movement = {
        up: false,
        down: false,
        left: false,
        right: false
      };
      this.keys = {};
      this._isDashing = false;
      this._dashStartTime = 0;
      this._dashDirection = {
        x: 0,
        z: 0
      };
      this._dashCooldownUntil = 0;
      this._afterimages = [];
      this._lastAfterimageTime = 0;
      this._trailTimer = 0;
      this._idleBobPhase = 0;
      this._soulLeakTimer = 0;
      this._soulLeakAccum = 0;
      this._ambientMoteTimer = 0;
      this._implosionTimer = 0;
      this._healRampTimer = 0;
      this._leakSuppression = 0;
      this._dying = false;
      this._deathTimer = 0;
      this._deathBurstTimer = 0;
      this._didFinalBurst = false;
      this._deathSlideY = 0;
      this.combat = new Combat(this, game);
      this.setupControls();
    }
    collectSoul(amount) {
      this.soul += Math.floor(amount);
      while (this.soul >= Config.SOUL.MAX_SOUL && this.soulTier < Config.SOUL.MAX_TIERS - 1) {
        this.soul -= Config.SOUL.MAX_SOUL;
        this.soulTier++;
      }
      this.soul = Math.min(this.soul, Config.SOUL.MAX_SOUL);
    }
    spendSoul(amount) {
      var remaining = Math.ceil(amount);
      while (remaining > 0) {
        if (this.soul >= remaining) {
          this.soul -= remaining;
          remaining = 0;
        } else if (this.soulTier > 0) {
          remaining -= this.soul;
          this.soulTier--;
          this.soul = Config.SOUL.MAX_SOUL;
        } else {
          this.soul = Math.max(0, this.soul - remaining);
          remaining = 0;
        }
      }
    }
    updateWeaponStats() {
      var weapon = this.inventory.getEquippedItem();
      if (weapon) {
        this.attackDamage = weapon.damage || Config.PLAYER.ATTACK_DAMAGE;
        this.attackRange = weapon.range || Config.PLAYER.ATTACK_RANGE;
        this.attackCooldown = weapon.cooldown || Config.PLAYER.ATTACK_COOLDOWN;
        this.attackArc = weapon.arc || Math.PI / 2;
        this.attackSwingTime = weapon.swingTime || 120;
      } else {
        this.attackDamage = 1;
        this.attackRange = 1;
        this.attackCooldown = 200;
        this.attackArc = Math.PI / 2;
        this.attackSwingTime = 120;
      }
    }
    quickAttack() {
      this.combat.quickAttack();
    }
    thrustAttack() {
      this.combat.thrustAttack();
    }
    heavyAttack() {
      this.combat.heavyAttack();
    }
    shoot() {
      var weapon = this.inventory.getEquippedItem();
      if (!weapon) return;
      if (weapon.type === 'ranged') {
        this.combat.releaseCharge(1);
      } else {
        this.combat.attack(Config.ATTACK.SHOOT);
      }
    }
    startDash() {
      var now = Date.now();
      if (now < this._dashCooldownUntil) return;
      if (this._isDashing) return;
      this._isDashing = true;
      this._dashStartTime = now;
      this._dashDirection.x = this.facing.x;
      this._dashDirection.z = this.facing.z;
      this.game.world.alertNearbyEnemies(this.x, this.z, Config.ENEMY.SOUND_RANGES.DASH, 'attack');
    }
    collectItem(itemId) {
      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      console.log("=== COLLECT ITEM DEBUG ===");
      console.log("Collecting: ".concat(quantity, " ").concat(itemId));
      var success = this.inventory.addItem(itemId, quantity);
      if (success) {
        if (this.game && this.game.inventoryUI) {
          this.game.inventoryUI.updateUI();
        }
      } else {
        console.log("FAILED to collect ".concat(quantity, " ").concat(itemId));
      }
      return success;
    }
    setupControls() {
      window.addEventListener('keydown', e => this.handleKeyDown(e));
      window.addEventListener('keyup', e => this.handleKeyUp(e));
      window.addEventListener('keydown', e => {
        if (e.key >= '1' && e.key <= '9') {
          var slot = parseInt(e.key) - 1;
          this.equipFromSlot(slot);
        } else if (e.key === '0') {
          this.equipFromSlot(9);
        }
      });
      window.addEventListener('keydown', e => {
        if (e.key === 'Shift') {
          e.preventDefault();
          this.startDash();
        }
      });
      window.addEventListener('keydown', e => {
        if (e.key === 'r' || e.key === 'R') {
          e.preventDefault();
          var total = this.soulTier * Config.SOUL.MAX_SOUL + this.soul;
          if (total >= Config.PLAYER.REPAIR.MIN_SOUL && this.health < this.maxHealth) {
            this._repairing = true;
          }
        }
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'r' || e.key === 'R') {
          this._repairing = false;
        }
      });
      window.addEventListener('keydown', e => {
        if (e.key === 'F1') {
          e.preventDefault();
          this.collectSoul(Config.SOUL.MAX_SOUL);
        }
        if (e.key === 'F2') {
          e.preventDefault();
          this.takeDamage(10);
        }
        if (e.key === 'g') {
          e.preventDefault();
          this.voidVolume = Math.min(1, this.voidVolume + 0.15);
        }
        if (e.key === 'h') {
          e.preventDefault();
          this.voidVolume = Math.max(0, this.voidVolume - 0.15);
        }
        if (e.key === 'j') {
          e.preventDefault();
          if (this.voidVolume > 0.015) {
            this.voidPurity = Math.min(1, this.voidPurity + 0.1);
          }
        }
        if (e.key === 'k') {
          e.preventDefault();
          var sm = this.game.soulMeter;
          if (sm) sm._debugTxt.visible = !sm._debugTxt.visible;
        }
      });
      var view = this.game.app.canvas;
      view.addEventListener('pointermove', e => this._onPointerMove(e));
      view.addEventListener('contextmenu', e => e.preventDefault());
      view.addEventListener('pointerdown', e => {
        var weapon = this.inventory.getEquippedItem();
        if (e.button === 0) {
          if (weapon && weapon.type === 'ranged') {
            this.combat.startCharge();
          } else {
            this.combat.attack(Config.ATTACK.SLASH);
          }
        } else if (e.button === 2) {
          if (weapon && weapon.type === 'ranged') {
            this.combat.startCharge(true);
          } else {
            this.heavyAttack();
          }
        }
      });
      var releaseIfRanged = e => {
        if (e.button === 0) {
          var weapon = this.inventory.getEquippedItem();
          if (weapon && weapon.type === 'ranged') {
            this.combat.releaseCharge();
          }
        } else if (e.button === 2) {
          // Right-click release — fires any queued quick shot
          var _weapon = this.inventory.getEquippedItem();
          if (_weapon && _weapon.type === 'ranged') {
            this.combat.releaseCharge();
          }
        }
      };
      view.addEventListener('pointerup', releaseIfRanged);
      window.addEventListener('pointerup', releaseIfRanged);
      window.addEventListener('blur', () => {
        this.combat.releaseCharge(0);
        this.keys = {};
        this.movement.up = this.movement.down = this.movement.left = this.movement.right = false;
      });
    }
    equipFromSlot(slot) {
      var items = this.inventory.getInventory();
      if (slot < items.length) {
        this.inventory.equipItem(items[slot].id);
      }
    }
    _onPointerMove(e) {
      var rect = this.game.app.canvas.getBoundingClientRect();
      var mouseX = e.clientX - rect.left;
      var mouseY = e.clientY - rect.top;
      var cx = this.game.app.screen.width / 2;
      var cy = this.game.app.screen.height / 2 + Config.CAMERA.OFFSET_Y;
      this.mouseScreen.x = mouseX - cx;
      this.mouseScreen.y = mouseY - cy;
      this._recomputeFacing();
    }
    _recomputeFacing() {
      var W = Config.TILE.WIDTH;
      var H = Config.TILE.HEIGHT;
      var sx = this.mouseScreen.x;
      var sy = this.mouseScreen.y;
      var dx = sx / W + sy / H;
      var dz = -sx / W + sy / H;
      var len = Math.hypot(dx, dz) || 1;
      this.facing.x = dx / len;
      this.facing.z = dz / len;
    }
    handleKeyDown(e) {
      var key = e.key.toLowerCase();
      this.keys[key] = true;
      this.keys[e.key] = true;
      switch (key) {
        case 'w':
        case 'arrowup':
          this.movement.up = true;
          e.preventDefault();
          break;
        case 's':
        case 'arrowdown':
          this.movement.down = true;
          e.preventDefault();
          break;
        case 'a':
        case 'arrowleft':
          this.movement.left = true;
          e.preventDefault();
          break;
        case 'd':
        case 'arrowright':
          this.movement.right = true;
          e.preventDefault();
          break;
      }
    }
    handleKeyUp(e) {
      var key = e.key.toLowerCase();
      this.keys[key] = false;
      this.keys[e.key] = false;
      switch (key) {
        case 'w':
        case 'arrowup':
          this.movement.up = false;
          e.preventDefault();
          break;
        case 's':
        case 'arrowdown':
          this.movement.down = false;
          e.preventDefault();
          break;
        case 'a':
        case 'arrowleft':
          this.movement.left = false;
          e.preventDefault();
          break;
        case 'd':
        case 'arrowright':
          this.movement.right = false;
          e.preventDefault();
          break;
      }
    }
    takeDamage(amount) {
      var dirX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var dirZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (this.isDead) return;
      this.health = Math.max(0, this.health - amount);

      // White flash
      this._damageFlashEnd = performance.now() + 120;
      var WHITE_MAT = new Float32Array([0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0]);
      this.damageFilter.matrix = WHITE_MAT;

      // Damage shake scales with how wounded you are
      var healthRatio = this.health / this.maxHealth;
      var shakeMult = 1 + 2 * (1 - healthRatio);
      this.game.renderer.triggerShake(Config.CAMERA.SHAKE.DAMAGE_INTENSITY * shakeMult, dirX, dirZ);
      // Extra trauma for reeling — vibration lingers after the hit
      this.game.renderer._shakeTrauma = Math.min(1, this.game.renderer._shakeTrauma + Config.CAMERA.SHAKE.DAMAGE_EXTRA_TRAUMA);
      this._spawnDamageParticles(amount, dirX, dirZ, this.health / this.maxHealth);
      if (this.health <= 0) this._die(dirX, dirZ);
    }
    get isDead() {
      return this.health <= 0;
    }
    _spawnSoulParticle(px, pz, vel, lifetime, size, alpha, gravity) {
      var expand = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var extra = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
      var p = new Particle(this.game, px, pz, _objectSpread2({
        velocity: vel,
        lifetime,
        size,
        color: 0xffffff,
        alpha,
        gravity,
        scaleOverTime: !expand,
        expand
      }, extra));
      this.game.particles.push(p);
    }
    _spawnDamageParticles(damage, dirX, dirZ, healthRatio) {
      var dmg = 1 - healthRatio;
      var sizeMult = 1 + dmg * 0.6;
      var speedMult = 1 + dmg * 0.5;
      var particleCount = Math.ceil(5 * (1 + dmg * 1.5));
      var dmgMult = 1 + damage * 0.05;
      var totalSoulLost = 0;
      var hasDirection = dirX * dirX + dirZ * dirZ > 0.0001;
      for (var i = 0; i < particleCount; i++) {
        var finalDirX = void 0,
          finalDirZ = void 0;
        if (hasDirection) {
          // Directional hit — spray perpendicular to the incoming vector
          // (slash-knockback style).
          var perpendicular = {
            x: -dirZ,
            z: dirX
          };
          var side = Math.random() > 0.5 ? 1 : -1;
          var dX = perpendicular.x * side;
          var dZ = perpendicular.z * side;
          var randomAngle = Math.random() * Math.PI / 4 - Math.PI / 8;
          var cos = Math.cos(randomAngle);
          var sin = Math.sin(randomAngle);
          finalDirX = dX * cos - dZ * sin;
          finalDirZ = dX * sin + dZ * cos;
        } else {
          // No direction (self-damage, teleporting magic) — soul bursts
          // outward in all directions.
          var angle = Math.random() * Math.PI * 2;
          finalDirX = Math.cos(angle);
          finalDirZ = Math.sin(angle);
        }
        var rawSize = (2 + Math.random() * 3) * sizeMult;
        var soulVal = Math.max(1, Math.round(rawSize * 0.3 * dmgMult));
        totalSoulLost += soulVal;
        var burstMult = hasDirection ? 1 : 1.35;
        var p = new Particle(this.game, this.x, this.z, {
          velocity: {
            x: finalDirX * (0.08 + Math.random() * 0.04) * speedMult * burstMult,
            z: finalDirZ * (0.08 + Math.random() * 0.04) * speedMult * burstMult
          },
          lifetime: 500 + Math.random() * 300,
          size: rawSize,
          gravity: 0.0005,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          soulValue: soulVal
        });
        this.game.particles.push(p);
      }
      this.spendSoul(totalSoulLost);
    }
    _die() {
      var dirX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dirZ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this._dying) return;
      this._dying = true;
      this._deathStartTime = performance.now();
      this._deathTimer = this._deathStartTime + 5000; // 2500ms visual + 2500ms for particles to clear
      this._deathSoulLeakTimer = 0;
      this._didFinalBurst = false;
      this._deathSlideY = 0;
      this._deathX = this.x;
      this._deathZ = this.z;
      this.game.renderer.triggerShake(Config.CAMERA.SHAKE.DEATH_INTENSITY, dirX, dirZ);
    }
    _respawn() {
      this.game.renderer.cameraTransition.active = false;
      this.game.renderer.cameraTargetX = 0;
      this.game.renderer.cameraTargetZ = 0;
      this.game.renderer._smoothedCamX = 0;
      this.game.renderer._smoothedCamZ = 0;
      this.game.renderer._prevPlayerX = 0;
      this.game.renderer._prevPlayerZ = 0;
      this._dying = false;
      this.x = 0;
      this.z = 0;
      this.health = this.maxHealth;
      this.sprite.y = 0;
      this.sprite.alpha = 1;
      this.sprite.visible = true;
      this.soul = 0;
      this.soulTier = 0;
    }
    _updateDying(delta) {
      var elapsed = performance.now() - this._deathStartTime;
      var progress = Math.min(elapsed / 2500, 1);

      // Sprite sinks — body failing
      this._deathSlideY = -progress * Config.PLAYER.HEIGHT * 0.6;
      this.sprite.y = this._deathSlideY;
      this.sprite.alpha = Math.max(0, 1 - progress * 0.5);

      // Violent soul gush — inner core erupts through cracked outer core
      this._deathSoulLeakTimer += delta * (1000 / 60);
      if (this._deathSoulLeakTimer > 20) {
        this._deathSoulLeakTimer = 0;
        var count = 8 + Math.floor(Math.random() * 7);
        var sprayAngle = Math.random() * Math.PI * 2;
        for (var i = 0; i < count; i++) {
          var angle = sprayAngle + (Math.random() - 0.5) * 1.0;
          var speed = 0.008 + Math.random() * 0.04;
          var isHeavy = Math.random() > 0.5;
          if (isHeavy) {
            this._spawnSoulParticle(this.x + (Math.random() - 0.5) * 0.4, this.z + (Math.random() - 0.5) * 0.4, {
              x: Math.cos(angle) * speed * 0.5,
              z: Math.sin(angle) * speed * 0.5
            }, 600 + Math.random() * 500, 5 + Math.random() * 8, 0.5 + Math.random() * 0.4, 0.01 + Math.random() * 0.01, true, {
              screenSpace: true,
              gravityDelay: 80 + Math.random() * 80,
              stopAtZ: this.z + 2,
              expandStartScale: 0.25
            });
          } else {
            this._spawnSoulParticle(this.x + (Math.random() - 0.5) * 1.2, this.z + (Math.random() - 0.5) * 1.2, {
              x: Math.cos(angle) * speed,
              z: Math.sin(angle) * speed
            }, 1000 + Math.random() * 1000, 4 + Math.random() * 8, 0.5 + Math.random() * 0.5, -0.0001 - Math.random() * 0.00015);
          }
        }
        this.game.renderer.triggerShake(0.12, Math.cos(sprayAngle) * 0.5, Math.sin(sprayAngle) * 0.5);
      }

      // Final burst at 2000ms — outer core collapses entirely
      if (!this._didFinalBurst && elapsed >= 2000) {
        this._didFinalBurst = true;
        this.sprite.visible = false;
        this.sprite.y = 0;
        this.game.renderer.triggerShake(6, 1, 0);
        this.game.renderer.triggerShake(6, 0, 1);
        var explosionParticles = [];
        var cx = this.x,
          cz = this.z;

        // Flash burst — bright central flash
        for (var _i = 0; _i < 30; _i++) {
          var _angle = Math.random() * Math.PI * 2;
          var _speed = 0.15 + Math.random() * 0.3;
          explosionParticles.push(new Particle(this.game, cx + (Math.random() - 0.5) * 0.8, cz + (Math.random() - 0.5) * 0.8, {
            velocity: {
              x: Math.cos(_angle) * _speed,
              z: Math.sin(_angle) * _speed
            },
            lifetime: 300 + Math.random() * 400,
            size: 14 + Math.random() * 20,
            color: 0xffffff,
            alpha: 0.9 + Math.random() * 0.1,
            gravity: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.3,
            scaleOverTime: true
          }));
        }

        // Shockwave ring — fast outward ring
        for (var _i2 = 0; _i2 < 40; _i2++) {
          var _angle2 = Math.random() * Math.PI * 2;
          var _speed2 = 0.08 + Math.random() * 0.18;
          explosionParticles.push(new Particle(this.game, cx + (Math.random() - 0.5) * 1.5, cz + (Math.random() - 0.5) * 1.5, {
            velocity: {
              x: Math.cos(_angle2) * _speed2,
              z: Math.sin(_angle2) * _speed2
            },
            lifetime: 800 + Math.random() * 1400,
            size: 6 + Math.random() * 10,
            color: 0xffffff,
            alpha: 0.6 + Math.random() * 0.4,
            gravity: -0.00002 - Math.random() * 0.00002,
            rotationSpeed: (Math.random() - 0.5) * 0.25,
            scaleOverTime: true
          }));
        }

        // Upward eruption — massive plume of liberated soul
        for (var _i3 = 0; _i3 < 80; _i3++) {
          var _angle3 = (Math.random() - 0.5) * Math.PI * 0.8;
          var _speed3 = 0.02 + Math.random() * 0.1;
          explosionParticles.push(new Particle(this.game, cx + (Math.random() - 0.5) * 2.0, cz + (Math.random() - 0.5) * 2.0, {
            velocity: {
              x: Math.cos(_angle3) * _speed3,
              z: Math.sin(_angle3) * _speed3
            },
            lifetime: 2500 + Math.random() * 3000,
            size: 8 + Math.random() * 20,
            color: 0xffffff,
            alpha: 0.5 + Math.random() * 0.5,
            gravity: -0.00015 - Math.random() * 0.00015,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            scaleOverTime: true
          }));
        }

        // Heavy falling debris — dense fragments arc out and fall
        for (var _i4 = 0; _i4 < 50; _i4++) {
          var _angle4 = Math.random() * Math.PI * 2;
          var _speed4 = 0.04 + Math.random() * 0.14;
          explosionParticles.push(new Particle(this.game, cx + (Math.random() - 0.5) * 1.5, cz + (Math.random() - 0.5) * 1.5, {
            velocity: {
              x: Math.cos(_angle4) * _speed4,
              z: Math.sin(_angle4) * _speed4
            },
            lifetime: 1200 + Math.random() * 1500,
            size: 6 + Math.random() * 14,
            color: 0xeeeeff,
            alpha: 0.4 + Math.random() * 0.5,
            gravity: 0.0001 + Math.random() * 0.0003,
            rotationSpeed: (Math.random() - 0.5) * 0.15,
            expand: true
          }));
        }

        // Fine mist — dispersing essence, very wide spread
        for (var _i5 = 0; _i5 < 50; _i5++) {
          var _angle5 = Math.random() * Math.PI * 2;
          var _speed5 = 0.002 + Math.random() * 0.03;
          explosionParticles.push(new Particle(this.game, cx + (Math.random() - 0.5) * 4.0, cz + (Math.random() - 0.5) * 4.0, {
            velocity: {
              x: Math.cos(_angle5) * _speed5,
              z: Math.sin(_angle5) * _speed5
            },
            lifetime: 3000 + Math.random() * 3000,
            size: 2 + Math.random() * 6,
            color: 0xffffff,
            alpha: 0.15 + Math.random() * 0.3,
            gravity: -0.00006 - Math.random() * 0.0001,
            scaleOverTime: true
          }));
        }
        this.game.particles.push(...explosionParticles);
      }
      if (performance.now() >= this._deathTimer) {
        this._respawn();
      }
    }
    _updateBleed(delta) {
      if (this.health >= this.maxHealth) return;
      var hr = this.health / this.maxHealth;
      var rate = Config.SOUL.BLEED_BASE_RATE + (Config.SOUL.BLEED_MAX_RATE - Config.SOUL.BLEED_BASE_RATE) * (1 - hr);
      var dt = delta * (1000 / 60) / 1000;
      this.health = Math.max(0, this.health - rate * dt);
    }
    _updateAmbientAbsorption(delta) {
      var dt = delta * (1000 / 60) / 1000;
      var hr = this.health / this.maxHealth;

      // Bleed rate (needed for healing cost + net wound calculation)
      var bleedRate = this.health < this.maxHealth ? Config.SOUL.BLEED_BASE_RATE + (Config.SOUL.BLEED_MAX_RATE - Config.SOUL.BLEED_BASE_RATE) * (1 - hr) : 0;

      // Unified ambient model:
      // Total raw soul entering from environment this frame
      var ambientIn = Config.SOUL.AMBIENT_TOTAL_INTAKE * dt;

      // Passive HP healing — wound-severity split: a bias fraction of what remains after
      // covering bleed demand always goes to fortification, so above equilibrium healing
      // outpaces bleed and HP slowly rises, accelerating as health improves.
      var soulToHealing = 0;
      var hpHealed = 0;
      var netWound = bleedRate;
      if (this.health < this.maxHealth) {
        var rawFraction = bleedRate * Config.SOUL.SOUL_PER_HP_PASSIVE / Config.SOUL.AMBIENT_TOTAL_INTAKE;
        var bias = 0.2;
        var healingFraction = Math.min(1, rawFraction + bias * (1 - rawFraction));
        soulToHealing = ambientIn * healingFraction;
        hpHealed = soulToHealing / Config.SOUL.SOUL_PER_HP_PASSIVE;
        if (hpHealed > 0) {
          this.health = Math.min(this.maxHealth, this.health + hpHealed);
        }
        // Soul leak — true loss from meter; particles offer partial recovery
        var hpHealedPerSec = hpHealed / dt;
        netWound = Math.max(0, bleedRate - hpHealedPerSec);
        var soulLeak = netWound * Config.SOUL.SOUL_LEAK_RATE * dt;
        var suppression = 0;
        if (soulLeak > 0) {
          if (this._repairing) {
            var rampMult = Math.min(2, 1 + this._healRampTimer / 0.8);
            suppression = Math.min(1, hr * rampMult);
            soulLeak *= 1 - suppression;
          }
          this.spendSoul(soulLeak);
          this._soulLeakAccum += soulLeak;
        }
        this._leakSuppression = suppression;
      }

      // Ambient mote — particles carry overflow soul to the player (real intake, not silent)
      var soulToMeter = Math.max(0, ambientIn - soulToHealing);
      if (soulToMeter > 0) this._ambientMoteAccum += soulToMeter;
      this._ambientMoteTimer += delta * (1000 / 60);
      if (this._ambientMoteTimer > 200) {
        this._ambientMoteTimer = 0;
        var angle = Math.random() * Math.PI * 2;
        var dist = 1.5 + Math.random() * 1.5;
        var mx = this.x + Math.cos(angle) * dist;
        var mz = this.z + Math.sin(angle) * dist;
        var toPlayerX = this.x - mx;
        var toPlayerZ = this.z - mz;
        var td = Math.hypot(toPlayerX, toPlayerZ) || 1;
        var vel = 0.03 + Math.random() * 0.03;
        // Distribute accumulated overflow as particle soul value
        var moteSv = Math.floor(this._ambientMoteAccum);
        this._ambientMoteAccum -= moteSv;
        var p = new Particle(this.game, mx, mz, {
          velocity: {
            x: toPlayerX / td * vel,
            z: toPlayerZ / td * vel
          },
          lifetime: 2500 + Math.random() * 1500,
          size: moteSv > 0 ? 3 + moteSv * 3 + Math.random() * 3 : 2 + Math.random() * 2,
          color: 0xffffff,
          alpha: moteSv > 0 ? 0.6 + Math.random() * 0.2 : 0.2 + Math.random() * 0.1,
          gravity: 0,
          friction: 0.99,
          rotationSpeed: 0.03 + Math.random() * 0.03,
          ambient: true,
          playerRelative: true,
          soulValue: moteSv
        });
        this.game.particles.push(p);
      }
    }
    _updateRepair(delta) {
      var r = Config.PLAYER.REPAIR;
      var total = this.soulTier * Config.SOUL.MAX_SOUL + this.soul;
      if (!this._repairing || total < r.MIN_SOUL || this.health >= this.maxHealth) {
        this._repairing = false;
        this._healRampTimer = 0;
        return;
      }
      var dt = delta * (1000 / 60) / 1000;
      var isStill = !this.movement.up && !this.movement.down && !this.movement.left && !this.movement.right;

      // Ramp: standing still builds focus, doubling heal rate over 800ms
      if (isStill) {
        this._healRampTimer += dt;
      } else {
        this._healRampTimer = Math.max(0, this._healRampTimer - dt * 2);
      }
      var rampMult = Math.min(2, 1 + this._healRampTimer / 0.8);
      var heal = r.HEAL_RATE * rampMult * dt;
      var cost = heal * r.SOUL_COST;
      if (total >= cost) {
        this.spendSoul(cost);
        this.health = Math.min(this.maxHealth, this.health + heal);
      }

      // Implosion visual — scaled by ramp multiplier
      this._implosionTimer += delta * (1000 / 60);
      if (this._implosionTimer > 20) {
        this._implosionTimer = 0;
        var count = Math.round((3 + Math.floor(Math.random() * 3)) * rampMult);
        for (var i = 0; i < count; i++) {
          var angle = Math.random() * Math.PI * 2;
          var radius = 0.2 + Math.random() * 0.2;
          var speed = 0.15 + Math.random() * 0.1;
          var size = (6 + Math.random() * 4) * rampMult;
          this._spawnSoulParticle(this.x + Math.cos(angle) * radius, this.z + Math.sin(angle) * radius, {
            x: Math.cos(angle) * speed,
            z: Math.sin(angle) * speed
          }, 500 + Math.random() * 500, size, 0.7 + Math.random() * 0.3, 0, false, {
            implosion: true,
            implosionPull: 0.06 * rampMult,
            soulValue: 0
          });
        }
      }
    }
    _updateWounding(delta) {
      var healthRatio = this.health / this.maxHealth;
      this._soulLeakTimer += delta * (1000 / 60);
      if (healthRatio < 1 && this._soulLeakTimer > Config.PLAYER.WOUNDING.SOUL_LEAK_INTERVAL) {
        this._soulLeakTimer = 0;
        var dmg = 1 - healthRatio;
        var visualMult = 1 - this._leakSuppression;
        var leakCount = Math.max(1, Math.round((1 + Math.ceil(dmg * 4)) * visualMult));
        var sprayAngle = Math.random() * Math.PI * 2;

        // Distribute accumulated soul leak across this burst of particles
        var leakToEmit = Math.floor(this._soulLeakAccum);
        this._soulLeakAccum -= leakToEmit;
        var remainingSoul = leakToEmit;
        for (var i = 0; i < leakCount; i++) {
          var angle = sprayAngle + (Math.random() - 0.5) * 0.8;
          var spray = (0.003 + Math.random() * 0.008) * visualMult;
          var g = (0.015 + dmg * 0.01) * visualMult;
          var sv = remainingSoul > 0 ? 1 : 0;
          if (sv > 0) remainingSoul--;
          this._spawnSoulParticle(this.x + (Math.random() - 0.5) * 0.3, this.z + (Math.random() - 0.5) * 0.3, {
            x: Math.cos(angle) * spray,
            z: Math.sin(angle) * spray
          }, 600 + Math.random() * 600, 2 + dmg * 10 + Math.random() * 2, 0.5 + dmg * 0.4, g, true, {
            screenSpace: true,
            gravityDelay: 150 + Math.random() * 100,
            stopAtZ: this.z + 2,
            expandStartScale: 0.25,
            soulValue: sv
          });
        }
      }
    }
    update(delta) {
      if (this._dying) return void this._updateDying(delta);
      if (this.isDead) return;
      var now = Date.now();

      // Damage flash fade
      if (performance.now() < this._damageFlashEnd) {
        this.sprite.visible = Math.floor(performance.now() / 60) % 2 === 0;
      } else {
        this.sprite.visible = true;
        var IDENTITY_MAT = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
        this.damageFilter.matrix = IDENTITY_MAT;
      }

      // Ambient absorption — passive HP + soul regen + mote visual
      this._updateAmbientAbsorption(delta);

      // Bleed — continuous drain, soul leak through cracks
      this._updateBleed(delta);
      if (this.health <= 0) {
        this._die();
        return;
      }

      // Repair channel — consume soul to heal
      this._updateRepair(delta);

      // Wounding — speed scales with health ratio, soul leaks when hurt
      this._updateWounding(delta);
      var healthRatio = this.health / this.maxHealth;
      var speedMult = this._repairing ? Config.PLAYER.REPAIR.SPEED_MULT : 1;
      var speed = (Config.PLAYER.WOUNDING.MIN_SPEED + (Config.PLAYER.SPEED - Config.PLAYER.WOUNDING.MIN_SPEED) * healthRatio) * speedMult;
      var screenDx = 0,
        screenDz = 0;

      // Dash — override normal movement
      if (this._isDashing) {
        var elapsed = now - this._dashStartTime;
        if (elapsed >= Config.DASH.DURATION) {
          this._isDashing = false;
          this._dashCooldownUntil = now + Config.DASH.COOLDOWN;
          this.sprite.width = Config.PLAYER.WIDTH;
        } else {
          this.x += this._dashDirection.x * speed * Config.DASH.SPEED_MULTIPLIER;
          this.z += this._dashDirection.z * speed * Config.DASH.SPEED_MULTIPLIER;
          // Stretch sprite in facing direction for motion feel
          this.sprite.width = Config.PLAYER.WIDTH * 1.4;
        }
      } else if (this.sprite.width !== Config.PLAYER.WIDTH) {
        this.sprite.width = Config.PLAYER.WIDTH;
      }

      // Afterimages — spawn during dash
      if (this._isDashing && now - this._lastAfterimageTime > 40) {
        this._lastAfterimageTime = now;
        this.spawnAfterimage(this.x, this.z, 0.4);
      }

      // Update afterimages
      for (var i = this._afterimages.length - 1; i >= 0; i--) {
        var ai = this._afterimages[i];
        ai.life -= delta * 0.016;
        if (ai.life <= 0) {
          if (ai.sprite.parent) ai.sprite.parent.removeChild(ai.sprite);
          ai.sprite.destroy();
          this._afterimages.splice(i, 1);
        } else {
          ai.sprite.alpha = ai.alpha * (ai.life / ai.maxLife);
        }
      }
      if (!this._isDashing) {
        if (this.movement.right) screenDz -= 1;
        if (this.movement.left) screenDz += 1;
        if (this.movement.down) screenDx += 1;
        if (this.movement.up) screenDx -= 1;
        if (screenDx !== 0 && screenDz !== 0) {
          var length = Math.hypot(screenDx, screenDz);
          screenDx /= length;
          screenDz /= length;
        }
        var worldDx = (screenDx - screenDz) * speed;
        var worldDz = (screenDx + screenDz) * speed;
        this.x += worldDx;
        this.z += worldDz;

        // Soul dust cloud — kicked up behind the spirit's feet
        this._trailTimer += delta;
        if (this._trailTimer > 2) {
          this._trailTimer = 0;
          this._footstepTimer = 0;
          var mag = Math.hypot(worldDx, worldDz);
          if (mag > 0.001) {
            var backX = -worldDx / mag * 0.035;
            var backZ = -worldDz / mag * 0.035;
            for (var _i6 = 0; _i6 < 3; _i6++) {
              var p = new Particle(this.game, this.x + 0.5 + (Math.random() - 0.5) * 0.4, this.z + 0.5 + (Math.random() - 0.5) * 0.4, {
                velocity: {
                  x: backX + (Math.random() - 0.5) * 0.015,
                  z: backZ + (Math.random() - 0.5) * 0.015
                },
                lifetime: 400 + Math.random() * 300,
                size: 6 + Math.random() * 4,
                color: 0xeeeeff,
                alpha: 0.35 + Math.random() * 0.15,
                gravity: -0.00003,
                scaleOverTime: true,
                container: this.game.renderer.trailContainer,
                noFreeze: true
              });
              this.game.particles.push(p);
            }
          }
        }
      }

      // Footstep sound — moving objects emit sound (omniscient short range)
      var isMoving = this.movement.up || this.movement.down || this.movement.left || this.movement.right;
      this._footstepTimer += delta;
      if (this._footstepTimer > 30 && isMoving && !this._isDashing) {
        this._footstepTimer = 0;
        this.game.world.alertNearbyEnemies(this.x, this.z, Config.ENEMY.SOUND_RANGES.FOOTSTEP, 'attack');
      }

      // Idle floating bob — gentle hover when standing still
      if (!isMoving && !this._isDashing) {
        this._idleBobPhase += delta;
        this.sprite.y = Math.sin(this._idleBobPhase * 0.04) * 2.5;
      } else {
        this.sprite.y = 0;
        this._idleBobPhase = 0;
      }
      if (this.keys['q']) this.combat.quickAttack();
      if (this.keys['e']) this.combat.heavyAttack();
      if (this.keys['f']) this.combat.thrustAttack();
      this.combat.update(delta);
    }
    spawnAfterimage(x, z) {
      var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.6;
      var lifeOverride = arguments.length > 3 ? arguments[3] : undefined;
      var ai = new PIXI.Sprite(this.sprite.texture);
      ai.anchor.set(0.5, 0.5);
      ai.width = Config.PLAYER.WIDTH;
      ai.height = Config.PLAYER.HEIGHT;
      var startLife = lifeOverride !== null && lifeOverride !== void 0 ? lifeOverride : alpha;
      ai.alpha = alpha;
      var screenX = (x - z) * Config.TILE.WIDTH / 2;
      var screenY = (x + z) * Config.TILE.HEIGHT / 2;
      ai.position.set(screenX, screenY);
      this.game.renderer.entityContainer.addChild(ai);
      ai.zIndex = x + z + 2;
      this._afterimages.push({
        sprite: ai,
        life: startLife,
        maxLife: startLife,
        alpha
      });
    }
  }

  class InventoryUI {
    constructor(game) {
      this.game = game;
      this.container = new PIXI.Container();
      this.half = 30;
      this.minArm = 14;
      this.maxArm = 30;
      this.gap = 10;
      this.slots = [];
      this.renderVersion = 0;
      this._pulse = 0;
      this.createUI();
      game.app.stage.addChild(this.container);
      this.container.zIndex = 100;
      game.player.inventory.onEquipmentChange(() => this.updateUI());
    }
    createUI() {
      var _this = this;
      var slotsCount = 10;
      var step = this.half * 2 + this.gap;
      var totalWidth = slotsCount * step - this.gap;
      this.container.x = (this.game.app.screen.width - totalWidth) / 2;
      this.container.y = this.game.app.screen.height - this.half * 2 - 20;
      var _loop = function _loop(i) {
        var slotContainer = new PIXI.Container();
        slotContainer.x = i * step + _this.half;
        slotContainer.y = _this.half;
        slotContainer.eventMode = 'static';
        slotContainer.cursor = 'pointer';
        slotContainer.hitArea = new PIXI.Rectangle(-_this.half, -_this.half, _this.half * 2, _this.half * 2);
        slotContainer.on("pointerdown", () => _this.onSlotClick(i));
        slotContainer.on("pointerover", () => _this._onHover(i, true));
        slotContainer.on("pointerout", () => _this._onHover(i, false));
        var gfx = new PIXI.Graphics();
        _this._drawSlot(gfx, _this.minArm, false, false, 0);
        slotContainer.addChild(gfx);
        _this.container.addChild(slotContainer);
        _this.slots.push({
          container: slotContainer,
          gfx,
          icon: null,
          quantityText: null,
          index: i,
          arm: _this.minArm,
          targetArm: _this.minArm,
          equipped: false,
          hovered: false
        });
      };
      for (var i = 0; i < slotsCount; i++) {
        _loop(i);
      }
      this.updateUI();
    }
    _drawSlot(g, arm, equipped, hovered, pulse) {
      g.clear();
      g.fill({
        color: 0xf5f0e8,
        alpha: 0.18
      });
      g.roundRect(-this.half, -this.half, this.half * 2, this.half * 2, 3);
      g.fill();
      var corners = [{
        xOff: -1,
        yOff: -1,
        hDir: 1,
        vDir: 1
      }, {
        xOff: 1,
        yOff: -1,
        hDir: -1,
        vDir: 1
      }, {
        xOff: -1,
        yOff: 1,
        hDir: 1,
        vDir: -1
      }, {
        xOff: 1,
        yOff: 1,
        hDir: -1,
        vDir: -1
      }];
      var isActive = equipped || hovered;
      if (equipped) {
        for (var i = 3; i >= 0; i--) {
          var w = 3 + i * 2;
          var a = 0.04 + i * 0.035 + pulse;
          var _iterator = _createForOfIteratorHelper(corners),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var c = _step.value;
              var bx = c.xOff * this.half;
              var by = c.yOff * this.half;
              g.moveTo(bx, by);
              g.lineTo(bx + c.hDir * arm, by);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          g.stroke({
            width: w,
            color: 0xe8d48a,
            alpha: a
          });
          var _iterator2 = _createForOfIteratorHelper(corners),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _c = _step2.value;
              var _bx = _c.xOff * this.half;
              var _by = _c.yOff * this.half;
              g.moveTo(_bx, _by);
              g.lineTo(_bx, _by + _c.vDir * arm);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          g.stroke({
            width: w,
            color: 0xe8d48a,
            alpha: a
          });
        }
      } else if (hovered) {
        for (var _i = 2; _i >= 0; _i--) {
          var _w = 3 + _i * 2;
          var _a = 0.05 + _i * 0.04;
          var _iterator3 = _createForOfIteratorHelper(corners),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _c2 = _step3.value;
              var _bx2 = _c2.xOff * this.half;
              var _by2 = _c2.yOff * this.half;
              g.moveTo(_bx2, _by2);
              g.lineTo(_bx2 + _c2.hDir * arm, _by2);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          g.stroke({
            width: _w,
            color: 0xe8d48a,
            alpha: _a
          });
          var _iterator4 = _createForOfIteratorHelper(corners),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _c3 = _step4.value;
              var _bx3 = _c3.xOff * this.half;
              var _by3 = _c3.yOff * this.half;
              g.moveTo(_bx3, _by3);
              g.lineTo(_bx3, _by3 + _c3.vDir * arm);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          g.stroke({
            width: _w,
            color: 0xe8d48a,
            alpha: _a
          });
        }
      } else {
        for (var _i2 = 1; _i2 >= 0; _i2--) {
          var _w2 = 2 + _i2 * 3;
          var _a2 = 0.06 + _i2 * 0.06;
          var _iterator5 = _createForOfIteratorHelper(corners),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _c4 = _step5.value;
              var _bx4 = _c4.xOff * this.half;
              var _by4 = _c4.yOff * this.half;
              g.moveTo(_bx4, _by4);
              g.lineTo(_bx4 + _c4.hDir * arm, _by4);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          g.stroke({
            width: _w2,
            color: 0xd4c8a0,
            alpha: _a2
          });
          var _iterator6 = _createForOfIteratorHelper(corners),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _c5 = _step6.value;
              var _bx5 = _c5.xOff * this.half;
              var _by5 = _c5.yOff * this.half;
              g.moveTo(_bx5, _by5);
              g.lineTo(_bx5, _by5 + _c5.vDir * arm);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          g.stroke({
            width: _w2,
            color: 0xd4c8a0,
            alpha: _a2
          });
        }
      }
      var lw = equipped ? 3 : isActive ? 2.5 : 2;
      var lc = equipped ? 0xfff8ee : isActive ? 0xfff8ee : 0xfff5e0;
      var la = equipped ? 0.90 : isActive ? 0.75 : 0.55;
      for (var _i3 = 0, _corners = corners; _i3 < _corners.length; _i3++) {
        var _c6 = _corners[_i3];
        var _bx6 = _c6.xOff * this.half;
        var _by6 = _c6.yOff * this.half;
        g.moveTo(_bx6, _by6);
        g.lineTo(_bx6 + _c6.hDir * arm, _by6);
      }
      g.stroke({
        width: lw,
        color: lc,
        alpha: la
      });
      for (var _i4 = 0, _corners2 = corners; _i4 < _corners2.length; _i4++) {
        var _c7 = _corners2[_i4];
        var _bx7 = _c7.xOff * this.half;
        var _by7 = _c7.yOff * this.half;
        g.moveTo(_bx7, _by7);
        g.lineTo(_bx7, _by7 + _c7.vDir * arm);
      }
      g.stroke({
        width: lw,
        color: lc,
        alpha: la
      });
    }
    _onHover(index, active) {
      var slot = this.slots[index];
      if (!slot || slot.equipped) return;
      slot.hovered = active;
      slot.targetArm = active ? this.maxArm : this.minArm;
    }
    onSlotClick(index) {
      var slot = this.slots[index];
      if (!slot) return;
      var inventory = this.game.player.inventory;
      var item = inventory.getInventory()[index];
      if (item) {
        inventory.equipItem(item.id);
      }
    }
    updateUI() {
      var _this2 = this;
      this.renderVersion++;
      var renderVersion = this.renderVersion;
      var inventory = this.game.player.inventory;
      var items = inventory.getInventory();
      var equippedItem = inventory.getEquippedItem();
      var _iterator7 = _createForOfIteratorHelper(this.slots),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var slot = _step7.value;
          if (slot.icon) {
            slot.container.removeChild(slot.icon);
            slot.icon.destroy();
            slot.icon = null;
          }
          if (slot.quantityText) {
            slot.container.removeChild(slot.quantityText);
            slot.quantityText.destroy();
            slot.quantityText = null;
          }
          slot.equipped = false;
          slot.targetArm = this.minArm;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _loop2 = function _loop2() {
        if (i >= _this2.slots.length) return 1; // break
        var item = items[i];
        var slot = _this2.slots[i];
        if (equippedItem && equippedItem.id === item.id) {
          slot.equipped = true;
          slot.targetArm = _this2.maxArm;
          slot.hovered = false;
        }
        var uiPath = item.uiTexture || 'assets/default-item.png';
        var texture = loadTexture(uiPath, 'assets/default-item.png');
        if (texture) {
          onTextureReady(texture, readyTexture => {
            if (renderVersion !== _this2.renderVersion) return;
            _this2._setSlotIcon(slot, readyTexture, item);
          });
        }
        if (item.quantity > 1 && item.stackable) {
          var qt = new PIXI.Text({
            text: item.quantity.toString(),
            style: {
              fontSize: 10,
              fill: 0xffffff,
              fontWeight: 'bold',
              stroke: 0x000000,
              strokeThickness: 2,
              align: 'right'
            }
          });
          qt.anchor.set(1, 1);
          qt.x = _this2.half - 5;
          qt.y = _this2.half - 5;
          slot.container.addChild(qt);
          slot.quantityText = qt;
        }
      };
      for (var i = 0; i < items.length; i++) {
        if (_loop2()) break;
      }
    }
    animate() {
      this._pulse += 0.04;
      var pulseA = Math.max(0, Math.sin(this._pulse) * 0.045);
      var _iterator8 = _createForOfIteratorHelper(this.slots),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var slot = _step8.value;
          var diff = slot.targetArm - slot.arm;
          if (Math.abs(diff) > 0.01) {
            if (Math.abs(diff) > 2) {
              slot.arm += diff * 0.15;
            } else if (diff > 0) {
              slot.arm = Math.min(slot.arm + 0.8, slot.targetArm);
            } else {
              slot.arm = Math.max(slot.arm - 0.8, slot.targetArm);
            }
          }
          var pa = slot.equipped ? pulseA : 0;
          this._drawSlot(slot.gfx, slot.arm, slot.equipped, slot.hovered, pa);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    _setSlotIcon(slot, texture, item) {
      if (slot.icon) {
        slot.container.removeChild(slot.icon);
        slot.icon.destroy();
        slot.icon = null;
      }
      var icon = new PIXI.Sprite(texture);
      var scale;
      if (item.uiScale) {
        scale = item.uiScale;
      } else {
        var maxDim = this.half * 2 - 10;
        var tw = texture.width || icon.width || maxDim;
        var th = texture.height || icon.height || maxDim;
        scale = Math.max(1, Math.min(Math.floor(maxDim / tw), Math.floor(maxDim / th)));
      }
      icon.anchor.set(0.5, 0.5);
      icon.scale.set(scale);
      icon.x = 0;
      icon.y = 0;
      slot.container.addChild(icon);
      slot.icon = icon;
    }
  }

  class FPSDisplay {
    constructor(game) {
      this.game = game;
      this.fps = 0;
      this.frameCount = 0;
      this.lastTime = 0;
      this.text = new PIXI.Text({
        text: 'FPS: 0',
        style: {
          fontFamily: 'Arial',
          fontSize: 16,
          fill: 0x00ff00,
          align: 'right'
        }
      });
      this.text.x = this.game.app.screen.width - 100;
      this.text.y = 10;
      this.text.anchor.set(1, 0);
      this.text.visible = Config.DEBUG.SHOW_FPS;
      this.text.zIndex = 999;
      this.game.app.stage.addChild(this.text);
    }
    update() {
      this.text.visible = true;
      this.frameCount++;
      var currentTime = performance.now();
      if (currentTime - this.lastTime >= 1000) {
        this.fps = Math.round(this.frameCount * 1000 / (currentTime - this.lastTime));
        var memoryInfo = '';
        if (performance.memory) {
          var mem = performance.memory;
          var usedMB = Math.round(mem.usedJSHeapSize / 1024 / 1024);
          var totalMB = Math.round(mem.totalJSHeapSize / 1024 / 1024);
          memoryInfo = "Mem: ".concat(usedMB, "/").concat(totalMB, "MB");
        }
        var diagnostics = ["FPS: ".concat(this.fps), "Enemies: ".concat(this.game.enemies.size || this.game.enemies.length), "Particles: ".concat(this.game.particles.length), "Projectiles: ".concat(this.game.projectiles.length), memoryInfo];
        this.text.text = diagnostics.join(' | ');
        this.frameCount = 0;
        this.lastTime = currentTime;
        this.text.x = this.game.app.screen.width - 10;
      }
    }
  }

  class HealthBar {
    constructor(game) {
      this.game = game;
      this.width = 200;
      this.height = 20;
      this.border = 2;
      this.padding = 10;
      this.container = new PIXI.Container();
      this.container.zIndex = 200;
      this.bg = new PIXI.Graphics();
      this.bg.roundRect(0, 0, this.width, this.height, 4).fill({
        color: 0x333333
      });
      this.container.addChild(this.bg);
      this.fill = new PIXI.Graphics();
      this.container.addChild(this.fill);
      this.container.visible = Config.DEBUG.SHOW_HEALTHBAR;
      this.label = new PIXI.Text({
        text: 'DEBUG',
        style: {
          fontFamily: 'Arial',
          fontSize: 12,
          fill: 0xffffff
        }
      });
      this.label.x = 8;
      this.label.y = 4;
      this.container.addChild(this.label);

      // Health number
      this.amountText = new PIXI.Text({
        text: '80/80',
        style: {
          fontFamily: 'Arial',
          fontSize: 11,
          fill: 0xffffff,
          fontWeight: 'bold'
        }
      });
      this.amountText.anchor.set(1, 0);
      this.amountText.x = this.width - 4;
      this.amountText.y = 3;
      this.container.addChild(this.amountText);
      this.container.x = this.padding;
      this.container.y = this.padding;
      game.app.stage.addChild(this.container);
    }
    update() {
      var player = this.game.player;
      var ratio = Math.max(0, player.health / player.maxHealth);
      this.amountText.text = "".concat(Math.ceil(player.health), "/").concat(player.maxHealth);
      this.fill.clear();
      this.fill.roundRect(this.border, this.border, (this.width - this.border * 2) * ratio, this.height - this.border * 2, 3);
      if (ratio > 0.5) {
        this.fill.fill({
          color: 0x44cc44
        });
      } else if (ratio > 0.25) {
        this.fill.fill({
          color: 0xcccc44
        });
      } else {
        this.fill.fill({
          color: 0xcc4444
        });
      }
    }
    destroy() {
      this.container.destroy({
        children: true
      });
    }
  }

  class SoulMeter {
    constructor(game) {
      this.game = game;
      this.count = Config.SOUL.MAX_TIERS ;
      this.r = 44;
      this.a0 = -Math.PI / 2;
      this.sR = 9;
      this.ringR = this.r + this.sR + 3;
      this.container = new PIXI.Container();
      this.container.zIndex = 200;
      this.container.x = 78;
      this.container.y = 115;
      this.gfx = new PIXI.Graphics();
      this.glow = new PIXI.Graphics();
      this.container.addChild(this.glow);
      this.container.addChild(this.gfx);
      this._pulse = 0;
      this._prevTier = 0;
      this._prevTotalSoul = 0;
      this._tierFlash = 0;
      this._bursts = [];
      this._lossTimer = 0;
      this._lossIndex = -1;
      this._lossBursts = [];
      this._shards = [];
      this._lossRing = 0;
      this._hurtPulse = 0;
      this._voidVolume = 0;
      this._voidPurity = 0;
      this._debugTxt = new PIXI.Text({
        text: '',
        style: {
          fontFamily: 'monospace',
          fontSize: 10,
          fill: 0xffffff,
          align: 'left'
        }
      });
      this._debugTxt.visible = false;
      this._debugTxt.x = -40;
      this._debugTxt.y = 104;
      this.container.addChild(this._debugTxt);
      this._ringAngles = [];
      for (var i = 0; i < this.count; i++) {
        this._ringAngles.push(this.a0 + i * Math.PI * 2 / this.count);
      }
      this._ringPos = this._ringAngles.map(a => ({
        x: this.ringR * Math.cos(a),
        y: this.ringR * Math.sin(a)
      }));
      game.app.stage.addChild(this.container);
    }
    _hexPts(cx, cy, r, a0) {
      var pts = [];
      for (var i = 0; i < 6; i++) {
        var a = a0 + i * Math.PI / 3;
        pts.push(cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
      return pts;
    }
    _drawHex(g, cx, cy, r, a0, fillC, fillA, strokeC, strokeA, strokeW) {
      var pts = this._hexPts(cx, cy, r, a0);
      g.poly(pts);
      g.closePath();
      if (fillA > 0) g.fill({
        color: fillC,
        alpha: fillA
      });
      if (strokeW > 0) {
        g.poly(pts);
        g.closePath();
        g.stroke({
          width: strokeW,
          color: strokeC,
          alpha: strokeA
        });
      }
    }
    _fillPoly(cx, cy, r, ratio) {
      var sy = cy + r * (1 - ratio * 2);
      var pts = [];
      var verts = this._hexPts(cx, cy, r, this.a0);
      for (var i = 0; i < 6; i++) {
        var x1 = verts[i * 2],
          y1 = verts[i * 2 + 1];
        var j = (i + 1) % 6;
        var x2 = verts[j * 2],
          y2 = verts[j * 2 + 1];
        var in1 = y1 >= sy;
        var in2 = y2 >= sy;
        if (in1) {
          pts.push(x1, y1);
        }
        if (in1 !== in2) {
          var t = (sy - y1) / (y2 - y1);
          pts.push(x1 + t * (x2 - x1), sy);
        }
      }
      return pts;
    }
    update() {
      var p = this.game.player;
      if (!p) return;
      var tier = p.soulTier || 0;
      var cur = p.soul || 0;
      var max = Config.SOUL.MAX_SOUL;
      var ratio = Math.min(1, cur / max);
      var totalSoul = Math.max(0, Math.min(this.count * max, tier * max + cur));
      var soulUnits = totalSoul / max;
      var completeSlots = Math.min(this.count, Math.floor(soulUnits));
      var activeSlotRatio = soulUnits - completeSlots;
      this._voidVolume = p.voidVolume || 0;
      this._voidPurity = p.voidPurity || 0;
      if (totalSoul > this._prevTotalSoul + max * 0.75) {
        this._tierFlash = 1;
        this._spawnBurst();
        this.game.renderer.triggerShake(4);
      } else if (totalSoul < this._prevTotalSoul - max * 0.75) {
        this._lossTimer = 45;
        var lastOrder = Math.max(0, Math.min(this.count - 1, Math.ceil(this._prevTotalSoul / max) - 1));
        this._lossIndex = lastOrder < this.count - 1 ? lastOrder + 1 : 0;
        this._lossRing = 1;
        this._spawnLossBursts();
        this.game.renderer.triggerShake(8);
      }
      this._prevTier = tier;
      this._prevTotalSoul = totalSoul;
      if (p._damageFlashEnd && performance.now() < p._damageFlashEnd) {
        this._hurtPulse = 1;
      }
      this._hurtPulse *= 0.88;
      this._pulse += 0.03;
      var pv = Math.sin(this._pulse);
      var g = this.gfx;
      var gl = this.glow;
      g.clear();
      gl.clear();
      var full = soulUnits >= this.count - 0.005;
      var cx = 0,
        cy = 0;
      var r = this.r;
      var breath = full ? 1 + pv * 0.025 : 1 + pv * 0.008;
      var bR = r * breath;
      var intensity = ratio + (full ? pv * 0.10 : 0);
      if (this._tierFlash > 0.01) this._tierFlash *= 0.85;else this._tierFlash = 0;
      var flashA = this._tierFlash;
      if (this._lossTimer > 0) this._lossTimer -= 1;
      if (this._lossRing > 0.01) this._lossRing *= 0.92;else this._lossRing = 0;
      var lossP = this._lossTimer > 0 ? this._lossTimer / 45 : 0;
      var hurtA = this._hurtPulse * 0.4;

      // === GLOW HALO ===
      var haloA = full ? 0.50 + pv * 0.10 : 0.02 + intensity * 0.16 + flashA * 0.16;
      if (haloA > 0.01) {
        if (full) {
          this._drawHex(gl, cx, cy, bR + 22, this.a0, 0, 0, 0xd4b86a, haloA * 0.15, 14);
          this._drawHex(gl, cx, cy, bR + 16, this.a0, 0, 0, 0xe8c878, haloA * 0.25, 10);
        }
        this._drawHex(gl, cx, cy, bR + 14, this.a0, 0, 0, 0xd4b86a, haloA * 0.3, 10);
        this._drawHex(gl, cx, cy, bR + 9, this.a0, 0, 0, 0xe8c878, haloA * 0.5, 7);
        this._drawHex(gl, cx, cy, bR + 5, this.a0, 0, 0, 0xf0d890, haloA * 0.7, 4);
      }

      // === LOSS SHOCKWAVE ===
      if (this._lossRing > 0.01) {
        var wr = bR + (1 - this._lossRing) * 30;
        this._drawHex(gl, cx, cy, wr, this.a0, 0, 0, 0xfff5e0, this._lossRing * 0.12, 2);
        this._drawHex(g, cx, cy, wr, this.a0, 0, 0, 0xfff5e0, this._lossRing * 0.08, 1);
      }
      for (var i = 0; i < this.count; i++) {
        var hx = this._ringPos[i].x * (bR / this.r);
        var hy = this._ringPos[i].y * (bR / this.r);

        // Crown slot (index 0) uses the exact same lit / preview / empty
        // visuals as every other ring slot, just rendered a little larger.
        // It is the LAST slot to fill: the ring fills 1..count-1 first,
        // then the crown lights up last.
        var sz = i === 0 ? this.sR + 2 : this.sR;
        var rank = i === 0 ? this.count - 1 : i - 1;
        var lit = full || rank < completeSlots;
        var current = !full && rank === completeSlots && activeSlotRatio > 0.005;
        var fading = this._lossTimer > 0 && i === this._lossIndex;
        if (fading) {
          continue;
        }
        if (lit) {
          this._drawHex(gl, hx, hy, sz + 3, this.a0, 0, 0, 0xd4b86a, 0.04 + pv * 0.03, 2);
          this._drawHex(gl, hx, hy, sz + 1.5, this.a0, 0, 0, 0xfff0d0, 0.03 + pv * 0.02, 1.2);
          this._drawHex(g, hx, hy, sz, this.a0, 0xffffee, 0.85 + pv * 0.08, 0, 0, 0);
          this._drawHex(g, hx, hy, sz * 0.5, this.a0, 0xffffff, 0.35 + pv * 0.08, 0, 0, 0);
          this._drawHex(g, hx, hy, sz, this.a0, 0, 0, 0xffffee, 0.50 + pv * 0.08, 1.5);
        } else if (current) {
          var pa = 0.14 + activeSlotRatio * 0.46;
          this._drawHex(gl, hx, hy, sz + 3, this.a0, 0, 0, 0xe8c878, pa * 0.3, 2);
          this._drawHex(gl, hx, hy, sz + 1.5, this.a0, 0, 0, 0xfff0d0, pa * 0.2, 1.2);
          this._drawHex(g, hx, hy, sz, this.a0, 0xffffee, pa * 0.6, 0xffffee, pa * 0.35, 1);
          this._drawHex(g, hx, hy, sz * 0.5, this.a0, 0xffffff, pa * 0.25, 0, 0, 0);
        } else {
          this._drawHex(g, hx, hy, sz, this.a0, 0x181410, 0.25, 0x554a3a, 0.20, 0.8);
        }
      }

      // === VESSEL ===
      var vFlash = lossP > 0.5 ? (lossP - 0.5) * 2 * 0.3 : 0;
      this._drawHex(g, cx, cy, bR, this.a0, 0x060402, 0.40 + vFlash * 0.2 + hurtA * 0.15, 0, 0, 0);
      this._drawHex(gl, cx, cy, bR + 3, this.a0, 0, 0, 0xfff0d0, (0.04 + intensity * 0.12 + flashA * 0.10 + hurtA * 0.25) * 0.5, 3);
      var vSA = Math.min(1, 0.10 + intensity * 0.35 + flashA * 0.35 + hurtA * 0.5 + (full ? 0.40 : 0));
      this._drawHex(g, cx, cy, bR, this.a0, 0, 0, 0xffffee, vSA, full ? 3 : 2);

      // === SOUL FILL ===
      if (ratio > 0.005) {
        var fp = this._fillPoly(cx, cy, bR, ratio);
        if (fp.length >= 6) {
          var egl = this._fillPoly(cx, cy, bR + 3, ratio);
          if (egl.length >= 6) {
            gl.poly(egl);
            gl.closePath();
            gl.fill({
              color: 0xfff0d0,
              alpha: (0.04 + intensity * 0.10 + flashA * 0.08) * 0.35
            });
          }
          for (var l = 0; l < 4; l++) {
            var lr = bR * (1 - l * 0.15);
            var lp = this._fillPoly(cx, cy, lr, ratio);
            if (lp.length < 6) break;
            var la = (0.30 + intensity * 0.40 + flashA * 0.12 + hurtA * 0.3) * (1 - l * 0.10);
            g.poly(lp);
            g.closePath();
            g.fill({
              color: 0xfff0d0,
              alpha: la
            });
          }
          var bfp = this._fillPoly(cx, cy, bR * 0.55, ratio);
          if (bfp.length >= 6) {
            g.poly(bfp);
            g.closePath();
            g.fill({
              color: 0xffffee,
              alpha: 0.20 + intensity * 0.35 + flashA * 0.10 + hurtA * 0.25
            });
          }
          var cfp = this._fillPoly(cx, cy, bR * 0.22, ratio);
          if (cfp.length >= 6) {
            g.poly(cfp);
            g.closePath();
            g.fill({
              color: 0xffffee,
              alpha: 0.35 + intensity * 0.45 + flashA * 0.12 + hurtA * 0.2
            });
          }
          var bzfp = this._fillPoly(cx, cy, bR * 0.05, ratio);
          if (bzfp.length >= 6) {
            g.poly(bzfp);
            g.closePath();
            g.fill({
              color: 0xffffff,
              alpha: 0.50 + intensity * 0.40 + flashA * 0.15 + hurtA * 0.15
            });
          }
          var sy = cy + bR * (1 - ratio * 2);
          var hw = bR * 0.8660254;
          var ady = Math.abs(sy - cy);
          var halfW = ady <= bR / 2 ? hw : hw * Math.max(0, (bR - ady) / (bR / 2));
          var sa = full ? 0.60 + pv * 0.08 + 0.30 : 0.25 + ratio * 0.40 + flashA * 0.20 + hurtA * 0.3;
          g.moveTo(cx - halfW, sy);
          g.lineTo(cx + halfW, sy);
          g.stroke({
            width: full ? 4 : 1.5 + ratio * 1.5,
            color: 0xffffee,
            alpha: sa
          });
          if (full) {
            g.moveTo(cx - halfW, sy);
            g.lineTo(cx + halfW, sy);
            g.stroke({
              width: 6,
              color: 0xfff0d0,
              alpha: sa * 0.3
            });
          }
          if (ratio < 0.995 && fp.length >= 6) {
            var ea = full ? 0.80 + pv * 0.08 : 0.30 + ratio * 0.45 + flashA * 0.20 + hurtA * 0.25;
            g.poly(fp);
            g.closePath();
            g.stroke({
              width: full ? 2 : 1.2,
              color: 0xffffee,
              alpha: ea
            });
          }
        }
      }

      // === BURST PARTICLES ===
      var _iterator = _createForOfIteratorHelper(this._bursts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var b = _step.value;
          g.circle(b.x, b.y, b.size);
          g.fill({
            color: 0xffffee,
            alpha: b.alpha
          });
          gl.circle(b.x, b.y, b.size + 2);
          gl.fill({
            color: 0xe8d48a,
            alpha: b.alpha * 0.3
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._updateBursts();

      // === LOSS BURST PARTICLES ===
      var _iterator2 = _createForOfIteratorHelper(this._lossBursts),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _b = _step2.value;
          g.circle(_b.x, _b.y, _b.size);
          g.fill({
            color: _b.color,
            alpha: _b.alpha
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this._updateLossBursts();

      // === SHATTER SHARDS ===
      var _iterator3 = _createForOfIteratorHelper(this._shards),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var s = _step3.value;
          var cos = Math.cos(s.rot),
            sin = Math.sin(s.rot);
          var ax = s.x + s.v0x * cos - s.v0y * sin;
          var ay = s.y + s.v0x * sin + s.v0y * cos;
          var bx = s.x + s.v1x * cos - s.v1y * sin;
          var by = s.y + s.v1x * sin + s.v1y * cos;
          var cx2 = s.x + s.v2x * cos - s.v2y * sin;
          var cy2 = s.y + s.v2x * sin + s.v2y * cos;
          g.moveTo(ax, ay);
          g.lineTo(bx, by);
          g.lineTo(cx2, cy2);
          g.closePath();
          g.fill({
            color: s.color,
            alpha: s.alpha
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this._updateShards();

      // === DEBUG OVERLAY (K to toggle) ===
      if (this._debugTxt.visible) {
        this._debugTxt.text = "[DEBUG]\n" + "SOUL: ".concat(Math.round(totalSoul), "  (").concat(soulUnits.toFixed(2), " slots, ").concat(Math.round(ratio * 100), "%)") + (this._voidVolume > 0.005 ? "\nVOID: ".concat((this._voidVolume * 100).toFixed(0), "%  purity ").concat((this._voidPurity * 100).toFixed(0), "%") : '');
      }
    }
    _spawnBurst() {
      for (var i = 0; i < 14; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 1.5 + Math.random() * 3;
        this._bursts.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 2,
          alpha: 0.6 + Math.random() * 0.4,
          life: 1,
          decay: 0.015 + Math.random() * 0.025
        });
      }
    }
    _updateBursts() {
      for (var i = this._bursts.length - 1; i >= 0; i--) {
        var b = this._bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.97;
        b.vy *= 0.97;
        b.life -= b.decay;
        b.alpha = Math.max(0, b.alpha - b.decay * 0.6);
        b.size *= 0.98;
        if (b.life <= 0 || b.alpha <= 0) {
          this._bursts.splice(i, 1);
        }
      }
    }
    _spawnLossBursts() {
      for (var i = 0; i < 20; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 0.8 + Math.random() * 2;
        var shade = 0.4 + Math.random() * 0.3;
        var c = Math.floor(shade * 0xaa) * 0x010101 + 0x444444;
        this._lossBursts.push({
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 2.5,
          color: c,
          alpha: 0.5 + Math.random() * 0.3,
          life: 1,
          decay: 0.01 + Math.random() * 0.015
        });
      }
      this._spawnShards(this._lossIndex);
    }
    _updateLossBursts() {
      for (var i = this._lossBursts.length - 1; i >= 0; i--) {
        var b = this._lossBursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.98;
        b.vy *= 0.98;
        b.life -= b.decay;
        b.alpha = Math.max(0, b.alpha - b.decay * 0.5);
        b.size *= 0.995;
        if (b.life <= 0 || b.alpha <= 0) {
          this._lossBursts.splice(i, 1);
        }
      }
    }
    _spawnShards(idx) {
      idx = Math.max(0, Math.min(this.count - 1, idx));
      var pv = Math.sin(this._pulse);
      var breath = 1 + pv * 0.008;
      var bR = this.r * breath;
      var hx = this._ringPos[idx].x * (bR / this.r);
      var hy = this._ringPos[idx].y * (bR / this.r);
      var verts = this._hexPts(hx, hy, this.sR, this.a0);
      for (var j = 0; j < 6; j++) {
        var v1x = verts[j * 2] - hx;
        var v1y = verts[j * 2 + 1] - hy;
        var v2x = verts[(j + 1) % 6 * 2] - hx;
        var v2y = verts[(j + 1) % 6 * 2 + 1] - hy;
        var midA = this.a0 + (j + 0.5) * Math.PI / 3;
        var speed = 0.8 + Math.random() * 1.5;
        this._shards.push({
          x: hx,
          y: hy,
          vx: Math.cos(midA) * speed,
          vy: Math.sin(midA) * speed,
          v0x: 0,
          v0y: 0,
          v1x,
          v1y,
          v2x,
          v2y,
          rot: 0,
          rotV: (Math.random() - 0.5) * 0.12,
          color: 0xffffee,
          alpha: 0.6 + Math.random() * 0.3,
          life: 1,
          decay: 0.018 + Math.random() * 0.01
        });
      }
    }
    _updateShards() {
      for (var i = this._shards.length - 1; i >= 0; i--) {
        var s = this._shards[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.rot += s.rotV;
        s.life -= s.decay;
        s.alpha = Math.max(0, s.alpha - s.decay * 0.6);
        var t = Math.min(1, s.life * 1.5);
        var wr = 0xff,
          wg = 0xee,
          wb = 0xee;
        var gr = 0x88,
          gg = 0x7a,
          gb = 0x68;
        var r = wr * t + gr * (1 - t) | 0;
        var g = wg * t + gg * (1 - t) | 0;
        var b = wb * t + gb * (1 - t) | 0;
        s.color = r << 16 | g << 8 | b;
        if (s.life <= 0 || s.alpha <= 0) {
          this._shards.splice(i, 1);
        }
      }
    }
    destroy() {
      this.container.destroy({
        children: true
      });
    }
  }

  // weaponRenderer.js
  class WeaponRenderer {
    constructor(game) {
      this.game = game;
      this.weaponSprite = null;
      this.currentWeapon = null;

      // CHANGED: Add to player container instead of app stage
      // This ensures proper camera transformation
      this.container = new PIXI.Container();
      this.game.renderer.playerContainer.addChild(this.container); // Changed this line

      this.game.player.inventory.onEquipmentChange(() => this.updateWeapon());
      this.updateWeapon();
    }
    updateWeapon() {
      var equippedItem = this.game.player.inventory.getEquippedItem();

      // Unequipped or wrong type → remove sprite
      if (!equippedItem || equippedItem.type !== "ranged") {
        this._removeWeaponSprite();
        this.currentWeapon = null;
        return;
      }

      // Same weapon → just reposition
      if (this.currentWeapon && this.currentWeapon.id === equippedItem.id) {
        this.updatePosition();
        return;
      }

      // Remove old sprite
      this._removeWeaponSprite();
      var texture = loadTexture(equippedItem.weaponTexture);
      if (!texture) {
        console.warn("[WeaponRenderer] Missing texture for ".concat(equippedItem.id));
        return;
      }
      onTextureReady(texture, readyTexture => {
        var _this$game$player$inv;
        if (((_this$game$player$inv = this.game.player.inventory.getEquippedItem()) === null || _this$game$player$inv === void 0 ? void 0 : _this$game$player$inv.id) !== equippedItem.id) {
          return;
        }
        this._createWeaponSprite(readyTexture, equippedItem);
      });
    }
    _createWeaponSprite(texture, equippedItem) {
      this.weaponSprite = new PIXI.Sprite(texture);
      this.weaponSprite.anchor.set(0.5);

      // Scaling
      if (equippedItem.weaponScale) {
        this.weaponSprite.scale.set(equippedItem.weaponScale);
      } else {
        var maxSize = Math.max(this.weaponSprite.width, this.weaponSprite.height);
        var scale = Config.TILE.HEIGHT * 1.5 / maxSize;
        this.weaponSprite.scale.set(scale);
      }
      this.weaponSprite.texture.source.scaleMode = 'nearest';
      this.container.addChild(this.weaponSprite);
      this.currentWeapon = equippedItem;
      this.updatePosition();
    }
    _removeWeaponSprite() {
      if (!this.weaponSprite) return;

      // Never destroy cached textures — only destroy the sprite
      this.weaponSprite.destroy({
        children: true,
        texture: false
      });
      this.container.removeChild(this.weaponSprite);
      this.weaponSprite = null;
    }
    updatePosition() {
      if (!this.weaponSprite || !this.currentWeapon) return;

      // CHANGED: Position relative to player center (0,0 in player container)
      // The player container is already centered by IsometricRenderer
      var playerScreenX = 0;
      var playerScreenY = Config.CAMERA.OFFSET_Y / Config.CAMERA.ZOOM; // Adjust for camera offset

      var mouseX = this.game.player.mouseScreen.x;
      var mouseY = this.game.player.mouseScreen.y;
      var angle = Math.atan2(mouseY, mouseX);
      var distance = this.currentWeapon.type === "ranged" ? 15 : 20;
      var offsetX = Math.cos(angle) * distance;
      var offsetY = Math.sin(angle) * distance;
      this.weaponSprite.position.set(playerScreenX + offsetX, playerScreenY + offsetY);
      this.weaponSprite.rotation = angle;
      var weaponScale = this.currentWeapon.weaponScale || 1.5;
      this.weaponSprite.scale.set(weaponScale);
    }
    update() {
      if (this.weaponSprite && this.currentWeapon) {
        this.updatePosition();
      }
    }
  }

  // daynightCycle.js
  // Lightweight DayNightCycle for PIXI - piecewise-linear (precomputed table) RGB multipliers + intensity overlay
  // Usage: import { DayNightCycle } from './daynightCycle.js';
  // In Game constructor: this.dayNight = new DayNightCycle(this, { dayLength: 600, tableSteps: 360 });
  // In gameLoop ticker callback: this.dayNight.step(delta);

  class DayNightCycle {
    constructor(game) {
      var _opts$dayLength, _opts$tableSteps;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.game = game;
      this.app = game.app; // PIXI.Application
      this.dayLength = (_opts$dayLength = opts.dayLength) !== null && _opts$dayLength !== void 0 ? _opts$dayLength : 600; // seconds per full day
      this.steps = (_opts$tableSteps = opts.tableSteps) !== null && _opts$tableSteps !== void 0 ? _opts$tableSteps : 360; // precomputed table size (no per-frame lerp required)

      // Internal time in seconds
      this.time = 0;

      // For tracking in-game time display
      this.lastDisplayedSecond = -1;

      // Build keyframes (time fraction 0..1):
      //   rgb/alpha   → multiply overlay (darkens, good for night)
      //   screenRGB/screenAlpha → screen overlay (brightens, good for golden hours)
      // Night: multiply only (cool blue). Dawn/dusk: screen only (warm gold).
      // Transitions: both partially active, natural crossfade.
      this.keyframes = [
      // ===== NIGHT: deep blue multiply only =====
      {
        t: 0.000,
        rgb: [0.48, 0.55, 1.10],
        alpha: 0.70,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x030610
      }, {
        t: 0.083,
        rgb: [0.48, 0.55, 1.10],
        alpha: 0.70,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x030610
      }, {
        t: 0.150,
        rgb: [0.50, 0.55, 1.08],
        alpha: 0.60,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x060a18
      }, {
        t: 0.180,
        rgb: [0.55, 0.58, 1.02],
        alpha: 0.45,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x0a1020
      },
      // ===== DAWN GAP: multiply fades to 0, screen stays off =====
      {
        t: 0.195,
        rgb: [0.68, 0.66, 0.95],
        alpha: 0.15,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x1a1a2a
      }, {
        t: 0.207,
        rgb: [0.90, 0.85, 0.88],
        alpha: 0.00,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x2a2835
      },
      // ===== GOLDEN DAWN: screen overlay, deep amber =====
      {
        t: 0.215,
        rgb: [1.00, 0.98, 0.95],
        alpha: 0.00,
        screenRGB: [1.00, 0.55, 0.15],
        screenAlpha: 0.14,
        bg: 0x271610
      }, {
        t: 0.229,
        rgb: [1.00, 0.98, 0.95],
        alpha: 0.00,
        screenRGB: [1.00, 0.50, 0.12],
        screenAlpha: 0.20,
        bg: 0x3a2014
      }, {
        t: 0.250,
        rgb: [1.00, 1.00, 0.98],
        alpha: 0.00,
        screenRGB: [1.00, 0.60, 0.25],
        screenAlpha: 0.14,
        bg: 0x24180e
      }, {
        t: 0.280,
        rgb: [1.00, 1.00, 1.00],
        alpha: 0.00,
        screenRGB: [1.00, 0.85, 0.60],
        screenAlpha: 0.03,
        bg: 0x141210
      },
      // ===== DAY: nothing =====
      {
        t: 0.310,
        rgb: [1.00, 1.00, 1.00],
        alpha: 0.00,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x0d0b08
      }, {
        t: 0.333,
        rgb: [1.00, 1.00, 1.00],
        alpha: 0.00,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x0d0b08
      }, {
        t: 0.667,
        rgb: [1.00, 1.00, 1.00],
        alpha: 0.00,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x0d0b08
      },
      // ===== GOLDEN DUSK: screen overlay =====
      {
        t: 0.700,
        rgb: [1.00, 1.00, 1.00],
        alpha: 0.00,
        screenRGB: [1.00, 0.85, 0.60],
        screenAlpha: 0.03,
        bg: 0x16120d
      }, {
        t: 0.720,
        rgb: [1.00, 0.98, 0.95],
        alpha: 0.00,
        screenRGB: [1.00, 0.55, 0.15],
        screenAlpha: 0.15,
        bg: 0x2a1c12
      }, {
        t: 0.750,
        rgb: [1.00, 0.98, 0.95],
        alpha: 0.00,
        screenRGB: [1.00, 0.48, 0.10],
        screenAlpha: 0.20,
        bg: 0x2a190e
      }, {
        t: 0.770,
        rgb: [0.98, 0.95, 0.95],
        alpha: 0.00,
        screenRGB: [0.85, 0.55, 0.25],
        screenAlpha: 0.06,
        bg: 0x1e1410
      },
      // ===== DUSK GAP: screen fades, multiply still off =====
      {
        t: 0.785,
        rgb: [0.95, 0.90, 0.92],
        alpha: 0.00,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x191418
      },
      // ===== NIGHT: multiply returns =====
      {
        t: 0.795,
        rgb: [0.80, 0.72, 0.92],
        alpha: 0.25,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x1e1230
      }, {
        t: 0.833,
        rgb: [0.58, 0.62, 1.05],
        alpha: 0.55,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x0e0a22
      }, {
        t: 0.875,
        rgb: [0.48, 0.55, 1.10],
        alpha: 0.65,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x050812
      }, {
        t: 0.958,
        rgb: [0.48, 0.55, 1.10],
        alpha: 0.70,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x030610
      }, {
        t: 1.000,
        rgb: [0.48, 0.55, 1.10],
        alpha: 0.70,
        screenRGB: [1, 1, 1],
        screenAlpha: 0.00,
        bg: 0x030610
      }];

      // Precompute table of length this.steps containing {r,g,b,alpha,bg}
      this.table = new Array(this.steps);
      this._buildTable();

      // Current sampled value
      this.current = {
        r: 1,
        g: 1,
        b: 1,
        alpha: 0,
        sr: 1,
        sg: 1,
        sb: 1,
        screenAlpha: 0,
        bg: 0xffffff
      };

      // Create full-screen multiply overlay sprite (darkens, used at night)
      this.overlay = new PIXI.Sprite(PIXI.Texture.WHITE);
      this.overlay.anchor.set(0, 0);
      this.overlay.width = this.app.renderer.width;
      this.overlay.height = this.app.renderer.height;
      this.overlay.blendMode = 'multiply';
      this.overlay.zIndex = 50;
      this.overlay.interactive = false;
      this.overlay.renderable = true;
      this.overlay.autoResize = false;

      // Create full-screen screen overlay sprite (brightens, used at dawn/dusk golden hours)
      this.screenOverlay = new PIXI.Sprite(PIXI.Texture.WHITE);
      this.screenOverlay.anchor.set(0, 0);
      this.screenOverlay.width = this.app.renderer.width;
      this.screenOverlay.height = this.app.renderer.height;
      this.screenOverlay.blendMode = 'screen';
      this.screenOverlay.zIndex = 51; // above multiply overlay
      this.screenOverlay.interactive = false;
      this.screenOverlay.renderable = true;
      this.screenOverlay.autoResize = false;

      // Place overlays above regular world rendering
      this.app.stage.addChild(this.overlay);
      this.app.stage.addChild(this.screenOverlay);

      // Listen for resize to keep overlays covering screen
      window.addEventListener('resize', () => this._onResize());

      // initialisely sample
      this._sampleAndApply(0);
    }
    _onResize() {
      this.overlay.width = this.app.renderer.width;
      this.overlay.height = this.app.renderer.height;
      this.screenOverlay.width = this.app.renderer.width;
      this.screenOverlay.height = this.app.renderer.height;
    }
    _lerp(a, b, t) {
      return a + (b - a) * t;
    }
    _buildTable() {
      // For each table index compute time fraction and find which keyframe segment it lies in,
      // then linearly interpolate rgb + alpha + bg across that segment (cheap, done once)
      for (var i = 0; i < this.steps; i++) {
        var tf = i / this.steps; // fraction 0..(1-1/steps)
        // find segment
        var a = this.keyframes[0];
        var b = null;
        for (var k = 1; k < this.keyframes.length; k++) {
          if (tf <= this.keyframes[k].t) {
            b = this.keyframes[k];
            break;
          }
          a = this.keyframes[k];
        }
        if (!b) {
          b = this.keyframes[this.keyframes.length - 1];
        }
        var segT = (tf - a.t) / (b.t - a.t || 1);
        var r = this._lerp(a.rgb[0], b.rgb[0], segT);
        var g = this._lerp(a.rgb[1], b.rgb[1], segT);
        var bl = this._lerp(a.rgb[2], b.rgb[2], segT);
        var alpha = this._lerp(a.alpha, b.alpha, segT);
        var sr = this._lerp(a.screenRGB[0], b.screenRGB[0], segT);
        var sg = this._lerp(a.screenRGB[1], b.screenRGB[1], segT);
        var sb = this._lerp(a.screenRGB[2], b.screenRGB[2], segT);
        var screenAlpha = this._lerp(a.screenAlpha, b.screenAlpha, segT);
        // background color we interpolate as integer RGB channels
        var a_bg = a.bg;
        var b_bg = b.bg;
        var aR = a_bg >> 16 & 0xff,
          aG = a_bg >> 8 & 0xff,
          aB = a_bg & 0xff;
        var bR = b_bg >> 16 & 0xff,
          bG = b_bg >> 8 & 0xff,
          bB = b_bg & 0xff;
        var outR = Math.round(this._lerp(aR, bR, segT));
        var outG = Math.round(this._lerp(aG, bG, segT));
        var outB = Math.round(this._lerp(aB, bB, segT));
        var bgInt = outR << 16 | outG << 8 | outB;
        this.table[i] = {
          r,
          g,
          b: bl,
          alpha,
          sr,
          sg,
          sb,
          screenAlpha,
          bg: bgInt
        };
      }
    }
    _sampleAndApply(stepIndex) {
      var e = this.table[stepIndex % this.steps];
      this.current.r = e.r;
      this.current.g = e.g;
      this.current.b = e.b;
      this.current.alpha = e.alpha;
      this.current.sr = e.sr;
      this.current.sg = e.sg;
      this.current.sb = e.sb;
      this.current.screenAlpha = e.screenAlpha;
      this.current.bg = e.bg;

      // Apply multiply overlay (night darkness)
      var mulHex = (Math.round(e.r * 255) & 0xff) << 16 | (Math.round(e.g * 255) & 0xff) << 8 | Math.round(e.b * 255) & 0xff;
      this.overlay.tint = mulHex;
      this.overlay.alpha = e.alpha;

      // Apply screen overlay (golden hour glow)
      var scrHex = (Math.round(e.sr * 255) & 0xff) << 16 | (Math.round(e.sg * 255) & 0xff) << 8 | Math.round(e.sb * 255) & 0xff;
      this.screenOverlay.tint = scrHex;
      this.screenOverlay.alpha = e.screenAlpha;

      // Update renderer background to match sky tint (subtle)
      this.app.renderer.backgroundColor = e.bg;
    }

    // Helper method to format time for display
    _formatTime() {
      // Calculate hours and minutes based on day progress
      var dayProgress = this.time / this.dayLength;
      var totalMinutes = 24 * 60 * dayProgress;
      var hours = Math.floor(totalMinutes / 60) % 24;
      var minutes = Math.floor(totalMinutes % 60);

      // Determine period (AM/PM)
      var period = hours >= 12 ? 'PM' : 'AM';
      var displayHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

      return "".concat(displayHours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), " ").concat(period);
    }
    step(delta) {
      // delta is tick delta (frames) from PIXI.ticker; convert to seconds using ticker.deltaMS
      var dt = this.game.app.ticker.deltaMS / 1000 * (delta || 1);
      this.time = (this.time + dt) % this.dayLength;
      var dayProgress = this.time / this.dayLength; // 0..1
      var idx = Math.floor(dayProgress * this.steps) % this.steps;
      this._sampleAndApply(idx);

      // Display time in console every in-game second
      var currentSecond = Math.floor(this.time);
      if (currentSecond !== this.lastDisplayedSecond) {
        this.lastDisplayedSecond = currentSecond;
        console.log("Game Time: ".concat(this._formatTime()));
      }
    }

    // Utility to get current values for shader or other systems
    getCurrentMultiplier() {
      return {
        r: this.current.r,
        g: this.current.g,
        b: this.current.b,
        alpha: this.current.alpha,
        sr: this.current.sr,
        sg: this.current.sg,
        sb: this.current.sb,
        screenAlpha: this.current.screenAlpha
      };
    }

    // optional: allow setting time of day programmatically (seconds)
    setTimeSeconds(sec) {
      this.time = (sec % this.dayLength + this.dayLength) % this.dayLength;
      var idx = Math.floor(this.time / this.dayLength * this.steps) % this.steps;
      this._sampleAndApply(idx);
    }
    shiftHours(n) {
      var hourSec = this.dayLength / 24;
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

  // watermark.js — launch credit + cosmetic UI (splash, keybind toast, changelog).
  // The domain tripwire + hardening logic moved to src/guard.js (see there): the
  // game now requires window.__guardian / window.__guardRef at boot, and the main
  // bundle&rsquo;s integrity is verified by the guard. This file is purely presentational.

  // ------------------------------------------------------------- launch credit
  // One quiet lore line under the title on each boot, drawn at random. Mirrors
  // the redirect page's loading copy so the two stay in the same voice. Taking a
  // face-value-wisdom line and hiding a mechanical truth behind it — see it.
  var SPLASH_WORDS = ["entropy never stops, so neither can you", "keep your patience when suffering asks for it", "only one of you remembers the wrong turn", "lily maru cuts neither too much nor too little", "matter is condensed soul given lasting form", "holding balance is harder than finding it", "soul condenses where density is made", "light settles where soul grows dense", "a wrong turn remembered need not be repeated", "the end can be refused quietly", "what is held together can still be moving", "the void is felt where soul grows sparse", "form follows the soul that holds it", "some wounds heal before they are forgotten", "patience is easier to keep than to recover", "equilibrium is kept not found", "condensing soul into density", "reversing entropy", "settling light into form", "holding soul and void in balance", "remembering what the soul already survived", "the second chance remembers what you cannot undo", "too much breaks what too little cannot hold", "a steady hand leaves room for balance", "the soul holds what the body cannot", "what survives the storm need not remain dark"];
  function _pickSplashWord() {
    return SPLASH_WORDS[Math.floor(Math.random() * SPLASH_WORDS.length)];
  }

  // Act-II soul veil wait lines: one is frozen into the ivory itself while the
  // gold intro recedes, so the hold reads as "still gathering", never as a dead
  // frame. Borrowed from the same lore voice as the intro words.
  var SOUL_WAIT_WORDS = ["so many ways to hold balance", "gathering what the ground remembers", "soul light condensing into a self", "unstilling the stillness, gently", "the air is learning your footstep", "every signal faint but on its way", "the veil is a lens, not a wall"];
  var _veilPhrase = "";
  function _pickWaitWord() {
    return SOUL_WAIT_WORDS[Math.floor(Math.random() * SOUL_WAIT_WORDS.length)];
  }

  // Tracks the active splash element so dismissSplash() can reach it.
  var _splashEl = null;
  // Whether the CSS animation has already finished before the game was ready.
  var _splashCssEnded = false;
  // Whether the game has already called dismissSplash() before CSS ended.
  var _dismissCalled = false;
  // Whether the splash fade-out (and thus the toast reveal) has begun.
  var _revealStarted = false;
  // The frozen Act-II phrase, painted directly onto the ivory canvas so the ink
  // that erases the veil takes the text with it — no DOM overlay to fade out.
  var _splashCanvas = null;
  function createSplash() {
    try {
      if (typeof document === "undefined") return;
      if (document.getElementById("equilibrium-splash")) return;
      var el = document.createElement("div");
      el.id = "equilibrium-splash";
      _splashEl = el;
      var title = document.createElement("div");
      title.className = "splash-title";
      title.textContent = "EQUILIBRIUM";
      var ornament = document.createElement("div");
      ornament.className = "splash-ornament";
      ornament.textContent = "\u25C8";
      var quote = document.createElement("div");
      quote.className = "splash-quote";
      quote.textContent = _pickSplashWord();
      var credit = document.createElement("div");
      credit.className = "splash-credit";
      credit.textContent = "made with care \xB7 by AIGsniper";
      el.appendChild(title);
      el.appendChild(ornament);
      el.appendChild(quote);
      el.appendChild(credit);
      for (var i = 0; i < 18; i++) {
        var mote = document.createElement("span");
        mote.className = "splash-mote";
        var size = 3 + Math.random() * 5;
        var curl = -28 + Math.random() * 56;
        var drift = -18 + Math.random() * 36;
        mote.style.width = size + "px";
        mote.style.height = size + "px";
        mote.style.setProperty("--curl", curl + "px");
        mote.style.setProperty("--drift", drift + "px");
        mote.style.left = 4 + Math.random() * 92 + "%";
        mote.style.top = 24 + Math.random() * 66 + "%";
        // Staggered negative delays so the infinite ember drift never
        // synchronises into a visible beat; duration jitter per mote.
        mote.style.animationDuration = 3.0 + Math.random() * 2.2 + "s";
        mote.style.animationDelay = (-Math.random() * 6).toFixed(2) + "s";
        el.appendChild(mote);
      }

      // Two counter-rotating conic "orbit arcs" tracing the emblem circle —
      // pure decorative motion so the veil keeps turning while booting.
      for (var _i = 0; _i < 2; _i++) {
        var orbit = document.createElement("span");
        orbit.className = "splash-orbit" + (_i === 1 ? " splash-orbit--reverse" : "");
        orbit.style.animationDelay = (_i === 1 ? -7 : 0) + "s";
        el.appendChild(orbit);
      }

      // ---- Act II: the soul veil -----------------------------------------
      // A bright spirit-white canvas waits over the dark while booting goes
      // on, with a frozen lore phrase painted into the ivory itself so the
      // hold never reads as dead. When the game is ready, the ink of the real
      // world blooms in: organic blotches seep and expand from the middle
      // (like eyes opening) and the ivory — phrase and all — dissolves. The
      // canvas is created now (invisible, opacity 0) so enterSoulVeil() only
      // has to flip classes.
      var soul = document.createElement("div");
      soul.className = "splash-soul";
      var canvas = document.createElement("canvas");
      canvas.className = "splash-canvas";
      _splashCanvas = canvas;
      soul.appendChild(canvas);
      _veilPhrase = _pickWaitWord();
      el.appendChild(soul);
      (document.body || document.documentElement).appendChild(el);

      // When the CSS intro animation ends the splash holds at opacity 1. If
      // the game still isn't ready we hand off to Act II (enterSoulVeil: the
      // gold recedes under an ivory soul light and the frozen phrase);
      // if the game was already ready, the burst happens immediately.
      // Guarded on e.target === el: the splash motes run their own shorter
      // animations and their animationend events bubble up to this element,
      // which would otherwise end the intro prematurely.
      el.addEventListener("animationend", e => {
        if (e.target !== el) return;
        _splashCssEnded = true;
        if (_dismissCalled) {
          // Game was already ready — burst out immediately.
          _doFadeOutSplash(el);
        } else {
          // Boot still in progress — soften into the soul veil while we wait.
          _enterSoulVeil(el);
        }
      });
    } catch (e) {
      // never let a cosmetic overlay block startup
    }
  }

  // Called by game.js once the game is fully initialised and the first frame is
  // about to render. If the CSS animation is already done, fades out right away;
  // otherwise sets a flag so animationend handles it.
  function dismissSplash() {
    try {
      _dismissCalled = true;
      if (_splashCssEnded && _splashEl) {
        _doFadeOutSplash(_splashEl);
      }
      // If CSS hasn't ended yet, the animationend handler will call
      // _doFadeOutSplash once it fires.
    } catch (e) {/* cosmetic — never block */}
  }

  // Final dismissal: the bright spirit-white canvas blooms the ink of the real
  // world in from the middle (organic blotches unseal the screen like eyes
  // opening), then the residue disperses into thick soul-mote discs drifting
  // upward, until the veil is fully transparent and gets removed. Nothing flies
  // outward.
  function _doFadeOutSplash(el) {
    try {
      if (!el || !el.parentNode) return;
      _revealStarted = true;
      // The ivory is about to be painted fully opaque by reveal.start(), so
      // the splash can go see-through immediately and the backdrop can drop:
      // there is nothing to flash — the white seals the game before the ink
      // starts erasing, revealing it through the blotches.
      el.classList.add("splash-veil");
      el.classList.add("splash-open");
      // Snap the ivory to full opacity (no 1.3s fade) so the game is sealed
      // the instant the reveal begins, not slowly exposed beneath it.
      var soul = _splashCanvas && _splashCanvas.parentNode;
      if (soul) {
        soul.style.transition = "none";
        soul.style.opacity = "1";
      }
      var canvas = _splashCanvas;
      var reveal = null;
      if (canvas) {
        reveal = new _InkBloomReveal(canvas);
        reveal.start();
      }
      _maybeRevealToast();
      _maybeShowGuardianInterception();
      // The cascade takes ~6.4s: from a single slow droplet, pooling, then
      // a voluminous pour soaking outward and the ivory dissolving. Remove
      // just after it finishes.
      window.setTimeout(() => {
        if (reveal) reveal.finish();
        if (el.parentNode) el.parentNode.removeChild(el);
        _splashEl = null;
        _splashCanvas = null;
      }, 6400);
    } catch (e) {/* cosmetic */}
  }
  function _paintVeilIvory(canvas) {
    try {
      if (!canvas) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      var ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#fffffd");
      g.addColorStop(0.55, "#fffaf0");
      g.addColorStop(1, "#efe9dd");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      var v = ctx.createRadialGradient(w / 2, h * 0.42, Math.min(w, h) * 0.1, w / 2, h / 2, Math.max(w, h) * 0.72);
      v.addColorStop(0, "rgba(255,255,255,0)");
      v.addColorStop(1, "rgba(150,134,104,0.10)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
      _paintVeilPhrase(ctx, w, h);
    } catch (e) {/* cosmetic */}
  }

  // The frozen wait phrase, painted into the ivory itself so the ink that erases
  // the veil dissolves the text along with the white — no DOM layer to fade.
  function _paintVeilPhrase(ctx, w, h) {
    try {
      var phrase = _veilPhrase || "";
      if (!phrase) return;
      var fontSize = Math.min(16, Math.max(13, w * 0.019));
      var maxW = Math.min(560, w * 0.84);
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.font = "italic " + fontSize + "px 'Palatino Linotype', 'Book Antiqua', Georgia, 'Times New Roman', serif";
      ctx.letterSpacing = fontSize * 0.1 + "px";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(92, 78, 60, 0.72)";
      ctx.shadowColor = "rgba(255, 252, 240, 0.8)";
      ctx.shadowBlur = 10;
      var words = phrase.split(/\s+/);
      var lines = [];
      var line = "";
      for (var i = 0; i < words.length; i++) {
        var cand = line ? line + " " + words[i] : words[i];
        if (ctx.measureText(cand).width <= maxW) {
          line = cand;
        } else {
          if (line) lines.push(line);
          line = words[i];
        }
      }
      if (line) lines.push(line);
      var lineHeight = fontSize * 1.5;
      var startY = h * 0.4 - (lines.length - 1) * lineHeight / 2;
      lines.forEach((ln, i) => {
        ctx.fillText(ln, w / 2, startY + i * lineHeight);
      });
      ctx.restore();
    } catch (e) {/* cosmetic */}
  }

  // Act II entry: the whole screen turns to bright spirit-white ivory carrying
  // the frozen phrase; the gold recedes through the now-transparent splash. The
  // ink of the real world blooms onto this white later, on dismissSplash().
  function _enterSoulVeil(el) {
    try {
      if (!el || !el.parentNode) return;
      _paintVeilIvory(_splashCanvas);
      el.classList.add("splash-veil");
      // Make the splash itself see-through ONLY once the ivory has fully
      // faded in (the soul canvas transitions over 1.3s). Dropping the dark
      // backdrop earlier would flash the live world through the translucent
      // white — the canvas is what actually masks the game.
      window.setTimeout(() => {
        if (el && el.parentNode) el.classList.add("splash-open");
      }, 1400);
    } catch (e) {/* cosmetic */}
  }

  // ---------------------------------------------------------------- ink reveal
  // The bright spirit-white veil becomes the canvas; "ink" here is the dark real
  // world pouring in. Organic ink blooms (multi-seeded, wobbling, slowly
  // expanding from the middle — like eyes opening) erase the ivory with
  // destination-out, so the live game glows through beneath. The remaining ivory
  // then dissolves evenly toward transparency, until the veil is fully clear.
  class _InkBloomReveal {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this._w = 0;
      this._h = 0;
      this._seeds = [];
      this._t0 = 0;
      this._startT = 0;
      this._running = false;
    }

    // Paint the bright spirit-white ivory veil and lay out the ink seeds.
    start() {
      try {
        this._startT = performance.now();
        this._t0 = this._startT;
        _paintVeilIvory(this.canvas);
        this._w = window.innerWidth;
        this._h = window.innerHeight;
        this._buildSeeds();
        this._running = true;
        var loop = now => {
          if (!this._running) return;
          var dt = Math.min(0.05, Math.max(0.001, (now - this._t0) / 1000));
          this._t0 = now;
          this._step(dt);
          requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
      } catch (e) {/* cosmetic */}
    }

    // Drop the overlay without waiting for the animation to finish.
    finish() {
      this._stopLoop();
      var p = this.canvas && this.canvas.parentNode;
      if (p) p.removeChild(this.canvas);
    }
    _stopLoop() {
      this._running = false;
    }

    // Ink droplets. The first is a small slow seed that seeps near the middle;
    // a few more settle in one at a time; then the rest arrive varied (bigger
    // and faster or small and lazy, at random) so the pour feels voluminous and
    // cascading. Every droplet gets a DIFFERENT irregular outline (fixed random
    // bell harmonics + ellipse stretch/tilt) plus its own fixed drips, so no
    // droplet looks like the previous one or like a template circle.
    _buildSeeds() {
      var w = this._w;
      var h = this._h;
      var cx = w / 2;
      var cy = h * 0.45;
      var span = Math.max(w, h);
      this._seeds = [];
      var count = 14;
      for (var i = 0; i < count; i++) {
        // ---- arc: a slow purposeful trickle that explodes into pace -----
        // Bands: 0 = first single lead droplet (near centre, small, soaks
        // out slowly), then a trickle of small blotches one by one, then a
        // build of medium stains, then a surge of big fast ones, then
        // wide fillers that swallow the edges. Total reveal stays ~6s.
        var maxR = void 0,
          dur = void 0,
          ringScale = void 0;
        if (i === 0) {
          maxR = (0.10 + Math.random() * 0.06) * span;
          dur = 2.6 + Math.random() * 0.8;
          ringScale = 0.06 + Math.random() * 0.10;
        } else if (i < 4) {
          maxR = (0.14 + Math.random() * 0.10) * span;
          dur = 2.4 + Math.random() * 0.6;
          ringScale = 0.16 + Math.random() * 0.16;
        } else if (i < 8) {
          maxR = (0.24 + Math.random() * 0.14) * span;
          dur = 1.9 + Math.random() * 0.7;
          ringScale = 0.30 + Math.random() * 0.20;
        } else if (i < 12) {
          maxR = (0.40 + Math.random() * 0.16) * span;
          dur = 1.5 + Math.random() * 0.5;
          ringScale = 0.42 + Math.random() * 0.22;
        } else {
          maxR = (0.55 + Math.random() * 0.22) * span;
          dur = 1.2 + Math.random() * 0.4;
          ringScale = 0.55 + Math.random() * 0.30;
        }
        var start = void 0;
        if (i === 0) start = -0.06 + Math.random() * 0.08;else if (i < 4) start = 0.32 + Math.random() * 0.45;else if (i < 8) start = 0.72 + Math.random() * 0.70;else if (i < 12) start = 1.20 + Math.random() * 0.75;else start = 1.80 + Math.random() * 0.80;

        // position: cluster loosely around the middle but never symmetric
        var ring = Math.pow(Math.random(), 1.4) * ringScale;
        var angle = Math.random() * Math.PI * 2;
        var jx = (Math.random() - 0.5) * Math.min(w * 0.22, h * 0.30);
        var jy = (Math.random() - 0.5) * Math.min(w * 0.14, h * 0.20);
        var startX = cx + Math.cos(angle) * ring * span + jx;
        var startY = cy + Math.sin(angle) * ring * span * 0.7 + jy;

        // fixed, per-droplet irregular outline: 2-4 harmonic lobes plus an
        // ellipse stretch/tilt, so it reads as ink pushed by currents.
        var harmonics = [];
        var nLobes = 2 + Math.floor(Math.random() * 3);
        for (var L = 0; L < nLobes; L++) {
          harmonics.push({
            k: 2 + Math.floor(Math.random() * 4),
            a: 0.05 + Math.random() * 0.14,
            p: Math.random() * Math.PI * 2
          });
        }
        // fixed drips that leak off the rim as the stain widens
        var nDrips = 2 + Math.floor(Math.random() * 4);
        var drips = [];
        for (var D = 0; D < nDrips; D++) {
          drips.push({
            ang: Math.random() * Math.PI * 2,
            // how far out beyond the edge the drip lands
            out: 1.05 + Math.random() * 0.25,
            siz: 0.05 + Math.random() * 0.13,
            // drip pushes outward as p grows (faster for far drips)
            drift: 0.25 + Math.random() * 0.75
          });
        }

        // Fixed per-point jitter (NOT re-rolled each frame) so the outline
        // keeps its organic lumpiness without shimmering like paper.
        var N = 46;
        var jit = [];
        for (var J = 0; J <= N; J++) jit.push(0.94 + Math.random() * 0.12);
        this._seeds.push({
          cx: startX,
          cy: startY,
          maxR,
          dur,
          growthPow: 1.1 + Math.random() * 1.2,
          start,
          harmonics,
          drips,
          jit,
          // ellipse stretch + tilt makes each droplet unique
          aspectX: 0.75 + Math.random() * 0.5,
          aspectY: 0.75 + Math.random() * 0.5,
          tilt: Math.random() * Math.PI
        });
      }
    }

    // Erase ivory through one growing organic stain. The silhouette is a fixed
    // lumpy contour (per-seed harmonics + stretch/tilt) plus fixed drips that
    // ooze outward. The leading edge is a soft feathered radial gradient that
    // eats the ivory faintly and progressively, so the front reads as ink
    // seeping into soaked paper — never a hard disk cutting through.
    _eraseBlob(cx, cy, r, seed) {
      var ctx = this.ctx;
      var cos = Math.cos;
      var sin = Math.sin;
      var H = seed.harmonics;
      var tilt = seed.tilt;
      var ax = seed.aspectX;
      var ay = seed.aspectY;
      var jit = seed.jit;
      var N = 46;
      ctx.globalCompositeOperation = "destination-out";

      // Build the lumpy radial contour path. GROWTH_PAD pushes the rim
      // slightly beyond the feathered core so the soft edge has room to
      // feather at full radius instead of clipping against an opaque edge.
      var path = rr => {
        ctx.beginPath();
        for (var i = 0; i <= N; i++) {
          var t = i / N * Math.PI * 2;
          var f = 1;
          for (var L = 0; L < H.length; L++) {
            f += H[L].a * cos(H[L].k * t + H[L].p);
          }
          f = Math.max(0.35, f);
          var rad = rr * f * jit[i];
          var ex = cos(t) * rad * ax;
          var ey = sin(t) * rad * ay;
          var px = cx + ex * cos(tilt) - ey * sin(tilt);
          var py = cy + ex * sin(tilt) + ey * cos(tilt);
          if (i === 0) ctx.moveTo(px, py);else ctx.lineTo(px, py);
        }
        ctx.closePath();
      };

      // ---- the main stain body: feathered radial core ---------------------
      // Inner radius fills firmly (fully erasing ivory); only the outer rim
      // is a soft gradient band that partially erases, so the boundary stays
      // soft without the whole stain reading as a watery blur.
      var g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, "rgba(0,0,0,0.98)");
      g.addColorStop(0.45, "rgba(0,0,0,0.85)");
      g.addColorStop(0.75, "rgba(0,0,0,0.45)");
      g.addColorStop(1, "rgba(0,0,0,0.05)");
      path(r);
      ctx.fillStyle = g;
      ctx.fill();

      // ---- drips: soft blotches beyond the rim that swell and fade -------
      for (var D = 0; D < seed.drips.length; D++) {
        var dp = seed.drips[D];
        var a = dp.ang;
        var extend = 1 + dp.drift * (r > 0 ? Math.min(1, r / 60) : 0);
        var drad = r * dp.out * extend;
        var sx = cx + cos(a) * drad;
        var sy = cy + sin(a) * drad;
        var s = r * dp.siz;
        if (s < 2) continue;
        var dg = ctx.createRadialGradient(sx, sy, 0, sx, sy, s);
        dg.addColorStop(0, "rgba(0,0,0,0.5)");
        dg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = dg;
        ctx.fill();
      }
    }
    _step(dt) {
      var ctx = this.ctx;
      var w = this._w;
      var h = this._h;
      var tNow = performance.now();
      var elapsed = (tNow - this._startT) / 1000;

      // ---- 1. ink blooms: droplets pouring over the ivory, each to its own
      //      schedule, from one slowcessing seed to a cascading flow -------
      this._seeds.forEach(s => {
        var age = elapsed - s.start;
        var p = Math.min(1, Math.max(0, age / s.dur));
        if (p <= 0) return;
        // smoothstep: even symmetric spread — no sudden snap at the end,
        // no stampede at the start; each stain just soaks outward.
        var ss = p * p * (3 - 2 * p);
        // mild per-seed pace variation so stains settle at different times
        var e = Math.min(1, ss * (0.92 + 0.16 * (s.growthPow - 1)));
        var r = e * s.maxR;
        if (r < 2) return;
        this._eraseBlob(s.cx, s.cy, r, s);
      });

      // ---- 3. dissolve the residue ivory toward transparency ----
      // Start earlier and ramp harder in the tail so the corner ivory — which
      // no single blotch reaches — clears before the splash is removed,
      // instead of clinging faintly at the edges.
      var globalP = Math.min(1, Math.max(0, elapsed / 6.0));
      if (globalP > 0.35) {
        var layerFade = 0.04 + 0.13 * (globalP - 0.35);
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.globalAlpha = layerFade;
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }

      // finished when fully transparent
      if (globalP >= 1) this._stopLoop();
    }
  }

  // Reference kept so showKeybindToast() can inject it at the right moment.
  var _keybindToastEl = null;
  function createKeybindToast() {
    try {
      if (typeof document === "undefined") return;
      if (document.getElementById("equilibrium-keybind-toast")) return;
      var el = document.createElement("div");
      el.id = "equilibrium-keybind-toast";
      el.className = "pearl-bracket-frame";
      // Start invisible; showKeybindToast() triggers the CSS animation by
      // adding the active class, timed to match when the game is ready.
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      _keybindToastEl = el;
      var title = document.createElement("div");
      title.className = "keybind-toast-title";
      title.textContent = "Dev keybinds";
      el.appendChild(title);
      var rows = [["WASD / Arrows", "move"], ["Mouse", "aim + attack"], ["Q / E / F", "quick / heavy / thrust"], ["Shift", "dash"], ["R", "heal"], ["C", "changelog"], ["Space", "hold time"], ["T / N / M", "stress_test / -1 / +1 hour"], ["F1 / F2", "soul / self damage"], ["G / H", "void volume"], ["J / K", "void purity / debug"]];
      for (var i = 0; i < rows.length; i++) {
        var row = document.createElement("div");
        row.className = "keybind-toast-row";
        var key = document.createElement("span");
        key.className = "keybind-toast-key";
        key.textContent = rows[i][0];
        var action = document.createElement("span");
        action.className = "keybind-toast-action";
        action.textContent = rows[i][1];
        row.appendChild(key);
        row.appendChild(action);
        el.appendChild(row);
      }
      (document.body || document.documentElement).appendChild(el);
    } catch (e) {
      // never let a cosmetic dev helper block startup
    }
  }

  // Called by game.js together with dismissSplash() once the game is ready.
  // In the common case the splash veil is already fading (or about to), so this
  // just starts the keybind toast life animation. If the boot finished before the
  // splash intro did (rare fast path), the toast stays hidden until the splash
  // fade-out actually begins — otherwise it would silently burn its animation
  // window underneath the still-opaque splash overlay.
  var _toastPending = false;
  function showKeybindToast() {
    try {
      _toastPending = true;
      _maybeRevealToast();
    } catch (e) {/* cosmetic */}
  }
  function _maybeRevealToast() {
    try {
      if (!_toastPending || !_revealStarted) return;
      _toastPending = false;
      var el = _keybindToastEl;
      if (!el) return;
      el.style.opacity = "";
      el.style.pointerEvents = "";
      el.classList.add("keybind-toast-active");
      window.setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
        _keybindToastEl = null;
      }, 14400);
    } catch (e) {/* cosmetic */}
  }

  // --- Guardian interception ----------------------------------------------
  // If the boot guardian refuses the session, the game behind the splash is a
  // sabotaged black canvas. Instead of leaving that dead void, show the same
  // pearl soul-essence frame as the keybind toast, resting on the black, with a
  // closed-loop shimmer so it reads as alive (never as a frozen error screen).

  var _guardianBlocked = false;
  var _guardianInterceptionEl = null;
  function showGuardianInterception() {
    try {
      _guardianBlocked = true;
      if (typeof document === "undefined") return;
      if (document.getElementById("equilibrium-guardian-interception")) return;
      var el = document.createElement("div");
      el.id = "equilibrium-guardian-interception";
      el.className = "pearl-bracket-frame";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      _guardianInterceptionEl = el;
      var title = document.createElement("div");
      title.className = "keybind-toast-title";
      title.textContent = "alert";
      el.appendChild(title);
      var msg = document.createElement("div");
      msg.className = "guardian-interception-message";
      msg.textContent = "guardian interception ;D";
      el.appendChild(msg);
      (document.body || document.documentElement).appendChild(el);
      _maybeShowGuardianInterception();
    } catch (e) {/* cosmetic */}
  }

  // Reveal the interception card only once the splash fade-out has begun, so it
  // never burns its shimmer underneath the still-opaque splash.
  function _maybeShowGuardianInterception() {
    try {
      var el = _guardianInterceptionEl;
      if (!_guardianBlocked || !el || !_revealStarted) return;
      _guardianBlocked = false;
      el.style.opacity = "";
      el.style.pointerEvents = "";
      el.classList.add("guardian-interception-active");
    } catch (e) {/* cosmetic */}
  }

  // --- In-game changelog --------------------------------------------------
  // A quiet, unobtrusive corner tab that pulls up the community changelog
  // (assets/changelog.md — a plain runtime asset, untouched by the build) and
  // renders it over the same pearl / soul-essence frame as the keybind toast.

  function _mdEscape(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Single-pass tokenizer for the inline constructs the changelog actually
  // uses: **bold**, *italic*, `code`, and [link](url). Scans left-to-right so
  // the markers never fight each other. (VS Code-style for what's present;
  // tables / fences / blockquotes aren't used in this file, so they're skipped.)
  function _mdInline(text) {
    text = _mdEscape(text);
    return text.replace(/(\*\*([^*]+)\*\*)|(`([^`]+)`)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^ )]+)\))/g, (m, b, strong, c, code, i, em, a, linkText, linkUrl) => {
      if (b) return "<strong>" + strong + "</strong>";
      if (c) return "<code>" + code + "</code>";
      if (i) return "<em>" + em + "</em>";
      if (a) return '<a href="' + linkUrl + '" target="_blank" rel="noopener">' + linkText + "</a>";
      return m;
    });
  }

  // Understands the changelog's shape: a `#` doc title, `#### Date:` headers,
  // `-` bullets (with bold lead keywords), and the occasional nested/indented
  // bullet (kept-left as a slightly-indented item).
  function _parseChangelog(md) {
    var out = [];
    var _iterator = _createForOfIteratorHelper(md.split(/\r?\n/)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var raw = _step.value;
        var trimmed = (raw || "").trim();
        if (!trimmed) continue;
        if (/^#\s+/.test(trimmed)) continue; // skip doc title / blanks

        var indent = (raw || "").match(/^\s*/)[0].length;
        if (/^#{3,6}\s+date\s*:/i.test(trimmed)) {
          out.push({
            type: "date",
            text: trimmed.replace(/^#{3,6}\s+date\s*:\s*/i, "")
          });
        } else if (/^-\s+/.test(trimmed)) {
          out.push({
            type: "item",
            nested: indent >= 2,
            html: _mdInline(trimmed.replace(/^-\s+/, ""))
          });
        } else if (/^#{1,6}\s+/.test(trimmed)) {
          out.push({
            type: "item",
            heading: true,
            html: _mdInline(trimmed.replace(/^#{1,6}\s+/, ""))
          });
        } else {
          out.push({
            type: "item",
            nested: indent >= 2,
            html: _mdInline(trimmed)
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return out;
  }
  function _renderChangelog(rootEl, md) {
    var frag = document.createDocumentFragment();
    var _iterator2 = _createForOfIteratorHelper(_parseChangelog(md)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var entry = _step2.value;
        if (entry.type === "date") {
          var h = document.createElement("div");
          h.className = "clog-date";
          h.textContent = entry.text;
          frag.appendChild(h);
        } else {
          var it = document.createElement("div");
          it.className = "clog-item";
          if (entry.nested) it.classList.add("clog-item--nested");
          if (entry.heading) it.classList.add("clog-item--heading");
          it.innerHTML = entry.html;
          frag.appendChild(it);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    rootEl.appendChild(frag);
  }
  var _changelogCache = null;
  function _loadChangelog() {
    if (_changelogCache !== null) {
      return Promise.resolve(_changelogCache);
    }
    return fetch("assets/changelog.md", {
      cache: "no-store"
    }).then(res => {
      if (!res.ok) throw new Error("fetch failed: " + res.status);
      return res.text();
    }).then(text => {
      _changelogCache = text;
      return text;
    });
  }

  // Default body font-size (px). The +/- controls step 1px from 10..22 and the
  // whole body scales (dates/bullets use em), persisted so it survives reloads.
  var CLOG_MIN_SIZE = 10;
  var CLOG_MAX_SIZE = 22;
  function _clogStoredSize() {
    try {
      var v = parseInt(localStorage.getItem("clog-size"), 10);
      if (!Number.isNaN(v) && v >= CLOG_MIN_SIZE && v <= CLOG_MAX_SIZE) return v;
    } catch (e) {
      /* ignore storage errors */
    }
    return 13;
  }
  function _storeClogSize(v) {
    try {
      localStorage.setItem("clog-size", String(v));
    } catch (e) {
      /* ignore storage errors */
    }
  }
  function createChangelogUI() {
    try {
      if (typeof document === "undefined") return;
      if (document.getElementById("equilibrium-changelog")) return;
      var docBody = document.body || document.documentElement;

      // Warm the changelog cache now, so the very first open already has
      // content and never pops in late (no more first-open "jam").
      _loadChangelog().catch(() => {/* preload failure handled on reveal */});

      // No persistent button — strict diegesis only constrains the always-on
      // HUD. The changelog is summoned on demand with C (freed up now that
      // crafting moved to the UI) and listed in the launch keybind toast.
      var backdrop = document.createElement("div");
      backdrop.id = "equilibrium-changelog-backdrop";
      var panel = document.createElement("div");
      panel.id = "equilibrium-changelog";
      panel.className = "pearl-bracket-frame";
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      panel.setAttribute("aria-label", "Changelog");
      var head = document.createElement("div");
      head.className = "clog-head";
      var title = document.createElement("div");
      title.className = "clog-title";
      title.textContent = "Changelog";
      var controls = document.createElement("div");
      controls.className = "clog-controls";
      var minus = document.createElement("button");
      minus.type = "button";
      minus.className = "clog-size";
      minus.setAttribute("aria-label", "Decrease text size");
      minus.textContent = "\u2212";
      var plus = document.createElement("button");
      plus.type = "button";
      plus.className = "clog-size";
      plus.setAttribute("aria-label", "Increase text size");
      plus.textContent = "+";
      var close = document.createElement("button");
      close.type = "button";
      close.className = "clog-close";
      close.setAttribute("aria-label", "Close changelog");
      close.textContent = "\xD7";
      controls.appendChild(minus);
      controls.appendChild(plus);
      controls.appendChild(close);
      head.appendChild(title);
      head.appendChild(controls);
      var bodyEl = document.createElement("div");
      bodyEl.className = "clog-body";
      bodyEl.style.fontSize = _clogStoredSize() + "px";
      panel.appendChild(head);
      panel.appendChild(bodyEl);
      var open = false;
      function setOpen(next) {
        open = next;
        document.body.classList.toggle("clog-open", open);
      }

      // Render synchronously from the (pre-warmed) cache. Returns true when
      // content (or the error stub) is ready — only then we animate open.
      function reveal() {
        if (bodyEl.childElementCount) return true;
        if (_changelogCache !== null) {
          bodyEl.innerHTML = "";
          _renderChangelog(bodyEl, _changelogCache);
          return true;
        }
        return false;
      }
      function show() {
        if (open) return;
        var ready = reveal();
        if (!ready) {
          // Extremely unlikely (cache is warmed at boot) — fall back to a
          // wait-and-render just before opening so there's still no pop-in.
          bodyEl.innerHTML = "<div class=\"clog-loading\">gathering the record\u2026</div>";
          _loadChangelog().then(md => {
            bodyEl.innerHTML = "";
            _renderChangelog(bodyEl, md);
            setOpen(true);
          }).catch(() => {
            bodyEl.innerHTML = '<div class="clog-loading">changelog unavailable this session</div>';
            setOpen(true);
          });
          return;
        }
        setOpen(true);
      }
      function hide() {
        if (!open) return;
        setOpen(false);
      }
      function adjustSize(delta) {
        var next = Math.max(CLOG_MIN_SIZE, Math.min(CLOG_MAX_SIZE, _clogStoredSize() + delta));
        bodyEl.style.fontSize = next + "px";
        _storeClogSize(next);
      }
      minus.addEventListener("click", () => adjustSize(-1));
      plus.addEventListener("click", () => adjustSize(1));
      close.addEventListener("click", hide);
      backdrop.addEventListener("click", hide);
      window.addEventListener("keydown", e => {
        if (e.key === "Escape" && open) hide();
      });
      window.addEventListener("keydown", e => {
        if (e.key === 'c' || e.key === 'C') {
          if (open) {
            hide();
          } else {
            show();
          }
        }
      });
      docBody.appendChild(backdrop);
      docBody.appendChild(panel);
    } catch (e) {
      // never let a cosmetic changelog UI block startup
    }
  }

  class Game {
    constructor() {
      this.projectiles = [];
      this.particles = [];
      this._onResize = this._onResize.bind(this);
      this._tickerCallback = this._tick.bind(this);
    }
    init() {
      var _this = this;
      return function _callee() {
        var bootPromise, assetPromise;
        return _regeneratorAsync(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              createSplash();
              createKeybindToast();
              createChangelogUI();
              // Fire every slow, independent phase simultaneously: the guardian's
              // network gate, the asset downloads, and PIXI's WebGL setup share no
              // dependencies, so booting them in parallel (not serially) trims the
              // whole bootstrap to the slowest phase instead of their sum. The
              // splash overlay only ever *covers* this work — it never gates it.
              bootPromise = _this._bootGuardian();
              assetPromise = _this.loadAssets();
              _this.app = new PIXI.Application();
              _context.n = 1;
              return _awaitAsyncGenerator(_this.app.init({
                view: document.getElementById("game-canvas"),
                resizeTo: window,
                backgroundColor: Config.COLORS.BACKGROUND,
                antialias: false,
                resolution: window.devicePixelRatio || 1
              }));
            case 1:
              _context.n = 2;
              return _awaitAsyncGenerator(bootPromise);
            case 2:
              _this._authorized = _context.v;
              if (!_this._authorized) _this._sabotagePixi();

              // The guardian refused this session: the world behind the splash is a
              // sabotaged black canvas. Surface the interception message in the same
              // pearl soul-essence frame as the keybind toast instead of leaving a
              // dead void once the ink reveal clears the splash.
              if (!_this._authorized) showGuardianInterception();
              _context.n = 3;
              return _awaitAsyncGenerator(assetPromise);
            case 3:
              _this.world = new World(_this);
              _this.renderer = new IsometricRenderer(_this.app, _this.world, _this);
              _this.player = new Player(_this);
              _this.enemies = Array.from(_this.world.enemies);
              _this.inventoryUI = new InventoryUI(_this);
              _this.healthBar = new HealthBar(_this);
              _this.soulMeter = new SoulMeter(_this);
              _this.fpsDisplay = new FPSDisplay(_this);
              _this.weaponRenderer = new WeaponRenderer(_this);
              _this.dayNight = new DayNightCycle(_this, {
                dayLength: 600,
                tableSteps: 360
              });
              _this._dayNightSpeed = 1;
              _this.setupStressTest();

              // Everything is built; the first frame is about to render. Hand off
              // from the splash / loading veil to the live game and surface the
              // keybind toast exactly now — no black canvas intermission.
              dismissSplash();
              showKeybindToast();
              _this.setup();
              _this.start();
              window.game = _this;
            case 4:
              return _context.a(2);
          }
        }, null, null, null, Promise);
      }();
    }
    loadAssets() {
      return function _callee2() {
        var itemTextures, textureList;
        return _regeneratorAsync(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              itemTextures = Object.values(ITEM_DEFINITIONS).flatMap(item => [item.uiTexture, item.weaponTexture]);
              textureList = [...Object.values(Config.ASSETS), 'assets/arrow.png', 'assets/default-item.png', ...itemTextures];
              _context2.n = 1;
              return _awaitAsyncGenerator(preloadTextures(textureList.filter(Boolean)));
            case 1:
              return _context2.a(2);
          }
        }, null, null, null, Promise);
      }();
    }

    // Boot gate: the game cannot function without the guardian. window.__guardian
    // and window.__guardRef are defined ONLY by src/guard.js (loaded before the
    // main bundle). If someone deletes or gut&rsquo;s the guard, `boot()` resolves
    // false and the canvas stays dark; if they remove this call, `_authorized`
    // never becomes true. Mutual dependence, enforced at boot only.
    //
    // The binding is two-way: this file PUBLISHES window.__gameSignal (which the
    // guard verifies inside its boot()), and READS window.__guardRef (which the
    // guard set). Delete guard.js -> __guardRef missing -> we refuse to boot.
    // Gut this file (drop the marker) -> guard.boot() sees no __gameSignal ->
    // returns false -> dark canvas. Either half alone is not enough.
    //
    // DEV escape (local): raw source loads via index.html WITHOUT the guard, so
    // prod build strips this escape (ban-local.js) so shipped bytes never allow
    // an off-brand host.
    _bootGuardian() {
      return function _callee3() {
        var host, ok;
        return _regeneratorAsync(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              host = (typeof window !== "undefined" && window.location && window.location.hostname || "").toLowerCase();
              if (!(false)) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2, true);
            case 1:
              if (!(typeof window.__guardian !== "object" || window.__guardian === null)) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2, false);
            case 2:
              if (!(typeof window.__guardian.boot !== "function")) {
                _context3.n = 3;
                break;
              }
              return _context3.a(2, false);
            case 3:
              if (!(window.__guardRef !== 0x45515549)) {
                _context3.n = 4;
                break;
              }
              return _context3.a(2, false);
            case 4:
              if (!(!Object.getOwnPropertyDescriptor || Object.getOwnPropertyDescriptor(window, "__guardian").writable !== false)) {
                _context3.n = 5;
                break;
              }
              return _context3.a(2, false);
            case 5:
              if (!(Object.getOwnPropertyDescriptor(window, "__guardRef").configurable !== false)) {
                _context3.n = 6;
                break;
              }
              return _context3.a(2, false);
            case 6:
              Object.defineProperty(window, "__gameSignal", {
                value: 0x47414d45,
                writable: false,
                configurable: false
              });
              _context3.n = 7;
              return _awaitAsyncGenerator(window.__guardian.boot());
            case 7:
              ok = _context3.v;
              return _context3.a(2, !!ok);
            case 8:
              _context3.p = 8;
              _context3.v;
              return _context3.a(2, false);
          }
        }, null, null, [[0, 8]], Promise);
      }();
    }
    setup() {
      window.addEventListener("resize", this._onResize);
      this.renderer.updateCamera();
      this.renderer.render();
      this._timeFrozen = false;
      this._globalTimeScale = 1;
      this._desaturateFilter = new PIXI.ColorMatrixFilter();
    }
    start() {
      this.app.ticker.add(this._tickerCallback);
    }
    stop() {
      this.app.ticker.remove(this._tickerCallback);
      window.removeEventListener("resize", this._onResize);
    }
    setupStressTest() {
      window.addEventListener("keydown", e => {
        var key = e.key.toLowerCase();
        if (key === "t") {
          this.world.stressSpawn(50);
          console.log("[StressTest] Spawned 50 slimes");
        } else if (key === "n") {
          this.dayNight.shiftHours(-1);
        } else if (key === "m") {
          this.dayNight.shiftHours(1);
        } else if (e.code === 'Space' && !e.repeat && !this._timeFrozen) {
          e.preventDefault();
          this.setTimeFreeze(true);
        }
      });
      window.addEventListener("keyup", e => {
        if (e.code === 'Space' && this._timeFrozen) {
          this.setTimeFreeze(false);
        }
      });
      window.addEventListener("blur", () => {
        if (this._timeFrozen) this.setTimeFreeze(false);
      });
    }
    _sabotagePixi() {
      var noop = function noop() {};
      try {
        if (this.app && this.app.renderer && typeof this.app.renderer.render === "function") {
          this.app.renderer.render = noop;
        }
        if (this.app && typeof this.app.render === "function") {
          this.app.render = noop;
        }
      } catch (e) {
        // never throw from the tripwire — stay silent
      }
    }
    destroy() {
      this.stop();
      if (this.dayNight) {
        this.dayNight = null;
      }
      if (this.healthBar && typeof this.healthBar.destroy === "function") {
        this.healthBar.destroy();
      }
      if (this.renderer && typeof this.renderer.destroy === "function") {
        this.renderer.destroy();
      }
      if (this.world && typeof this.world.destroy === "function") {
        this.world.destroy();
      }
      try {
        this.app.destroy(true, {
          children: true,
          texture: true
        });
      } catch (e) {
        console.warn("Error destroying PIXI app:", e);
      }
      this.app = null;
      this.renderer = null;
      this.world = null;
      this.player = null;
      this.enemies = [];
      this.projectiles = [];
      this.particles = [];
    }
    setTimeFreeze(frozen) {
      if (frozen === this._timeFrozen) return;
      this._timeFrozen = frozen;
      this._globalTimeScale = frozen ? Config.TIME_FREEZE.TIME_SCALE : 1;
      if (frozen) {
        var a = Config.TIME_FREEZE.DESATURATE_AMOUNT;
        var r = 0.299,
          _g = 0.587,
          b = 0.114;
        this._desaturateFilter.matrix = [r * a + (1 - a), _g * a, b * a, 0, 0, r * a, _g * a + (1 - a), b * a, 0, 0, r * a, _g * a, b * a + (1 - a), 0, 0, 0, 0, 0, 1, 0];
      }
      this.renderer.setTimeFreeze(frozen, this._desaturateFilter);
    }
    _onResize() {
      if (!this.app || !this.app.renderer) return;
      this.app.renderer.resize(window.innerWidth, window.innerHeight);
      this.renderer.updateCamera();
    }
    _tick(ticker) {
      if (!this.player) return;
      var delta = ticker.deltaTime;
      this.player.update(delta);
      var simDelta = this._timeFrozen ? delta * this._globalTimeScale : delta;
      var _iterator = _createForOfIteratorHelper(this.enemies),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _enemy = _step.value;
          if (this._timeFrozen) break;
          if (_enemy && !_enemy.destroyed && typeof _enemy.update === "function") _enemy.update(delta);
          if (_enemy && !_enemy.destroyed && !_enemy._dying) {
            var dx = this.player.x - _enemy.x;
            var dz = this.player.z - _enemy.z;
            var dist = Math.hypot(dx, dz);
            if (dist < 0.8) {
              if (!_enemy._hitPlayerThisPass) {
                _enemy._hitPlayerThisPass = true;
                var n = dist || 1;
                this.player.takeDamage(_enemy.attackDamage, -dx / n, -dz / n);
              }
            } else {
              _enemy._hitPlayerThisPass = false;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.world && typeof this.world.updateCollectibles === "function") {
        this.world.updateCollectibles(simDelta);
      }
      this.world.updateChunks(this.player.x, this.player.z);
      this.renderer.updateCamera();
      this.renderer.render();
      this.healthBar.update();
      this.soulMeter.update();
      this.fpsDisplay.update();
      this.inventoryUI.animate();
      if (this.dayNight) this.dayNight.step(delta * this._dayNightSpeed);
      this.enemies = this.world.enemiesArray || Array.from(this.world.enemies || []);
      for (var i = this.projectiles.length - 1; i >= 0; i--) {
        var p = this.projectiles[i];
        if (!p) {
          this.projectiles.splice(i, 1);
          continue;
        }
        if (p.destroyed) {
          if (typeof p.destroy === "function") p.destroy();
          this.projectiles.splice(i, 1);
          continue;
        }
        var alive = typeof p.update === "function" ? p.update(simDelta) : false;
        if (!alive) {
          if (typeof p.destroy === "function") p.destroy();
          this.projectiles.splice(i, 1);
        } else if (p.attackType === 'SHOOT' || p.attackType === 'ranged') {
          // Check for near-miss with enemies (arrow awareness)
          var nearEnemies = this.world.getNearbyEnemies(p.x, p.z, Config.ENEMY.VISUAL_RANGE);
          var _iterator2 = _createForOfIteratorHelper(nearEnemies),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var enemy = _step2.value;
              if (enemy.destroyed) continue;
              enemy.reactToProjectile(p.x, p.z, p.originX, p.originZ);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      this.weaponRenderer.update();
      for (var _i = this.particles.length - 1; _i >= 0; _i--) {
        var particle = this.particles[_i];
        if (!particle) {
          this.particles.splice(_i, 1);
          continue;
        }
        if (particle.destroyed) {
          if (typeof particle.destroy === "function") particle.destroy();
          this.particles.splice(_i, 1);
          continue;
        }
        var pDelta = particle._noFreeze ? delta : simDelta;
        var _alive = typeof particle.update === "function" ? particle.update(pDelta) : false;
        if (!_alive) {
          if (typeof particle.destroy === "function") particle.destroy();
          this.particles.splice(_i, 1);
        }
      }
    }
  }
  var g;
  document.addEventListener("DOMContentLoaded", () => {
    return _regeneratorAsync(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          g = new Game();
          _context4.n = 1;
          return _awaitAsyncGenerator(g.init());
        case 1:
          return _context4.a(2);
      }
    }, null, null, null, Promise);
  });

  exports.Game = Game;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
