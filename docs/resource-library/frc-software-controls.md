---
description: A path from the supported toolchain to evidence-driven robot software.
icon: code
---

# FRC: software & controls

**Start here:** [WPILib Zero to Robot](https://docs.wpilib.org/en/stable/docs/zero-to-robot/introduction.html) if the team cannot yet create, build and explain a supported project. Choose the WPILib documentation version that matches your installed release.

## A progression that produces evidence

{% tabs %}
{% tab title="First project" %}
Use [WPILib example projects](https://docs.wpilib.org/en/stable/docs/software/examples-tutorials/wpilib-examples.html) to study a working pattern. Then use [Command-Based Programming](https://docs.wpilib.org/en/stable/docs/software/commandbased/) to separate mechanism ownership from behavior.

**Keep:** a project that builds and a diagram of how one driver input reaches a subsystem. Ask a second student to reproduce the build.
{% endtab %}

{% tab title="Reliable behavior" %}
Learn [WPILib simulation](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html) and [AdvantageScope](https://docs.advantagescope.org/) before a last-minute debugging session. Add [AdvantageKit](https://docs.advantagekit.org/) when your architecture and team can maintain structured logging/replay.

**Keep:** a log that explains one target, one measurement and one output. Use [the log-review lab](../tools-workflows/debug-with-logs.md).
{% endtab %}

{% tab title="Autonomy & controls" %}
Use [PathPlanner](https://pathplanner.dev/) or [Choreo](https://choreo.autos/) for the relevant trajectory workflow; use [PhotonVision](https://docs.photonvision.org/en/latest/) for its vision pipeline and integration guidance. [WPILib SysId](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/introduction.html) supports characterization rather than guessed feedforward.

**Keep:** a baseline autonomous test, robot configuration, measured errors and assumptions. A visually smooth path does not prove robot tracking.
{% endtab %}
{% endtabs %}

## Learn from teams who teach the whole workflow

* [Spectrum 3847 training](https://blog.spectrum3847.org/resources/training/) — intermediate/advanced lessons on controls, logging, vision and autonomy. Use it when the official API reference answers “what” but your team needs engineering context.
* [LearnFRC videos](https://learnfrc.com/videos) — organized lessons for preseason study. Pick a track and share the artifact you make after each session.
* [WPILib path-planning documentation](https://docs.wpilib.org/en/stable/docs/software/pathplanning/index.html) — background for understanding what a path planner is solving.

### Watch: Team 6328’s logging workshop

A 2025 workshop from the AdvantageScope maintainers.

{% embed url="https://www.youtube.com/watch?v=ZMxTRgryrvE" %}

[Watch at YouTube](https://www.youtube.com/watch?v=ZMxTRgryrvE) · **Use it:** Write a logging plan before adding another dashboard widget.

## Avoid the integration trap

Track WPILib, vendor libraries, path tools, vision software and firmware together. When something breaks after an update, preserve the last working versions and change one dependency at a time. Prefer the current official example over an old snippet copied without context.

**Next:** [offline practice](../tools-workflows/practice-without-robot.md) · [Codex on a robot repository](../tools-workflows/codex-for-robotics.md).

_Last editorial review: November 17, 2026. Follow current publisher documentation for software and season changes._
