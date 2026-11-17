---
description: >-
  Use Onshape's official FeatureScript MCP to create and test custom CAD
  features.
---

# Onshape FeatureScript MCP

**The niche capability:** Onshape has an official **FeatureScript MCP** that connects an assistant to its custom-feature authoring workflow. It can help create, test, and refine _reusable CAD tools_, not just explain how to draw a part.

Read: [Onshape overview](https://www.onshape.com/en/features/featurescript-mcp), [official getting-started guide](https://www.onshape.com/en/blog/get-started-featurescript-mcp-server), and [Claude Code connection tutorial](https://www.onshape.com/en/resource-center/tech-tips/connect-featurescript-mcp-server-claude-code).

## What a robotics team could build

* A configurable bolt-pattern feature that uses standard spacing.
* An automated relief/corner treatment for a familiar manufacturing process.
* A feature that checks a team's minimum edge distance assumptions.
* A repeatable modeling operation that new CAD students can reuse.

These are **custom-feature projects**, not verified mechanical design calculations. A mentor or experienced designer should validate generated FeatureScript and geometry.

## Connect it

{% stepper %}
{% step %}
### Prepare an Onshape account

Check the [Onshape product page](https://www.onshape.com/en/features/featurescript-mcp) for current availability, eligibility, and any Labs/App Store prerequisites.
{% endstep %}

{% step %}
### Subscribe through the Onshape App Store

Follow Onshape's [published setup guide](https://www.onshape.com/en/blog/get-started-featurescript-mcp-server). It describes enabling the FeatureScript MCP Server through the App Store.
{% endstep %}

{% step %}
### Add the endpoint to a supported assistant

Use an MCP-compatible coding assistant, configure the service endpoint as instructed, and authenticate. The exact method depends on the client.
{% endstep %}

{% step %}
### Start with one tiny feature

Generate a simple parametric feature in a sandbox document. Inspect the FeatureScript, test a few parameters, and confirm the output is valid.
{% endstep %}
{% endstepper %}

## Important distinction

The official **FeatureScript MCP** focuses on writing and iterating on custom Onshape features. It is not equivalent to granting unrestricted natural-language control over every assembly or document operation. Third-party Onshape MCP projects can expose different tool sets, with different trust and security considerations.

{% hint style="warning" %}
Onshape describes the service as an early-access / Labs capability. Availability and pricing can change. Check the current official App Store entry before committing to a team workflow.
{% endhint %}

## A pilot project

Ask a CAD lead to define one repetitive operation and expected dimensions. Create a feature that automates only that task. Test it on three deliberately different sample parts, including an invalid case. Share both the feature and its limitations with the team.
