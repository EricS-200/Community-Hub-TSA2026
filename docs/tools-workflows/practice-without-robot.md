---
description: >-
  Simulation, offline learning, and realistic exercises when hardware or lab
  time is limited.
---

# Practice without a robot

Teams often have more students than available robot time. A good training system offers **useful offline work** that still results in demonstrable skills.

## Four starting points

| Tool                                                                                                                       | Useful for                                                 | Caveat                                                          |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| [WPILib Robot Simulation](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html) | FRC code, command scheduling, simulated mechanism behavior | A simulated mechanism only models what you explicitly configure |
| [AdvantageScope](https://docs.advantagescope.org/)                                                                         | View recorded/simulated telemetry and field paths          | Visualizations are evidence, not automatic diagnoses            |
| [Choreo](https://choreo.autos/)                                                                                            | FRC trajectory design and constraints                      | Physical validation and appropriate robot parameters required   |
| [PathPlanner](https://pathplanner.dev/)                                                                                    | FRC autonomous paths and event logic                       | Check version compatibility with robot libraries                |
| [Onshape Learning Center](https://learn.onshape.com/)                                                                      | CAD while away from the team shop                          | Manufacturing feedback still matters                            |
| [GitHub Skills](https://skills.github.com/)                                                                                | Git review and collaboration                               | Transfer exercise to the team's branch policy                   |

## Workshop: build and test an autonomous idea without a physical robot

{% stepper %}
{% step %}
### Define the mission

Choose a simple simulated movement and set a clear success condition. Do not assume simulation equals field performance.
{% endstep %}

{% step %}
### Set up a simulation project

Follow the current [WPILib Robot Simulation tutorial](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html). Confirm the code builds and your program has meaningful simulated sensors.
{% endstep %}

{% step %}
### Plan and observe

Use an applicable path-planning tool, or write a simple state sequence. Plot position or state changes in a dashboard or AdvantageScope.
{% endstep %}

{% step %}
### Analyze deviations

Ask which assumptions the simulation makes: grip, inertia, sensor latency, battery behavior, and localization. Write down what cannot be validated until hardware is available.
{% endstep %}
{% endstepper %}

## Other niche off-season exercises

* **CAD:** redesign a standard mounting bracket for two manufacturing methods, then compare cost and assembly.
* **Strategy:** analyze a past event on [The Blue Alliance](https://www.thebluealliance.com/) and check predictions against match video.
* **Software:** use [Codex](codex-for-robotics.md) to propose documentation or unit-test improvements on a non-deployment branch.
* **Outreach:** make an accessible demonstration activity and run it with students unfamiliar with robotics.

{% hint style="info" %}
Simulation is ideal for practicing architecture, tests, and reasoning. Competition readiness still requires physical system testing and current rule compliance.
{% endhint %}
