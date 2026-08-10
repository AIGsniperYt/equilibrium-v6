# Changelog 

### UPDATE 9/8/2026 V6

#### Date: 7/8/2026
- **added: the changelog is now readable in-game** — press **C** to open a changelog panel styled like the soul meter (pearl and light). It reads straight from this very file, so every update you see here shows up in the game.
- **removed: crafting keybind** — no more pressing C to craft. Crafting is moving to an on-screen interface; that freed up **C**, which the changelog now uses.
- **changed: the world no longer flashes white at midday** — the day cycle used to drive the scene's backdrop to pure white when the sun was high, so a big hit / death camera-shake could reveal a harsh white border at the screen edge. The sky is now always a warm dark tone, day or night, and the whole scene slices through the golden hours smoothly instead.
- **changed: the keybinds card matches the soul meter** — the hints panel that appears at the start is now the same translucent pearl-and-light style as your inventory slots: soft luminous background with bright corner brackets, no more gold. Reads clearly against the world.
- **changed: the crown ring slot now behaves just like the others — and fills last** — the top ring hexagon is the slightly larger one. It darkens, previews, and lights up exactly like every other slot, but it's the last to fill: the rest of the ring fills first, then the crown completes last. Losing soul strips the ring top-down, so the crown also empties last.

#### Date: 6/8/2026
- **added: launch splash screen** — EQUILIBRIUM now opens with a brief cinematic splash (gold title over a warm dark vignette with drifting motes) before the game world appears. Sits on the theme — light condensed from darkness.
- **(dev) keybind toast** — a temporary bottom-left card shows the controls (move / aim / attack / dash / repair / craft / time-freeze / stress+time / void) for the first few seconds so nothing is guesswork.
- **changed: fighter fists are real now** — if you have no weapon equipped, your bare hands attack with their own short-range jab instead of borrowing the sword's stats. Faster cooldown, weaker damage, small reach — pick up a blade when you can.
- **changed: the void meter reads properly** — the old hard-to-see mini-hex is gone. Void volume and purity now show as a glow at the centre of your soul vessel plus a line of small satellites, and a "VOID" label appears once you have any. You can finally tell what's there.
- **changed: the world tint is warmer and darker** — the scene backdrop now matches the launch screen's near-black warm tone instead of flat grey.
- **changed: dev helpers off for this build** — enemy hitboxes, AI lines, and the debug healthbar are all hidden by default. FPS stays available.

#### Date: 24/7/2026
- **added: getting hit now costs soul** — when a slime lands a hit, soul sparks fly out of you in the direction of the blow. Each spark carries real soul value (same size × 0.3 formula as everything else), and it's deducted from your soul meter instantly. Getting hit hurts your soul as much as your body.
- **fixed: death now empties your soul vessel** — respawning used to keep all your soul. Now you truly lose everything on death. R.I.P.
- **fixed: slimes can no longer double-tap you** — three things were wrong: pursuit speed kept them in range longer than the cooldown, the tackle animation dealt a bonus hit at the end, and the collision loop didn't track whether a slime already hit you on this pass. Now a slime can only hit you once per entry into melee range — it has to leave and lunge again to hit again. Multiple slimes can still hit you at once (because that's real). Standing still to heal no longer means eating two hits for the price of one.
- **added: soul meter pulses when you take damage** — the vessel flares brighter for a split-second when a hit lands. Soul rattles inside you.

#### Date: 21/7/2026
- **changed: enemies see the world through their FOV cone now** — arrows, dying enemies, and you are all detected through the same 150° cone + 8 tiles. If they can't see it, they don't react to it visually.
- **changed: enemies also hear you** — footsteps, attacks, and deaths all emit sound (short range, omniscient). They can sense you behind them through sound, not magic. Walking near a slime's back will eventually tip them off.
- **changed: slimes freeze then panic when they see a death** — if a slime sees another slime die in front of it, it freezes for a moment before panicking and fleeing. Real fear, not instant flight.
- **changed: arrows are visible at full FOV range** — if you shoot an arrow inside a slime's field of view at any distance up to 8 tiles, it will notice it and get suspicious. No more sneaky shots from behind.
- **fixed: slimes now properly panic from close deaths** — if you one-shot a slime near another slime, the survivor now always panics immediately. Previously the FOV visual check could override the sound-based panic, making them suspicious instead. They also sense arrows that whizz right past them (within 1.5 tiles) regardless of facing — you can't silently snipe from their blind spot.

#### Date: 20/7/2026
- **NEW: soul meter redesigned — crystallised light** — the flat-top hexagon is now pointy-top, rimmed by 12 glowing hexagons at edge centers and vertices (30° apart, clockwise). No centre hexagon. Every hexagon uses warm-white fill, pure white core, and gold/cream glow layers. Looks like condensed light, not stone or metal.
- **changed: crown at the top** — when soul is full, the top vertex hexagon transforms into a crown. Same size as the ring hexagons (not oversized), always brightly lit with stronger glow. Triggers at tier 10 with full soul (previously unreachable).
- **changed: preview glow on the unfilled slot** — the next hexagon to fill glows faintly proportional to your current soul ratio. You always know exactly which slot is next.
- **NEW: hexagons shatter on soul loss** — when a tier is lost, the hexagon breaks into 6 triangular shards that fly outward with rotation, fading from white to warm grey. Replaces the old shrink/fade animation.
- **changed: soul meter pulses with full intensity** — when fully charged, the vessel's halo doubles, extra glow rings radiate outward, and the surface lines burn brighter.
- **changed: all glow colours are warm** — no more cool-tinted halos. Soul aesthetic is now consistently pearl, cream, and gold.

