# Checks

Three kinds of rule, then the inclusive checks, then the browser check. Run them on renders, never on code alone. When a measurement and a screenshot disagree, the screenshot wins.

## 1. Pure taste: his taste wins

Colour, typefaces, corner shapes, density, outlines or fills, labels above headings, numbering, shadows, motion style, how much is centred, pictures or no pictures. Never flag these against him. His design system and taste profile decide.

## 2. Conventions: push back once, with pictures

When his taste or the brief breaks one of these, show two versions side by side (his exactly, and his adjusted to keep the convention), name the cost in his terms, and let him choose. Record the choice in the brief.

- A menu people can find, and footer links. A designed closing section may carry the links; it does not replace them.
- One main action per screen, named for what it does, as a real button; the same name everywhere.
- The first screen says what this is and who it is for (a clear page title).
- Every section the reader came for has a heading.
- Headlines short enough to read in one glance (about two lines at every width).
- Body text left-aligned, 45 to 75 characters per line, in full-strength ink, not soft grey.
- Equal outer margins; no section huddled on one side with the other half empty by accident.
- Consistent placement: navigation, actions and repeated components stay where the reader expects them.
- Proof is real: no invented customers, quotes, logos, ratings or figures.
- Copy any competitor could print unchanged is sharpened or cut.

## 3. The floor: name it every time

Name every failure before anything is built further or published. He may overrule one knowingly; record it as "accepted on purpose" for that project. Never ship one silently.

- Text contrast: 4.5:1 for body text, 3:1 for large text and essential graphics.
- Text size: nothing meant to be read below 13px on screen; body 16px or more on the web.
- Touch targets at least 44px tall on phones.
- Nothing covers a headline, a statement or the main action at any scroll position or width.
- The phone layout works: no sideways scroll, nothing clipped, menu reachable.
- Every control works from the keyboard and has a name (its visible label, or an accessible name when it shows only an icon); focus is visible.
- Motion can be stopped: a reduced-motion version keeps the content and drops the movement; nothing flashes.
- Meaning never rests on colour alone: pair it with a shape, label or position.
- Pictures carry alt text that says what they show; nothing important is only in a picture or a download.
- Forms keep what was typed, label every field above it, and say plainly what went wrong and how to fix it.

## 4. Inclusive checks

Base: W3C, "Making Content Usable for People with Cognitive and Learning Disabilities" (Working Group Note, 29 April 2021, w3.org/TR/coga-usable), and GOV.UK's accessibility posters for autism, dyslexia and low vision (2 September 2016). Run the full set when the audience is neurodivergent (default for Late Diagnosis, OneFocus and Tempo); run the starred lines on every asset.

- * The purpose of the page or screen is clear at once, and the most important action and information are easy to find.
- * A familiar, consistent layout: navigation and controls stay in the same place and look like what they do.
- * Plain, literal words: no idioms or figures of speech in instructions, no double negatives, short sentences, buttons that say what they do ("Book a call", never "Click here").
- * Short chunks with white space and headings; no walls of text; a summary at the top of anything long.
- Limit interruptions: nothing plays, flashes, pops up or moves on its own; the reader controls when content moves or changes.
- No time pressure: no countdowns, no timeouts that lose work.
- Make short paths to the main task; each step in a multi-step flow is clear, shows progress, and lets the user go back.
- Do not rely on memory: show what was chosen earlier, give reminders, accept different input formats, never require a calculation.
- Calm colour: strong enough contrast to read, but no clashing bright pairs or harsh glare; let the reader change contrast where the platform allows.
- Left-aligned text; avoid long underlined, italic or all-capital runs.
- Support text with images or diagrams where they explain, and say clearly what an action or option will result in.
- Help is easy to find: a human contact or plain explanation near anything complex.

## 5. The browser check (web pages and app screens)

`scripts/check.mjs` opens the page in Chrome at 1440, 768 and 390 pixels, measures it and saves screenshots. It is the taste skill's inspector with its taste-only rules switched off, so it reports conventions and the floor only. Needs Node 22+ and Chrome.

```bash
node <skill>/scripts/check.mjs <url or path/to/index.html> --out <scratch folder>/check-<date>
```

Add `--app` for app screens. Open every screenshot it lists before saying anything about quality. Read its findings through the three kinds above: a finding on a pure-taste rule his design system sets is ignored; a convention finding is pushed back once; a floor finding is always named. It measures preference-free facts (contrast, sizes, overflow, covered text, margins, headline line counts), not whether the page converts.

Run the last check on what the visitor receives: the production build or the live URL, not only a dev server.
