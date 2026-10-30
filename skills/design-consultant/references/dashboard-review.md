# Dashboard review

Moved here word for word from the `dashboard-review` skill on 30 October 2026, when it merged into `design-consultant` (Conor: "I'd rather they were merged if possible to reduce bloat"). Paths repointed to this folder.

Apply Conor's dashboard standards to a dashboard that exists, is planned, or is about to be built. This skill is a harness, not a rulebook: the rules live in one file and are loaded fresh every run, so the skill never goes stale when Conor edits the standards.

## Step 0: load the standards, or stop

Read `dashboard-standards.md` (in this folder), in full — no truncated reads, because a partial read cannot prove a rule is absent.

**If the file cannot be found or read in full, stop.** Say plainly: "I can't load the dashboard standards, so I can't run the dashboard review — the rules live there, not in the skill." Do not improvise the rules from memory, from this skill, or from a summary. A half-instructed review is worse than none, because its findings look authoritative.

The standards file governs information design. For the visual layer (colour, type, radii, borders) it defers to `~/Developer/conor-walsh/docs/design-system.md` — read that too when building, or when reviewing visual-layer questions.

## Step 1: establish the reading context

Before applying any rule, answer three questions. They change the verdicts.

1. **Who reads it, and how often?** A weekly self-review tolerates density that a client-facing
   monthly report does not.
2. **What decision does it drive?** A dashboard that drives no decision needs cutting, not styling.
3. **What is the data's real shape?** Sample sizes, missing windows, uneven cadence. Rules 12 and 13
   (empty states, sample-size floors) depend entirely on this.

If any of the three is unclear and the answer would change the build, ask. One question, in plain
language, not internal vocabulary.

## Step 2: establish precedence before judging anything

The standards file opens with a precedence chain. Apply it before flagging a single violation:

1. What Conor says in the moment.
2. The surface's own design system, for in-product surfaces (Tempo, OneFocus, a client's system). The standards file's Exceptions section (Part 5) lists the known Tempo carve-outs — read them; several "violations" on Tempo surfaces are the correct behaviour there. Tempo's design system is `90-lab/tempo/design/design-system.md`, and its Protected Elements section outranks everything.
3. The standards file.
4. The consulting-website design system for the visual layer.

If the dashboard under review is an in-product surface, say so up front and judge only what still binds (the file states what survives on those surfaces: the accessibility floor, no invented composites, plain language). When Conor's live instruction conflicts with a rule, follow Conor and name the broken rule in one line — the file itself demands the deliberate break be said out loud, never silent.

**On a Tempo surface, read Part 5 of the standards first.** Five rules are explicitly overridden
there (hierarchy order, the no-explainers rule, filter controls, legend duplication, and red as a
score band rather than an error). Applying the general rule over a documented exception is a defect,
not diligence.

## Step 3: pick the mode

- **Review mode** — a dashboard (or a plan/spec for one) already exists and the task is to assess it.
- **Build mode** — the task is to create or substantially restyle a dashboard. Standards are applied during construction, and a self-review runs before hand-off.

A "bring this page up to standard" task is build mode with a review first: per the standards, alignment starts with layout and structure, not paint.

## Review mode

**Open the artefact itself.** Read the full source of the actual file or live page — never judge from a description, a screenshot alone, or memory of it. If it renders (HTML), render it and look: several rules (contrast, legends, layout order, hover-only content) are only checkable in the render. Anything not actually seen is labelled **"not assessed"** or **"inferred"**, never stated as a finding.

Work through, in order: the fifteen rules (Part 1), the ADHD/accessibility layer (Part 2), tab logic (Part 3), table defaults (Part 4), then the build and verification checklist at the end of the file. The checklists are the audit script — walk them literally.

The four that fail most often, worth checking first:

1. **Hierarchy inverted.** A subset or sample sitting above the population it came from.
2. **Explainer paragraphs.** Any sentence teaching the reader how to read the section.
3. **Headings that perform.** A heading the reader cannot act on or does not understand.
4. **Undefined codes.** Internal taxonomy assumed to be memorable.

### How to judge an element

