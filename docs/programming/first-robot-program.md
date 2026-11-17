# First robot program

**Goal:** make a small, safe, observable behavior work end to end. Use your program's supported hardware, SDK, and mentor-approved test environment.

## The control loop

```mermaid
flowchart LR
    I[Read input] --> D[Decide action]
    D --> O[Command output]
    O --> L[Log / observe]
    L --> I
```

{% tabs %}
{% tab title="FRC" %}
Follow the [WPILib Zero to Robot](https://docs.wpilib.org/en/stable/docs/zero-to-robot/introduction.html) course to install the supported toolchain and create a project.

Then trace a simple teleoperated command: which subsystem owns hardware? where is the input read? what limits the output? how do you stop it safely? Work in simulation before moving hardware where possible.
{% endtab %}

{% tab title="FTC" %}
Use the [FTC Docs](https://ftc-docs.firstinspires.org/) setup path for the current SDK and preferred programming environment.

Begin with a supported sample OpMode. Read the hardware configuration and telemetry output before changing actuation behavior. Follow mentor-supervised test procedures.
{% endtab %}
{% endtabs %}

## Debugging checklist

* Does the project build without errors?
* Are hardware mappings and controller inputs correct?
* Is telemetry present and understandable?
* Is there a predictable stop or disable behavior?
* Can a second person reproduce the test?

**Evidence:** save a screenshot of telemetry, a short test log, and a note describing what changed.

{% hint style="warning" %}
Do not copy old motor-control code onto a live robot without checking current APIs, wiring, motion limits, and the applicable safety requirements.
{% endhint %}
