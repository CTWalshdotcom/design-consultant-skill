# Asset guides

One section per kind of asset. Each says what is different: extra brief questions, the success measure, the standards to load, the tool that builds it, and its own checks. The process in SKILL.md never changes. A new kind of asset gets a new section here, nothing else.

Every kind also loads the `deliverable-standards` skill and its references for that kind.

## Website or landing page

- **Ask:** where visitors arrive from (LinkedIn, referral, search, an ad); the one action (book a call, sign up, install); what they must believe before acting; which pages sit around it.
- **Success:** a stranger says what it is and what to do within five seconds of the first screen; the main action is a real button on the first screen; every section answers a question the visitor has.
- **Load:** the site's design system; `deliverable-standards` references `before-building.md`, `design-and-layout.md`, `copy-and-voice.md`.
- **Build:** Claude Code in the site's repo (code lives in `~/Developer`; the area overview names it), or Claude Design for an editable design handed to Claude Code. Publishing follows the site's own deploy rules and his yes.
- **Checks:** the browser check at 1440, 768 and 390 (`checks.md`); a menu people can find and footer links; the page read top to bottom as the visitor.

## App screen (dashboard-like product screens, settings, inboxes, onboarding)

- **Ask:** the one question each screen answers first; the most frequent job; who uses it how often; what data is real.
- **Success:** each screen answers its question before any detail; the most frequent job is one click away; nothing needs a sentence explaining how to use it.
- **Rules:** label above each field, never a placeholder standing in for a label; totals computed from the rows, never typed separately; colour says good or bad, not up or down; an error says what failed and when data was last good; touch targets at least 44px; empty, loading and error states designed, not left blank; nothing performs an entrance on a working screen.
- **Load:** the product's own design system (Tempo, OneFocus and clients keep theirs); `deliverable-standards` references `product-screens.md`, `filters-cards-and-controls.md`.
- **Build:** Claude Code in the product's repo, or Claude Design.
- **Checks:** browser check in app mode (`checks.md`); the inclusive checks in full for Tempo and OneFocus.

## Deck

- **Ask:** who presents it, to whom, in what room or call, for how long; the one thing the audience must remember; the decision or action it leads to; whether it is a client workshop deck.
- **Success:** one message per slide, stated in its title; readable from the back of the room or on a shared laptop screen; the sequence builds to the action.
- **Load:** the deck's design system (for client workshop decks, the consulting deck design system the `gtm-workshop-deck` skill names); `deliverable-standards` references `proposals.md`, `headings-and-labels.md`.
- **Build:** client workshop decks go to the `gtm-workshop-deck` skill; other decks to Claude Design or the slides tool the brief names.
- **Checks:** every slide rendered and opened; text size and contrast at projection size; no slide carrying two messages.

## Store graphics (Chrome Web Store and other app stores)

- **Ask:** what makes someone install; which slots to fill (read the store's current slot sizes and rules from its own documentation at build time, never from memory); the competitors that appear beside it.
- **Success:** what the product does is clear at thumbnail size; the first tile carries the main promise; screenshots show the real product.
- **Load:** the product's brand; `deliverable-standards` references `store-frames.md`, `product-screens.md`; product copy bans in `00-brain/banned-words.md`.
- **Build:** Canva or Claude Design, exported at the store's exact sizes. After a product UI change, the `app-graphics-audit` skill finds what is stale.
- **Checks:** every tile viewed at full size and at thumbnail size; text readable at thumbnail size.

## Social graphic (LinkedIn image, carousel, banner)

- **Ask:** the post it sits with; the one idea it carries; where it is seen (feed on phone); whether it is part of a series.
- **Success:** the idea reads in under three seconds on a phone feed; it looks like his and nobody else's.
- **Load:** his brand; `deliverable-standards` references `copy-and-voice.md`, `his-wording.md`; `00-brain/anti-content.md`.
- **Build:** Canva or Claude Design.
- **Checks:** viewed at phone feed size; text size and contrast.

## Document or report

- **Ask:** who reads it and when; what they must decide or do after reading; whether it is client-facing; the format it ships in (doc, PDF, Google Doc, Word).
- **Success:** the reader finds the answer or decision on the first screen; headings let them scan; nothing needs rereading.
- **Load:** `deliverable-standards` references `documents-and-reports.md`, `report-writing.md`, `page-margins.md`, `headings-and-labels.md`, `numbers-and-claims.md`.
- **Build:** the docs tool or file format the brief names.
- **Checks:** opened in the format it ships in; paragraph and readability limits from `report-writing.md`.

## Dashboard or report page

- **Ask (from the dashboard standards):** who reads it and how often; what decision it drives (a dashboard that drives no decision needs cutting, not styling); the real shape of the data (sample sizes, missing windows, uneven cadence).
- **Precedence:** what he says in the moment; the surface's own design system for in-product surfaces (Tempo, OneFocus, a client's system; the standards' exceptions section lists Tempo carve-outs); the dashboard standards; the consulting website design system for the visual layer.
- **Success:** the answer is readable before any detail; broad data above granular data; every encoding has a legend.
- **Run:** `dashboard-review.md` in this folder: its review and build modes, how to judge an element, and its report format. It replaces the generic quick review for dashboards.
- **Load:** `dashboard-standards.md` in this folder, in full; `deliverable-standards` reference `dashboards.md`; the `dataviz` skill for chart colour and marks.
- **Build:** Claude Code or the artifact the brief names.
- **Checks:** every rule in the dashboard standards, findings ranked by effect on the decision; a deliberate break from a rule is said out loud, never silent.
