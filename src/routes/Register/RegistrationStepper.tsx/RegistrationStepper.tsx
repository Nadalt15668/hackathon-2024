import { Box, Typography } from '@mui/material';
import Stepper, { Step } from '../../../common/Stepper/Stepper';

const steps: Step[] = [
    { stepLabel: 'Step 1', stepComponent: <Typography>Step 1</Typography>, isStepOptional: true },
    { stepLabel: 'Step 2', stepComponent: <Typography>Step 2</Typography> },
    { stepLabel: 'Step 3', stepComponent: <Typography>Step 3</Typography> }
];

export default function RegistrationStepper() {
    return (
        <Stepper steps={steps} />
    );
}