#### Date: 18/7/2026
- **NEW: hotbar redesigned from the ground up** — the old solid bar is gone. Each slot is now four elegant corner L-brackets animated to extend on hover and form a glowing square when equipped. Warm white core with soft gold halos. Soul-aligned, not generic fantasy.
- **NEW: hotbar knows what you're hovering** — mouse over a slot and the brackets reach toward each other. Hover off and they retract. Equipped items stay fully extended with a pulsing gold breath.
- **NEW: warm pearl background on each slot** — subtle rounded luminous footprint so the brackets have presence without a solid bar.
- **changed: hotbar now has weight and polish** — arms animate with responsive speed that decelerates into a clean stop. No jitter, no jarring snap at the end.
- **NEW: crafting — arrow recipe** — press C to craft an arrow from 1 wood + 1 stone. Wood, stone, and slime drop from monsters. More recipes coming.
- **removed: health potion recipe** — potions were a placeholder to test slime loot drops. Never aligned with the world. Replaced with something that actually fits.
- **(dev) crafting system audited and kept** — the C keybind and crafting pipeline work as intended, just needed the right recipe.

#### Date: 17/7/2026
- **NEW: day/night cycle is now live** — the world has a full 10-minute day cycle. Deep blue nights (8pm-5am), warm golden dawn and dusk, neutral days. Press N/M to preview hours.
- **changed: golden hours actually look golden now** — uses a screen blend overlay (brightens) with deep amber tones instead of the old multiply-only approach (which just made everything dim orange). Night stays cool and dark.
- (dev) dormant cycle code in `assets/daynightCycle.js` was already fully written — just needed PixiJS v8 compat fixes, zIndex fix, and a second overlay for golden hour warmth.
- **changed: slimes no longer instantly sense you behind them** — if you teleport behind a slime (shadow kunai) or creep up unseen, you get a brief grace window before they become suspicious. They still feel your soul presence after ~1.5s, but it's delayed — no more instant spin-around when you blink in. FOV sight is still instant.
- **changed: all slime facing is now lerped, zero snaps** — alert, suspicious, panicked, unaware, all smooth. No more instant spin-toward-player regardless of how they become aware of you. Movement and facing are fully independent, so they look around naturally while moving in any direction.

#### Date: 16/7/2026
- **added: standing still builds focus, doubles heal speed** — hold R and plant your feet. Over 0.8s your heal rate ramps from 8→16 HP/s at the same soul cost. Move and you lose focus fast. Makes the risky "stand your ground and heal" play viable.
- **changed: implosion particles redesigned** — burst out big and transparent, then condense into small bright specks, then implode back into your body. Much smaller range (~1 tile). Intensity scales with heal focus — count, size, and draw-in strength all ramp up.
- **changed: you actually heal above 91% now** — passive regen was frozen above equilibrium (healing capped at bleed demand). Now a portion of ambient always goes to fortification, so HP rises slowly at high health, accelerating as you get healthier.
- **changed: leak particles now tell you how hurt you are** — particle size scales with wound severity: tiny wisps at 99%, big chunks at 10%. No healthbar needed — read your state from the particles.
- **changed: ambient motes follow you** — soul motes orbit around you and drift in, never left behind. Soul-carrying motes glow bigger and brighter than empty ones. You can always see your ambient intake. 
- **changed: ambient motes now look like soul condensing from thin air** — they materialize as spread-out faint forms, then condense into small bright dense dots as they drift toward you. Shrinking = getting denser = approaching.
- **changed: leak slows when you heal** — standing still while healing tightens your core, suppressing the leak. At 50%+ health with full focus, leak stops entirely. You can see the difference — particles visibly slow when suppressed.
- **fixed: leak particles couldn't be collected** — screen-space particles were hard-locked to zero velocity at 2 tiles south, and the absorption pull was too weak to free them. Now particles slow gradually and the pull is 3× stronger. Leaking soul is recoverable.
- **fixed: leak particles carry actual soul loss** — each particle's soulValue comes from the real accumulated leak rate (netWound × SOUL_LEAK_RATE ÷ particle count). Not the old size-based default (15× too much).
- **changed: soul capacity vastly increased** — was 800 (100×8), now 2,000 (250×8). You can finally afford more than half a heal. Healing 50→91% used to drain the entire bar; now it costs ~3 tiers out of 8.
- **changed: leak particles now carry the REAL soul loss** — before, particles had soul based on their size (15× too much). Now the soul that leaks out of your wounds is actually the soul you're losing. When your meter hits 0, the particles still show HP→soul conversion happening. Catching them is recovery, not profit.
- **changed: unified ambient model** — ambient absorption is now a single pool (8 soul/s). Soul first fills cracks (HP regen), overflow reaches soul meter. Removed old independent AMBIENT_HP_RATE and AMBIENT_SOUL_RATE constants.
- **changed: soul leak tied to net wound** — replaces raw-bleed multiplier. At equilibrium, soul leak ≈ 0. Below equilibrium, leak scales with how much bleed outpaces healing.
- **changed: passive healing is not free** — passive HP regen costs soul from the ambient pool. Active repair (R) now costs 18 soul/HP (was 2). Healing is expensive because matter is condensed soul.
- **changed: damage sparks are now soul** — hitting enemies spawns white sparks that carry soul proportional to size and attack damage. Catching them turns fighting into a source of income.
- **changed: slimes deal 12 damage** — they mean it.
- **fixed: healing implosion timer used raw delta instead of ms** — `_implosionTimer += delta` added ~1 per frame, so the "every 100ms" check actually fired once every ~1.7s. The healing visual was a single burst every 2 seconds. Fixed to proper ms timing, fires every 20ms for true continuous stream.
- **fixed: healing implosion is now visible** — bigger/faster burst-out well clear of player sprite (speed 0.12-0.26, offset ±0.8), then aggressively condense back in (pull 0.05). No longer obscures the player.
- **fixed: slimes no longer orbit you or face toward you when unaware** — facing is fully decoupled from movement and smoothly lerps between targets (no snap turns). They glance around naturally, occasionally looking at nearby slimes.
- **added: movement debug** — new `SHOW_ENEMY_MOVEMENT_DEBUG` flag shows a green steering direction line, independent from FOV/perception debug.

