---
description: >-
  A guided data-debugging workflow using AdvantageScope, WPILib simulation, and
  FTC Dashboard.
icon: chart-line
---

# Debug a robot with logs

**Problem:** a subsystem sometimes fails, but nobody knows why. The most useful next step may be collecting and visualizing data, not changing more code.

## Two ecosystems

{% tabs %}
{% tab title="FRC / WPILib" %}
**Tools:** [AdvantageScope](https://docs.advantagescope.org/), [WPILib DataLog guidance](https://docs.wpilib.org/en/stable/), [robot simulation](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html), and optionally [AdvantageKit](https://docs.advantagekit.org/) for structured replay.

1. Confirm the code logs sensor readings, command state, and actuator requests relevant to the problem.
2. Collect a safe test run or open an existing robot log.
3. Open it in AdvantageScope and align expected vs actual signals on a timeline.
4. Look for a reproducible difference: was the command issued, did the sensor change, did the actuator respond?
5. Form one hypothesis, rerun the test, and annotate what changed.

AdvantageScope supports live visualization and multiple log formats; it does not require AdvantageKit.
{% endtab %}

{% tab title="FTC" %}
**Tools:** [FTC Dashboard](https://acmerobotics.github.io/ftc-dashboard/), [FTC Docs](https://ftc-docs.firstinspires.org/en/latest/), and [Road Runner](https://acme-robotics.gitbook.io/road-runner/quickstart/introduction) for teams working on accurate autonomous motion.

1. Use FTC Docs to establish a working robot configuration.
2. Read FTC Dashboard's current installation and telemetry setup, ensuring SDK/library compatibility.
3. Graph a small set of sensor/command values during supervised testing.
4. Look for unexpected timing, saturation, or input changes.
5. Compare another controlled run before changing tuning parameters.

The Dashboard is a third-party project. Verify library versions and event network policies before competition use.
{% endtab %}
{% endtabs %}

## Minimal experiment to teach a new student

Record **target position**, **measured position**, and **commanded output** for a single mechanism during a supervised test. Ask the student to locate overshoot or lag. The deliverable is an annotated plot plus one plausible explanation, not a tuning change made on guesswork.

## Dig deeper

* [AdvantageScope installation and tools](https://docs.advantagescope.org/overview/installation/)
* [WPILib AdvantageScope overview](https://docs.wpilib.org/en/stable/docs/software/dashboards/advantagescope.html)
* [AdvantageKit log replay](https://docs.advantagekit.org/)
* [FTC Dashboard official documentation](https://acmerobotics.github.io/ftc-dashboard/)

{% hint style="danger" %}
Never bypass safety interlocks to capture better telemetry. Collect data with approved procedures; never let an AI agent command a powered robot just to test a hypothesis.
{% endhint %}
