import React from "react";
import { RegistrationStep } from "../RegistrationStepper";
import { Box, Button, Typography } from "@mui/material";

type RegistrationStepperFotterProps = {
    activeStep: RegistrationStep;
    steps: RegistrationStep[];
    handleSkip: () => void;
    handleFinish: () => void;
    handleBack: () => void;
    handleNext: () => void;
    isStepOptional: (step: RegistrationStep) => boolean;
}

export default function RegistrationStepperFotter({ activeStep, steps, handleBack, handleSkip, handleFinish, handleNext, isStepOptional }: RegistrationStepperFotterProps) {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep.stepIndex === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                {activeStep.stepIndex === steps[steps.length - 1].stepIndex ? (
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
                            {activeStep.stepIndex === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </>
                )
                }
            </Box>
        </React.Fragment >
    )
}