#### Date: 15/7/2026
- **fixed: ambient soul gain** — ambient soul absorption (1 soul/s) was silently truncated to zero by `Math.floor`. Now uses a fractional accumulator so soul actually accumulates.
- **fixed: ambient motes reach you now** — spawn closer and fly faster, so the fade-in particles actually drift into you instead of fading out mid-air. Subtle but you can feel the world breathing soul now.
- **changed: no more invincibility** — getting hit hurts every time. Per-enemy attack cooldown (400ms) prevents rapid-fire damage without global i-frames.
- **added: white flash on damage** — player sprite flashes white when taking damage. Feedback without invincibility blink.
- **improved: healthbar shows number** — temporary placeholder shows current/max HP text like the soul meter.

- **NEW: soul system** — souls are now a resource you collect by killing enemies (25 per kill). Stored in a two-layer vertical bar (tiers × 100): the fluid fill bar shows current soul, and 8 tower segments light up behind it as you fill each tier. "SOUL" label + total count displayed above. Pure PIXI.Graphics, no assets. Top-left position.
- **NEW: bleed mechanic** — 30% of incoming damage goes into a bleed pool that drains as actual health over time. Drain accelerates the more wounded you are. Every hit now has lingering consequence without needing large upfront damage numbers.
- **NEW: repair channel (hold R)** — consume soul to heal health (3 soul per HP, 3 HP/s). Movement slowed to 30% while channeling. Requires 5+ soul to start. Release R to stop. Gives soul a combat purpose beyond collection — spend essence to reinforce your spirit's integrity.
- **NEW: economy audit** — leak particles no longer carry soul value. You can't reabsorb your own inner core by chasing falling particles. Soul is earned from killing enemies (death burst) and spent on repair. Leak particles are visual-only loss. Full breakdown in docs/economy.md.
- **changed:** max health 50 → 80, bleed floor raised, bleed max raised, soul cost per HP reduced to 2. Gives more combat room while keeping the death spiral urgent.
- **NEW: equilibrium model** — the game's name is now a literal mechanic. Three curves (ambient absorption, leak, active conversion) cross at an equilibrium point (~85% HP). Above it, small wounds self-correct naturally. Below it, you leak + bleed + drain soul until you channel repair to climb back up. Minor scratches heal on their own; real wounds demand soul. The Papercut Paradox is resolved without making spirits absurdly fragile.
- **changed:** repair is now urgent (8 HP/s instead of 3) — active conversion is inner-reserve burning, the fast method. 8 HP/s but costs 3 soul/HP, so it's a meaningful trade. One kill buys ~2.5s of channeling.
- **changed:** ambient absorption — passive HP regen (0.5 HP/s) + soul regen (1 soul/s) always on, representing a spirit passively drawing loose Soul from the air. Below equilibrium, this is too slow to save you. Above equilibrium, it handles scratches.
- **changed:** bleed now also drains your soul meter (1 soul per HP of bleed). The inner core leaks through outer core cracks — both HP and soul suffer. You can't hoard soul while wounded.
- **new visual:** active conversion implosion — when you hold R to repair, particles burst from you and aggressively reverse course, slamming back in and condensing. Same intensity as the death explosion but inverted. The e=mc² of healing: expel reserves → whisk in as matter.
- **new visual:** ambient absorption motes — tiny white particles fade IN from the air 3-5 tiles around you (and enemies), drifting gently toward the spirit. Always present. The world breathes soul. Subtle enough not to distract, visible enough to feel the atmosphere.
- **changed:** soul absorption now waits until the last 30% of a particle's lifetime before attracting it. The full visual (gout → droplet → expand → mist) plays out undisturbed. THEN a gentle pull draws the fading remnant toward you if you're close. No more particle yoink ruining the effects. Pull strength reduced to a third.
- **changed:** bleed no longer runs out. Once you're below max HP, you bleed continuously at a rate that scales with how wounded you are. Soul doesn't clot. The only way to stop bleeding is to repair to full health (hold R). This turns bleed from a "wait it out" nuisance into a persistent economic drain that demands soul spending.
- **fixed:** soul economy inflation — wounding leaks from you and enemies were acting as infinite soul printers (hurt yourself = free soul, stand near wounded enemy = passive income). With magnetism delayed to 30% lifetime, leak particles fly away on their natural paths and dissipate before collection. Death bursts are the only reliable income. The economy now has actual scarcity. (we accidentally learned macroeconomics building this game)
- **changed:** soul is no longer assigned per-kill. Every WHITE particle's soul value comes from its visual size — bigger = more soul (formula: `ceil(size × 0.3)`, minimum 1). A size-3 spark is 1 soul, a size-14 gout is 4. The particle IS the currency. Non-white particles (dust trails, etc.) are visual-only, no soul. No more floating point soul values — all integers, clean display.
- **fixed:** floating point soul values from fractional absorption were causing ugly numbers like "12.350000001" in the soul meter. All soul is now integer-only (`Math.floor` on collect, `Math.round` in size formula).
- **fixed:** bleed pool was not resetting on death — if you died with active bleed, your next life started bleeding immediately with no explanation. Fixed.
- **balanced:** absorption range raised to 5 tiles (was 4). Removed SOUL_PER_KILL config — particle size naturally determines value (~40-60 soul per kill from 24 death particles). No more explicit per-kill math.
- **changed:** soul is now collected by walking over death particles (within 5 tiles, particles curve toward you — absorb on contact). No more auto-absorb range. If you walk away, you miss the soul. Lore-accurate: particles ARE the essence.
- **fixed:** bleed could silently kill the player without triggering the death animation (stuck at 0 HP, frozen, no explosion). Now dying from bleed correctly triggers the full death sequence.
- **changed:** player max health reduced to 50 (was 100). Combined with bleed + repair, health is now a meaningful resource to manage rather than a buffer.
- **changed:** contact damage now scales with enemy stats (was hardcoded 10) — future-proofed for different enemy types.
- improved: camera shake pass — all hits feel harder. Global intensity multiplier (`SHAKE_INTENSITY`), stronger micro-noise vibration, more tilt rotation, and damage hits now leave a lingering reeling effect instead of just a quick flinch. Tune via `SHAKE_INTENSITY` and `DAMAGE_EXTRA_TRAUMA` in config.
- changed: camera now smoothly follows with a movement look-ahead — no more snapping. The camera gently trails behind the player and shifts slightly ahead in the direction you're moving, then decelerates smoothly when you stop. No overshoot, no rebound. Tune via `FOLLOW_SMOOTHING`, `FOLLOW_LAG`, and `LOOK_AHEAD` in config.

