import { useState } from "react";
import Page from "../../common/Page/Page";
import RegistrationStepper from "./RegistrationStepper.tsx/RegistrationStepper";

export type AvailableTime = {
    days: string[];
    startTime: Date;
    endTime: Date;
}

export type Qualification = {
    qualificationType: string;
    qualificationVerification: File | null;
}

export type VolunteerInformation = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    phoneNumber: string;
    email: string;
    birthDate: Date;
    VolunteeringArea: string;
    availableTime: AvailableTime;
    qualifications: Qualification[]
}

export default function VolunteerRegister() {
    const [volunteerInformation, setVolunteerInformation] = useState<VolunteerInformation>({
        ...{} as VolunteerInformation,
        qualifications: []
    })
    return (
        <Page>
            <RegistrationStepper
                volunteerInformation={volunteerInformation}
                setVolunteerInformation={setVolunteerInformation} />
        </Page>
    );
}