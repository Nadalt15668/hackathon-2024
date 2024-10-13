import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { RegistrationStep } from "../RegistrationStepper";

type RegistrationStepperHeaderProps = {
    steps: RegistrationStep[],
    activeStep: RegistrationStep,
    isStepSkipped: (step: number) => boolean,
    isStepOptional: (step: RegistrationStep) => boolean
}

export default function RegistrationStepperHeader({ steps, activeStep, isStepOptional, isStepSkipped }: RegistrationStepperHeaderProps) {
    return (
        <Stepper activeStep={activeStep.stepIndex}>
            {steps.map((step, index) => {
                return (
                    <Step key={step.stepLabel} completed={isStepSkipped(index) ? false : undefined}>
                        <StepLabel optional={isStepOptional(step) && <Typography variant="caption">Optional</Typography>}>{step.stepLabel}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    )
}