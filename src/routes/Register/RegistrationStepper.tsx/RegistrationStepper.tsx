import { Box, Typography } from '@mui/material';
import Stepper, { Step } from '../../../common/Stepper/Stepper';
import RegistrationPersonalDetails from './RegistrationStepperPersonalDetails/RegistrationPersonalDetails';
import { VolunteerInformation } from '../VolunteerRegister';
import { volunteers } from '../../../dummyData';
import { useMemo } from 'react';
import RegistrationQualifications from './RegistrationQualifications/RegistrationQualifications';
import RegistrationAvailabilityTime from './RegistrationAvailabilityTime/RegistrationAvailabilityTime';

type RegistrationStepperProps = {
    volunteerInformation: VolunteerInformation,
    setVolunteerInformation: React.Dispatch<React.SetStateAction<VolunteerInformation>>
}

export default function RegistrationStepper({ volunteerInformation, setVolunteerInformation }: RegistrationStepperProps) {

    const isVolunteerInHomeTown = () => {
        const relevantVolunteer = volunteers.find(volunteer => volunteer.id === volunteerInformation.id);

        return volunteerInformation.VolunteeringArea !== relevantVolunteer?.birthCity
    }

    const isPresenceFrequencyVisible = useMemo(() => isVolunteerInHomeTown(), [volunteerInformation])

    const VolunteerRegistrationSteps: Step[] = [
        { stepLabel: 'פרטים אישיים', stepComponent: <RegistrationPersonalDetails volunteerInformation={volunteerInformation} setVolunteerInformation={setVolunteerInformation} />, isStepVisible: true },
        { stepLabel: 'הסמכות', stepComponent: <RegistrationQualifications volunteerInformation={volunteerInformation} setVolunteerInformation={setVolunteerInformation} />, isStepVisible: true },
        { stepLabel: 'תדירות הימצאות', stepComponent: <RegistrationAvailabilityTime />, isStepVisible: true }
    ];

    return (
        <Box padding='5rem'><Stepper steps={VolunteerRegistrationSteps} /></Box>
    );
}