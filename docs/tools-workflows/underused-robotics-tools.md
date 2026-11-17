---
description: >-
  A small engineering toolbox organized around blind spots, not product
  popularity.
icon: radar
---

# Underused robotics tools

## Choose by the missing evidence

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><i class="fa-chart-line">:chart-line:</i></td><td><h3><a href="debug-with-logs.md">Logs before guesses</a></h3></td><td>Review commands, inputs and outputs on one timeline.</td></tr><tr><td><i class="fa-laptop-code">:laptop-code:</i></td><td><h3><a href="practice-without-robot.md">A robot-time alternative</a></h3></td><td>Test state transitions and assumptions offline.</td></tr><tr><td><i class="fa-cube">:cube:</i></td><td><h3><a href="fusion-mcp.md">Repetitive CAD work</a></h3></td><td>Try one named parameter change in a design copy.</td></tr><tr><td><i class="fa-shapes">:shapes:</i></td><td><h3><a href="onshape-mcp.md">Reusable custom features</a></h3></td><td>Encode a small CAD operation and test invalid cases.</td></tr></tbody></table>

## Four deeper discoveries

{% tabs %}
{% tab title="Characterization" %}
[WPILib SysId](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/introduction.html) helps characterize a mechanism so feedforward values come from recorded experiments. Start with the official method and the team's supervised test procedure, not arbitrary motor sweeps.

**Pilot:** review a recorded dataset, identify the units and model assumptions, and explain which operating region it represents. Compare the resulting model with another dataset before using it for control.
{% endtab %}

{% tab title="Vision frames" %}
[PhotonVision coordinate systems](https://docs.photonvision.org/en/latest/docs/apriltag-pipelines/coordinate-systems.html), [camera calibration](https://docs.photonvision.org/en/latest/docs/calibration/calibration.html) and [pose-estimation integration](https://docs.photonvision.org/en/latest/docs/programming/photonlib/robot-pose-estimator.html) address a common blind spot: detection is not yet a trustworthy field pose.

**Pilot:** with a stationary robot or offline example, document the field, robot, camera and tag frames; verify the robot-to-camera transform and units; compare estimated pose with a known placement. Then inspect latency/timestamps and behavior when tags disappear. A stable picture does not prove the transform is correct.
{% endtab %}

{% tab title="Offline scouting" %}
[The Blue Alliance API](https://www.thebluealliance.com/apidocs) and [Statbotics](https://statbotics.readthedocs.io/en/latest/) are useful inputs, but your team still needs consistent identifiers and observation definitions.

**Pilot:** take two independent observations of one match, preserve unknowns, resolve disagreements and join by the same match identity. Test export and recovery without venue Wi-Fi. Continue in [the scouting collection](../resource-library/strategy-scouting-data.md).
{% endtab %}

{% tab title="Parts & dashboards" %}
[FRCDesign’s part-library guide](https://www.frcdesign.org/learning-course/course-setup/required-course-tools/part-library/) helps avoid recreating standard components. [Elastic](https://github.com/Gold872/elastic_dashboard) is a community FRC dashboard option. [AdvantageScope](https://docs.advantagescope.org/) supports deeper diagnostics.

**Pilot:** build a driver-facing display that answers three operational questions, then ask the drive team to interpret it under time pressure. Keep analysis views separate from the essential match display.
{% endtab %}
{% endtabs %}

## The adoption filter

Choose a specific question, a maintainer and an exit condition. Keep the tool only if the pilot improves a real decision or repeated task. Check version compatibility and source instructions before making it part of a competition workflow.

For deeper controls training, use [Spectrum 3847](https://blog.spectrum3847.org/resources/training/). For AI-assisted repository work, use [the Codex workflow](codex-for-robotics.md).

_Last editorial review: November 17, 2026. Follow current publisher documentation for software and season changes._
