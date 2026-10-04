# Task for Codex: create the illustration set for the "Intona" app

You are working in the GitHub repository `gabrielemartucci/accordo` (a static PWA, no build step).
Your job is to **generate 11 illustrations**, save them as WebP files in `assets/ill/`, check them with a script, and open a pull request.
**You must not change any code.** The app already looks for the files by name and shows each one only if it exists.

If you cannot generate images with an image-generation tool, **stop and say so in your reply**. Do not draw them with code, do not use placeholders, do not download stock images or copyrighted art.

---

## 1. What the app is (so the pictures fit)

**Intona** is a free, installable phone app (iPhone first, runs as a PWA) for small and medium **evangelical / Pentecostal churches in Italy**. Volunteers who run the sound ("la regia") use their phone microphone to measure how the hall sounds, and the app tells them which knobs to turn on the mixer so that the **spoken Word is clear** and **worship sounds full**. It also teaches basics (gain, EQ, feedback, echo) and gives cheap acoustic tips.

Who sees the pictures: **non-technical volunteers** (often 30–70 years old, sometimes anxious about "the technical stuff"), pastors and worship leaders. The app must feel **calm, warm, practical and welcoming**, never techy, never alarming.

Brand: the name comes from the Italian verb *intonare* (to tune; to start a hymn). The symbol is a **tuning fork with a small flame-shaped drop of light between its prongs**; the fork "rings" with soft concentric arcs. The wordmark is lowercase, rounded, monoline: `intona`. Main accent colour is amber `#F5B83D`. Source art for the logo is in `brand/` (look at `brand/mark.svg` and `brand/lockup.svg` to see the visual language: round caps, simple geometry, amber flame).

Where the pictures appear: inside rounded cards (corner radius 24 px) at the top of a screen, **about 358 px wide on an iPhone** (so roughly 358×179 px on screen; the files are larger for sharpness). Screens are either **light** (`#F2F2F7`) or **dark** (`#000000`); the pictures are dark, warm, cinematic scenes that sit well on both. In dark mode the app dims them slightly (brightness 93%).

---

## 2. Deliverables

Save each file as **WebP, sRGB, opaque (no transparency)**, quality about 82, **at most 220 KB each** (aim for under 150 KB). Names and sizes are fixed (they are also listed in `assets/ill/manifest.json`):

| File (in `assets/ill/`) | Size (px) | Appears on |
|---|---|---|
| `welcome-hero.webp` | 1600 × 900 | Welcome screen, under the logo |
| `role-hero.webp` | 1600 × 800 | "How practical are you with audio?" |
| `measure-silence.webp` | 1600 × 800 | "A moment of silence" (measuring background noise) |
| `measure-position.webp` | 1600 × 800 | "Where do we measure?" (3 points in the hall) |
| `result-good.webp` | 1600 × 800 | Result screen when the score is 75 or more |
| `result-work.webp` | 1600 × 800 | Result screen when the score is below 75 |
| `verify-done.webp` | 1600 × 800 | "Done." after the mixer settings are changed |
| `culto-check.webp` | 1600 × 800 | "Before the service" checklist |
| `sos-hero.webp` | 1600 × 800 | "Quick help" (something goes wrong during the service) |
| `lib-hero.webp` | 1600 × 800 | Library (lessons, glossary, tips) |
| `history-empty.webp` | 1600 × 800 | History screen when there are no measurements yet |

The sizes are exact (the 2:1 ratio matters: the app does not crop). If your tool cannot output these exact sizes, generate the closest wide format and **resize/crop to the exact size** (see "Converting" below).

---

## 3. STYLE LOCK — put this paragraph at the start of EVERY image prompt

