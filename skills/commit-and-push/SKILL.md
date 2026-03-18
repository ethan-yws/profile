---
name: commit-and-push
description: Create git commits and push branches using modern Conventional Commit messages. Use when Codex needs to review the current worktree, stage the intended changes, write a standards-compliant commit message, create the commit, and publish the current branch if it does not already have an upstream.
---

# Commit And Push

Use this skill to finish the current branch cleanly and predictably. Review the diff, select only the intended changes, write a Conventional Commit message that matches the actual work, create the commit, then push the branch and set upstream if needed.

## Workflow

### 1. Inspect the repository state

Run these checks first:

- `git status --short`
- `git branch --show-current`
- `git rev-parse --abbrev-ref --symbolic-full-name @{u}`

If the upstream lookup fails, treat the branch as unpublished.

Review the actual diff before writing the commit message:

- `git diff --stat`
- `git diff --cached --stat`
- `git diff`
- `git diff --cached`

If the worktree contains unrelated changes, do not commit them unless the user explicitly asks.

### 2. Stage only the intended changes

Prefer explicit staging by path. Use `git add <path>` for the files that belong in the commit.

Avoid broad staging unless the worktree is clearly scoped:

- use `git add .` only when the repo state is obviously intentional
- do not stage generated output unless it belongs in version control
- do not revert or discard user changes to make the commit easier

Before committing, confirm the staged set with:

- `git diff --cached --stat`
- `git status --short`

### 3. Write a Conventional Commit message

Use this format:

```text
type(scope): summary
```

Keep the summary imperative, specific, and usually under 72 characters.

Use these common types:

- `feat`: add user-facing functionality
- `fix`: correct broken behavior
- `refactor`: restructure code without changing behavior
- `perf`: improve performance
- `docs`: update documentation only
- `test`: add or update tests
- `build`: change build tooling or dependencies
- `ci`: change automation or CI
- `chore`: repository maintenance that does not fit above
- `style`: formatting-only changes

Scope is optional. Add it when it improves clarity, for example `feat(hero): ...` or `build(vite): ...`.

For breaking changes:

- append `!` after the type or scope, such as `feat(api)!: remove legacy endpoint`
- add a body or footer that begins with `BREAKING CHANGE:`

If the change spans multiple concerns, prefer the dominant user-visible or engineering impact instead of listing everything.

### 4. Create the commit

Use a single `-m` message when no body is needed:

- `git commit -m "feat(scope): summary"`

Add a body when rationale matters, when the change is non-obvious, or when a breaking change must be explained.

Do not amend an existing commit unless the user explicitly asks.

### 5. Push the branch

If the branch already has an upstream, use:

- `git push`

If the branch is unpublished, use:

- `git push -u origin HEAD`

If the repo does not use `origin`, inspect `git remote -v` and push to the existing primary remote instead of assuming.

Never force-push unless the user explicitly asks for it.

## Decision Rules

- Inspect the diff before choosing the commit type.
- Prefer `feat` and `fix` only when the change materially affects behavior.
- Prefer `refactor` for internal code movement without behavior change.
- Prefer `chore` only when a more specific type does not fit.
- Split the work into multiple commits if the staged changes represent separate logical units and the user asked for clean history.

## Output Expectations

When using this skill, report:

1. the branch name
2. whether the branch already had an upstream
3. the commit message used
4. whether the push succeeded

If a commit or push cannot be completed, state the blocker precisely instead of guessing.
