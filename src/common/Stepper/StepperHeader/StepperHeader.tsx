import { Step as MuiStep, StepLabel, Stepper, Typography } from "@mui/material";
import { Step } from "../Stepper";
import './StepperHeader.scss'

type StepperHeaderProps = {
    steps: Step[];
    activeStep: Step;
    isStepSkipped: (step: Step) => boolean;
    isStepOptional: (step: Step) => boolean;
    getStepIndex: (step: Step) => number;
}

export default function StepperHeader({
    steps,
    activeStep,
    isStepOptional,
    isStepSkipped,
    getStepIndex }: StepperHeaderProps) {
    const visibleSteps = steps.filter(step => step.isStepVisible)

    return (
        <Stepper activeStep={getStepIndex(activeStep)} sx={{ mt: 1 }}>
            {visibleSteps.map((step) => {
                return (
                    <MuiStep key={step.stepLabel} completed={isStepSkipped(step) ? false : undefined}>
                        <StepLabel className="stepper-label" optional={isStepOptional(step) && <Typography variant="caption">Optional</Typography>}>{step.stepLabel}</StepLabel>
                    </MuiStep>
                );
            })}
        </Stepper>
    )
}