> Warm, calm editorial vector-style illustration with soft gradients and a very fine paper grain. Rounded, friendly shapes; no outlines (or a hairline of the same hue as the fill); no photorealism; no 3D-render look. Lighting: one warm golden source per image (stage light, window, lamp, or a small flame-shaped glow) giving a soft glow and long gentle shadows. Palette — use only these families: deep warm black #0B0B0C and #1C1A17 for backgrounds and shadows; warm charcoal-browns #3A2F25 and #5A4634; cream #FFF4DC and soft sand #E9D8B4 for lit surfaces; amber #F5B83D as the main accent; flame orange #F08A1C and pale gold #FFE08A for glows; one cool accent teal #2BA8C2 used very sparingly (screens, tiny details). Roughly 60% dark warm tones, 25% mid tones, 10% amber/gold light, 5% cool accent. Sound is drawn as soft amber concentric arcs and smooth luminous curves (echoing a tuning-fork logo that emits arcs) — never as musical-note clichés. People are stylized, faceless or with minimal features (no detailed faces), with diverse skin tones, ages and body types, in casual modest clothing, never clerical robes. Setting: a modern, simple Italian evangelical church hall — rectangular room, rows of ordinary chairs (not pews), a plain low stage with a keyboard, a drum kit, mic stands and two column speakers, a small mixing desk at the back, ceiling light bars, a projection screen showing only an abstract shape, curtains or acoustic panels on the walls. No religious iconography except, at most, one very simple plain wooden cross on the stage wall: no altar, statues, saints, candles on altars, stained glass, gothic arches or vestments. Composition: wide landscape, one clear focal point, calm negative space, the main subject kept inside the central 88% of the frame, must read clearly when shown only 360 px wide (bold shapes, few small details). No text, letters, numbers, logos, UI chrome or watermarks anywhere; devices are generic with no brand marks. Mood: warm, hopeful, practical, welcoming — never dramatic, never alarming (no red or warning colours).

**Consistency rule.** Generate `welcome-hero` first. Then use it as the style reference for every other image (reference image / "same style as" / same seed, whatever your tool supports) so all eleven look like the work of one illustrator: same palette, same level of detail, same lighting logic, same character design.

---

## 4. The eleven briefs

Write each prompt as: **STYLE LOCK + "Aspect ratio 16:9" (welcome) or "2:1" (the others) + the scene below.**

**1. `welcome-hero`** — The hall seen from the back, near the sound desk, a little elevated, just before the service. Warm golden light from tall windows and stage lights. In the foreground left, a volunteer (seen from behind, headphones around the neck) at a small mixing desk whose screen gives a soft teal-and-amber glow. Ahead, rows of empty chairs lead to the stage with a keyboard, drum kit and two column speakers. From the speakers, faint amber arcs travel across the whole room toward the viewer: sound filling the space evenly. Mood: anticipation, hope, calm.

**2. `role-hero`** — Close and friendly. An older man (60s) and a young woman at a sound desk, both looking at a digital mixer screen and pointing at it together; she is explaining, he is nodding and smiling. Headphones, a coffee cup, a warm desk lamp. A small amber arc glows above the screen. Mood: companionship, "we'll guide you".

**3. `measure-silence`** — The empty hall in the early morning, dust motes in beams of light, chairs in neat rows, big calm negative space. On one chair a single smartphone stands upright with a tiny amber glow at its microphone and two very faint rings around it, as if listening. Mood: hush, stillness, patience.

**4. `measure-position`** — A clean isometric (three-quarter overhead) cutaway of the hall: stage at the top, rows of chairs, two column speakers. Three glowing amber markers (just dots, no numbers) at front-centre, mid-hall and back. At the middle marker a seated stylized person holds a phone at ear height; a dashed amber line runs from the phone toward the speakers. Mood: clear, orderly, easy.

**5. `result-good`** — The hall warm and full of light. A stylized, faceless congregation sings, a few with raised hands (expressive, joyful, respectful). Smooth, even amber arcs flow over every row, front to back (even coverage). At the back, the sound volunteer relaxes with a quiet smile at the desk. Mood: joy and clarity, modest — not triumphant.

**6. `result-work`** — Same hall, but the light is calmer and slightly dimmer. The amber arcs are strong in the front rows and become tangled and bouncing in the middle, hitting the side walls (a hint of echo). A volunteer at the desk looks thoughtfully at a phone, one hand on a fader. At the far end a window or door glows, suggesting "there is a way forward". Mood: encouraging and practical — no alarm, no red, no warning signs.

**7. `verify-done`** — Close-up of hands turning a knob on a mixer, a few faders in focus, a soft amber reflection (a small flame-shaped glow) on the console surface, the warm blurred hall behind. Mood: quiet accomplishment.

