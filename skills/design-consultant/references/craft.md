# Craft

How to build the chosen direction well. These are defaults: the project's design system and his brief override every line. Adapted from the taste skill (tasteskill v2 by Leon Lin, MIT licence, notice in `LICENSE-tasteskill`), keeping only what serves functional, distinctive, converting assets; its award-jury scoring, house bans and motion quotas were dropped on 30 October 2026.

## Words first

- Before design, answer: who is reading and what do they already know; what is this, said plainly; what single thing must they believe after one screen; what would make them believe it; what do they do next.
- List the asset as claims, one per section or slide, each with its evidence. A section with no claim is filler: cut it. The order of the argument is the order of the asset; a conventional order (hero, client names, offer, quotes, action) is fine when it is the argument.
- Supporting line under a headline: one sentence, about 22 words at most, saying concretely what this is and who it is for.
- Buttons name the action or the thing. One main action per screen, with one name everywhere.
- Read every sentence and ask whether a competitor could print it unchanged; sharpen or cut it.

## Type

- Measure 45 to 75 characters. Do not centre paragraphs longer than three lines. Do not justify.
- Secondary text is the same face in a softer ink, not smaller than 13px.
- Keep one size dominant per screen; a confident headline followed by headings almost as large reads as no hierarchy.
- Give every web font a fallback of the same kind (sans for sans), and load only the weights used.
- Visible focus on every control.
- For a new brand with no type set, browse `library/type.json` (44 tested pairings) with him; for an existing brand, use its type.

## Colour

- The accent marks the main action and at most one other recurring thing; in five places it stops meaning "here".
- Every colour is a token; a raw value in a component starts a second palette.
- Text over a photograph needs a calm region; if there is none, move the text off the picture.
- Check secondary text against its background, especially on dark pages.
- For a new brand, browse `library/palettes.json` (56 schemes) with him, then check every pair against the floor.

## Layout

- The first screen has one page title that says what this is.
- A fixed header never sits over content at any scroll position, especially on phones.
- Content is in place on first paint; nothing waits on an animation to appear.
- Phone layout is designed for the phone: margins 16 to 20px, body 16 to 18px, targets 44px.
- Say what the thing is and offer the action on the first screen.
- Repeated components are fine and help scanning; vary layout only where the content differs.

## Section layouts by job

`library/sections.json` holds 185 section layouts grouped by role (features, showcase, how-it-works, testimonial, proof, stats, pricing, faq, cta, footer, intro, about, work, gallery, list, contact). `library/heroes.json` holds 58 first-screen layouts; `library/app.json` holds app shells and screen patterns. Use them as a menu to choose from with him on the style boards, never as a random draw. To list one role:

```bash
node -e "const s=require('<skill>/library/sections.json');const a=Array.isArray(s)?s:Object.values(s).flat();for(const x of a.filter(x=>x.role==='pricing'))console.log(x.id,'-',(x.name||x.shape||'').toString().slice(0,80))"
```

Check the file's structure first if that prints nothing; layouts describe geometry only and inherit his tokens.

## Pictures

- Real pictures of the real thing beat beautiful pictures of something else; a real interface fragment beats grey boxes.
- A found picture is never presented as his or a client's product, team, place or customer. No licences that forbid business use or changes.
- Always set width and height (or aspect ratio) so nothing jumps while loading; alt text says what the picture shows.
- On a picture put only a short display line and one action; body text goes beside or under it, with contrast measured where the text sits.
- Nothing that matters plays only on hover. Never put the only copy of a main action inside a moving row.

## Motion

Motion has a job, with no minimum count. The project's design system sets the strength; the defaults below sit between "still" and "loud".

- Feedback on every control: hover and press 150 to 200ms; menus and popovers 150 to 250ms. Hover raises contrast, never lowers it; never change font weight on hover.
- Entrances, where the brief wants them: short (about 200 to 400ms), a small rise with opacity, once per section, and never hiding content if the script fails.
- At most one standout moment per asset, and only when it shows the product or the idea.
- No preloaders, gates, custom cursors, scroll hijacking, bounce or elastic easing, or animating layout properties. Repeated actions (typing, keyboard work) get no animation.
- Reduced motion means fewer and gentler moves, never lost content.
- `library/motions.json` lists 18 recipes, from "stillness" up; offer the quiet ones first.
