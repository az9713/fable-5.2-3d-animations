# HANDOFF — 3D Style Atlas (three.js)

Audience: an implementing agent (Opus or Sonnet) in a fresh session. Read this file fully before you write code.
Owner: the repository owner. Windows 11, PowerShell and Git Bash.

## 0. Resume point (read first; verified 2026-11-13)

### 0.1 Newest: plan for a second set of 100 art styles (session of 2026-11-13, Claude Opus 5.5; not started)

The owner found that the 100 "styles" are not art styles in the usual sense (a way to draw, such as watercolor or paper cut). About 20 are art styles; about 80 are scenes, machines or metaphors (judgment, not a code field). Also, each style file mixes look and content (fixed beats, data, labels), so no style takes a new topic without a rewrite. The owner wants **100 art styles** as a second set next to the existing 100.

- Plan: `art-styles-plan.html` (repo root). Idea: animation = scene + art style; an art style is a post shader + optional material change + palette + frame step, with no topic. Phases 0 to 5, a draft list of 100 in 10 groups, 4 open decisions with defaults.
- Facts checked in that session: plan rows = style files = manifest ids = posters = 100 (0 differences). `kit/stage.js` has 355 lines; the post pass is at `stage.js:282-303`. 11 style files have a post shader; 89 set `post: null` (the kit has one post pass, so scene reuse must pick `post: null` scenes).
- **Plan v2 (session of 2026-11-13, Claude Fable 5.2): `art-styles-plan-v2.html` (repo root). It replaces the draft list and extends the plan; the original file is kept unchanged on the owner's instruction. Read v2 first, then the original for the parts v2 does not repeat (its sections 1 and 2: scene + art style, scene options A/B).**
  - Why: the owner asked for more imaginative styles. Review found that the original list had names only, many entries that give the same picture as a filter, one repeat of the first set (ukiyo-e = `woodblock`), and mostly flat filters.
  - v2 rule: a style must do one or more of: the medium changes with time (beats); the marks follow the surface; the depth is the material; light or an instrument makes the picture.
  - v2 list: 100 styles in 10 groups, each with a description and its inputs. 41 kept from the original (some merged or renamed), 59 new, 59 cut (v2 section 4). The page computes these counts from its own inline data array.
  - v2 kit changes for Phase 1 (line counts are estimates): `W` world position from depth (4 users; 5 after the Phase 0 edit), `B` beat times as uniforms (20; now 22), `S` frame step (9; now 11), `M` material hook (3; now 5), `X` renders at other times (3: Event camera 49, Motion echoes 92, Long exposure 100; cost 2 to 16 scene renders per frame), and a separate label pass (all 100).
  - v2 pilot: Paper-cut light box, Wet watercolor, Banknote engraving, Cel animation on 2 scenes; add Long exposure if decision 6 is approved.
  - v2 states its own weak points: 8 rows with input `C` only (first to drop) and 3 pairs with one mechanism (22/23, 31/38, 36/79).
  - **Not verified: no shader was written and no style was rendered. Each "Inputs" value is an expectation from reading `stage.js:225-355`.** The page script was run in Node with a stub `document` (100 rows, 10 tables); the page was not opened in a browser.
- **Phase 0 done (2026-11-13, Claude Opus 5.5).** Owner's answers, recorded in section 7 of `art-styles-plan-v2.html`: 1 overlap = **make new versions** (not the default); 2 = scenes A after the 2-scene test; 3 = generic names only; 4 = **5 subagents approved** for Phase 3; 5 = approve `W B S M` + label pass; 6 = approve `X`, stop if live play < 15 fps; 7 = keep Autostereogram with a card note. List edit (owner chose "cut the 8 C-only rows + 7 weak rows"): 15 rows replaced in place by 15 `ver` rows (art-style versions of first-set styles), so the other 85 numbers do not change. Table in v2 section 4b. The 7 extra cuts and the 15 picks are agent judgment, shown to the owner.
  - Counts now (computed by the page script in Node, stub `document`): 100 rows, 35 keep / 50 new / 15 ver; input users B 22, C 68, D 67, M 5, N 28, S 11, W 5, X 3. No row has input `C` only. 46 number references in the prose checked against the list: 0 mismatches. Page not opened in a browser.
- **Next task:** Phase 1 pilot, 5 art styles on 2 scenes: Paper-cut light box (21), Wet watercolor (1), Banknote engraving (11), Cel animation (51), Long exposure (100). Kit changes `W B S M X` + label pass in `atlas/kit/stage.js`. Stop for the owner's review after the pilot.
- Git: `art-styles-plan.html`, `art-styles-plan-v2.html` and `.impeccable/` are **untracked**, and this file is modified (not committed, not pushed). Local HEAD = remote HEAD = `35c5ef1`. The repo is public on GitHub Pages, so a commit publishes them. `.impeccable/config.json` holds one design-check ignore (`aphoristic-cadence`, this file only; reason: ASD-STE100 short sentences; agent decision, not owner-confirmed). Ask the owner before you commit them, or add them to `.gitignore`.
- The plan HTML had one error during its session (a wrong "1 of 100 uses post" count from a bad grep); it is fixed in the file.

### 0.2 Atlas (first set of 100)

**Status: all phases done.** Sections 1 to 12 are the design spec (written by Claude Fable 5.2, session `fa936852`). Section 13 is the build log (Claude Opus 5.5, session `037ffe74`). There is no `CLAUDE.md` in this project; the owner's global rules apply.

Current state:
- 100 of 100 styles built in `atlas/`; 100 posters; `node atlas/tools/test.mjs`: 2438 passed, 0 failed.
- Repository: <https://github.com/az9713/fable-5.2-3d-animations> (public). Branch `main`; local HEAD = remote HEAD = the commit that adds this section (check with `git ls-remote origin main`). Earlier commits: `ee3b394` (all files), `ed089fb` (README video title).
- Live app (GitHub Pages, source = `main` branch root, `.nojekyll`): <https://az9713.github.io/fable-5.2-3d-animations/atlas/>. On 2026-11-13 the gallery showed all posters and `player.html?style=signal-glitch` rendered. The site root URL (without `atlas/`) returns 404, by choice.
- Kept out of git by `.gitignore`: `reference/` (video screenshots), `.ignore/` (session transcripts), `README.txt` (owner notes). Do not publish them. The owner's name was replaced by "the owner" in this file.
- Last fix: `atlas/index.html` line 33 `.pv .ph[hidden] { display:none; }`. Before it, the placeholder covered every poster.

Open items for the first set (none is required; the main next task is in 0.1). Possible items:
- The owner checks **Record WebM** in a normal foreground browser (not yet tested).
- Optional: read `pass/26.jpg`–`34.jpg` again (styles from tarot-table on); each style was checked one by one earlier.
- Known weak frame 0 under a strict reading: `embossed` (t = 0 and 4.5 mostly blank paper) and `frosted-pane` (t = 0 mist only).
- Optional: a root redirect page to `atlas/`.

Rules that still apply: three.js core only, no build step, no npm; kill only a PID you started; no subagents without the owner's approval; report in ASD-STE100.

Session-transient scripts (scratchpad of session `037ffe74`; gone after the session; durable record = the committed files): `check.mjs` (per-style sheets, see section 13), `sync.mjs` (style fields to `manifest.js`), `pass.mjs` (all styles at t = 0, D/2, D − 0.5 in its own headless Chrome on port 9334, errors + determinism, montage pages), `models.mjs` (reads `~/.claude/projects/<project>/*.jsonl`, counts `message.model` per assistant turn and `Write`/`Edit` targets; gave the model table in `README.md`). Rebuild one from this description if needed.

## 1. Goal

Build a local web app, the **3D Style Atlas**: a library of 100 three.js animation styles.
Each style is a short animated explainer built only in code (no models, no images, no downloaded textures).
For each style the atlas gives a **Copy prompt** button. The prompt contains the style source, the rendering kit and the sound kit.
The user pastes the prompt into Claude with a topic, and Claude rebuilds that style for the topic.

The model for this product is a Futurepedia video (`reference/video-transcript.txt`, frames in `reference/`; the reference folder is not published in this repository).
We build the same structure with our own code, our own text and no Futurepedia branding. We must be better in four ways:

1. **More styles**: 100 against 37, with 6 families of styles that the reference does not have (section 8, families H to M).
2. **Voiceover works inside the atlas**: load an audio file and an SRT in the player, and the demo re-times itself. The reference only does this after a round trip through Claude.
3. **Live previews**: cards run the real three.js scene on hover. The reference uses video clips.
4. **Export in the browser**: a "Record WebM" button in the player. No shell is necessary.

## 2. Hard rules

- three.js **core only**. No addons (`examples/jsm`), no other libraries, no build step, no npm packages in the app.
- Every asset is made in code. `CanvasTexture` and procedural geometry are permitted. Image files, GLTF, HDRI and font files are not.
- Google Fonts are permitted, loaded with a `<link>` tag, and listed in `style.fonts`.
- **Determinism**: `update(t)` sets the full scene state for time `t`. No state accumulates between calls. No `Math.random`, no `Date`, no timers in a style. Use `K.rng(seed)`.
- Kit files and style files are **classic scripts** (no `import`, no `export`). The prompt builder pastes their text into a prompt, so they must run when pasted in sequence.
- Do not copy text, names of demos, or branding from the reference. Generic style names (Low-Poly, Voxel) are fine.
- Smallest thing that works. Do not add a framework, a bundler, TypeScript, or a config system.
- Never kill a process by name. Kill only a PID that you started and recorded.
- Do not report "done" for a phase until its acceptance checks in section 10 pass. Report failures with their output.

## 3. Decisions already made (defaults)

The owner did not answer these yet. Use the default. Say in your first report that you used it.

| Decision | Default |
|---|---|
| Order of work | Phase 1 and 2 first (kits, page, 2 styles, voiceover). Stop for the owner's review. Then the other styles. |
| Card previews | Poster image, then live three.js on hover. No video files. |
| Parallel agents for the styles | **Not approved.** Ask the owner before you use subagents or a workflow. |
| Narration audio for tests | The owner supplies a file, or you ask before you spend ElevenLabs credits. An SRT can be made locally with faster-whisper at no cost. |

## 4. File layout