- **Apply every rule that touches the element, not just the rule it is filed under.** A heading is tested against rule 3 (informs, never performs) AND Part 2's language rules (reader's own words, no jargon the reader did not create) in the same look. The review's first two missed findings on its live test were headings that passed rule 3 read alone and failed the language test sitting in a different part of the file.
- **Report borderline calls with the call made.** "Considered, not flagged, because X" is a line in the report; a silently dropped judgement is invisible and unarguable. The standards demand deliberate rule-breaks be said out loud when building — the same duty applies to the reviewer's own close calls.
- **When Conor overturns one verdict, re-test every sibling verdict with the corrected test before replying.** A pass list built on a misreading is suspect everywhere, and he should not have to catch the same error twice. Sweep the whole class (all headings, all tables, all labels) in one pass and show the re-tested list.

### Report format

Deliver in chat by default; a file only if Conor asks or it genuinely won't fit. Structure:

1. **Verdict line first** — one sentence: is this usable as-is, usable after fixes, or structurally wrong. Lead with any conclusion that contradicts the obvious reading.
2. **Violations, ordered by leverage** (not by rule number). Each one carries:
   - the rule (number and short name),
   - the evidence — the actual element, quoted or described from the render, with its location,
   - the fix, phrased as an instruction.
3. **Borderline calls** — each with the verdict reached and the reason, so they can be argued with.
4. **Passes** — one short line listing what's clean. No adjective-only grades ("good", "solid"): every label states a consequence or a required action.
5. **Not assessed** — anything that couldn't be checked (e.g. couldn't render, no dark theme available) and what checking it would take.

A one-item category never carries a verdict chip (the standards' own n≥3 floor applies to the review's labels too).

## Build mode

1. Read the standards file and the visual-layer design system **before writing any code** — retrofitting hierarchy or tab structure costs more than starting with it.
2. Structure first: apply the tab taxonomy (Overview first, Conclusions last, six max), broad-before-granular ordering, and the table defaults from Part 4. If the dashboard cannot be expressed in the taxonomy's shape, say so and explain what it is instead — never bend it silently.
3. All figures compute in-page from one embedded data array. No hardcoded totals, no invented composite scores. Hand-captured figures go in the array tagged with capture date.
4. Before hand-off, run the full checklist at the end of the standards file — build checklist, accessibility gate, and technical gate — against the artefact, not the intention:
   - render it and look at it; a measurement is not a look,
   - count em-dashes with Python `chr(8212)` (grep gives false negatives),
   - validate JS with `node --check`,
   - check contrast pairings in the render,
   - if a screenshot comes back blank, check `document.documentElement.clientWidth` before reporting a defect — 0 means capture failure, not a blank page.
5. At hand-off, state plainly what is live, what is committed but not deployed, and what is local.

**Verification is not optional and not delegable.** Render the page and look at it. A DOM
measurement confirms only what you thought to measure. When a measurement and a screenshot
disagree, the screenshot wins, unless `clientWidth` is 0, which means the pane is collapsed and the
screenshot is void.

Do not report the checklist itself: it is working apparatus, not a deliverable. Run it, fix what fails, and report only what needed a human decision.

## What this skill will not do

- **Invent numbers.** Every figure computes from one embedded data array. If a figure was read by
  hand from a third-party screen, it is tagged with its capture date.
- **Ship a known defect to save a step.** Name it and let Conor choose.
- **Treat a reference dashboard's numbers as evidence.** Published examples are frequently demo data.
  Test before citing: sequential record IDs, values clustering on round multiples, and archetypal
  filler copy all indicate fabrication.

## Why this shape

The standards were written from a line-by-line teardown: every rule has a specific failure behind it. That is why the skill defers to the file rather than restating it — Conor argues with the file and edits it, and this skill must always apply the current version, not the version that existed when the skill was written.

## References

- `dashboard-standards.md` (in this folder): precedence, the rules, ADHD and accessibility, tab logic, table defaults, the documented exceptions (Part 5) and the build and verification checklist
- `90-lab/tempo/design/design-system.md`: outranks the standards on Tempo surfaces
- `02-areas/media-business/onefocus/design-system/`: OneFocus's own system, same precedence
- `~/Developer/conor-walsh/docs/design-system.md`: the visual layer (Inter, locked palette, 5px radii, hairlines)
- The `deliverable-standards` skill: Conor's standards for anything he or a client sees
- Worked example: `02-areas/work/linkedin-strategy-assistant/content/analytics/2026-08-05-linkedin-dashboard.html`
