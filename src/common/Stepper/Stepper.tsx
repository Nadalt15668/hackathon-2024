import { Box } from '@mui/material';
import React, { useState } from 'react';
import StepperFotter from './StepperFooter/StepperFooter';
import StepperHeader from './StepperHeader/StepperHeader';

export type Step = {
    stepLabel: string;
    stepComponent: React.ReactNode;
    isStepOptional?: boolean;
    isStepVisible?: boolean;
}

type StepperProps = {
    steps: Step[],
}

export default function Stepper({ steps }: StepperProps) {
    const initializeStep = steps[0];

    const [activeStep, setActiveStep] = useState<Step>(initializeStep);
    const [skipped, setSkipped] = useState(new Set<number>());

    const getStepIndex = (step: Step) => {
        return steps.indexOf(step)
    }

    const isStepOptional = (step: Step) => {
        return step.isStepOptional === true;
    };

    const isStepSkipped = (step: Step) => {
        return skipped.has(getStepIndex(step));
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(getStepIndex(activeStep));
        }

        setActiveStep((prevActiveStep) => steps.find(step => getStepIndex(step) === getStepIndex(prevActiveStep) + 1) ?? initializeStep);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => steps.find(step => getStepIndex(step) === getStepIndex(prevActiveStep) - 1) ?? initializeStep);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => steps.find(step => getStepIndex(step) === getStepIndex(prevActiveStep) + 1) ?? initializeStep);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(getStepIndex(activeStep));
            return newSkipped;
        });
    };

    const handleFinish = () => {
        setActiveStep(initializeStep);
    };

    return (
        <Box width='70rem' height='40rem' boxSizing='border-box' sx={{ direction: 'rtl', mt: 2 }}>
            <StepperHeader steps={steps} getStepIndex={getStepIndex} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} activeStep={activeStep} />
            {activeStep.stepComponent}
            <StepperFotter steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} handleBack={handleBack} handleNext={handleNext} handleFinish={handleFinish} handleSkip={handleSkip} getStepIndex={getStepIndex} />
        </Box >
    );
}