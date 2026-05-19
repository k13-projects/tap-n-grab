# Tap-N-Grab — Working Conventions

This file is the source of truth for how we work on Tap-N-Grab. Keep it
tight and current. Load it into Claude Code on every session via a
`CLAUDE.md` entry (e.g. `@CONVENTIONS.md`).

---

## Branch naming

Format:

```
{project_shortname}_{mon}{dd}_v{N}
```

- `project_shortname` — `tng`
- `mon` — three-letter lowercase month (`jan`, `feb`, …, `dec`)
- `dd` — two-digit day of the month (zero-padded)
- `N` — integer version for that day, starting at `1`

Examples:

- `tng_may18_v1`
- `tng_may18_v2`
- `tng_jun03_v1`

If a branch with the same date+version already exists, increment `N`.

**Standing rule:** every `tng_*` branch is preserved on `origin`. Do not
delete after merge — keep the historical trail intact.

---

## Commit messages

Every non-trivial commit follows the **Hail Mary grouped-bullet** format
(below). Tiny one-line fixes can stay one-line, but anything that
implements a feature, ships a refactor, or changes user-visible
behavior gets the full treatment.

Structure:

1. **Subject line** — imperative, one sentence, no emoji, ≤ 72 chars.
   It should read like a headline a non-technical reader can grok.
2. **Overview paragraph** — 2–5 sentences in plain language. What
   changed, why it mattered, what the user/visitor will notice. No code
   identifiers in this section if you can help it.
3. **Grouped bullets** — the meat. Use horizontal rule (`---`) +
   `Technical details` heading to demarcate the deeper material.
   Bullets are grouped by file, area, or concern. Do not label sections
   as "non-technical" / "technical" — the structure speaks for itself.
4. **Footer** — `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
   when Claude assisted.

The commit is a **living historical record** — capture the sweat and
tears: decisions made, paths considered and rejected, hidden constraints
discovered. Future-you (and future-Claude reading `git log`) will thank
present-you.

---

## The Hail Mary

Triggers (case-insensitive, any of):

- `hail mary`
- `hail mary that shit`
- `hail mary pls` / `hail mary please`
- `hm`
- `hm pls` / `hm please`

When triggered, run these steps in order:

1. **Create a new branch** following the branch-naming convention above,
   then check out to it.
2. **Stage and commit** with a message that documents all the work in
   this session: changes implemented, things thought through, decisions
   made. Use the **commit-message format** above (overview at top,
   grouped bullets, technical detail at the bottom).
3. **Push** the branch with `-u` so it tracks the remote.

### Variant: `hm-1`

Same as Hail Mary, but **skip step 1**. Use this when we are already on
the branch we want the work to land on.

### Variant: `hm++`

Full end-to-end ship. Same as Hail Mary, plus two more steps:

4. **Open a pull request** against `main` using `gh pr create` with a
   tight summary + test plan (same format as previous tap-n-grab PRs).
   The PR title and body mirror the commit message's overview — short
   summary + test plan — while the deeper technical detail stays in the
   commit body.
5. **Merge the PR** with `gh pr merge <num> --merge` (a real merge
   commit; no squash, no rebase, no `--delete-branch` — keep every
   `tng_*` branch on origin per the standing rule).

Use `hm++` when the work is ready to land on `main` and you don't want
to ceremoniously do the PR + merge in a separate turn.

---

## Notes for future conventions

Add new conventions as new top-level sections in this file. Keep
examples and "why" lines so they survive context resets.
