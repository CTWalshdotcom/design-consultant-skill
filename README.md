# Design consultant: a Claude skill

I know a good design when I see it. I can't always say why.

Most AI design tools skip that problem. You type "make it modern", they guess, and you get the same page everyone else gets. This skill works the other way round: it acts like a design consultant sitting across the table, drawing out what you like through reactions instead of vocabulary, then building from that.

It works for websites, app screens, decks, app store graphics, social graphics, documents, reports and dashboards.

## How it works

1. **The goal first.** Who it's for, what they need to do, where they'll see it, what success looks like. One question at a time.
2. **What exists now.** Your current version and two or three comparable ones, judged against the goal, not taste.
3. **Your taste, without design words.** Pick words it should and shouldn't feel like. Choose between pairs of pictures made from your own content. Set a few personality sliders. Show what you like and hate. It writes your taste back in plain words, with the designer's term beside each line.
4. **The idea.** Something only this subject has, turned into the visual device. If the sentence still works with a competitor's name in it, it gets rewritten.
5. **A one-page brief.** Nothing gets designed until you approve it.
6. **Style boards you can see.** Two or three, built on your brand, not picked at random.
7. **Rounds.** Only what you name changes. Each round says what improved and what went too far.
8. **Checks.** Your taste wins on style. Proven conventions get one push back, shown side by side. Accessibility problems get named every time, with a fuller set of checks for neurodivergent audiences based on the W3C's cognitive accessibility guidance.
9. **It learns.** Every pick and correction is saved, so the next project starts closer.

Quick reviews and builds to an existing design skip the interview.

## What's in here

- `skills/design-consultant/SKILL.md`: the process.
- `references/`: the taste exercises, a brief template, guides for each kind of asset, the checks, craft rules, and a full dashboard rulebook.
- `library/`: section layouts, first-screen layouts, app patterns, font pairings, colour schemes and motion recipes, used as menus to choose from.
- `scripts/check.mjs`: opens a page in Chrome at desktop, tablet and phone widths, measures it and takes screenshots. Needs Node 22+ and Chrome.

## Using it

Copy `skills/design-consultant` into your Claude skills folder (`~/.claude/skills/` or your project's `.claude/skills/`). It was built inside my own workspace, so a few lines point to files you won't have, like a taste profile and a set of deliverable standards. Swap those paths for your own equivalents, or remove the lines.

## Where it came from

Built with Claude in October 2026, from three sources: designers' discovery methods (style tiles, element collages, reaction cards, preference tests), the website and Claude Design courses from Authority Hacker, and the parts worth keeping from Leon Lin's [taste-skill](https://github.com/leonxlnx/taste-skill) (MIT, notice in `skills/design-consultant/LICENSE-tasteskill`). I tested that skill first: it's tuned to win design-award judges, and it lost to plain Claude in most of its own tests. So this one aims somewhere else: assets that are easy to use and that get the right people to act.

This repo updates automatically when I improve the skill.

## Licence

MIT. See `LICENSE`.
