---
description: >-
  Use a coding agent on the team’s actual project, with small tasks and visible
  evidence.
icon: terminal
---

# Codex for robotics code

**Use this when:** you need to understand an unfamiliar repository, investigate a software failure, improve tests or repair setup notes. Codex can inspect a project, propose changes and run available checks; the team's review remains essential.

## Start with the project, not a giant prompt

{% stepper %}
{% step %}
### Prepare a training checkout

Use a branch or copy of a repository. Identify its WPILib/FTC SDK version and the normal build/test entry points. Keep robot deployment outside the experiment.
{% endstep %}

{% step %}
### Open the repository

Follow [official Codex setup](https://learn.chatgpt.com/docs/codex/cli) for your operating system and sign-in method. In a CLI workflow, run `codex` from the project directory.
{% endstep %}

{% step %}
### Ask for a read-only map

Ask where hardware is defined, how commands/OpModes are selected and where tests run. Require file references, then open those files yourself.
{% endstep %}

{% step %}
### Make one reviewed change

Choose a documentation or pure-software task first. Inspect the diff, run the normal checks and ask another student to explain the behavior. Record what could not be tested.
{% endstep %}
{% endstepper %}

## Prompts that teach useful habits

{% tabs %}
{% tab title="Understand" %}
> Map driver input to one robot behavior. Cite the files and explain the subsystem/command or OpMode lifecycle. Identify how the project is built and tested. Do not edit files or deploy.
{% endtab %}

{% tab title="Investigate" %}
> Here is the observed failure and the relevant log time. Trace the code that could produce it. Separate evidence from hypotheses. Propose the smallest software test that distinguishes the hypotheses. Do not touch hardware or change tuning yet.
{% endtab %}

{% tab title="Improve a test" %}
> Find a pure utility function with meaningful boundary cases. Explain its intended behavior, add a focused test, and run the relevant checks. Show the diff and disclose any test you could not run.
{% endtab %}

{% tab title="Repair onboarding" %}
> Compare setup notes with project configuration. Correct verified discrepancies in documentation only. Keep dependencies and deploy behavior unchanged. Give a new student a reproducible build checklist.
{% endtab %}
{% endtabs %}

## Give the agent project context

Document the team's repository rules in `AGENTS.md`, for example:

```markdown
- Never deploy to a robot from an agent session.
- Identify the SDK/toolchain version before suggesting API changes.
- Use the repository's existing build and test procedure.
- Require human review for motor limits, disable behavior and tuning.
- Report the diff, checks run and unverified physical behavior.
```

Instructions guide behavior; they do not enforce access controls. Configure tool permissions and keep credentials out of prompts and repositories. See the [official Codex repository](https://github.com/openai/codex) and current product documentation.

### Watch: OpenAI — Getting started with Codex

The official introduction to the coding workflow.

{% embed url="https://www.youtube.com/watch?v=px7XlbYgk7I" %}

[Watch at YouTube](https://www.youtube.com/watch?v=px7XlbYgk7I) · **Use it:** Run a read-only repository mapping task, then verify three file references yourself.

## MCP connections: add only the context you need

The [official MCP guide](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) describes connection and authorization. Use `codex mcp list` to inspect configured servers. Do not connect CAD write tools merely to answer a WPILib question.

For a concrete CAD connection, see [the Fusion example](fusion-mcp.md). For code changes, see [the team review workflow](../programming/git-and-code-review.md).

**Done means:** a human can explain the change, the software checks are recorded, and remaining hardware assumptions are explicit.

_Last editorial review: November 17, 2026. Follow current publisher documentation for software and season changes._
