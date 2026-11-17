---
description: >-
  A shortlist of high-leverage, often-overlooked robotics tooling beyond basic
  programming and CAD.
icon: radar
---

# Underused robotics tools

A collection of tools that solve real problems but can be missed by students who only follow an introductory programming course.

## Diagnose with data instead of guesses

| Tool                                                                                                                      | What it unlocks                                                                | Who should try it                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [AdvantageScope](https://docs.advantagescope.org/)                                                                        | Visualize WPILib and vendor logs, field pose, telemetry, and 2D/3D robot state | Software teams investigating intermittent failures       |
| [AdvantageKit](https://github.com/Mechanical-Advantage/AdvantageKit)                                                      | Structured logging and replay-oriented robot software                          | FRC software teams designing a maintainable architecture |
| [WPILib SysId](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/introduction.html) | Characterize mechanisms so control constants are based on evidence             | Teams moving beyond guessed feedforward constants        |
| [PathPlanner](https://pathplanner.dev/)                                                                                   | Create and tune autonomous paths; supported robot integrations                 | FRC auto developers                                      |
| [Elastic](https://github.com/Gold872/elastic-dashboard)                                                                   | Build a modern robot dashboard                                                 | Teams improving driver-facing diagnostics                |
| [The Blue Alliance](https://www.thebluealliance.com/)                                                                     | FRC event records, videos, and robot history                                   | Strategy teams seeking past-match context                |

**Suggested challenge:** open a recorded robot log in AdvantageScope, identify one unexpected behavior, and write down the evidence. A screenshot alone is not a diagnosis; compare logged signals against an explicit hypothesis.

## Faster hardware and design iteration

| Resource                                                                                                             | Useful blind spot                                           |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Onshape FeatureScript MCP](onshape-mcp.md)                                                                          | Automate your team's repetitive CAD feature operations      |
| [Fusion local MCP](fusion-mcp.md)                                                                                    | Let an authorized assistant inspect and change a live model |
| [FRCDesign part library](https://www.frcdesign.org/learning-course/course-setup/required-course-tools/part-library/) | Avoid redrawing common vendor components                    |
| [FTC Game Manual 0](https://gm0.org/en/latest/)                                                                      | Learn mechanism tradeoffs rather than copy a single build   |
| [PhotonVision](https://docs.photonvision.org/en/latest/)                                                             | More systematic robot vision and camera calibration         |

## Workflow ideas worth testing

Log enough inputs and outputs to replay the event. Compare expected and actual motion in AdvantageScope. Record the minimal suspected cause and verify with a controlled follow-up test.

Use a small Onshape FeatureScript feature to encode a familiar bolt-pattern spacing or edge-distance check. Treat it as a teaching tool first; validate each dimension and formula.

Let Codex map the repository and identify stale setup instructions. Have it propose a documentation-only patch, then let a new student follow the revised steps independently.

Compare public predicted ratings with a handful of match videos. Record where a rating misses a team's actual role or unusual strategy; present model outputs as estimates.

## Adoption rule

Try a tool only if it answers a specific question, replaces repeatable manual work, or improves decision quality. Avoid adding software purely because it is impressive. Start with one test, one owner, and one measurable result.

{% hint style="info" %}
Many of these tools are community-developed rather than official competition products. Check compatibility, project maintenance, license terms, and current rules before adopting them for a season.
{% endhint %}
