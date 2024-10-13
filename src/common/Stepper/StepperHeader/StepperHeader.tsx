import { Step as MuiStep, StepLabel, Stepper, Typography } from "@mui/material";
import { Step } from "../Stepper";

type StepperHeaderProps = {
    steps: Step[];
    activeStep: Step;
    isStepSkipped: (step: Step) => boolean;
    isStepOptional: (step: Step) => boolean;
    getStepIndex: (step: Step) => number;
}

export default function StepperHeader({ steps, activeStep, isStepOptional, isStepSkipped, getStepIndex }: StepperHeaderProps) {
    return (
        <Stepper activeStep={getStepIndex(activeStep)}>
            {steps.map((step, index) => {
                return (
                    <MuiStep key={step.stepLabel} completed={index ? false : undefined}>
                        <StepLabel optional={isStepOptional(step) && <Typography variant="caption">Optional</Typography>}>{step.stepLabel}</StepLabel>
                    </MuiStep>
                );
            })}
        </Stepper>
    )
}