```
claude_3d_animation_future/
  HANDOFF.md               this file
  reference/               transcript + 8 frames from the video (layout reference only)
  atlas/
    index.html             atlas page: grid, filters, style window, prompt builder
    player.html            one style, full size, with control bar
    kit/stage.js           STAGE kit  -> global K
    kit/sound.js           SOUND kit  -> global SOUND
    kit/prompt.js          parseSRT, warp, buildPrompt (also loadable in Node)
    styles/manifest.js     STYLE_LIST = [{id, file}] in display order
    styles/<id>.js         one file per style -> STYLES[id] = {...}
    posters/<id>.jpg       one still per style, 640x360
    tools/test.mjs         Node self-check (no dependencies)
```

Serve with `python -m http.server 8000 --directory atlas`. `file://` does not work, because the prompt builder uses `fetch` to read the kit and style sources.

## 5. three.js loading

The reference prompt names `three@0.187.0`. Check that this version exists on jsDelivr. If it does not, use the newest version. Write the version in one place, `K.THREE_VERSION` in `kit/stage.js`, and use it in the pages and in the prompt.

```html
<script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js"}}</script>
<script type="module">
  import * as THREE from 'three';
  window.THREE = THREE;
  // then load kit and style scripts in sequence (create <script> tags, await onload)
</script>
```

Classic scripts run before module scripts. Thus the kit and style files must be loaded dynamically **after** `window.THREE` is set.

## 6. Contracts

### 6.1 Style object (`styles/<id>.js`)

```js
window.STYLES = window.STYLES || {};
STYLES['low-poly'] = {
  id: 'low-poly', name: 'Low-Poly',
  family: 'Filters over 3D',          // one of the 13 families in section 8
  use: 'Explainer',                   // Explainer | Story | Title | Product shot
  look: '…2 sentences: materials, palette, light…',
  motion: '…1-2 sentences: how things arrive, move, leave…',
  shownHere: '…the demo topic in one line…',
  goodFor: '…which content fits, and how beats map to the look…',
  fonts: ['Oswald:wght@500;700'],     // Google Fonts specs, can be []
  duration: 10,                       // seconds, canonical timeline
  samples: 8,                         // sub-frames for quality render (6.2)
  // CONTENT BLOCK FIRST: all words, numbers and beat times in one place.
  beats: [ { t: 0.0, label: 'EVAPORATION' }, { t: 2.5, label: 'CONDENSATION' },
           { t: 5.0, label: 'PRECIPITATION' }, { t: 7.5, label: 'COLLECTION' } ],
  build(S) {                          // S = stage context (6.2). Create everything here.
    // …
    return function update(t, realT) { /* set whole scene for canonical time t */ };
  },
  sound(k) {                          // schedule in canonical time
    k.bed('wind', { gain: 0.15 });
    k.play('pop', { t: 0.4, gain: 0.5, pitch: 1.2 });
  },
  post: null                          // or { fragment: '…GLSL…', uniforms: {}, normals: false }
};
```

- `t` is canonical time (it can be warped by a voiceover, see 6.4). Use `t` for story motion.
- `realT` is true player time. Use `realT` only for endless ambient motion (water, drift, flicker), so that it does not slow down when a beat is stretched.
- Each style: 3 to 5 beats, 8 to 12 seconds, a first frame that is already a good picture, a last second that holds.
- Words on screen are short labels. The picture tells the story.

### 6.2 STAGE kit (`kit/stage.js`, global `K`)

Keep it below approximately 500 lines. Required API:

| Member | Function |
|---|---|
| `K.run(canvas, style, {samples, cues})` → `Promise<S>` | Waits for `document.fonts.load` for each font. Makes the renderer (`antialias`, `preserveDrawingBuffer: true`, sRGB output, ACES tone mapping, PCF soft shadows), a scene, and a 35 mm-like `PerspectiveCamera` (fov 30, aspect 16/9). Calls `style.build(S)`. Returns `S`. |
| `S.seek(t)` | Renders the frame for real time `t`. Calls `update(S.warp(t), t)`. |
| `S.duration` | Real duration: `style.duration`, or the warped duration when cues are set. |
| `S.setCues(cues)` | Sets or clears the voiceover cues, and recomputes the warp. |
| `S.dispose()` | Disposes geometries, materials, textures, render targets, renderer. Necessary for hover previews. |
| `S.THREE, S.scene, S.camera, S.renderer, S.W, S.H, S.rng, S.beats` | Context for `build`. `W`=1920, `H`=1080 always (the canvas is scaled with CSS). |
| `K.rng(seed)` | mulberry32. Returns a function with `.range(a,b)`, `.pick(arr)`, `.int(a,b)`. |
| `K.ease` | `inOut, out, in, back, elastic, bounce` (each maps 0..1 to 0..1). |
| `K.prog(t, t0, t1, ease?)` | Clamped progress 0..1 of `t` between `t0` and `t1`. The main tool for deterministic animation. |
| `K.lerp, K.clamp, K.mix3(a,b,p)` | Numbers and Vector3. |
| `K.label(text, opts)` | A plane with a `CanvasTexture`: font, size, colour, optional paper/pill background, padding. Returns a Mesh. Texture is 2x resolution for sharp text. |
| `K.textBlocks(text, opts)` | Thick 3D letters without a font file: rasterise the text to a canvas (height `res`, default 96 px), merge pixel runs in each row into boxes, return one merged `BufferGeometry` with depth `opts.depth`. Use heavy fonts. |
| `K.camPath(keys)` | `keys = [{t, pos:[x,y,z], look:[x,y,z], fov?}]`. Returns `fn(t)` that sets the camera with Catmull-Rom position and eased look target. |
| `K.lights(S, preset)` | Presets: `'studio'`, `'sun'`, `'lamp'`, `'night'`. Key light with shadows, fill, rim. Returns the lights so the style can adjust them. |
| `K.canvasTex(w, h, draw)` | Helper for procedural textures (paper grain, wood, brick, noise). `draw(ctx2d, rng)`. |

Add a helper to the kit only when 3 or more styles need it. Otherwise keep the code in the style.

**Post pass.** When `style.post` is set, the kit renders the scene to a `WebGLRenderTarget` with a `DepthTexture`, then draws one full-screen triangle with a `ShaderMaterial`. Uniforms given to the shader: `tColor`, `tDepth`, `uRes`, `uTime`, `uNear`, `uFar`, plus `style.post.uniforms`. When `post.normals` is true, the kit also renders the scene with `scene.overrideMaterial = new MeshNormalMaterial()` to a second target and gives `tNormal`. This one mechanism serves all filter styles (edges, hatching, dither, thermal, ASCII).

**Quality render (`samples` > 1).** For each output frame, render `n` sub-frames at times `t + (i/n) * shutter` (`shutter` = 0.5/30 s), with a small camera jitter for depth of field when `style.dof` is set, and average them into a float render target. Live play uses `samples: 1`. Do this part last in phase 1. If it is not stable, leave it out and say so.

### 6.3 SOUND kit (`kit/sound.js`, global `SOUND`)

All sound is synthesised with the Web Audio API. No audio files.

```js
SOUND.live(scoreFn, startT, { voiceover: false, map })   // -> stop()   uses a shared AudioContext
SOUND.renderOffline(scoreFn, duration, sampleRate, opts) // -> Promise<AudioBuffer>  (OfflineAudioContext)
SOUND.toWav(audioBuffer)                                  // -> Blob (16-bit PCM)
```

- `scoreFn` is `(k) => style.sound(k)`. `k.play(name, {t, gain, pitch, pan, dur})` schedules one event. `k.bed(name, {gain})` starts a looped ambience for the full duration.
- One graph builder takes a `BaseAudioContext`, so live and offline use the same code.
- `live` with `startT` > 0 schedules only the events at or after `startT`, and starts beds immediately.
- `opts.map` is a function from canonical time to real time (the inverse warp of 6.4). The kit applies it to each event time.
- `voiceover: true`: effects at −6 dB, beds at −12 dB, music-like instruments muted.
- A master compressor/limiter at the output.
- Create the `AudioContext` only after a user gesture (the Play button), or the browser blocks it.

Minimum instrument set (each one is an oscillator and/or filtered noise with an envelope):
`tick, click, pop, thud, whoosh, swish, chime, bell, pluck, blip, sparkle, riser, drop, rumble, paper, glass, wood, metal, splash, bubble, zap, hum`.
Beds: `room, wind, water, night, machine, space, crowd`.
A style can define a custom instrument inline: `k.custom((ctx, dest, t) => {...})`.

### 6.4 Voiceover (`kit/prompt.js`: `parseSRT`, `makeWarp`)

`parseSRT(text)` → `[{start, end, text}]` in seconds. Accept `,` or `.` before milliseconds, CRLF or LF, a missing index line, and blank lines at the end. Throw an `Error` with the line number on a bad timestamp.

`makeWarp(beatTimes, canonicalDuration, cues)` → `{ toCanonical(realT), toReal(canonT), duration }`:

- Assign beat `i` to cue `floor(i * cues.length / beats.length)`. With equal counts this is 1:1. Beat 0 always starts at real time 0.
- Anchor points: `(real = cue start, canonical = beat t)` for each beat, and a last anchor `(real = last cue end + 1.0, canonical = canonicalDuration)`.
- Both functions are piecewise-linear between the anchors and clamp outside them. `toReal` is the exact inverse.
- If two anchors have the same real time, move the second one by 0.05 s. The function must be strictly increasing.
- `duration` = `last cue end + 1.0`.

Without cues, both functions are the identity and `duration` is the canonical duration.

**Player behaviour.**
- "Load voiceover" opens a file input for an audio file. The player makes an `<audio>` element from `URL.createObjectURL(file)`.
- "Load SRT" opens a file input or accepts pasted text, calls `parseSRT`, then `S.setCues(cues)`.
- When an audio file is loaded, the **audio element is the clock**: each animation frame reads `audio.currentTime` and calls `S.seek`. Play, pause and scrub control the audio element. This prevents drift.
- When no audio is loaded, the clock is `performance.now()`.
- The duration is the larger of `S.duration` and the audio duration.
- With a voiceover, the sound kit runs with `voiceover: true`.
- An optional "Captions" checkbox shows the current cue text in an HTML overlay below the canvas (not in the 3D scene).

## 7. The pages

### 7.1 `index.html` (atlas)

Layout as in `reference/atlas-grid-top.jpg` and `reference/atlas-cards.jpg`, but our own visual design.
The owner's rule for generated HTML: **dark mode**. `bg #0f172a`, card `#1e293b`, text `#e2e8f0` / `#cbd5e1`, muted `#94a3b8`, accents `#fb923c` / `#2dd4bf`, borders `#334155`, and `<meta name="color-scheme" content="dark">`.

