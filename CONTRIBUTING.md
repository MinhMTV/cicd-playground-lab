# Contributing Guide (CI/CD Learning)

## Quick Workflow
1. Create a branch from `main`:
   - `git checkout -b feat/my-change`
2. Make a small change.
3. Run locally:
   - `npm run lint`
   - `npm test`
   - `npm run build`
4. Push branch and open a PR.
5. Verify CI passes on Node 20 + 22.

## Learning Exercises
- **Exercise 1 (Failing CI):** break a test intentionally and observe failing checks.
- **Exercise 2 (Fix):** fix test and re-run CI.
- **Exercise 3 (Release):** create tag `v0.1.0` and push to trigger release workflow.

## Commit Style
- Prefer small, focused commits.
- Use clear messages, e.g.:
  - `ci: ...`
  - `feat: ...`
  - `docs: ...`
