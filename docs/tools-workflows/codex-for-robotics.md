---
description: >-
  Use a coding agent on a real robot repository without losing review,
  reproducibility, or safety.
icon: terminal
---

# Codex for robotics code

**What is different from a chatbot?** Codex can operate in a checked-out repository, inspect multiple files, propose edits, run available tests, and show a diff. Used well, it helps students understand a codebase and make small, reviewable changes—not blindly generate an entire robot program.

**Start here:** [Codex CLI getting started](https://learn.chatgpt.com/docs/codex/cli), [official Codex repository](https://github.com/openai/codex), [MCP connections](https://learn.chatgpt.com/docs/extend/mcp).

## First-time setup

{% stepper %}
{% step %}
### Prepare a safe repository

Clone a training repository or create a non-hardware test branch. Confirm Git status is clean. Never use a live competition computer as the first experimental environment.
{% endstep %}

{% step %}
### Install Codex

Follow the [official install options](https://learn.chatgpt.com/docs/codex/cli) for your operating system and editor. Codex supports a terminal workflow and IDE integrations; sign in through a supported method.
{% endstep %}

{% step %}
### Open the repository in Codex

From the project directory, start `codex` and begin with a **read-only analysis task**, such as “Map the subsystems, explain the command scheduling flow, and identify the test entry points. Do not edit any files.”
{% endstep %}

{% step %}
### Make a deliberately small change

Create a Git branch. Ask for one targeted edit and tests. Review every changed file and run your normal build/simulation/checks before a pull request.
{% endstep %}
{% endstepper %}

## Good prompts for student teams

{% tabs %}
{% tab title="Learn the codebase" %}
“Explain where driver input is mapped to commands. List the key classes and their relationships, then propose three diagrams a new student could use. Do not change files.”
{% endtab %}

{% tab title="Find an error" %}
“This command stops unexpectedly after enabling. Trace the control flow, identify the most likely causes with file references, and propose a minimal fix plus a test. Do not touch hardware.”
{% endtab %}

{% tab title="Improve tests" %}
“Find one pure utility function with no unit coverage. Add edge-case tests and run only the relevant software tests. Summarize assumptions and the resulting diff.”
{% endtab %}

{% tab title="Write documentation" %}
“Compare README setup instructions to the current project configuration. Fix discrepancies, but do not change dependencies or deployment commands.”
{% endtab %}
{% endtabs %}

## Add project-specific rules

Codex supports `AGENTS.md` project instructions. A robotics repository could include rules like:

```markdown
# Project instructions
- Do not deploy to a physical robot.
- Do not alter motor safety, limits, or disable behavior without review.
- Prefer changes that can be verified with existing tests or simulation.
- Cite the current WPILib / FTC SDK documentation for API changes.
- Summarize every change and any unverified behavior.
```

This is a helpful instruction file, **not a substitute for permissions or sandboxing**. Set client permissions appropriately.

## Connect MCPs for more context

Codex can connect to MCP servers so it can consult external documentation and tools while working. Follow the [official MCP guide](https://learn.chatgpt.com/docs/extend/mcp) for the current command syntax, approval rules, and supported transport types. Start with a documentation-only connector before granting write actions.

## Team safeguards

* Keep changes on branches and require code review.
* Use simulation for robot behavior where practical.
* Never store tokens or team secrets in prompts or repositories.
* Inspect the patch, the commands executed, and the test output.
* A successful build does **not** prove that physical hardware motion is safe.

### Walkthrough video

[Getting started with Codex](https://www.youtube.com/watch?v=px7XlbYgk7I) explains CLI/editor installation, project instructions, and a repository workflow.

{% embed url="https://www.youtube.com/watch?v=px7XlbYgk7I" %}