- Header: title "The 3D Style Atlas", a 2-sentence description, the style count from the manifest (not a typed number).
- Filter chips: "All N" and one chip for each of the 13 families with its count (the chips wrap to 2 or 3 lines). Add a text search field (name, look, goodFor). The reference has no search.
- Grid: 3 columns on desktop, 1 on a phone. Card: preview (16:9), number, name, family, use tag, `look` cut to 3 lines, "Copy prompt" button.
- **Previews**: show `posters/<id>.jpg`. If the file is missing, show a plain panel with the style name. On hover (or tap), move **one shared canvas** into the card and run the style there with `samples: 1`. On leave, `S.dispose()`. Never make more than one WebGL context for previews: browsers permit approximately 16, and 100 cards exceed that.
- Style window (a `<dialog>` element): large live player, `look`, "Shown here", "Good for", then the prompt controls:
  - Switch: "No voiceover" / "With voiceover", with a one-line explanation below it.
  - Topic textarea.
  - With voiceover only: a textarea for the SRT or word timestamps (optional).
  - Checkbox: "Storyboard first: Claude renders one still per beat in this style and waits for your OK before building".
  - A line that shows the prompt size in characters and an approximate token count (characters / 4).
  - Prev / Next, "Open in player", "Copy prompt".
- "Copy prompt" on a card copies the no-voiceover prompt with an empty topic placeholder. Use `navigator.clipboard.writeText`, and show "Copied" on the button for 1.5 s. On failure, show the prompt in a textarea for manual copy.
- Style scripts load on demand (on hover or on open), not all 100 at page load. The card data must come from `manifest.js`. Thus put `name, family, use, look` in the manifest too, and let `tools/test.mjs` check that they agree with the style file.

### 7.2 `player.html`

URL parameters: `style=<id>`, `t=<seconds>`, `still=1` (render the frame at `t`, then set `document.title = 'ready'`, no control bar), `samples=<n>`.

Control bar: Play/Pause, scrub slider, `time / duration`, Sound checkbox, Loop checkbox (on by default), Load voiceover, Load SRT, Captions, Record WebM, Save WAV.
Keyboard: Space = play/pause, Left/Right = 1 frame at 30 fps.
Always expose `window.seek = (t) => S.seek(t)` and `window.DURATION`.

**Record WebM**: `canvas.captureStream(30)` plus the audio from a `MediaStreamAudioDestinationNode` (kit sound and the voiceover element routed into it), into a `MediaRecorder`. Play from 0 to the end, then download. This is real-time capture, so its quality depends on the machine. Say so in the UI.

**Save WAV**: `SOUND.renderOffline` then `SOUND.toWav`, download.

### 7.3 The prompt (`buildPrompt(style, opts, sources)`)

`opts = { topic, voiceover, srt, storyboard }`. `sources = { stage, sound, style }` (file texts from `fetch`).
Write the prompt in our own words. Use this structure and include every point:

```
I want a short 3D motion graphic made with three.js in the "<name>" style. Below is the full
source of a reference animation in this style, and the small rendering kit and sound kit that it
runs on. Use them as the style guide. Rebuild the animation for my content.

MY CONTENT
<topic, or "[Type your topic here]">

[voiceover only] MY VOICEOVER TIMING
<srt text, or: "Ask me for the SRT or word timestamps before you build.">

WHAT TO BUILD
One self-contained HTML file (an artifact if possible):
- three.js <version>, core only, as an ES module from a CDN with an import map. Set window.THREE = THREE
  before the kit and the style code run.
- A 1920x1080 canvas scaled to the window. A control bar: play/pause, scrub slider, time, sound toggle,
  loop (on by default). [voiceover] Add "Load voiceover" (audio file; the audio element is the clock).
- A new style object made the same way as the reference: content block first, then build(S) that
  returns update(t, realT). 7 to 12 seconds unless the content needs more.
  [voiceover] The duration is the last cue end plus 1 second. One beat starts on each cue start.
- Run it with const S = await K.run(canvas, style, { samples }). 1 sample for live play, the style's
  count for frame renders. Expose window.seek and window.DURATION.
- Play style.sound through SOUND.live in sync with the player. Stop it on pause, on seek and when
  the sound toggle is off. [voiceover] Use { voiceover: true }.
- Include the STAGE kit and the SOUND kit below, unchanged.
- Load these Google Fonts before you build: <fonts>

HOW TO STAY IN THE STYLE
- The reference shows the look, not the story. Its objects, layout and beats belong to its topic.
  First decide what my content must show. Then build those things in this look.
- Tell my content as an explainer: 3 to 5 beats, each one follows from the last. The picture tells it.
  Words are short labels. End on the result, not on a slogan.
- Keep the reference's materials, light, camera language, colour grade and manner of motion.
- update(t) sets the full scene for time t. Nothing accumulates between calls. No Math.random, no Date,
  no timers. Use K.rng(seed).
- Everything is built in code. No models, images, HDRIs or texture files.
- Simple forms with good light are better than complex forms that look wrong. Check each fact and number.
- The video is often seen on a phone. Text is large and stays long enough to read. The subject fills
  most of the frame through the full camera move. Frame 0 is a good picture. The last second holds.

FLOW BETWEEN BEATS
- A new beat is not automatically a new scene. If the next idea continues the last one, stay in the
  same world and move the camera to where it happens.
- For a real change of place or time, change the scene in the manner of this look (a page turn, a set
  turn, an object that wipes the frame, a change of light). No hard cuts.
- Fit the number of beats to my content, not to the reference.

SOUND  [no voiceover: full mix | voiceover: effects below the voice, no music]
- Each sound starts on the frame of its event. Picture and sound use the same schedule.
- Give a sound to each event that lands. Use sounds that this material makes.
- [no voiceover] A quiet ambience bed is good. Music only if it fits the style.
  [voiceover] On-screen text is key words only. Do not repeat the narration as text.

[storyboard] STORYBOARD FIRST
Before the animation, render one still for each beat in this style, show them, and wait for my OK.

IF YOU HAVE A SHELL (Claude Code)
Render an MP4 in headless Chrome with the GPU on: load the page, call window.seek(i / 30) for each
frame, capture the canvas, pipe the frames to ffmpeg. Render the sound with SOUND.renderOffline and
SOUND.toWav and mux it at approximately -15 LUFS. Examine some frames and correct framing, light and
legibility before you report done.

STYLE CARD
Name / Family / Use / Look / Motion / Good for

STAGE KIT (kit/stage.js)      <source>
SOUND KIT (kit/sound.js)      <source>
REFERENCE STYLE (<id>.js)     <source>
```

## 8. The 100 styles

`T` = technique level. **T1**: geometry, materials, lights only. **T2**: instancing, particles or procedural geometry. **T3**: needs the post pass or a custom shader.
The demo topics are ours. Each style needs a different topic so the atlas shows range. You can change a demo topic if a better one fits, but do not repeat a topic.

### A. Crafted materials (8)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 01 | soft-clay | Soft Clay | Explainer | Plasticine on a small tabletop, thumb dents, slightly lopsided, 3 or 4 saturated colours. Motion on twos (12 fps steps) like stop-motion; forms squash in. | How compound interest grows | T1 |
| 02 | paper-popup | Paper Pop-Up | Story | A pop-up book on a wooden table in lamp light. Flat die-cut card in layers, pale core on each cut edge. Pages turn; pieces fold up on hinges; a ribbon holds one line of words. | How bread rises | T1 |
| 03 | needle-felt | Needle Felt | Story | Wool felt figures with fuzzy edges (instanced short fibres) on a felt mat. Soft daylight. Things roll in, stitch themselves on with visible thread. | How a sheep's wool becomes a jumper | T2 |
| 04 | origami-fold | Origami Fold | Explainer | One sheet of two-colour paper on a dark desk. Each object folds itself from a flat square along visible crease lines. Sharp facets, soft shadow. | How a seed disperses (bird, wind, water) | T2 |
| 05 | inflatable | Inflatable | Explainer | Glossy inflated vinyl in a one-colour studio. Welded seams, valve caps, light squash. Objects inflate from flat, bounce, deflate to exit. | How lungs move air | T1 |
| 06 | toy-blocks | Toy Blocks | Explainer | Wooden blocks on a sunlit playroom floor, milk paint worn at the corners, window light pattern. Blocks slide, stack and topple into place. | The 50/30/20 budget rule | T1 |
| 07 | glass-liquid | Glass and Liquid | Explainer | Clear lathe-turned glassware on dark stone with a glowing backdrop. Coloured liquids with a visible surface and meniscus (`MeshPhysicalMaterial` transmission). Pouring, mixing, level changes. | How blood types mix | T2 |
| 08 | kintsugi | Kintsugi | Story | A dark ceramic bowl on linen. It breaks into shards (precomputed Voronoi pieces), then gold seams draw themselves and join it. Macro lens, shallow focus. | How a team recovers from an outage | T2 |

### B. Flat content made physical (9)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 09 | neon-tube | Neon Tube | Explainer | Line drawings bent from glass tube on a painted brick wall at night. Bright core, coloured glow, black standoffs. Tubes flicker on in sequence, one buzzes. | How a rainbow forms | T2 |
| 10 | split-flap | Split-Flap Board | Title | A mechanical departure board in a dark steel frame. Rows of flaps turn through characters and settle. One amber row. | Headline: a product launch date | T2 |
| 11 | flip-disc | Flip-Disc Wall | Story | A wall of round discs, black on one side and yellow on the other, as on old bus signs. Pictures form as waves of discs flip, each with a click. | The history of the pixel | T2 |
| 12 | pin-wall | Pin Wall | Explainer | A pin-art toy the size of a wall. Thousands of steel pins push out into relief shapes. Raking light. Shapes morph as pins move in and out. | How ocean waves reach the shore | T2 |
| 13 | string-art | String Art | Explainer | Brass nails in a dark wooden board. One coloured thread winds from nail to nail and draws curves from straight lines. The thread head is always visible. | How a cardioid appears in a coffee cup | T2 |
| 14 | stained-glass | Stained Glass | Story | A church window against a dark wall. Lead lines, coloured panes, light shafts with dust that project the colours on the floor. Panes light up one by one as the sun moves. | The life cycle of a butterfly | T2 |
| 15 | embossed | Embossed Paper | Title | Words pressed into thick cotton paper, in macro. Deep letterpress with visible walls, raking light, shallow focus. The press comes down and lifts. | Headline: a three-word company value | T2 |
| 16 | loom-weave | Loom Weave | Story | A tapestry on a loom. The picture appears row by row as the shuttle crosses (instanced thread segments in two directions). Close camera, warm side light. | How the internet routes a message | T2 |
| 17 | particle-swarm | Bead Swarm | Explainer | Sixty thousand small glass beads in front of a matte paper wall. They pour into rounded models of things and re-form into the next thing. | Why popcorn pops | T2 |

