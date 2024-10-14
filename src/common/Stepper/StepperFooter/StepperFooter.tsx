import { Box, Button } from "@mui/material";
import React from "react";
import { Step } from "../Stepper";

type StepperFotterProps = {
    activeStep: Step;
    steps: Step[];
    handleSkip: () => void;
    handleFinish: () => void;
    handleBack: () => void;
    handleNext: () => void;
    isStepOptional: (step: Step) => boolean;
    getStepIndex: (step: Step) => number
}

export default function StepperFotter({ activeStep, steps, handleBack, handleSkip, handleFinish, handleNext, isStepOptional, getStepIndex }: StepperFotterProps) {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={getStepIndex(activeStep) === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                {getStepIndex(activeStep) === getStepIndex(steps[steps.length - 1]) ? (
                    <>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleFinish}>Finish</Button>
                    </>
                ) : (
                    <>

                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {getStepIndex(activeStep) === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </>
                )
                }
            </Box>
        </React.Fragment >
    )
}