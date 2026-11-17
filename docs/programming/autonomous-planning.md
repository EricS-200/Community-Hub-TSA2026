# Autonomous planning

Autonomous routines should be **predictable and measurable** before they become ambitious.

## Build from a reliable baseline

1. List actions in sequence and identify dependencies.
2. Measure starting conditions and tolerances.
3. Implement the simplest useful routine.
4. Repeat the same test enough times to see variation.
5. Record successful runs and failure modes.
6. Add complexity only after the baseline is repeatable.

## Example state sequence

```mermaid
stateDiagram-v2
    [*] --> Initialize
    Initialize --> Move
    Move --> Score: target reached
    Move --> Abort: timeout / fault
    Score --> Finish
    Abort --> Finish
    Finish --> [*]
```

## A useful test log

| Run | Starting condition | Result               | Likely cause / change |
| --- | ------------------ | -------------------- | --------------------- |
| 1   | Baseline           | Record actual result | Record observation    |
| 2   | Repeat             | Record actual result | Compare repeatability |
| 3   | Small perturbation | Record actual result | Check robustness      |

Do not invent success rates. Record real runs and publish methodology alongside performance claims.

Further reading: [WPILib](https://docs.wpilib.org/en/stable/) and [PhotonVision](https://docs.photonvision.org/en/latest/).