### C. Machines that explain (6)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 18 | marble-run | Marble Run | Explainer | A wooden marble run filmed like a product: walnut board, maple rails, brass pins, glass marbles, jars at the bottom. Marbles follow precomputed paths through gates that sort them. | How a spam filter sorts email | T1 |
| 19 | factory-line | Factory Line | Explainer | A toy-grade production line on a studio floor. Cobalt machine housings with large white labels, orange moving parts, rubber belt. One item moves through stations and changes at each. | How a pull request ships | T1 |
| 20 | domino-chain | Domino Chain | Explainer | Hand-made dominoes on polished walnut, each engraved with one step. They fall in sequence; the camera follows the wave; the last one is red. | How one late payment cascades | T1 |
| 21 | clockwork-orrery | Clockwork Orrery | Explainer | A brass orrery under a glass dome on a library desk. Gears turn arms that carry enamel spheres. Each beat engages one more gear train. | Why we have seasons | T2 |
| 22 | galton-board | Galton Board | Explainer | A tall wooden board of brass pegs behind glass. Hundreds of steel balls fall and build a bell curve in the bins (precomputed deterministic paths). Labels are engraved brass plates. | Why averages form a bell curve | T2 |
| 23 | zoetrope | Zoetrope | Explainer | A 3D zoetrope: a turntable with rings of small sculptures, each one a different phase of a motion. It spins up, a strobe light starts, and the sculptures appear to move in place. | The phases of the moon | T2 |

### D. Diagrams with depth (7)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 24 | blueprint | Blueprint Build | Explainer | A drafting sheet: blueprint blue with paper grain and fold creases, title block, grid. White linework in two weights, hidden edges dashed. Lines draw on; the object rises off the sheet as a wireframe. | How a suspension bridge carries load | T2 |
| 25 | exploded-view | Exploded View | Explainer | One object above a pale seamless floor. It separates along its axis into parts. Each part gets a numbered callout with a thin leader line. | What is inside a mechanical keyboard switch | T1 |
| 26 | white-model | White Model | Explainer | An architect's presentation model: all matte white card on a white board. One saturated accent colour marks the thing that is explained. Soft sky light, slow orbit. | How a heat pump heats a house | T1 |
| 27 | data-skyline | Data Skyline | Explainer | A bar chart as an architect's model: towers of stacked pale stone blocks on a printed plinth, one tower in vermilion, small trees and figures for scale. Towers grow block by block. | Coffee consumption by country | T2 |
| 28 | layer-stack | Layer Stack | Explainer | A system as a stack of thin glass sheets above a dark machined plinth, each with its own white diagram. Aqua edges glow. Sheets separate, one lights at a time, a signal travels down. | The layers of a web request | T1 |
| 29 | contour-stack | Contour Stack | Explainer | A landscape as laser-cut plywood layers with burnt edges, like a topographic model. Layers drop in from the top, one by one. Small brass pins mark places. | How a river carves a canyon | T2 |
| 30 | hologram-table | Hologram Table | Explainer | A dark briefing room. A round table projects a cyan volumetric model: scan lines, additive points, slight flicker, a visible projection cone. The model rotates, sections highlight in amber. | How GPS finds your position | T3 |

### E. Small worlds (7)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 31 | tiny-diorama | Tiny Diorama | Explainer | A small world on one floating tile with a cut-earth edge. Chunky rounded buildings, peg people, lollipop trees, matte paint colours, soft studio light. A vehicle travels the route; numbered flags pop up. | How a letter is delivered | T1 |
| 32 | spotlight-stage | Spotlight Stage | Story | A toy theatre at night: red velvet curtain, worn timber stage, flat painted card cut-outs in layers, an easel card for the caption. Scenery slides in on tracks; the spotlight moves. | The first powered flight | T1 |
| 33 | circuit-city | Circuit City | Explainer | A circuit board filmed as a city at night. Black chips are buildings, capacitors are towers, gold traces are streets, silkscreen text names the districts. Light pulses travel the traces. | How a prompt becomes an answer | T2 |
| 34 | bottle-world | Bottle World | Story | A scene inside a glass bottle on a windowsill, built piece by piece through the neck with long tweezers. Refraction on the glass, cork, dust in the light. | How a coral reef forms | T2 |
| 35 | ant-farm | Ant Farm | Explainer | A thin glass case of sand seen from the side. Tunnels dig themselves and open into chambers; each chamber holds one step of the story as a small model. Small dots travel the tunnels. | How a company's departments pass work | T2 |
| 36 | folded-map | Folded Map | Explainer | A paper road map unfolds on a table. Terrain rises out of the paper along the fold lines, a route line draws itself, pins drop. Fold creases stay visible. | The route of the Silk Road | T2 |
| 37 | monument-letters | Monument Letters | Title | Very large weathered steel letters on a pale plain at sunrise, small people and birds for scale. Low camera moves past the letters; long shadows. | Headline: one word | T2 |

### F. Filters over 3D (9)

Each one is a post pass (6.2) over a normal lit scene. Keep the scene simple; the filter makes the look.

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 38 | low-poly | Low-Poly | Explainer | A small world of flat facets (`flatShading`, per-face colour variation), short palette of sand, coral, cream, teal and sage. Things unfold facet by facet or pop from the ground. Paper flags for labels. (Geometry style; no post pass necessary.) | The water cycle | T2 |
| 39 | voxel | Voxel | Explainer | All from small cubes with bevels, short palette, each cube a little different in shade, on a display base. Things assemble cube by cube. | How a plant grows from a seed | T2 |
| 40 | ink-toon | Ink and Toon | Explainer | Like an inked animation cel: two-tone flat colour, brush outline (depth and normal edges), halftone dots at the light/shadow border. Bold bounce motion, impact stars. | How to brew pour-over coffee | T3 |
| 41 | pencil-sketch | Pencil Sketch | Explainer | A graphite drawing in a sketchbook: hatching that follows the light, outlines that overshoot corners, paper tooth, construction lines that stay. Lines draw first, then shading. | How a house frame goes up | T3 |
| 42 | one-bit | One-Bit Dither | Explainer | Two colours only, large square pixels, ordered (Bayer) dither for each shade, bitmap lettering as on an early desktop computer. Low frame rate feel (15 fps steps). | The Pomodoro technique | T3 |
| 43 | xray | X-Ray | Explainer | A radiograph that the camera can move around. The object is glowing film on a dark scanner bed, brightest where the view passes through most material (additive, back faces on). One warm accent for the part in focus. | Why a vacuum flask keeps drinks hot | T3 |
| 44 | thermal | Thermal Camera | Explainer | A heat camera view: each object has a temperature value, mapped to an iron-bow palette, with sensor noise, a crosshair and a temperature scale at the side. Heat spreads and fades. | Where a house loses heat | T3 |
| 45 | vector-scope | Vector Scope | Explainer | A vector CRT: glowing green and amber lines on black, bright vertices, phosphor trails, slight curvature and bloom. Wireframe objects draw as one continuous beam path. | How radar detects an aircraft | T3 |
| 46 | woodblock | Woodblock Print | Story | A Japanese-style woodblock print: flat colour areas with a gradient (bokashi) at the top of each, black key lines, paper fibre, a little misregistration between colours. Layered parallax; waves and clouds as repeated curls. | How a tsunami forms | T3 |

### G. Products and screens (3)

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 47 | floating-screens | Floating Screens | Explainer | White interface cards (drawn with `CanvasTexture`), each on a block of clear glass, in a line in a bright warm room. The camera moves from card to card; the active card comes forward. | How to order from a bakery app | T1 |
| 48 | studio-product | Studio Product | Product shot | One product in a near-black studio, cut out of the dark by strip lights, on a black mirror floor. Slow turn, light sweep, one line of small text. | A reusable water bottle | T1 |
| 49 | hero-icon | Hero Icon | Title | One large, thick app-icon tile in a bright one-colour studio, with a raised symbol of rounded pieces. It drops in, squashes, turns once. | Icon: mail | T1 |

### H. Living and elemental (9) — not in the reference atlas

Families H to M (51 styles) make this atlas different. Give them the most care.

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 50 | bioluminescent-deep | Bioluminescent Deep | Story | Black deep water. Each idea is a glowing creature (jelly forms, comb rows, lure lights) made of additive points and thin translucent shells. Marine snow drifts. The camera descends; a depth gauge is the only label device. | How information spreads in a network | T2 |
| 51 | mycelium | Mycelium | Explainer | A cross-section of forest soil. White threads grow from one point (deterministic branching), connect tree roots, and pulse with light when something moves through them. Mushrooms come up at the end as the result. | How trees share nutrients | T2 |
| 52 | murmuration | Murmuration | Story | Thousands of small birds against a dusk sky above a marsh. The flock flows as one mass and, for a moment, forms each shape of the story, then dissolves. Positions come from noise fields plus a target shape, as a function of `t`. | How a rumour becomes a market move | T2 |
| 53 | constellation | Constellation | Story | A night sky above a dark hill line. Stars brighten, thin lines connect them into figures, and a faint engraved-atlas drawing appears behind each figure. The sky turns slowly about the pole star. | How ancient sailors navigated | T2 |
| 54 | shadow-puppets | Shadow Puppets | Story | A cloth screen lit from behind by one flame. Articulated flat puppets on rods cast soft-edged shadows; the size changes as they move toward the lamp. Warm flicker, visible cloth weave. | How the Trojan horse trick worked | T1 |
| 55 | ferrofluid | Ferrofluid | Explainer | A shallow dish of black magnetic liquid on white. Spikes rise where hidden magnets move, and form peaks, rings and bar shapes. High-gloss black, one studio light, macro lens. (A displaced plane with a spike function of `t`.) | How a magnetic field has a shape | T3 |
| 56 | cymatics | Cymatics Plate | Explainer | A square black metal plate with fine pale sand. At each tone the sand jumps and settles into a new line pattern (Chladni figures: `cos(nπx)cos(mπy) − cos(mπx)cos(nπy)`). The pitch of the sound and the pattern change together. | How sound has a shape | T2 |
| 57 | sand-garden | Sand Garden | Explainer | A zen sand tray seen from above at a low angle. A rake draws lines and diagrams in the sand (a height-map texture written as a function of `t`), stones stand for the fixed things, long evening shadows. | How habits form a loop | T3 |
| 58 | light-painting | Light Painting | Story | A dark room, long-exposure look. A moving point of light leaves a bright trail that stays (the trail is a tube whose draw range is a function of `t`), and draws objects in the air around a real table and chair. | How a signature becomes a logo | T2 |

