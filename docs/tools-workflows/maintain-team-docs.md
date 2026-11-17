---
description: >-
  A practical GitBook, GitHub, and AI-assisted maintenance process for student
  teams.
---

# Make a docs workflow that lasts

**Blind spot:** teams invest in building a knowledge base but rarely design a process for keeping it accurate after students graduate.

This site is itself a working example: GitBook provides an editor and published documentation; Git Sync stores the content alongside a GitHub repository.

## A minimal maintenance loop

```mermaid
flowchart LR
  A[Find outdated guidance] --> B[Open issue or change request]
  B --> C[Fix source and cite]
  C --> D[Review by owner]
  D --> E[Publish + verify]
  E --> F[Review date or follow-up]
```

## What to standardize

| Standard                    | Why it matters                                              |
| --------------------------- | ----------------------------------------------------------- |
| Page owner                  | Someone is accountable for checking accuracy                |
| Last checked date           | Readers see whether time-sensitive instructions are current |
| Official-source links       | Rule changes are easier to follow                           |
| Small reviewed edits        | Less risk of destroying good content                        |
| Clear contribution template | More people can add useful corrections                      |

## A useful prompt for an AI-assisted audit

> Review this documentation directory for pages with season-specific versions, outdated software instructions, repeated links, and claims missing primary sources. Produce an issue list with page paths and proposed actions. **Do not edit files until a human approves the changes.**

An AI can help find possible problems, but it cannot replace checking a current game manual or testing the instructions.

## GitBook + GitHub

* [GitBook Git Sync documentation](https://gitbook.com/docs/docs-as-code/git-sync) — two-way editor/repository workflow.
* [GitHub pull requests](https://docs.github.com/en/pull-requests) — comments, review, and history.
* [GitHub Actions](https://docs.github.com/en/actions) — optional automated link checking or scheduled maintenance.
* [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) — portability if the team chooses another site generator.

{% hint style="warning" %}
Automated “fixes” to documentation should be proposals, not unreviewed publication—especially when instructions involve robotics hardware, electrical safety, grant eligibility, or minors' personal information.
{% endhint %}

## Pilot with one page

Choose a tutorial students repeatedly ask about. Give it an owner, identify its authoritative source, test the steps, and ask a novice to follow it. Record their confusion and update the page. The quality of that loop matters more than the number of pages.

## Keep media and navigation portable

Prefer GitBook-native blocks and synced assets over custom scripts. Keep captions, alt text and a direct link beside every embed. After a merge, inspect both the public page and the Git Sync export status. A successful content merge and a successful repository export are separate checks.

For this hub, the content lives under `docs` in the connected repository. Preserve the existing sync configuration; do not reconnect or switch branches as part of routine editing. The publishing workflow uses GitBook Basic content features and does not require a site-plan upgrade.

_Editorial review: November 17, 2026._
