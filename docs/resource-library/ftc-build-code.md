---
description: Supported setup first, then mechanisms, telemetry and autonomous experiments.
icon: microchip
---

# FTC: build & code

**Start here:** [FTC Docs](https://ftc-docs.firstinspires.org/en/latest/) for configuration, programming and troubleshooting. [The rookie-team path](https://ftc-docs.firstinspires.org/en/latest/persona_pages/rookie_teams/rookie_teams.html) organizes first milestones. [FIRST’s team resources](https://ftc-resources.firstinspires.org/ftc/team) anchor current season materials.

## Choose your next milestone

{% tabs %}
{% tab title="Build a dependable base" %}
Use [Game Manual 0](https://gm0.org/en/latest/) to understand design tradeoffs, then its [common mechanisms](https://gm0.org/en/latest/docs/common-mechanisms/) reference to compare intakes, lifts and drivetrains. GM0 is community guidance, not the official game manual.

Follow [REV documentation](https://docs.revrobotics.com/) for REV hardware and [goBILDA TV](https://www.gobilda.com/gobildatv) for vendor build demonstrations. **Deliverable:** one mechanism decision with requirements, alternatives and a prototype test.
{% endtab %}

{% tab title="Code and observe" %}
Start with a current supported sample and explicit hardware mapping. Compare [programming options in GM0](https://gm0.org/en/latest/docs/software/getting-started/options-for-programming.html) when choosing an environment.

Use [FTC Dashboard](https://acmerobotics.github.io/ftc-dashboard/) for a focused telemetry experiment after checking library compatibility. **Deliverable:** a graph of one sensor and its commanded behavior, with units and a known stop condition.
{% endtab %}

{% tab title="Practice autonomy" %}
[Road Runner](https://rr.brott.dev/docs/) teaches its motion-planning and tuning workflow. [Beta 8397 virtual\_robot](https://github.com/Beta8397/virtual_robot) offers a community 2D Java simulator for FTC-style learning. It is a teaching environment, not proof of season SDK or real drivetrain behavior.

**Deliverable:** a repeatable simulated task, a start-state assumption and a failure case. Continue with [offline practice](../tools-workflows/practice-without-robot.md).
{% endtab %}
{% endtabs %}

### Watch: goBILDA’s starter Blocks workflow

This older starter-robot lesson makes input/output flow visible. Hardware and setup screens are version-specific; pair it with current FTC Docs.

{% embed url="https://www.youtube.com/watch?v=Sjt3rufGoDs" %}

[Watch at YouTube](https://www.youtube.com/watch?v=Sjt3rufGoDs) · **Use it:** Trace hardware names, controller input and motor output before changing any behavior.

## A useful blind spot: test configuration as carefully as code

A correct algorithm can still fail with the wrong motor direction, encoder units or hardware name. Record the configuration alongside each code test. Diagnose signs and units before retuning a controller.

For robot reviews and design diversity, use [FTC Community Video](https://ftccv.org/). Treat another team’s robot as a case study in constraints, not a parts shopping list.

**Next:** [telemetry lab](../tools-workflows/debug-with-logs.md) · [strategy and data](strategy-scouting-data.md).

_Last editorial review: November 17, 2026. Follow current publisher documentation for software and season changes._