#### Date: 14/7/2026
- fixed: death respawn visual glitch — after the death animation, the camera and player position could briefly decouple, causing unloaded chunks to flash on screen before the camera caught up. Player and camera now teleport to the spawn point on the exact same frame.
- fixed: sword thrust hitbox bug — the thrust attack (right-click / F) was hitting in a broad arc like a slash instead of being the narrow, precise stab shown by the visual effect. Hitbox is now correctly aligned with the visual thrust.
- fixed: slime tackle teleporting bug — slimes will no longer lunge massive distances across the map to hit you if you teleport away or die/respawn while they are winding up their attack.
- fixed: camera shake intensity bug — screen shake was getting unintentionally stronger the further you traveled from the center of the world. Shakes are now consistent everywhere.
- improved: death soul gush completely reworked — when a slime dies, soul no longer weakly leaks. Instead it **gushes out in a streak** as the corpse tumbles backward, with bright particles fanning outward in a wide trail that floats upward and lingers. The effect culminates in a satisfying explosion of rising soul essence.
- improved: wounded slimes now leak soul like blood gouts — particles drop fast from the wound like droplets, then expand and fade into mist as they hit the ground. No more clouding around the enemy.
- changed: thrust attack (was "poke", right-click / F) reworked — zero knockback on hit (clean pierce), but a killing thrust **skewers the enemy and pulls them toward you**, with a massive soul spray erupting from the exit wound as the blade passes through. Feels like you impaled them.
- renamed: all "poke" → "thrust" across the codebase (config, methods, keybinds).
- added: precise attacks (thrust/arrow) now leave a small exit-wound spray even on non-lethal hits — the blade still passes through, just less dramatically.
- added: the floating spirit player now leaves a faint ethereal trail (pale blue-white wisps) while moving — subtle, ghostly, immersive for a non-physical entity.
- added: slimes now kick up small ambient dust puffs behind them when moving fast in pursuit — gives a sense of speed and weight to their chase.
- fixed: dying slimes can no longer damage the player on contact — corpses are just corpses now.
- changed: the spirit's movement trail is now an ambient dust cloud kicked up behind the feet instead of ethereal wisps — faint white-blue puffs of disturbed air that bloom at the player's feet and trail behind. Renders under the player sprite layer for correct depth.
- improved: player animation adds a gentle idle hover (floating bob) when standing still — makes the spirit feel weightless.
- added: slimes now have a subtle idle wobble (gentle vertical bob) — adds life to their idle state.
- changed: trail particles no longer freeze during time stop — the dust cloud keeps drifting while the world is frozen, emphasizing the contrast.
- changed: the spirit's wound bleed no longer rises like smoke — now drops like thick gouts of essence, spraying outward and pooling on the ground. No more obscuring the player.
- changed: the spirit moves slower when wounded — speed scales with remaining health, making every hit feel consequential and adding tension to low-health escapes.
- added: death is no longer instant — the spirit sinks over 2.5s while inner core essence leaks gently from cracks, then the outer core collapses in a massive explosion of condensed soul-matter fragmenting into raw energy (60+40 particles across a 2-tile radius). Gives weight to dying without breaking flow.
- changed: soul gout particles (wound bleed + death gush) now fall straight down on screen instead of arcing diagonally in isometric space — no more confusing trajectories when moving left. Gouts splat in place on the ground and fade, like proper blood analogues.
- changed: damage-based particle size toned down — particles no longer look excessive at low health, just noticeably larger.
- changed: healthbar labeled as "DEBUG" and hidden by default — the game's visual language (soul bleed, movement slow, death explosion) is now immersive enough to stand on its own without UI health displays.