### I. Light and optics (9) — not in the reference atlas

Here the light is the storyteller. Use fog (additive cones or thin particle sheets) so that beams are visible.

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 59 | camera-obscura | Camera Obscura | Story | A dark room with one small hole in the shutter. The world outside appears upside down on the opposite wall, soft and bright, with a dusty beam across the room. (Render the outside scene to a target, flip it, project it on the wall.) Each beat is a new scene outside; a hand moves a white card into the beam to focus a detail. | How the eye forms an image | T3 |
| 60 | prism-bench | Prism Bench | Explainer | An optics bench in a dark lab with thin fog. One laser beam passes through lenses, mirrors, splitters and prisms on brass posts. The beam path is the story: it splits, bends, joins. Each component clicks into its rail. | How fibre optics carry data | T2 |
| 61 | time-slice | Time Slice | Story | One fixed view cut into 24 vertical strips. Each strip shows the same scene at a different time (render the scene 24 times with the scissor test, each with a time offset). A wave of time moves across the picture, so morning is at the left and night at the right. | One day on a city street | T3 |
| 62 | caustic-pool | Caustic Pool | Explainer | The tiled floor of a swimming pool seen from below the surface. Bright caustic lines move on the tiles. Ripples from above meet and make interference patterns; objects sink slowly and land. Labels are tile mosaics. | How noise-cancelling headphones cancel a wave | T3 |
| 63 | lighthouse-fog | Lighthouse Fog | Story | Night, thick fog, one rotating beam. Things exist only while the beam is on them: each sweep shows the next part of the story, then dark again with an afterglow. The camera stays near the lamp. | How a search engine crawls the web | T2 |
| 64 | anamorphic | Anamorphic | Explainer | Hundreds of painted fragments hang on threads in a white room, with no visible order. The camera moves along a path, and at one exact point the fragments align into a clear picture. Then it moves on and the next picture aligns. | How scattered data points become an insight | T2 |
| 65 | shadow-plaza | Shadow Plaza | Explainer | A white stone plaza seen from high above. Plain abstract objects stand on it; their long shadows are the real pictures and words. The sun moves and the shadows change into the next diagram. | How time zones work | T2 |
| 66 | projection-mapping | Projection Mapping | Explainer | A dark room with a blank white cardboard model of a town. A projector (visible beam) paints moving graphics on the model: lit windows, flow lines on roads, numbers on roofs. (Animated `CanvasTexture` on white geometry.) | How a power grid balances demand | T2 |
| 67 | kaleidoscope | Kaleidoscope | Title | Loose coloured glass pieces and beads tumble in a chamber. A three-mirror fold (post pass) turns them into a symmetric mandala that re-forms with each turn of the tube. The title appears in the centre cell only. | Headline: a festival name | T3 |

### J. Earth, weather and sky (8) — not in the reference atlas

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 68 | ice-core | Ice Core | Explainer | A long cylinder of ice on a light table in a cold lab. Layers are years: bubbles, dust bands, one dark ash layer. The camera travels along the core; a brass caliper marks each layer, and a small scene of that era shows frozen inside the ice. | 400,000 years of climate in one core | T2 |
| 69 | sandcastle-tide | Sandcastle Tide | Story | A beach at low sun. Wet-sand sculptures are built from bucket moulds and patted flat. Then a thin sheet of water comes in and softens them. Foam lines draw the labels on the sand. | Why backups matter | T2 |
| 70 | cloud-room | Cloud Room | Explainer | An ordinary living room with weather inside it: a cloud grows below the ceiling, rain falls on the rug, a small lightning bolt hits the lamp, sunlight comes back through the window. Clouds are instanced soft spheres. | How a thunderstorm builds | T2 |
| 71 | aurora-lines | Aurora Lines | Story | A snow plain with a dark tree line, at night. Curtains of green and violet light move in the sky (ribbon meshes with a vertical fade shader). The ribbons bend into arcs, loops and arrows that tell the story, and reflect on a frozen lake. | How the northern lights form | T3 |
| 72 | crystal-garden | Crystal Garden | Explainer | A dark geode cut in half. Crystals grow from seed points as faceted columns with coloured translucent tips (bismuth steps or quartz points). Height and number carry the data. Hard sparkles when the light moves. | How a snowflake gets six sides | T2 |
| 73 | pocket-planet | Pocket Planet | Explainer | One very small planet, 20 steps around, on a field of stars. Houses, trees and a sea sit on its curve. The camera orbits; the line between day and night moves across; small clouds and arrows travel around the globe. | How trade winds circle the planet | T2 |
| 74 | frosted-pane | Frosted Pane | Story | A cold window at dawn, blurred lights behind it. Frost ferns grow across the glass from the corners (deterministic branching in a height texture). A finger wipes clear lines and simple drawings through the condensation; drops run down from them. | How a family tree branches | T3 |
| 75 | gravity-well | Gravity Well | Explainer | A stretched rubber sheet with a white grid in a dark studio. Heavy spheres dent it; small marbles roll along the curves and orbit. The grid lines show each change of shape. | How gravity bends space | T2 |

### K. Stage and play (8) — not in the reference atlas

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 76 | tarot-table | Tarot Table | Story | Dark velvet, candle light. Large illustrated cards are dealt face down, then flip one at a time. The picture on each card stands up out of the card as layered paper cut-outs. Gold foil borders catch the flame. | The three acts of a hero's journey | T1 |
| 77 | board-game | Board Game | Explainer | A printed game board with a winding path of squares, wooden pawns, a die and a card deck. The process is a game turn: the die rolls, the pawn hops square by square, a card flips with the rule. Top-down tilt-shift camera. | How a bill becomes a law | T1 |
| 78 | pinball-table | Pinball Table | Explainer | A pinball table under glass, painted playfield, chrome ball, lit bumpers and ramps. Each bumper is a stage with its name on a lit insert. The ball follows a precomputed path; a dot-matrix display shows the count. | How a support ticket moves between teams | T2 |
| 79 | music-box | Music Box | Explainer | An open wooden music box in macro: a brass cylinder with pins turns against a steel comb. Each pin that lifts a tooth plays a note (the sound score and the pin positions come from one table). Small enamel figures turn on the lid. | How a player piano reads music | T2 |
| 80 | dollhouse-cutaway | Dollhouse Cutaway | Explainer | A house with its front wall removed, each room a small lit box with furniture. Rooms light one at a time; thin coloured lines run through the walls between them to show flow. Straight-on camera, slow push in. | Where a home's electricity goes in a day | T1 |
| 81 | specimen-drawer | Specimen Drawer | Explainer | A museum cabinet. A shallow drawer slides open: ideas are pinned like insects in rows on cream paper, each with a small handwritten label and a number. A brass magnifier moves over one and enlarges it. | Six cognitive biases | T1 |
| 82 | marquee-bulbs | Marquee Bulbs | Title | A theatre marquee at night: red letters on a white lit panel, a border of warm bulbs that chase in sequence, one bulb dead. Wet street reflection below. | Headline: opening night | T2 |
| 83 | kamishibai | Kamishibai | Story | A small wooden picture-theatre on the back of a bicycle. Painted cards slide out sideways to show the next scene. Each card has 3 or 4 paper layers with a little parallax. Wooden clappers mark each change. | The tortoise and the hare | T1 |

### L. Kitchen and home (7) — not in the reference atlas

Ordinary things as diagrams. Light them like food photography: soft window light, shallow focus.

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 84 | layer-cake | Layer Cake | Explainer | A tall cake on a stand. A slice slides out and shows the layers: sponge, cream, jam, crumb. Each layer is one level of the subject. Piped icing writes the labels; a small flag stands in each layer. | The layers of the Earth | T1 |
| 85 | bento-box | Bento Box | Explainer | A lacquer lunch box seen from above. Chopsticks place food pieces in each compartment, one compartment for each part of the subject. The lid closes at the end. | How to time-box a working week | T1 |
| 86 | sushi-belt | Sushi Belt | Explainer | A conveyor belt in a small restaurant. Coloured plates travel on it; hands take plates at stations; an empty-plate stack grows at each seat. Queue, consumer, backlog: all visible. | How a message queue works | T1 |
| 87 | laundry-line | Laundry Line | Story | A clothes line across a sunny yard. Each item on the line is one event, pegged in sequence, moving in the wind (vertex wave as a function of `realT`). Printed patterns on the cloth are the pictures. | The stages of a project timeline | T2 |
| 88 | fridge-magnets | Fridge Magnets | Explainer | A white fridge door. Coloured plastic letters and small picture magnets slide and snap into groups. A paper note under one magnet holds the caption. | How DNA letters spell a protein | T1 |
| 89 | knolling-flatlay | Knolling Flatlay | Explainer | A top-down table. Objects slide from a pile into an exact grid, all at right angles, with equal gaps and hard soft-box shadows. A thin white line and a number mark each one in turn. | What goes in an emergency kit | T1 |
| 90 | jelly-set | Jelly Set | Explainer | A large clear jelly on a plate, lit from behind. The parts of the subject hang inside it at different depths. A tap on the plate makes all of it wobble (a damped sine of `t`). A spoon cuts a section to show the centre. | How a cell holds its organelles | T2 |

### M. Strange worlds (10) — not in the reference atlas

Each one bends a rule of space, scale or gravity. The bend must explain the subject, not only decorate it.

