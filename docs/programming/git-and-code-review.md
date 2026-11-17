# Git & code review

Version control is your team's shared memory. Learn to make changes small enough that another student can understand them.

## A lightweight workflow

{% stepper %}
{% step %}
### Create a branch

Name it after a focused task, such as `fix/driver-input-deadband`. Avoid making unrelated edits on the same branch.
{% endstep %}

{% step %}
### Change and test

Make the change, run available checks, and document how you tested it. For hardware changes, include the test environment and any limits.
{% endstep %}

{% step %}
### Open a pull request

Write: **Problem**, **Changes**, **Test evidence**, **Risks / follow-ups**. Link to a design note or issue when available.
{% endstep %}

{% step %}
### Review and merge

A reviewer checks behavior, readability, and safety; the author resolves comments. Merge only when team requirements are met.
{% endstep %}
{% endstepper %}

## Useful commands

```bash
git status
git switch -c docs/first-week-checklist
git add .
git commit -m "Document first-week onboarding checklist"
git push -u origin docs/first-week-checklist
```

This example creates a documentation branch. Adjust branch names and permissions for your team.

Read [GitHub's pull request guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) and [GitHub Skills](https://skills.github.com/).

## Review prompt

Can the reviewer answer: _what changed, why, how was it tested, and how would we undo it if necessary?_