#### Date: 13/7/2026
- improved: camera shake completely reworked again — micro-noise now uses smooth sine waves instead of random jitter, so vibration feels organic and continuous instead of like a rattling phone. Added a subtle grit layer on top for visceral texture. Camera also tilts slightly on impact (rotational shake) — adds weight you feel more than see.
- improved: bow release shake now scales with charge — a normal release is barely perceptible, but a full-power shot gives a clean satisfying snap. The sequence of charging, releasing, watching the arrow fly, and then feeling the punch on kill now has a clear rhythm.
- improved: bow draw tremble re-balanced — subtle enough to feel the tension building, but not so heavy it dominates.
- improved: killing an enemy with an arrow now gives a noticeable extra "confirmation" hit — that moment where a heavy shot punches through and kills feels genuinely satisfying.
- improved: all shake intensities re-tuned — melee swings are lighter and snappier, bow hits are punchy without being seismic, and taking damage is still the strongest shake but proportionate. Rapid sword swings no longer stack into earthquakes.
- fixed: drawing and holding an arrow, then unequipping the bow no longer leaves the charge and tremble running indefinitely.
- fixed: screen shake no longer varies in strength depending on which direction you hit from — a kill to the north now feels the same as a kill to the east.
- added: camera shake can now be disabled entirely (accessibility option in config).

#### Date: 15/7/2026
- **NEW: slime AI rewritten from scratch** — cleaner, smarter, more organic. Steering replaced with a smoother vector-weighted system (no more 16-bin scoring per frame).
- improved: wander movement — slimes no longer snake in a robotic sine wave. They wander with smooth, natural curves — mostly straight with rare gentle turns. Looks like a creature exploring, not an oscilloscope.
- improved: orbit direction flips — when reversing direction, slimes pause and slow to a stop for 0.6–1.2s, then change course. No more instant 180-degree spins.
- improved: smooth acceleration + braking — no more jumping between 0 and full speed. Slimes accelerate when starting, decelerate decisively when stopping, and brake harder when turning. Rate depends on mood: relaxed slimes take ~0.5s to reach speed, panicked ones hit full in ~0.12s.
- improved: speed depends on intent — unaware slimes patrol at half speed (casual meander). On alert they accelerate to full pursuit speed. Makes them feel like they have agency, not a single gear.
- improved: panicked slimes now behave more consistently — they no longer rationally switch to "suspicious investigation" when the panic timer expires (they just calm down to unaware). And if an arrow flies past while they're panicked, they flee from its origin instead of stopping to investigate.
- (dev) debug visuals overhauled: hitbox ellipse accurately matches collision radius; FOV wedge now projects like sword arcs (correct isometric range at all angles); AI debug separated to `SHOW_ENEMY_AI_DEBUG`
- improved: slimes now naturally cluster in loose groups

