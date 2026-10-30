# Dashboard standards

*The rules for every dashboard, report page or analytics view built anywhere in this OS: client
dashboards, LinkedIn analytics, one-off HTML reports, and in-product analytics screens. This file
governs information design. The visual layer (colour, type, radii, borders) comes from
`~/Developer/conor-walsh/docs/design-system.md` and is not restated here.*

**Written 2026-08-05** from Conor's line-by-line teardown of the LinkedIn dashboard, extended the
same day with accessibility, tab logic, table defaults and the Tempo exceptions. Every rule has a
specific failure or a specific source behind it, recorded so it can be argued with rather than
obeyed blindly.

---

## Precedence

When two rules collide, higher wins:

1. **What Conor says in the moment.**
2. **The surface's own design system**, for any in-product surface: `90-lab/tempo/design/design-system.md`,
   OneFocus, or a client's own system. See Exceptions.
3. **This file.**
4. **`~/Developer/conor-walsh/docs/design-system.md`** for the visual layer.

**Say when you break a rule deliberately, in one line.** Silently ignoring one is the failure, not
the exception itself.

---

## Part 1: the rules

### 1. Hierarchy: broad before granular, always

**The single biggest failure mode.** Lead with the widest view, then narrow. A reader answers "how am
I doing" before being shown any subset, sample or individual record.

Top of page: headline metrics over a selectable period. Then the time series they move along. Then
the main categorical breakdown. Then, and only then, subsets, samples and records.

**Never put an eight-post sample above the twenty-seven-post summary it came from.**

> Conor, 5 Aug 2026: *"You've started with the most granular data as higher in hierarchy than broad
> data."*

**Exception:** in-product surfaces ordered by workflow. See Exceptions.

### 2. No explainers

No paragraph explaining what a section is, why a method was chosen, or how to read a number. If a
section needs instruction to be legible, the section is wrong.

**Cut on sight:** methodology preambles, category framing, reading instructions.

**Keep, one line maximum:** a caveat that changes whether a number can be trusted, a source note, a
sample-size warning.

**Test:** delete every explanatory sentence. If the section still reads, they were never needed.

**Exception:** the Tempo accuracy-note pattern. See Exceptions.

### 3. Headings inform, never perform

Every heading states what the section contains, in the reader's language.

| Never | Instead |
|---|---|
| "What the direction actually is" | "Every month on record, newest first" |
| "Is it going up or down?" | (no heading; the control and the numbers say it) |
| "Where P5 and P3 reach actually lands" | "Are your posts reaching new people, or the same followers?" |
| "Where listing visitors come from, and how many installed" | "Traffic sources and conversion rates" (Conor, 7 Sep 2026: *"terrible title. It's traffic sources and conversion rates."*) |

Also banned as contentless: "Analytics", "Data", "Insights", "Metrics", "Details".