**8. `culto-check`** — The stage prepared early in the morning: mic stands in place, cables neatly coiled, chairs aligned, a small espresso cup on the sound desk. A volunteer walks the stage checking with a phone. Low warm morning light through the windows. Mood: care, readiness, service.

**9. `sos-hero`** — During the service, seen from the sound desk. A volunteer is calm, one hand resting on a fader, lit by the screen glow; the pastor is small on the stage in the background. Near a microphone, a tight amber spiral (the "feedback loop") is being gently unwound into a smooth, flowing wave. Mood: "stay calm, it can be fixed".

**10. `lib-hero`** — A top-down flat-lay on dark wood under a warm lamp: an open notebook (no readable writing), over-ear headphones, a small microphone, an XLR cable coiled, a square sample of acoustic foam, a small potted plant and a **tuning fork** standing upright with a tiny amber flame-shaped glow between its prongs. Mood: curious, practical, inviting.

**11. `history-empty`** — A quiet empty stage under one soft spotlight: a single microphone on a stand, nothing else, an amber arc just starting to rise from it. Lots of calm negative space. Mood: "begin here".

---

## 5. Converting and saving

Generate PNG/JPEG first, then convert to WebP at the exact size. Any of these works:

```bash
# cwebp (libwebp)
cwebp -q 82 -resize 1600 800 input.png -o assets/ill/role-hero.webp
# ImageMagick
magick input.png -resize 1600x800^ -gravity center -extent 1600x800 -strip -quality 82 assets/ill/role-hero.webp
# Python + Pillow
python3 -c "from PIL import Image; im=Image.open('input.png').convert('RGB'); im=im.resize((1600,800), Image.LANCZOS); im.save('assets/ill/role-hero.webp','WEBP',quality=82,method=6)"
```
(`welcome-hero` is 1600 × 900.) Do not commit the source PNGs.

---

## 6. Check your work (required)

1. `node tools/check-illustrations.mjs --strict` must end with **11 ok, 0 to fix, 0 missing** (it checks WebP format, exact size, weight, no transparency).
2. Look at them in the app's frame: run `python3 -m http.server 8080` in the repo root and open `http://localhost:8080/assets/ill/preview.html` (shows every image in a 358 px card with rounded corners, and flags wrong sizes). Take a screenshot if you can.
3. Self-review each image against this list and **regenerate (up to 3 tries) any that fail**:
   - [ ] No text, letters, numbers, logos or watermarks anywhere (including on screens, shirts, posters).
   - [ ] No religious iconography beyond one plain wooden cross at most; nothing Catholic/Orthodox; no vestments.
   - [ ] People are stylized/faceless, no distorted hands or faces, no uncanny details.
   - [ ] Palette matches the STYLE LOCK; no red or alarming colours; warm light.
   - [ ] One clear focal point; readable at 358 px wide.
   - [ ] Same illustrator's hand across all eleven.
4. Optional but welcome: open the real app (`http://localhost:8080/`), tap through Welcome → role → home → Library, and confirm the pictures appear in place (they load automatically from `assets/ill/<name>.webp`; there is nothing to wire up).

---

## 7. Git

- Create a branch from `main` named `art/illustrations`.
- Commit **only** the eleven `.webp` files in `assets/ill/` (plus `assets/ill/README.md` if you add a credit note about the tool used and the date). Do **not** edit `index.html`, `sw.js`, `manifest.webmanifest`, `assets/ill/manifest.json`, `tools/` or any other file.
- Open a pull request to `main` titled **"Illustrazioni v1"**. In the description list the 11 files with their size in KB, say which image tool/model you used, and paste the output of the check script. Do not merge it.

## 8. Things not to do

- Do not use real people's likenesses, celebrity or character lookalikes, or any third-party artwork.
- Do not add text or captions inside the images.
- Do not rename files or change sizes. Do not add extra files to the app.
- Do not put the app name or logo inside the pictures (the app shows its own logo).
- If something in this brief is impossible or contradictory, say so in the PR description instead of improvising.

---

## 9. Same briefs as standalone prompts (for pasting into any image tool)

For a person using another tool (ChatGPT image generation, Midjourney, etc.): take the **STYLE LOCK** paragraph from section 3, add the aspect ratio, then paste one brief from section 4. Convert to WebP at the exact size (section 5), save as `assets/ill/<name>.webp`, and upload through GitHub: *Add file → Upload files*.
