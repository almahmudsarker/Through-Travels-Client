# Contributing to Through Travels

## Branching
- `main`: protected, release-ready
- `dev`: integration branch
- Feature: `feat/<area>-<short-name>`
- Bugfix: `fix/<area>-<short-name>`

## Workflow
1. Create an issue (feature/bug) with acceptance criteria.
2. Create a branch from `dev`.
3. Commit small, meaningful changes.
4. Open PR → target `dev`, request review.
5. After approval & CI green → merge.
6. Maintainer promotes `dev` → `main` for releases.

## Commit Convention (Conventional Commits)
`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`

## Code Style
- JS/TS linting via eslint & prettier.

## Issue Triage
- Use `type:*`, `area:*`, `priority:*`, milestone.
- Add to Project board.