**When a plain noun phrase exists, use it.** "Where the money goes" is an Expenses table; call it
"Expenses". The question-form example above is for replacing jargon a reader cannot parse, never for
replacing a plain noun with a flourish. Same test kills "What each place costs you" ("Cost per
location") and "What if" ("Projection assumptions").

**A heading fails the same rule from the other side when it is a jargon pair the reader did not
create.** "Committed against discretionary" meant nothing to Conor, while the note beneath it already
held his own words: "things that recur" and "the one you control". Where a note translates its own
heading, the heading should have used the translation. Test every heading both ways: no flourish
where a plain noun exists, no jargon where the reader's words exist.

> Conor: *"I don't understand this phrase what the direction actually is."*
> Conor, 7 Aug 2026, on "Where the money goes": *"This is an 'Expenses' table. Why not call it that?"*
> Conor, 7 Aug 2026, on "Committed against discretionary": *"I have no idea what this means."*

### 4. Filters are dropdowns, not button rows

Period, month, rank-by, segment: all `<select>`. A row of pills eats horizontal space, wraps badly,
and does not scale past four options.

**Exception:** toggles that switch things on and off simultaneously (not one-of-N) can be a single
merged pill row. Tempo uses exactly this for display toggles while keeping a dropdown for period.
See Exceptions.

> Conor: *"why is the period selector buttons and not just a filter drop down that I can use?"*

### 5. Time runs newest first

Every table of periods puts the most recent row at the top, visually marked and labelled if partial
("to 5 Aug"). Dropdowns of periods list newest first.

**Charts invert:** oldest left to newest right, because that is how a line reads and the eye lands on
the right-hand end.

> Conor: *"the first month I see is October 2025 and the final month I see is August 2026 which is
> the most important month."*

### 6. Define every code, abbreviation and internal term in place

Never assume the reader remembers an internal taxonomy, even their own.

- **A key strip** at the top of any view using codes.
- **Plus inline expansion on first use** in headings and body, so the view reads without the key.
- Codes stay short inside tables where space is tight; the key covers them.

> Conor: *"I need the Ps defined as I won't remember them."*

### 7. Every visual encoding gets a legend

Shading, colour, bar direction, chip colour, icon. If it carries meaning, it is labelled without
hovering.

The legend also states **what the base element is** when that is not obvious: a shaded band needs
"this is your selected period", and the line behind it needs "this is the full record", because a
reader cannot tell a filtered chart from an unfiltered one by looking.

**Where the control already carries the label** (an active filter pill showing its own state), an
additional legend block is redundant. Explain in place, do not duplicate.

> Conor: *"you need to explain the purple shading with a legend."*

### 8. Never mix summary rows and detail rows in one table

A table is one population at one level. Category averages and individual records are two tables under
two headings, even when the second is evidence for the first.

> Conor: *"a bar chart table that has P5 human behind the scenes as a summary, P3 gtm and growth as a
> summary, and then a bunch of individual posts. I don't understand this table either."*

### 9. Say why a subset is isolated

When a view analyses part of the data, the first line states what the subset is and why it was
chosen. Otherwise the reader assumes it is arbitrary and distrusts the conclusion.

### 10. One job per tab

See Part 3 for the full tab taxonomy. A version-history table sitting on a regions tab drew *"Why is
version history here on the region?"* (7 Sep 2026); it moved to its own Releases tab.

### 11. Text flows with the container

No `max-width` clamp on body copy, section notes or intros. Already a rule for web pages in `deliverable-standards.md`; it
binds on dashboards too, where it was broken.

### 12. Empty and unavailable states are explicit

A metric with no data says so and says why in the same breath. Never a blank, never a bare zero,
never an unexplained dash. Three cases, three different meanings:

| Case | Say |
|---|---|
| Data exists but not for this window | "no comparable prior period" |
| The window is real but contains nothing | "no posts in prior period" |
| The metric is not obtainable at all | "not measured", plus where it would come from |

**Never report a percentage change against a zero-count window.** "Up from zero" reads as an
improvement that did not happen.

**Missing data is never styled as an error.** Grey, not red. A gap in the record is not a failure by
the person reading it.

### 13. Verdict labels need a sample-size floor

Chips, grades and rankings apply at `n >= 3`. Below that the label says how few there are. A one-item
group carrying a verdict buries the real finding.

Where volume is low enough to make the whole reading shaky, state it as fact plus consequence, not as
a hedge: "logged on 18 of 30 days (60%), so the averages move a lot on any single entry."

### 14. Separate volume from rate, and say which is which

Totals move with how much was produced; per-item averages do not. Show both, grouped separately. The
grouping and the labels carry it, not a paragraph.

A third kind, added 7 Sep 2026: a **level** (weekly users on a given day, a snapshot by region, the
version in use) is neither a total nor a rate. Under a period control it shows its latest reading and
says on the card that it does not change with the period, or the reader assumes the filter failed.

### 15. Never invent a number into the page

Every figure computes in-page from one embedded data array, so no aggregate can drift from its
source. No hardcoded totals in markup, no estimated values, **no invented composite scores**. A
figure read by hand from a third-party screen goes in the array tagged with its capture date, and the
footer says so.

### 16. On money surfaces, direction is a visual channel (added 7 Aug 2026)

On any surface that plans or reports money movement, green means money in and red means money out,
carried by colour plus arrow plus position together, never colour alone. This is a deliberate,
Conor-ordered exception to "red is reserved for problems": on a personal finance dashboard's
planning card he asked for expense blocks in red mirroring income in green, and the break is
recorded here rather than made silently. Direction arrows mark money movement ONLY. A date, a
run-out estimate or any other fact carries no arrow: on 7 Aug 2026 a runway date shipped wearing a
money-out arrow and Conor asked what it was doing there.

### 17. Nothing inert may look interactive, and nothing interactive may be exotic (added 7 Aug 2026)

Every element styled as a control must do something, and every control must be clicked in the
render before hand-off. A sortable-looking header that does not sort shipped on 7 Aug 2026
("I can't do anything with it"). The second half: prefer native form controls (`select`, `input`)
over hand-rolled popovers and custom widgets. Dashboards get embedded in artifact webviews where
custom event wiring dies silently; a checkbox popover that passed in a test browser reached Conor
"purely visual". Native controls are owned by the browser and cannot be cosmetic.

### 18. A chart fills the card it sits in (added 4 Sep 2026)

A grid, heatmap or chart occupying a corner of a wide card reads as broken, not as restraint: the
eye takes the blank half as a rendering failure or as missing data. Size the marks to the container
at render time, measured off the real box, rather than fixing them in the stylesheet and letting the
leftover width fall where it may. On 4 September 2026 the OneFocus focus heatmap was handed over
using 28% of a 990px card in its week view and 26% in 90 Days, and Conor's reply was "size the cells
so there's no huge empty spaces".

**The mechanism, because the naive fix makes it worse.** Marks are usually square, and growing a
square to fill the width grows its height with it: a seven-column week filling 990px would be 130px
on a side and about 540px tall, a wall of slabs. So separate the two. Height carries the cap,
expressed as a height budget for the whole plot divided by its rows. Width then spends whatever
slack is left, limited to roughly twice the height, because past that a cell stops reading as a cell
and starts reading as a bar. Use ONE fitting routine for every layout the surface has, so no two of
them can disagree about what fits, and make it handle both directions: a long range has to SHRINK to
fit at all, a short one has room to spare.

Sizing to the container makes the layout width-dependent, so it needs a **resize watcher**,
debounced and gated on the measured width actually having moved. Without one, a window drag leaves
the plot at its old size, stranded in space or scrolling. Keep a readable floor as well: when a
range genuinely cannot fit, the plot scrolls inside its own card rather than shrinking into dust,
and the page itself must never scroll sideways.

### 19. A sequential scale is one brand colour at rising opacity (added 7 Sep 2026)

Conor's ruling, given after three multi-colour heatmap schemes were rejected: *"Just colour them
in the brand marigold, starting transparent for no focus and getting less transparent as they go
to total focus."* One colour, one channel, evenly spaced alpha from 0 to 1.

Three things this buys, and they are the argument for making it the default rather than a taste:
the ramp CANNOT go non-monotonic, because the only thing changing is alpha; it needs no second
set of values for a dark theme, because the same declarations sit correctly on either ground (five
dark-theme overrides were deleted outright); and it cannot be misread as categories the way a
multi-hue ramp can.

**The one trap, and it has already been hit.** At zero opacity the CELL disappears, not only its
fill, and an empty cell is a real reading ("nothing logged in that band") that has to stay on
screen. Give the bottom step a hairline so the chip survives, and keep a different border style
for cells that are outside the record entirely, so "logged nothing" and "no data" still say
different things. The same hairline goes on the legend swatch, from the same rule rather than a
special case, or the key and the grid drift apart.

### 20. A control never offers a state the calculation ignores (added 25 Aug 2026)

A dial, slider or input's range is exactly the range the model honours. On 25 Aug 2026 the
finance dashboard's income dial was given a negative range while the projection floored income
at zero: the control displayed "- €X" and changed nothing, and Conor's reply was "how can
I have a negative income? Please explain that logic to me." A control state that does nothing is
a lie of the same family as the two-stores drift in `engineering-rules.md` ("A control renders from the state the feature actually reads"): the surface reports a state the product
is not in.

### 21. Stat tiles in a row share one size and one baseline (added 7 Sep 2026)

Every card in a headline row carries its number at the same size, on the same baseline, in a card
of the same height. No hero sizing inside a row, and a label that wraps to two lines must not push
its number lower than its neighbours'. The mechanism: fixed card height, label at the top, number
pinned to the bottom of the card, so alignment holds whether the label runs one line or two.

This overrides the data-viz method's "exactly one hero figure per view" when the figures sit in a
row: the OneFocus growth dashboard shipped weekly users at 48px beside five 32px cards with two
wrapped labels, and Conor's reply was *"You can't design cards like this in which the numbers are
mis-sized and misaligned. They must be universally formatted. This is terrible design."* A hero
figure is allowed only on its own, never as one card among peers.

### 22. Card detail lives behind an "i", not under the number (added 7 Sep 2026)

The sentence that explains a headline figure (its window, its source, its caveat) sits behind a
small "i" in the card's corner and opens on hover. It also opens on tap and on keyboard focus,
because hover does not exist on a phone and Part 2 forbids hover-only content; that is the
accessibility floor and it is said here, not reinterpreted silently. The card face carries the
label and the number only. Conor, 7 Sep 2026: *"The subtitles that you currently have in place
should be behind an 'i' for information modal within the card and only visible on hover."*

### 23. One period control, above the tab strip, scopes every tab (added 7 Sep 2026)

The period selector is universal: it sits above the tabs, not inside one, and every tab recomputes
from it. That is only possible when every tab is built on day-level rows, so pull data by date for
every breakdown at build time rather than as totals; a tab built on totals cannot be filtered and
becomes the one tab the control does not reach. Level metrics that cannot be period-scoped (a
weekly-users reading, a snapshot map, the version in use) show their latest reading and say on the
card that they do not change with the period.

Corollary: a "By [period]" tab is redundant when the universal control exists. Conor cut one on
7 Sep 2026 ("I don't understand what the By Month tab is supposed to be doing... why it isn't just
duplicating content in the overview") after asking why only the Overview had the selector: *"this
must be universal on every tab."*

### 24. A rate is a percentage with the sign on it (added 7 Sep 2026)

Conversion, churn, share of anything: shown as a percentage with the % sign, never "per 100" or a
bare decimal. Conor, 7 Sep 2026, on an "installs per 100 sessions" column: *"conversion rate must be
a %."*

### 25. A finding is not a name (added 7 Sep 2026)

When the data throws up something worth knowing (an automated install pattern, an unaccounted share),
describe it once, in plain words, in one place: an "i" on the card it affects or a one-line note.
Never coin a label for it and then thread that label through series, tiles, tables and headings.
The reader meets the label before the explanation and cannot decode it. On 7 Sep 2026 "ChromeOS
pattern installs" appeared as a chart series, two tiles, a note and three table columns; Conor's
reply was *"I don't understand the ChromeOS pattern installs. I generally don't understand why you
have preferred this so much when it's not clear to me what it is."* The finding survived as one
sentence inside an "i". Same session, a section headed "How it is being used" drew *"I don't know
what 'how it has been used' means, and I don't know how to read this table"*: a heading that names
a theme rather than the thing in the table fails rule 3 the same way.

### 26. Geography gets a map (added 7 Sep 2026)

A breakdown by country or region carries a map in the style a reader already knows from Google
Analytics: a world map, one hue in stepped bins with a legend, a dropdown to switch the metric, a
hover readout, and every value repeated in a table beneath it (the map is never the only carrier).
Conor, 7 Sep 2026: *"It would be nice to have a map, same as Google Analytics."*

Build note, so it is not re-derived: embed the geometry rather than fetching it, so the file stays
self-contained. Natural Earth 110m via `world-atlas@2.0.2/countries-110m.json`, decoded from
TopoJSON offline, outer rings only, coordinates rounded to one decimal, Antarctica dropped; that is
about 125 KB. Equirectangular projection clipped to latitude 84 to minus 58. Split any ring at the
date line (a longitude jump over 180 starts a new subpath) or Russia and Fiji draw as streaks across
the map. Map the data's names onto Natural Earth's ("United States" to "United States of America",
"AD" to "Andorra"), and name the countries too small to draw at 110m (Andorra) in the note under the
map rather than losing them.

---

## Part 2: ADHD, neurodiversity and accessibility

**Conor has ADHD-PI, and these dashboards are read by him first.** This section is not generic
compliance boilerplate. It is the accommodation layer, and it ranks alongside the rules in Part 1
rather than below them.

### Working memory is the scarce resource

- **No number requires cross-referencing to understand.** Everything a figure needs (its unit, its
  comparison, its caveat) sits adjacent to it. This is why the key strip and inline expansion both
  exist in rule 6: the key alone still costs a lookup.
- **Never require holding a value from one section to read another.** If section B needs section A's
  number, restate it in B.
- **Never require memory of a previous screen.** Each tab answers its question completely.
- **Layout stays put across refreshes.** Same sections, same order, month after month. A layout that
  moves charges the re-orientation cost every single time.

### Attention is finite and front-loaded

- **The most decision-relevant thing is at the top.** Current period, headline metrics, the thing
  being acted on.
- **The default view is short.** Detail sits behind a click, collapsed by default. Aim for the
  primary answer inside the first screen and a half.
- **One decision per screen.** Do not stack three unrelated calls to action.
- **No motion that competes for attention.** No autoplay, no looping animation, no attention-grabbing
  transitions. Honour `prefers-reduced-motion` and keep transitions at 150 to 200ms.
- **Cut anything that does not earn its space.** Every removed section is attention returned.

### Language

- **Plain words, no jargon, no metric names the reader did not create.** Gloss any term of art on
  first use or avoid it.
- **Neutral framing on anything health, behaviour or performance related.** Never clinical or
  negative in a title.
- **Nothing scolds.** A missed target is reported, not judged.

### Accessibility, non-negotiable

- **Never colour alone.** Every colour-carried meaning also carries a shape, arrow, or word.
  Up and down are `▲ +22%` and `▼ -18%`, never a bare green or red number. **Green-versus-red is the
  most common colour-vision deficiency pairing, and it is exactly the pair used for direction**, so
  this rule is load-bearing rather than decorative.
- **Contrast at WCAG AA minimum** for every text-on-background pairing, checked in the render rather
  than in the code. Text on the light brand colours is ink, never white.
- **Every control is keyboard operable** with a visible `:focus-visible` state. Tab order follows
  reading order.
- **Nothing is hover-only.** Hover reveals nothing that is not also available on focus or on the
  page. Hover does not exist on touch.
- **Semantic markup:** real `<table>`, `<th>`, `<button>`, `role="tab"` and `aria-selected` on tabs,
  `aria-expanded` on disclosures, `aria-label` on every chart.
- **A chart is never the only carrier of a number.** The figure appears as text next to it.
- **Tabular numerals** (`font-variant-numeric: tabular-nums`) wherever digits align in columns.
- **Works at 200% zoom** and down to a 375px viewport without horizontal page scroll.
- **Both themes designed**, not inverted.

---

## Part 3: tab logic

### The default taxonomy

Tabs answer questions, in increasing specificity. Use this order as the default for any dashboard,
and drop the ones that do not apply:

| # | Tab | The question | Always? |
|---|---|---|---|
| 1 | **Overview** | How am I doing? | Yes |
| 2 | **Benchmark / Context** | Compared to what? | When an external or historical baseline exists |
| 3 | **[Named analysis]** | Why? | One per genuine analytical question, zero to three |
| 4 | **By [period]** | What happened in one window? | Rarely: only for a view the universal period control (rule 23) cannot give; never a copy of Overview under one period (Conor cut one on 7 Sep 2026) |
| 5 | **[Records]** | Which individual items? | When individual records matter |
| 6 | **Conclusions** | What do I do? | When the dashboard carries recommendations |

**Overview is always first. Conclusions are always last**, because they are read after the evidence.

### When something earns a tab

- **Length:** its content would otherwise push Overview past about two and a half screens.
- **Completeness:** it answers one question without needing another tab to make sense.
- **Substance:** at least two sections, or one section plus its own control. **A tab holding a single
  table is a section in the wrong place.**

### Hard limits

- **Maximum six tabs.** Beyond that it is two dashboards.
- **Never a tab per data source.** Tabs are questions, not pipelines. A reader does not think "show
  me the Buffer tab".
- **Never a tab per metric.** That is what the period filter and the rank-by control are for.
- **Never a tab that only exists because a section got long.** Shorten the section.

### Naming

Plain noun phrases the reader would use out loud, one or two words, in his own vocabulary and his own
abbreviations: "CWS Listing", "Regions", "Releases" (all his renames, 7 Sep 2026, replacing "Listing
traffic" and "By region and platform"). Never "Analytics", "Data", "Insights", "Other".

**Tab visual pattern:** a client dashboard's tabs, specified in the design system under
Components (full-width connected tabs, green active state). (Conor's ruling, 7 Sep 2026.)

**A Beta tab for new views.** When Conor asks for a set of new analyses, they land on a tab named
"Beta" for him to review, and move to live tabs on his word, view by view. His instruction, 7 Sep
2026: *"on a 'beta' tab for me to review, and then move into a live tab."* Beta is the one tab
allowed to hold many unrelated sections, because its job is review, not reading.

### How it scales across dashboard types

| Dashboard type | 1 Overview | 2 Context | 3 Analysis | 4 Period | 5 Records | 6 Conclusions |
|---|---|---|---|---|---|---|
| **Personal / content analytics** | Headline + trend + pillar | Benchmark band | Audience reach | By month | Top posts | Actions |
| **Client reporting** | Goals vs actual | Vs last quarter, vs target | Channel deep-dive | By month | Campaigns | Recommendations |
| **Product / app analytics** | Active users, retention | Vs launch cohort | Funnel or feature | By week | By user segment | Roadmap calls |
| **Ops / pipeline** | Stage counts, value | Vs quota | Conversion or loss reasons | By month | By deal | Next actions |
| **Financial** | Income, spend, runway | Vs budget | Category drift | By month | By transaction | Decisions |

The columns stay constant; only their contents change. **If a dashboard cannot be expressed in this
shape, say so and explain what it is instead** rather than bending the taxonomy silently.

---

## Part 4: table sorting and filtering defaults

### Sorting

- **Default sort is the column that answers the section's question**, descending. Not the first
  column, not the ID, not alphabetical.
- **Time tables default to newest first** (rule 5).
- **The active sort is visible** on the sorted column, with direction.
- **Sortable:** numeric and date columns. **Not sortable:** free text, and any column whose order
  carries no meaning.
- **Sort is stable and survives a refresh.** A table that reshuffles on reload cannot be trusted.
- **Ranked tables carry an explicit rank column** rather than relying on row position.

### Filtering

- **The period control sits above the tab strip and scopes every tab** (rule 23). Other filters sit
  in one horizontal toolbar above the table they scope, never a left sidebar stealing width.
  Primary filters inline; long-tail filters behind a "More filters" control.
- **The most important filter keeps a top-level control** and is never buried.
- **Default state is the widest useful view, not empty and not pre-narrowed.** If a table does open
  filtered, it says so in the same line as the row count.
- **Filter state persists across tab switches** within a session. Changing a shared period control
  updates every card that uses it, with no scrolling back up.
- **Range filters carry no invented minimum.** A price filter starts at zero.
- **Every filter control actually toggles something.** A dead control is a defect.

### Row display

- **The row count is always visible** and states the population: "27 posts", or "showing top 10 of
  45".
- **Never truncate silently.** A capped table says what was cut and why.
- **Scroll with a sticky header** up to about fifty rows. Above that, show a top-N with an explicit
  count and a way to see the rest.
- **Wide tables scroll inside their own `overflow-x: auto` container.** The page body never scrolls
  sideways.
- **Sticky header** once a table passes about fifteen rows.

---

## Part 5: exceptions

### In-product surfaces are not reporting dashboards

**This file governs analytical dashboards built for Conor or a client.** An analytics screen inside a
shipping product, read by end users, follows its own product design system first. The reason is that
a product surface optimises for a user's task in the moment; a reporting dashboard optimises for
someone reading a period in review.

### Tempo

**`90-lab/tempo/design/design-system.md` outranks this file on every Tempo surface**, and its Protected
Elements section outranks everything. Read it before touching a Tempo screen. The conflicts are real
and specific, so they are listed rather than left to be discovered:

| This file says | Tempo says | Winner |
|---|---|---|
| Rule 1: broad before granular | Group and order by workflow, not by grid fit. Planning cards top-left because that is how Conor starts his day. | **Tempo.** Workflow order wins on product surfaces. |
| Rule 2: no explainers | The accuracy-note pattern: a factual note under low-volume numbers explaining the fact and the why. | **Tempo.** That note is required, not optional. |
| Rule 4: filters are dropdowns | Filter pill rows as quiet controls, one merged labelled row. | **Tempo**, for display toggles. Tempo already uses a dropdown for the synced period control, so both patterns coexist by purpose. |
| Rule 7: every encoding gets a legend | Never multiple stacked chip rows plus a redundant text legend; explain in place. | **Tempo.** Explain in place, do not duplicate. |
| Visual layer: two background colours, red for problems only | Score bands use full-strength red for low scores, amber and green tints for mid and high. The Trends rainbow gradient is protected. | **Tempo.** Red is a band, not an error, and low scores are never softened. |

**Still binding on Tempo,** because they are the same principle stated twice: no invented composite
metrics (Tempo states this harder), nothing hidden, plain language everywhere, one status signal per
section, every symbol explained in place, and the whole of Part 2.

**Not yet enumerated.** Conor has flagged that Tempo will need more exceptions than these five. The
five above are what the two files visibly disagree on today. **When another one surfaces, add a row
to that table rather than editing a rule in Part 1**, so the general standard stays intact and the
carve-out stays visible.

### OneFocus and other side projects

`02-areas/media-business/onefocus/design-system/` holds its own system. Same precedence: its design system
wins on its own surfaces, this file governs anything analytical built about it.

### Client surfaces

A client with their own design system gets their system for the visual layer. The information design
in Part 1, the accessibility floor in Part 2, and the table defaults in Part 4 still apply, because
those are about whether the thing can be read at all.

---

## Build and verification checklist

- [ ] Broad sections above granular, subsets below their parent population
- [ ] Zero explainer paragraphs
- [ ] Every heading states its contents; no contentless headings
- [ ] Filters are `<select>`; period lists newest first
- [ ] Most recent period at the top of every table, current row marked and labelled if partial
- [ ] Code key present, plus inline expansion on first use
- [ ] Legend for every colour, shade and encoding, including what the base element is
- [ ] No table mixes summary and detail rows
- [ ] Subset sections open by saying what the subset is and why
- [ ] Tab taxonomy followed; Overview first, Conclusions last, six maximum, none holding a single table
- [ ] No `max-width` clamp on body copy
- [ ] Empty states distinguish "no comparison", "empty window" and "not obtainable"; missing data is grey, never red
- [ ] No verdict chips below n=3
- [ ] All figures computed from one data array; no invented composites
- [ ] Default sort answers the section's question; active sort visible; row count stated; nothing truncated silently
- [ ] Filters in a top toolbar, state persists, every control toggles something
- [ ] Every control clicked in the render before hand-off; nothing styled as a control is inert
- [ ] Native form controls, not custom popovers; user edits persist to the data layer, not browser storage only
- [ ] Money in green, money out red, arrows on money movement only, never on dates or facts
- [ ] One period control above the tabs; every tab recomputes from day-level rows; level metrics say they are snapshots
- [ ] Headline cards: one number size, one baseline, one card height; detail behind an "i" that opens on hover, tap and focus
- [ ] Every rate carries a % sign
- [ ] Any country or region breakdown has a map with a legend and the same values in a table
- [ ] New views sit on a Beta tab until Conor moves them
- [ ] No finding is carried as a coined label; it is described once, in one place

**Accessibility gate:**

- [ ] No meaning carried by colour alone; every direction has an arrow and a word
- [ ] WCAG AA contrast on every pairing, checked in the render
- [ ] Every control keyboard operable with a visible focus state
- [ ] Nothing hover-only
- [ ] Semantic markup: real tables, `role="tab"`, `aria-selected`, `aria-expanded`, `aria-label` on charts
- [ ] Every charted number also present as text
- [ ] Tabular numerals on aligned digits
- [ ] `prefers-reduced-motion` honoured; no autoplay
- [ ] No horizontal page overflow at 1280px or 375px; works at 200% zoom
- [ ] Light and dark themes both checked

**Technical gate:**

- [ ] Built to `~/Developer/conor-walsh/docs/design-system.md` unless an exception applies
- [ ] Non-ASCII escaped; zero em-dashes (count `chr(8212)` in Python, not grep)
- [ ] JS syntax valid (`node --check`)
- [ ] Rendered and looked at, not just measured: headless Chrome full-page screenshots of every tab, light and dark, plus a scripted period change with a `window.onerror` probe (a thrown error in one render function silently empties every section after it; hit twice on 7 Sep 2026)

### A blank screenshot is a capture failure, not a blank page

The in-app browser pane collapses to `clientWidth: 0` intermittently, which makes every element
report as overflowing and returns all-white screenshots. Before reporting a visual defect from a
screenshot, check `document.documentElement.clientWidth`. If it is 0, re-open the preview and
re-measure rather than chasing a phantom layout bug.

**And the pane stops painting when it is hidden (added 7 Sep 2026).** While Conor is reading the
chat, the in-app browser pane is off screen: wheel scrolls time out, scripted scrolls return blank
or half-painted captures, and `clientWidth` reads normally the whole time, so this is not the zero-
width case above. Do not chase it. Render with headless Chrome instead (`--headless=new
--screenshot --window-size=1280,<tall>` on a copy of the file with an inline script that clicks the
tab or sets the control under test); it needs nothing displayed and captures the whole page.

---

## Conclusions sections

When a dashboard carries recommendations:

1. **Three to five**, ordered by leverage, not by section order.
2. **Each carries:** the action as an instruction, the measured evidence with its numbers, a **Do**,
   and a **Check next month** naming one number.
3. **Say the period it was derived from and the period it applies to.**
4. **Say plainly that the text is written, not computed**, so a data refresh does not leave stale
   advice on the page.
5. **Lead with any conclusion that contradicts the obvious reading**, so the wrong inference does not
   get made from the same data later.

---

## References

- `~/Developer/conor-walsh/docs/design-system.md`: the visual layer
- `90-lab/tempo/design/design-system.md`: outranks this file on Tempo surfaces; read its Protected Elements
- `deliverable-standards.md` (whole file, including Design iteration rules)
- `design-consultant` skill (`dashboard-review.md` beside this file): applies this file to an existing or planned dashboard
- Worked example: `02-areas/work/linkedin-strategy-assistant/content/analytics/2026-08-05-linkedin-dashboard.html`
