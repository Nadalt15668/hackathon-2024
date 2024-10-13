import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import RegistrationStepperHeader from './RegistrationStepperHeader/RegistrationStepperHeader'
import RegistrationStepperFotter from './RegistrationStepperFooter/RegistrationStepperFooter';

export type RegistrationStep = {
    stepIndex: number;
    stepLabel: string;
    stepComponent: React.ReactNode;
    isStepOptional?: boolean;
}

const steps: RegistrationStep[] = [
    { stepIndex: 0, stepLabel: 'Step 1', stepComponent: <Typography>Step 1</Typography>, isStepOptional: true },
    { stepIndex: 1, stepLabel: 'Step 2', stepComponent: <Typography>Step 2</Typography> },
    { stepIndex: 2, stepLabel: 'Step 3', stepComponent: <Typography>Step 3</Typography> }
];

const initializeStep = steps[0]

export default function RegistrationStepper() {
    const [activeStep, setActiveStep] = useState<RegistrationStep>(initializeStep);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepOptional = (step: RegistrationStep) => {
        return step.isStepOptional === true;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep?.stepIndex)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep?.stepIndex);
        }

        setActiveStep((prevActiveStep) => steps.find(step => step.stepIndex === prevActiveStep.stepIndex + 1) ?? initializeStep);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => steps.find(step => step.stepIndex === prevActiveStep.stepIndex - 1) ?? initializeStep);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => steps.find(step => step.stepIndex === prevActiveStep.stepIndex + 1) ?? initializeStep);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep.stepIndex);
            return newSkipped;
        });
    };

    const handleFinish = () => {
        setActiveStep(initializeStep);
    };

    return (
        <Box width='70rem' height='40rem' boxSizing='border-box'>
            <RegistrationStepperHeader steps={steps} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} activeStep={activeStep} />
            {activeStep.stepComponent}
            <RegistrationStepperFotter steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} handleBack={handleBack} handleNext={handleNext} handleFinish={handleFinish} handleSkip={handleSkip} />
        </Box >
    );
}