#### Date: 12/7/2026
- NEW: wounding system — enemies now visibly degrade as they take damage. They move slower, slide further when hit, and telegraph their health through body language instead of a health bar. Low-HP enemies feel sluggish, heavy, and one hit from death.
- NEW: soul leak — damaged enemies emit a faint white mist from their wounds. The more damage they've taken, the more they leak. Tells you which enemy is hurt without any UI.
- improved: screen shake completely reworked — camera now snaps *instantly* on impact (not a slow spring buildup). Every hit has a clear directional push that peaks on the hit frame and settles quickly. Sword hits push the camera back (recoil), arrows punch in their flight direction, bow draw adds building tension shake, and taking damage knocks the camera toward the attacker. Combat finally feels weighty.
- fixed: right-click with bow no longer softlocks — if you need to reload the page to fix inputs, this was the cause. Right-click release now properly fires the quick shot instead of leaving the bow in a stuck state.
- NEW: dying enemies now leak soul mist during their death slide — white essence trails behind the corpse as it skids, pooling on the ground like a spirit bleeding out. One-shot kills finally have a continuous visual from impact to explosion.
- improved: enemy AI now reacts naturally to arrows flying past — they freeze completely (holding their breath, fearful), scan along the arrow's trajectory, slowly turn toward the origin with nervous wobbles, then creep forward in a stop-and-go hesitant approach. No more terminator-perfect charge toward the shooter.
- fixed: knockback was inverted — wounded enemies should slide *more* (less structural integrity), but the old code gave them *faster* decay (shorter slide). Now a full-HP enemy stops on a dime while a near-dead one skids across the floor.
- balanced: removed the separate death knockback multiplier — the wounding system already makes killing blows feel distinct (the enemy was already low-HP with low resistance, so the same force sends them further). Enemies no longer rocket across the screen on death.
- fixed: one-shot kills had no corpse slide — if you killed an enemy in one hit, their body stopped dead because the code used the wrong resistance value for the death slide. Now corpses always slide properly on death.
- fixed: bow knockback was too strong — arrows were sending enemies flying 8 tiles. Bow now has a modest knockback (0.35) that gives a visible push without being a cannon. Charge scales it for bigger hits.
- fixed: soul leak colour corrected — was blue, now white to match soul essence visuals.
- fixed: soul leak particles are now bigger and last longer — mist reads as a steady leak rather than tiny flickers.
- fixed: dead enemies no longer absorb hits — arrows fly through dying bodies instead of stopping on them, and you can't juggle a corpse with repeated attacks.
- fixed: shadow kunai no longer teleports you to a dead enemy.
- fixed: melee arc now correctly hits enemies whose hitbox overlaps the edge of the swing — previously only the enemy's center point was checked, so enemies that looked like they should be hit were sometimes missed.
- fixed: default attack (left click) visual arc was drawn 1 tile longer than the actual hit area — the swing graphic used the player's attack range (3 tiles) while the hit check used the SLASH config range (2 tiles). They now match. The phantom "NORMAL" attack type has been removed.
- fixed: time freeze now actually slows enemies — their AI, tackle timings, and direction flips all use simulation time rather than wall clock.
- fixed: particles no longer fade out at full speed during time freeze — lifetime, alpha, and scale all progress at the slowed simulation rate. Particle friction is now frame-rate independent, so explosions cover the same area whether time is normal or slowed.
- fixed: time freeze desaturation now applies to grass and enemies (was missing grass; enemy filters were reset each frame by the render loop). Also fixed: filters weren't being removed when time freeze ended.

#### Date: 11/7/2026
- fixed: movement keys (WASD / arrows) could get stuck on if you pressed Shift while holding them then let go. Root cause was Shift capitalizing the key event, so the keyup handler didn't recognize it. Now fixed.
- implemented proper isometric depth sorting — grass now correctly renders in front or behind the player based on their relative world positions. No more grass always on top or always underneath!
- fixed: depth sorting now uses each sprite's ground-contact point (feet for player/enemies, bottom for grass) instead of sprite center. This fixes grass rendering on top of the player when it should be behind — the player's feet are deeper than their center, so the sort key needed a height offset.
- fixed: entities were invisible because they were inside the world container and rendering behind the ground tiles. Entity layer now has proper zIndex elevation.
- fixed crash on startup after previous refactor (weaponRenderer missing its playerContainer anchor)
- fixed crash when enemies are cleaned up from distant chunks (pooled enemy containers missing hitbox reference)
- replaced player.png with new custom art (32×32 source, upscaled to 64×64 on screen, nearest-neighbor crisp)
- buffed slime lunge back to original range

#### Date: 10/7/2026
- added dash — press Shift to dash in the direction you're facing. 200ms burst at 5x speed, invincible during dash, 600ms cooldown.
- added time freeze — hold Spacebar to freeze time (was V). Enemies, arrows, and smoke slow to a crawl (0.05x speed) while the player moves at full speed and can attack. World turns greyscale (ground, grass, enemies, particles), player stays in colour. Camera subtly zooms in during freeze. Release Spacebar to resume. No cooldown or duration limit for now (will cost Void later).
- enemies are no longer omniscient — they have a 120° field of view. Sneak up behind them and they won't see you unless you're very close. They also react to sounds: attacking, dashing, or an enemy dying nearby makes them investigate the source. Lose line of sight long enough and they give up searching.
- enemies now have a panic state — if a buddy dies violently nearby (within 5 tiles), they scatter and flee from the death point instead of investigating. They'll calm down after a few seconds and cautiously look around.
- enemies notice arrows! If an arrow flies past within 3 tiles of an enemy, they become alert toward where the arrow came from. Missed shots now give away your position.
- awareness spreads between enemies — if one spots you or starts fighting, nearby slimes catch on. Alert spreads within 3 tiles, panic within 4, suspicion within 5. A single engagement can pull in the whole cluster.
- slimes no longer wait their turn to attack — they all attack independently on their own cooldown, no more orbiting politely while you pick them off. Multiple simultaneous lunges are now possible.
- added afterimages to dash — ghost sprites trail behind you as you zip through enemies.
- shadow kunai leaves a ghost afterimage where you teleported from, fading over a second.
- shadow kunai range buffed to 15 tiles (was 10).
- death delay: enemies no longer immediately explode into particles when killed. Their body reels back from the hit for a moment, then bursts into soul essence. Gives satisfying weight to kills. Dead bodies slide further before exploding.
- precise attacks (poke, shoot) now punch three impact streams back toward the attacker instead of spraying behind. Looks like soul essence punching out the entry wound — distinct from the scattered arc of slashing attacks.