| # | id | Name | Use | Look and motion | Demo topic | T |
|---|---|---|---|---|---|---|
| 91 | impossible-stairs | Impossible Stairs | Explainer | A pale stone building with an orthographic camera, built so that stairs join into a loop that cannot exist. Small figures walk the loop and always go up. The building turns 90 degrees between beats, and a new impossible connection appears. | How technical debt becomes a loop | T2 |
| 92 | infinite-zoom | Infinite Zoom | Story | One continuous dive. Each scene sits inside a small object of the scene before it: a city, a window, a cup, a grain, an atom. Scale each scene by a constant factor and reuse the camera move, so the dive has no cut. | Powers of ten, from a city to an atom | T2 |
| 93 | endless-library | Endless Library | Explainer | Six-sided rooms of bookshelves repeat in all directions into haze. A book leaves its shelf, flies to the camera and opens; its pages fan out and stand up as a paper model of the idea. Brass lamps, green shades. | How a search index finds one page | T2 |
| 94 | infinity-mirror | Infinity Mirror | Explainer | A box of two facing mirrors with a ring of lamps. Each object inside repeats into the depth, smaller and dimmer (draw N scaled copies). One becomes many: the depth is the count. | How doubling reaches a million in 20 steps | T2 |
| 95 | dewdrop-lens | Dewdrop Lens | Story | The camera is at the height of an insect, in wet grass at sunrise. Each drop of dew on a blade holds a small, inverted scene of the story (render to texture, mapped on the sphere). The focus moves from drop to drop. | How a plant drinks, from root to leaf | T3 |
| 96 | evidence-board | Evidence Board | Explainer | A cork board in a dim office with one desk lamp. Photos, notes and map pieces are pinned up one by one. Red string runs from pin to pin and shows the chain of cause. A marker circles the last item. | How a data breach is traced | T1 |
| 97 | iceberg-split | Iceberg Split | Explainer | A view cut at the waterline: bright sky and a small tip above, a very large blue mass below. Labelled chambers inside the ice light one by one as the camera goes down. Light shafts, small bubbles. | The hidden costs of a cheap flight | T2 |
| 98 | zero-gravity-room | Zero-Gravity Room | Explainer | A kitchen with no gravity. Cups, fruit and a chair turn slowly in the air; water is a set of moving spheres that join and split. An object pushed in one beat is still moving in the next. | How astronauts drink in orbit | T2 |
| 99 | neuron-forest | Neuron Forest | Story | A dark forest where each tree is a nerve cell: a trunk, a branching crown, roots that almost touch the next tree. Sparks of light travel through the branches and jump the gaps. Paths that are used more often become thicker and brighter. | How a memory forms | T2 |
| 100 | signal-glitch | Signal Glitch | Explainer | A clean, simple scene that breaks on each beat: displaced scan lines, colour channels that separate, blocks that repeat. Then the picture repairs itself block by block, with a check mark on each repaired block. The damage is the subject. | How error correction repairs a file | T3 |

**Count check**: A 8 + B 9 + C 6 + D 7 + E 7 + F 9 + G 3 + H 9 + I 9 + J 8 + K 8 + L 7 + M 10 = 100. `tools/test.mjs` must assert that the manifest has 100 entries and that the family counts are these.

**Rules for the 51 styles in families H to M.**
- The idea of the style is in its first sentence. If your build does not show that idea in frame 0, it is not done.
- Build the one physical effect that carries the style first (the beam, the fold, the wobble, the loop). Then add the story.
- Do not replace a style with an easier one that looks similar. If you cannot build it, report that, with the reason.

## 9. Phases

Do the phases in sequence. Stop after phase 2 and report to the owner.

**Phase 1 — kits and one style**
1. `kit/stage.js`, `kit/sound.js`, `kit/prompt.js`, `tools/test.mjs`.
2. `player.html`.
3. Style `low-poly` (38). It is the calibration style.

**Phase 2 — atlas page and voiceover**
1. `index.html` with grid, filters, search, style window, prompt builder.
2. Style `paper-popup` (02).
3. Voiceover path complete in the player (audio clock, SRT warp, captions, thin mix).
4. Record WebM and Save WAV.
5. **Stop. Report. Wait for the owner.**

**Phase 3 — the other 98 styles**, in waves. Make the poster for each style when it passes its checks.
- Wave 1 (T1, 15 styles): 01, 05, 06, 18, 19, 20, 25, 26, 28, 31, 32, 47, 48, 49, 54.
- Wave 2 (T2, part 1): 03, 04, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17.
- Wave 3 (T2, part 2): 21, 22, 23, 24, 27, 29, 33, 34, 35, 36, 37, 39.
- Wave 4 (family H, T2): 50, 51, 52, 53, 56, 58.
- Wave 5 (T3): 30, 40, 41, 42, 43, 44, 45, 46, 55, 57.
- Wave 6 (T1, 11 styles): 76, 77, 80, 81, 83, 84, 85, 86, 88, 89, 96.
- Wave 7 (T2, 12 styles): 60, 63, 64, 65, 66, 68, 69, 70, 72, 73, 75, 78.
- Wave 8 (T2, 11 styles): 79, 82, 87, 90, 91, 92, 93, 94, 97, 98, 99.
- Wave 9 (T3, 8 styles): 59, 61, 62, 67, 71, 74, 95, 100.

After each wave: run the checks, report the count that passed, and name each style that did not pass with the reason.

**Phase 4 — finish**
Posters complete, `tools/test.mjs` green, a pass through all 100 at 3 time points each, short `README.md` (how to serve, how to use, how to add a style).

## 10. Acceptance checks

### Automated (`node atlas/tools/test.mjs`, no dependencies)
`kit/prompt.js` ends with `if (typeof module !== 'undefined') module.exports = {...}` so Node can load it.

- `parseSRT`: a normal file, a file with `.` milliseconds, CRLF, no index lines; a bad timestamp throws.
- `makeWarp`: identity without cues; `toCanonical(cue[i].start) === beat[i].t`; `toReal(toCanonical(x)) ≈ x` for 50 sample points; strictly increasing; correct `duration`.
- Manifest: 100 entries, unique ids, family counts as in section 8, each file exists, each style file contains `STYLES['<id>']`, and all required fields (read the file as text and evaluate it in a `vm` context with a stub `window`).
- `buildPrompt`: contains the topic, the three sources, and the voiceover and storyboard sections only when their flags are set.

### Visual, per style (a style is not done until you have looked at it)
Take stills at `t = 0`, `t = duration / 2`, and `t = duration − 0.5` and **read the images**.
Use a browser tool if you have one (chrome-devtools MCP: navigate to `player.html?style=<id>&t=<t>&still=1`, wait for the title `ready`, take a screenshot). Without one, use headless Chrome:

```
chrome --headless=new --window-size=1920,1080 --virtual-time-budget=8000 --screenshot=out.png "http://localhost:8000/player.html?style=low-poly&t=5&still=1"
```

WebGL in headless Chrome can need `--use-angle=swiftshader` or `--enable-unsafe-swiftshader`. Test which flag works on this machine once, and write the working command in the README.

For each style confirm:
1. No console errors.
2. Frame 0 is a complete picture, not an empty stage.
3. The subject fills most of the frame at all three times, and no label is cut by the frame edge.
4. Text is sharp and legible at 640x360 (the card size).
5. `seek(5)` after `seek(9)` gives the same picture as `seek(5)` from a fresh load (determinism). Compare two screenshots.
6. The look agrees with its row in section 8, and it is clearly different from the other styles in its family.
7. Sound: each beat has at least one event, and `Save WAV` gives a file that is not silent.

### Voiceover (phase 2)
With a test SRT of 4 cues and any audio file of the same length:
1. Beat `i` starts within 1 frame of cue `i` start (check with stills at `cue.start + 0.05`).
2. Scrub, pause and resume keep picture and audio in sync.
3. With the audio removed, the player goes back to the canonical timing.

## 11. Known traps

