---
description: Turn observations and public data into a decision your drive team can explain.
icon: chart-simple
---

# Strategy, scouting & data

**Start with the decision:** match roles, autonomous selection, alliance fit or a design tradeoff. Collect the smallest set of evidence that can change that decision.

## Learn the method

* [Team 1114 Simbotics resources](https://www.simbotics.org/resources/) — established strategy and team presentations. Useful for connecting scoring objectives to robot and match choices.
* [FIRST FRC technical resources](https://www.firstinspires.org/resources/library/frc/technical-resources) — the official curated directory, including strategy references. Check current rules separately.
* [GM0 design strategy](https://gm0.org/en/latest/docs/design-skills/design-strategy.html) — FTC tradeoffs before committing to a mechanism.

## A deeper blind spot: your data needs a contract

Before writing a scouting app, define an event identity, team identifier, match identifier, alliance, scout identifier, observation fields, units and a schema version. Separate an **unknown** observation from a measured zero. Record a correction rather than silently overwriting a disagreement.

{% tabs %}
{% tab title="Public data" %}
[The Blue Alliance API](https://www.thebluealliance.com/apidocs) exposes FRC event data. [Statbotics documentation](https://statbotics.readthedocs.io/en/latest/) explains its analytics interface. Keep data retrieval time and event/match identity with your analysis. Authentication and API usage policies belong to each service.

Use public ratings as a prior or comparison; they do not describe every role, defensive interaction or broken match. Review video when the model and your observation disagree.
{% endtab %}

{% tab title="Offline collection" %}
Test your collection process with network access unavailable. Give each record a stable identity, preserve original exports and decide how duplicate or conflicting entries will be reviewed. Reconcile match identity before joining observations with public scores.

**Exercise:** have two scouts code the same short video independently. Compare their definitions and disagreements before expanding the form.
{% endtab %}

{% tab title="Decision meeting" %}
Present the recommendation, supporting evidence, uncertainty and the next observation that could change your mind. A short list with clear rationale is more useful than a ranking nobody can explain.

Use [The Blue Alliance](https://www.thebluealliance.com/) for match context and video; [FTC Central](https://ftccentral.org/) offers community FTC event/scouting tools.
{% endtab %}
{% endtabs %}

## Lab: audit one scouting metric

1. Define exactly what observers count and when they stop counting.
2. Independently code a few matches and inspect disagreement.
3. Compare with public event outcomes without treating them as identical measurements.
4. Write one decision the metric supports and one it cannot support.

**Keep:** the field definition, a sample record, correction policy and one recommendation with uncertainty. Follow event policies and minimize personal information.

**Next:** [autonomous reliability](../programming/autonomous-planning.md) · [preserve the decision process](../team-operations/knowledge-transfer.md).

_Last editorial review: November 17, 2026. Follow current publisher documentation for software and season changes._