#### Date: 4/7/2026
- nerfed slime lunge range: orbit radius 1–3 tiles (was 2–5), max tackle range 3.5 tiles (was 8). Still variable per slime — some orbit closer, some further, adapting naturally.
- fixed: slimes landing on top of player after tackle couldn't retreat (proximity guard blocked all movement during cooldown)
- fixed: hitting a slime during its tackle with knockback would cancel the knockback after it finished, then teleport back to where it was lunging
- overhauled slime AI: replaced simple chase + repulsion with context steering (16 weighted directions per slime per frame) — slimes now orbit, weave around each other, and react to the player's position organically
- added slime tackle attack: slime squats (200ms telegraph) → lunges at player (400ms arc, can't turn mid-lunge) → cooldown retreat. Telegraphed and dodgeable.
- slimes coordinate attacks: only one or a few tackle at a time; others circle and wait their turn
- slimes now orbit at a wider distance (2-5 tiles), using the tackle to close in — makes more visual space for interesting behavior
- added debug AI visualization: lines showing each slime's 16 weighted directions + thick line for chosen path + state label (enabled via SHOW_ENEMY_HITBOXES)

#### Date: 4/7/2026
- fixed: standing still made you immune to slime contact damage because enemy AI prevented slimes from getting close enough (hitbox collision guard was tighter than damage range)
- added player health system (100 HP, invincibility frames on hit, respawn on death)
- added a temporary health bar HUD for testing — will be removed later; health should be communicated through visual feedback (animation, particles, stance), not UI bars
- added contact damage as a stub: slimes hurt you on touch (10 damage) — placeholder until proper enemy attacks are in

#### Date: 30/6/2026
- migrated from PixiJS v7.3.2 → v8.6.6 across all source files (Graphics API, async init, containers, text syntax, texture source API, ParticleContainer → Container)
- extracted item definitions into its own file (src/itemDefs.js) so collectibles and inventory share one source
- replaced raw attack type strings (SHOOT, POKE, etc.) with an enum Config.ATTACK
- moved bow draw animation and shoot flash effect from requestAnimationFrame onto the game ticker
- cleaned up unused leather_armor item definition
- added developer CHANGELOG.md at root for detailed code audit trail
- fixed: asset loading pipeline (multi-layer cache fallback for v8 CDN build compatibility)
- fixed: inventory UI icons now render reliably (render versioning prevents stale callbacks)
- fixed: FPS overlay zIndex so it renders above game world
- performance: stop re-adding enemy containers every frame
- performance: cap enemy separation checks to nearest 10
- performance: pool enemy container/sprite objects
- performance: silent destroy for out-of-bounds/chunk-offload enemies (no particle waste)
- fixed the PixiJS v8 texture loading problem that made inventory hotbar icons disappear after the migration
- fixed equipped ranged weapon sprites using the same shared texture loader, so the bow/kunai can render reliably when selected
- fixed dropped item sprites on the ground using the same shared texture loader, including a bug where collectibles could create a new sprite that was never attached to the world container
- made texture preloading pull from the item definitions and config instead of a fragile hand-written partial list, so new item icons/weapons are less likely to be missed

#### Date: 06/12/2025
- made collectibles that can be picked up and is added to inventory
- refactored inventory code to make it more versatile and robust for different types of inventory rather than js weapons
- fixed graphics of collectibles being double transformed by the camera resulting in them moving seperately to game world, container issues
- fixed inventory item stack count bug, first slime had no number (ok), second slime made swords go to "2" (not ok) and third slime made slimes go to "3" (ok)
- fixed bow not rendering by giving its container to isometric.js to manage properly 
- made and added slime-item.png & default-item.png (a slime)
- fixed inventory ui rendering and item stack count

#### Date: 05/12/2025
- made particles fade out w exponential cubic curve - looks better than linear
- made concept of bird of plague
- made enemies drop collectible (functional) items on death

#### Date: 29/11/2025
- fixed stress test 50 slime spawn not working by moving it inside the game.js scope
- once again had to fix enemies no longer exploding on death, it was accidentally removed in enemy.destroy()

#### Date: 17/10/2025
- fixed enemies no longer exploding on death, mustve been removed accidentally during optimisation

---
### UPDATE 22/8/2025 V5

#### Date: 17/9/2025
- **fixed memory leaks - fps restored to normal**, learnt how to use devtools memory usage
  - turns out it was chunk containers not being cleaned up, not enemies as i suspected
  - i thought it was enemies because i have to run and spawn them in, kill them before going to spawn more, turns out while i was running chunk containers not cleaned up properly accumulated, and i thought slimes accumulated after i killed them
  - added "t" for stress testing, press to spawn 50 slimes
  - bow temporarily buffed to one shot slimes
  - t doesnt work, made it work, made event listener global

#### Date: 12/9/2025
- made and added kunai-ui.png
- made and added kunai.png
- made and added grass.png

#### Date: 11/9/2025
- removing completely old tall grass logic to make way for rework
- i: after playtesting memory seems to stop leaking after a while, so thats a good sign, still needs improvement tho

#### Date: 7/9/2025
- improved debug display with enemy, particles and projectiles count with memory usage
- improved fps: used dirty flags to recreate enemies array instead of every second
- ! memory usage only keeps increasing - memory leak detected - my computer fans is genuinely scaring me im closing tab to force memory cleanup and let my computer breathe, must fix this asap, also this causes fps drop and lag :/
- removed duplicate function that was there somehow

#### Date: 5/9/2025
- added day/night cycle but made it dormant because it needs finetuning and polish, will be reactivated when other more important features are added first, decent attempt tho

#### Date: 4/9/2025
- fixed: chunk enemy ownership not transferred properly, leading to enemies randomly dying when their birth chunk is offloaded, fixed by using the official world generation function to move the enemy, silly me
- added shadow kunai teleportation but it feels unsatisfying right now, will fix
  - added trail particles
  - made them last longer and be bigger, so much better
  
#### Date: 29/8/2025
- ! flash white not working - 2fix: nade it work by removing settimout dependency
- ! arrows dont make piercing type particles - fix: passed shoot attacktype to takedamage()
- made slimes face player during movement using same sprite
- ! **fps so slow (memory leaks <- didnt know this yet)**:
  - fix 1: update enemies if theyre close enough to the player
    - crude but will replace with line of sight checks later
    - fixes all enemies being updated every frame from literally across the existing world
  - fix 2: added *bucketing* to the texture cache so the random size generation doesnt make infinite combinations
    - also added *cache cleaning* so it doesnt accumulate over time - a big issue previously causing fps to drop slowly


#### Date: 28/8/2025
- *summary: art / assets updates*
- made a sword.png and a bow.png and imported it into the inventory ui.
- ! *looks distorted* - **fix: PIXI.SCALE_MODES.NEAREST**, now looks too small, **fix: scale it using code**
- made an arrow.png for arrow projectiles, imported it into projectile.js
- made bow and arrow mechanics more realistic (created when pressed, pulled back and released visually) for both MSB clicks
- made bow rotate towards mouse & made weaponRenderer.js
- **removed tall grass temporarily to try reduce lag but still very high lag, will fix soon, have a list of problems**
- ! improved arrow hitbox logic and fixed quantum *tunneling* because arrow moves through enemies between frames and collisions are undetected, fix: use raycasting *sensibly*


---
### UPDATE 22/8/2025 V4

#### Date: 20/8/2025
- made particles work, added precise bool to attack types, 
- precise attacks send particles through enemies, non precise send them perpendicular
- enemy explodes in particles upon death 
- ! **fps so slow** <<<<<<<<<<====================================
- ! *particles look mid not bad but not good*
- added working chunk border debug mode

#### Date: 19/8/2025
- made projectile.js and a bow and arrow system
- ! arrows do not point in the direction they are fired and do not delete themselves after first hit
- fixed arrows pointing in direction theyre fired and delete themselves after first hit
- ! arrows did not do knockback - fixed: too much knockback - fixed: reduced knockback to 0.2
- ! charge system for bow and arrow didnt work: used max power - fixed charge system, works now
- ! somehow cooldown had been reset and my code was reverted and I cant undo, must reimplement cooldown
- **fixed global cooldowns**
- **added hotkeys** to quickly rotate and equip inventory items, inventoryUI.js now listens for inventory.js's events

#### Date: 18/8/2025  
- Added tall grass with sine-wave sway animation (anchored at bottom)  
- Added player interaction with grass  
- Implemented painters algorithm so player renders behind grass  
- Reduced grass blades from 3 to 2 (looked cleaner)  
- Made tallGrass.js and refactored combat logic from player.js into combat.js
- made inventory.js and inventoryUI.js, made equipping and unequpping weapons work
- added the inventory placeholder bar

#### Date: 16/8/2025  
- Improved sword slash visuals ↔ hitbox consistency  
- Added damage frames to slimes when hit  
- Added knockback to slimes on hit  
- ! Another failed dash attack attempt (scrapped)  

---
### UPDATE 22/8/2025 V3

#### Date: 15/8/2025  
- **Removed edges entirely** — wasn’t worth fixing the neighbor bug  
- Improved grass tile sprites + added 3 variations  
- grass variations in a texture atlas
- Grass variations now random but **fixed per tile** (no more flickering)  
- Added slime enemies:  
  - Hitboxes for slimes + player  
  - Slimes take damage/die  
  - Player sword attacks: poke, slash, uppercut, heavy slash  
  - ! Tried dash attack → removed (not like i wanted)  

---
### UPDATE 22/8/2025 V2

#### Date: 11/8/2025  
- Improved player sprite  
- Added dynamic chunk loading  
- Added block edges (rendered even with neighbors — buggy)  

---
### UPDATE 22/8/2025 V1

#### Date: 4/8/2025  
- Added isometric renderer + view  
- Added placeholder player sprite (rendered isometric)  
- Added basic movement  
- Made config.js, world.js, isometric.js and player.js