- **WebGL context limit.** One shared preview canvas on the atlas page. Dispose before you build the next style.
- **Dispose completely.** Traverse the scene; dispose geometry, material, each texture on the material, render targets. A leak shows as slower hover previews after 20 or 30 styles.
- **Fonts.** `CanvasTexture` text drawn before the font loads uses the fallback font and never updates. `await document.fonts.load('700 64px "Oswald"')` for each font before `build`.
- **Colour.** Set `texture.colorSpace = THREE.SRGBColorSpace` on every colour `CanvasTexture`. Post-pass output needs the sRGB conversion that the renderer otherwise applies (render the final quad with the renderer's output colour space, and do tone mapping once, not twice).
- **Shadows.** Fit the shadow camera to the scene and set `shadow.bias` (approximately −0.0005) and `normalBias`. Default values give acne or clipped shadows.
- **Transmission** (`MeshPhysicalMaterial`) is expensive. Use it only in styles 07 and 34, on few meshes.
- **Instancing.** For more than approximately 200 equal objects use `InstancedMesh` and set matrices in `update`. Set `instanceMatrix.needsUpdate = true`.
- **Determinism with particles.** Compute each particle's position as a closed-form function of `t` and its seed. Do not integrate velocity frame by frame.
- **Stop-motion feel** (styles 01, 42): quantise time inside the style, `t = Math.floor(t * 12) / 12`. Do not change the player.
- **AudioContext** must start in a click handler. On seek, stop all scheduled nodes and reschedule from the new time.
- **`fetch` of sources** fails on `file://`. Show a clear message on the page if `location.protocol === 'file:'`.
- **Clipboard** needs `localhost` or HTTPS, and a user gesture.
- **Prompt size.** Report the largest prompt in characters. If a prompt exceeds approximately 120,000 characters, reduce the kit or the style, not the instructions.
- **Do not let the kit grow.** Each style prompt carries the full kit. Each line in the kit is paid for in each prompt.

## 12. How to report to the owner

The owner's global rules apply to your replies: ASD-STE100 Simplified Technical English, plain language with all numbers and file references kept, precise claims and no rhetorical phrasing.
For each report give: what is done (with file paths), what is not done and why, the check results with counts, and the next step.
Example: "Done: 14 of 15 styles in wave 1 pass all 7 visual checks. Not done: `marble-run` — marbles pass through the second gate at t = 4.2 s. Next: correct the path table."

## 13. Phase 3 progress (live log, update after each style)

The owner approved phase 3 on 2026-11-12: "build the other 98 styles. do not stop until completion". Content of the 2 samples is approved; keep their camera moves. Subagents are still not approved.

Tools (scratchpad of session 037ffe74, copy to `atlas/tools/` if a new session needs them):
- `check.mjs id ...` — starts its own headless Chrome (kills only that PID), loads `player.html?style=id`, writes a 4-frame sheet `sheets/<id>.jpg` (t = 0, D/2, 0.75 D, D − 0.5), writes `atlas/posters/<id>.jpg` (samples 8 at D − 0.5), reports console errors, determinism (pixels that differ > 6 levels after seek(5) → seek(D−0.6) → seek(0.3) → seek(5)), beats without a sound event, RMS dB. About 8 s for each style.
- `sync.mjs` — copies name, family, use, look from each style file into `styles/manifest.js`.
- Server: `python -m http.server 8000` in `atlas/`, PID 12012.

Done styles (id: check result):
- low-poly, paper-popup (phase 1 and 2)
- soft-clay, inflatable, toy-blocks: 0 errors, determinism 0 px, all beats have sound, sheets read
- marble-run, factory-line: 0 errors, determinism 0 px, sound ok, sheets read
- domino-chain, exploded-view: 0 errors, determinism 0 px, sound ok, sheets read
- white-model, layer-stack: 0 errors, determinism 0 px, sound ok, sheets read
- tiny-diorama: 0 errors, determinism 0 px, sound ok, sheet read. NOTE rbox helper (inline in styles) adds bevel r outside w/h/d: objects are 2r larger
- spotlight-stage: 0 errors, determinism 0 px, sound ok, sheet read
- floating-screens, studio-product, hero-icon: 0 errors, determinism 0 px, sound ok, sheets read
- shadow-puppets: 0 errors, determinism 0 px, sound ok, sheet read
- WAVE 1 COMPLETE (15 of 15).
- needle-felt: 0 errors, det 0, sound ok, sheet read
- origami-fold: 0 errors, det 0, sound ok, sheet read (check.mjs now accepts EVAL='window.SHOTS=[...]' for custom times)
- glass-liquid: 0 errors, det 0, sound ok, sheet read (transmission only on beakers; flasks use plain transparency so cells show)
- kintsugi: 0 errors, det 0, sound ok, sheet read. NOTE: HUD title y must scale with fov (y = 0.78 * 8 * tan(fov/2))
- neon-tube: 0 errors, det 2 px, sound ok, sheet read
- split-flap: 0 errors, det 0, sound ok, sheet read
- flip-disc: 0 errors, det 0, sound ok, sheet read
- pin-wall: 0 errors, det 0, sound ok, sheet read (relief subtle but readable)
- string-art: 0 errors, det 0, sound ok, sheet read. NOTE: InstancedMesh caches its bounding sphere from the first frame; set frustumCulled=false when instances start at scale 0 or move far
- stained-glass: 0 errors, det 0, sound ok, sheet read. NOTE: python heredoc edits turn backslash-n into a real newline; use the Edit tool or String.fromCharCode(10)
- embossed: 0 errors, det 0, sound ok, sheets read (custom displacement via onBeforeCompile; paper must sit above the table)
- loom-weave: 0 errors, det 0, sound ok, sheet read
- particle-swarm: 0 errors, det 0, sound ok, sheet read. WAVE 2 COMPLETE (13 of 13)
- clockwork-orrery: 0 errors, det 1 px, sound ok, sheet read
- galton-board: 0 errors, det 0, sound ok, sheet read
- zoetrope: 0 errors, det 0, sound ok, sheet read
- blueprint: 0 errors, det 0, sound ok, sheet read
- data-skyline: 0 errors, det 0, sound ok, sheet read
- contour-stack: 0 errors, det 0, sound ok, sheet read (river ribbon small in late frames)
- circuit-city: 0 errors, det 0, sound ok, sheet read (dark night look)
- bottle-world: 0 errors, det 0, sound ok, sheet read
- ant-farm: 0 errors, det 0, sound ok, sheet read
- folded-map: 0 errors, det 0, sound ok, sheet read
- monument-letters: 0 errors, det 0, sound ok, sheet read
- voxel: 0 errors, det 0, sound ok, sheet read. WAVE 3 COMPLETE (12 of 12)
- bioluminescent-deep: 0 errors, det 0, sound ok, sheet read
- mycelium: 0 errors, det 0, sound ok, sheet read
- murmuration: 0 errors, det 0, sound ok, sheet read
- constellation: 0 errors, det 0, sound ok, sheet read
- cymatics: 0 errors, det 0, sound ok (custom sine tones), sheet read
- light-painting: 0 errors, det 0, sound ok, sheet read. WAVE 4 COMPLETE (6 of 6)
- hologram-table: 0 errors, det 0, sound ok, sheet read (post pass)
- ink-toon: 0 errors, det 0, sound ok, sheet read
- pencil-sketch: 0 errors, det 0, sound ok, sheet read. NOTE post passes are tone-mapped after postFX: multiply white/paper by ~2.2 to stay white
- one-bit: 0 errors, det 0, sound ok, sheet read
- xray: 0 errors, det 0, sound ok, sheet read
- thermal: 0 errors, det 0, sound ok, sheet read
- vector-scope: 0 errors, det 0, sound ok, sheet read
- woodblock: 0 errors, det 0, sound ok, sheet read. NOTE posterize in gamma space (pow 1/2.2), not linear
- ferrofluid: 0 errors, det 0, sound ok, sheet read
- sand-garden: 0 errors, det 0, sound ok, sheet read. Wave 5 complete.
- tarot-table: 0 errors, det 0, sound ok, sheet read. NOTE pop-up layers face the camera: light them from the front, not from the candle behind
- board-game: 0 errors, det 0, sound ok, sheet read. NOTE labels do not write depth: depth-based post effects must protect the title band by screen position
- dollhouse-cutaway: 0 errors, det 0, sound ok, sheet read
- specimen-drawer: 0 errors, det 0, sound ok, sheet read. NOTE magnifier lens = second canvas of the specimen on paper, texture repeat/offset gives the zoom
- kamishibai: 0 errors, det 0, sound ok, sheet read
- layer-cake: 0 errors, det 0, sound ok, sheet read. NOTE CylinderGeometry with a theta gap leaves the cut sides open: add plane cut faces
- bento-box: 0 errors, det 0, sound ok, sheet read
- sushi-belt: 0 errors, det 0, sound ok, sheet read. NOTE simulated styles: fixed-step sim from t=0 (reset on seek back), and reset every pooled object property on each frame, or seeking back leaves old state (det went 320 px until fixed)
- fridge-magnets: 0 errors, det 0, sound ok, sheet read. NOTE caption is the paper note on the door, no HUD title (as the look asks)
- knolling-flatlay: 0 errors, det 0, sound ok, sheet read
- evidence-board: 0 errors, det 0, sound ok, sheet read. NOTE keep cards at z >= board face + 0.05 during any push animation. Wave 6 complete.
- prism-bench: 0 errors, det 0, sound ok, sheet read
- lighthouse-fog: 0 errors, det 0, sound ok, sheet read. NOTE ConeGeometry + lookAt: rotateX(-PI/2) so the cone opens along +z
- anamorphic: 0 errors, det 0, sound ok, sheet read. NOTE fragments placed by unprojecting picture cells from a twin PerspectiveCamera at each viewpoint
- shadow-plaza: 0 errors, det 0, sound ok, sheet read. NOTE readable shadow text: plate faces the sun, text squashed by tan(sun elevation), camera up = away from the sun
- projection-mapping: 0 errors, det 0, sound ok, sheet read. NOTE one atlas canvas for all facades/roofs: rewrite BoxGeometry face UVs into atlas cells
- ice-core: 0 errors, det 0, sound ok, sheet read
- sandcastle-tide: 0 errors, det 0, sound ok, sheet read
- cloud-room: 0 errors, det 0, sound ok, sheet read
- crystal-garden: 0 errors, det 0, sound ok, sheet read. NOTE half shell: SphereGeometry(r, w, h, Math.PI, Math.PI) opens toward +z
- pocket-planet: 0 errors, det 0, sound ok, sheet read
- gravity-well: 0 errors, det 0, sound ok, sheet read
- pinball-table: 0 errors, det 0, sound ok, sheet read. NOTE things at the far top edge hide under the HUD title: keep key objects below ~80% frame height. Wave 7 complete.
- music-box: 0 errors, det 0, sound ok, sheet read. NOTE pins and notes come from one tune table (pin angle = comb angle - omega * time)
- marquee-bulbs: 0 errors, det 0, sound ok, sheet read. NOTE wet-street reflection = a mirrored copy (scale.y -1, DoubleSide) under a part-transparent street
- laundry-line: 0 errors, det 0, sound ok, sheet read
- jelly-set: 0 errors, det 0, sound ok, sheet read
- impossible-stairs: 0 errors, det 0, sound ok, sheet read. NOTE near-orthographic = fov 3 at distance 190; HUD titles scaled by tan(fov/2)/tan(15deg). Penrose loop: legs 7,7,3,3 steps, rise 0.2 so the end sits (4,4,4) from the start
- infinite-zoom: 0 errors, det 0, sound ok, sheet read. NOTE zoom by scaling the world about a fixed point; set each nested scene's z offset per frame as -eps / parentScale, or offsets multiply up and push inner scenes far back
- endless-library: 0 errors, det 0, sound ok, sheet read. NOTE hex rooms: doorway on every wall, walls set 0.2 inside the apothem so neighbours do not z-fight
- infinity-mirror: 0 errors, det 0, sound ok, sheet read. NOTE a running count works best as a camera-attached label at the bottom (0, -1.8, -8)
- iceberg-split: 0 errors, det 0, sound ok, sheet read. NOTE labels inside transparent volumes: renderOrder 5 + depthTest false; left-anchor with geometry.translate(width/2)
- zero-gravity-room: 0 errors, det 0, sound ok, sheet read
- neuron-forest: 0 errors, det 0, sound ok, sheet read. Wave 8 complete.
- camera-obscura: 0 errors, det 0, sound ok, sheet read. NOTE outside world = second scene rendered to a target each frame; when camPath changes fov, rescale HUD titles by tan(fov/2)/tan(15deg)
- time-slice: 0 errors, det 0, sound ok, sheet read. NOTE scissor into a render target: set rt.scissor and rt.scissorTest (renderer.setScissor/setViewport change the SCREEN viewport and shrink the final frame)
- caustic-pool: 0 errors, det 0, sound ok, sheet read. NOTE caustics = additive shader plane, brightness from the wave height Laplacian; cancellation = subtract a phase-shifted copy inside a soft circle
- kaleidoscope: 0 errors, det 0, sound ok, sheet read. NOTE title kept in an unfolded centre cell; the fold samples only the annulus outside it, so the title never repeats
- aurora-lines: 0 errors, det 0, sound ok, sheet read. NOTE for a mirror under ground, cut a hole in the ground shape where the reflecting surface is
- frosted-pane: 0 errors, det 0, sound ok, sheet read. NOTE mist/frost/wipes = one 2D canvas redrawn from the clock each frame (frost segments with birth times, wipes with destination-out)
- dewdrop-lens: 0 errors, det 0, sound ok, sheet read. NOTE each drop: a ShaderMaterial sampling its scene's render target at 0.5 - viewNormal.xy (inverted, lens-like) + fresnel
- signal-glitch: 0 errors, det 0, sound ok, sheet read. Wave 9 complete: 100 of 100 styles built.

### Phase 4 (2026-11-13)
- posters: 100 of 100 in atlas/posters/. tools/test.mjs: 2438 passed, 0 failed.
- README: atlas/README.md (serve, use, player, add a style, headless still command without flags).
- pass at t = 0, D/2, D - 0.5 for all 100: scratchpad pass.mjs (montage pages pass/NN.jpg, summary.json).
- Gallery fix: `.pv .ph[hidden] { display:none; }` in atlas/index.html; posters were covered by the placeholder.
- Published: github.com/az9713/fable-5.2-3d-animations, GitHub Pages from main root (commits ee3b394, ed089fb). Root README.md names the source video and the model credits.

## 14. Art styles (second set)

Phase 1 is done (2026-11-13). The kit, the contract, the check tool and 5 pilot styles exist. Stop here for the owner's review.

### 14.1 Idea

An animation is a scene plus an art style. The scene is one of the 100 first-set styles whose `post` is `null`. The art style draws it. `K.run` refuses an art style on a scene that has its own `post`.

### 14.2 File contract

- One file per art style: `atlas/art/<id>.js`. Classic script. `<id>` is the kebab-case name from `atlas/art/manifest.js`.
- `atlas/art/manifest.js` defines `ART_LIST`: 100 rows `{n, id, name, group, inputs, kind, source?}` in plan order. `kind` is `keep`, `new` or `ver`. `source` is the first-set id of a `ver` row. The rows come from the list `G` in `art-styles-plan-v2.html`.
- The file registers `ARTS[id] = { id, name, group, inputs, post, material?, fps?, x? }`.
  - `id`, `name`, `group`, `inputs` must equal the manifest row. `tools/test.mjs` checks this.
  - `post = { fragment, uniforms?, normals? }`. `fragment` defines `vec4 postFX(vec2 uv)` and returns linear colour. The first-set rules still apply: tone mapping runs after it, so paper white needs about x2.2; posterise in gamma space.
  - `material(m, mesh, S)` (input M): the kit calls it once for each material of each non-label mesh, after `build`. Change `m` in place. Do not replace it: scene `update` functions write to the old object. Use `K.patchMaterial(m, shader => {...})` to edit the shader source.
  - `fps` (input S): the time given to `update` and to the shader is rounded down to a multiple of `1/fps`.
  - `x = { n, still?, span, mode: 'avg'|'max'|'diff', fixCamera? }` (input X): see 14.3.
- Rules: no `Math.random`, `Date` or timers; no memory from the frame before; no image files. A shader uses only the inputs of 14.3.
- Player: `player.html?style=<sceneId>&art=<artId>&t=..&still=1`. The player loads `art/manifest.js` and `art/<id>.js`. `index.html` is unchanged.

### 14.3 Kit added (`atlas/kit/stage.js`, 402 lines; was 355)

All additions apply only when an art style is set. With no art style the render path is as before (14.7). Line numbers are approximate.

| Input | What the shader gets | Where |
|---|---|---|
| W | `worldPos(uv)`, `worldNormal(uv)` (needs `normals: true`), uniforms `uProjInv`, `uViewInv` | head `stage.js:312-317`, uniforms `:322-324`, set `:378-384` |
| B | `uCanon` (canonical time), `uBeats[8]`, `uBeatN`, `beatIdx()` (last beat, -1 before the first), `beatAge()` (seconds since the last beat) | same lines |
| S | `art.fps`: `tf = floor(t * fps + 1e-4) / fps`. `uTime` is `tf` | `:353` |
| M | `art.material` hook, and `K.patchMaterial` | `:252-259`, `:286-289` |
| X | `art.x`: n renders at times in `[tf - span, tf]`. The last one is `tf`, so depth, normals and camera belong to the frame. `avg` (weights 1/n), `max` (max blend), `diff` (`tColor` = frame at `tf`, `tPrev` = frame at `tf - span`). `fixCamera` keeps the camera pose of `tf` in all renders. `n` is for live play; `still` is used when `samples > 1`. Times are clamped to 0. | `:297`, `:311`, `:354-370` |
| labels | `K.label` sets `mesh.userData.isLabel` (`:135`). With an art style, label meshes move to camera layer 1 and lights get layers 0 and 1 (`:340-343`). The main pass and the normal pass do not draw them. `labelPass` (`:345-350`) draws them over the finished picture. | |
| depth scale | `uFocus`: distance from the camera to `camera.userData.look` (to the origin if none). Use it to make a depth range that fits the scene. | `:382` |

Limits to know:
- A label is never hidden by scene geometry (the label pass clears depth). A label with `depthTest` that stood behind an object now shows through. Text that is not made by `K.label` is filtered by the art style like any surface.
- Lit labels use the shadow maps of the main pass. Nothing else shadows a label in the label pass.
- Materials made after `build` (inside `update`) are not offered to `material`.
- `uBeats` holds 8 beats at most. Scenes have 3 to 5.
- Live Long exposure uses `x.n` = 10 renders. Fast parts show as separate copies. Stills use `x.still` = 48.

### 14.4 Check tool: `node atlas/tools/art.mjs`

No dependencies. It serves `atlas/` from its own Node process. It starts its own headless Chrome (GPU on, `--remote-debugging-port=0`) and kills only the Chrome PID that it started. It finds Chrome in the standard install folders; set `CHROME` to override.

```
node atlas/tools/art.mjs <artId|none> --scenes tiny-diorama,floating-screens --times 0,b1+0.2,b1+1.8,mid,end [--fps] [--q] [--full] [--crop x,y,w,h] [--out name] [--ref save|cmp]
```
- Times: a number, `mid` (D/2), `end` (D - 0.5), `b<i>` or `b<i>+0.2` (beat i, plus an offset).
- Output: `atlas/art-out/<out>/<art>__<scene>.jpg` (contact sheet, 640 px cells). `--full` also writes one full-size JPEG for each time (`--crop` cuts it). `atlas/art-out/` is in `.gitignore`. A second run with the same `--out` overwrites the files.
- Reports: the GPU name; console errors; determinism (the same frame twice with another frame between; pixels that differ by more than 6 levels); one-frame time (10 `seek` calls, each followed by a 1-pixel `readPixels`); with `--fps` the live frames per second in the real player (4 s of `requestAnimationFrame`, 1920 x 1080, `samples=1`).
- `--q` renders with `samples=8` (X styles then use `x.still`).
- `none --ref save`, then `none --ref cmp` after a kit change, compares frames of unchanged scenes with saved lossless copies. Noise between runs: up to 1 pixel that differs by more than 6 levels (text drawing), and up to 107 pixels that are not identical.
- Env `ART_EVAL`: a JS expression that runs in the page after the checks. Example: `__A.same(1.01, 1.05)` counts the pixels that differ between two times.

### 14.5 The 2 test scenes

- `tiny-diorama`: strong forms and depth, an orbiting camera, a moving van, a stroked HUD title, flag labels in the scene (3 `K.label`, 1 lit).
- `floating-screens`: flat UI cards with canvas-texture text, a window, a plant, number badges and a title. It tests flat surfaces and legibility.
- Also used in a smoke test: `marble-run` (fast small parts, for Long exposure).
- Rule for later groups: the scene must have `post: null`. Text that must stay legible must be `K.label`.

### 14.6 Pilot results

All 5 were rendered and read on both scenes. GPU: NVIDIA GeForce RTX 3050 Laptop. For each style on each scene: 0 console errors, 0 pixels over 6 levels in the determinism check.

| Style | Match with the plan row | One frame (ms) / live fps |
|---|---|---|
| 1 Wet watercolor (C D B) | Partly. Wet frames: colour bleeds over the edges (depth-aware wash). Dry frames: paper grain, wobbly edges, soft dark rim. Off: dry colours are pale and the rim is weak. At a beat on `floating-screens` the white cards nearly vanish. | 6 to 14 ms / 138 to 144 fps |
| 11 Banknote engraving (C N W) | Yes. Parallel lines in world space bend around forms, width follows the tone, a cross layer in the darkest tones, an outline, a guilloche background. Off: lit flat ground shows almost no line (lines at a grazing angle are smaller than a pixel and average to grey). | 5 to 11 ms / 142 to 144 fps |
| 21 Paper-cut light box (D) | Partly. 8 sheets with white cut edges, shadow on the sheet behind, warm glow on far sheets, an amber lamp behind. Off: the sheet range (0.8 to 1.3 times `uFocus`) fits `tiny-diorama`; on flat `floating-screens` only 2 to 3 sheets show. | 5 to 13 ms / 142 to 144 fps |
| 51 Cel animation (C D M S) | Yes. Two flat tones (material hook), ink line (wide on silhouettes, thin on creases) that moves a little on each drawing, a flat cel shadow. Two times in one 1/12 s window give 0 differing pixels; two windows give 180,105. Off: most faces take the light tone. | 6 to 21 ms / 138 to 144 fps |
| 100 Long exposure (X) | Yes in stills (`--q`, 48 renders): smooth trails, sharp rails and labels. Partly in live play (10 renders): fast parts such as marbles show as separate copies. | 19 to 46 ms / 24 to 81 fps |

Decision 6 (stop if live play is below 15 fps): the lowest Long exposure reading is 23.8 fps (`tiny-diorama`, first run); later runs gave 44 and 48 fps. Above 15. The other 4 styles run at the 144 fps display limit.

Contact sheets: `atlas/art-out/sheets/<art>__<scene>.jpg`.

### 14.7 Checks of the kit change

- `node atlas/tools/test.mjs`: 2459 passed, 0 failed (was 2438; the 21 new checks cover the art manifest and the 5 art files). Largest prompt: 69,271 characters (was 64,554). Limit: 120,000.
- Old paths: frames of scenes with no art were compared with frames saved from the unchanged kit. Scenes: `tiny-diorama`, `exploded-view`, `floating-screens`, `toy-blocks`, `evidence-board` (`post: null`), `pencil-sketch` (post pass), and a `samples=8` still of `tiny-diorama`. Result: 0 pixels differ by more than 6 levels, except 1 pixel on `pencil-sketch` at t = 0. The unchanged kit gave the same kind of noise against its own saved frames.
- X modes `max` and `diff` ran with no GL error (a smoke test with a temporary art object). Their look is not judged.
