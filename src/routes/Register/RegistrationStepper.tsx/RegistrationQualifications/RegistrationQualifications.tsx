import { Autocomplete, Box, Button, IconButton, TextField } from "@mui/material"
import { useMemo, useState } from "react"
import { qualifications } from "../../../../dummyData"
import { Qualification, VolunteerInformation } from "../../VolunteerRegister"
import AddQualification from "./AddQualification/AddQualification"
import { Delete } from '@mui/icons-material';

type RegistrationQualificationsProps = {
    volunteerInformation: VolunteerInformation,
    setVolunteerInformation: React.Dispatch<React.SetStateAction<VolunteerInformation>>
}

export default function RegistrationQualifications({ volunteerInformation, setVolunteerInformation }: RegistrationQualificationsProps) {
    const [volunteerQualifications, setVolunteerQualifications] = useState<Qualification[]>(volunteerInformation.qualifications)
    const unusedQualifications = useMemo(() => qualifications.filter(qualification =>
        volunteerQualifications.every(volunteerQualification => volunteerQualification.qualificationType !== qualification)),
        [volunteerQualifications])

    const handleDeleteQualification = (indexToDelete: number) => {
        setVolunteerQualifications(prevVolunteerQualifications => prevVolunteerQualifications.filter((_, index) => index !== indexToDelete))
    }

    const handleQualificationChange = (index: number, value: Qualification['qualificationType']) => {
        setVolunteerQualifications(prevQualifications => {
            const newQualifications = [...prevQualifications];
            newQualifications[index] = { qualificationType: value, qualificationVerification: null };

            return newQualifications;
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, qualification: Qualification) => {
        const file = event.target.files?.[0] || null;

        setVolunteerQualifications(prevQualifications => {
            const newQualifications = [...prevQualifications];
            newQualifications.find(qualification => qualification.qualificationType === qualification.qualificationType)!.qualificationVerification = file;

            return newQualifications;
        });
    };

    return (
        <>
            {volunteerQualifications.map((qualification, index) => (
                <Box key={qualification.qualificationType} display='flex' flexDirection='row' mt={2}>
                    <Autocomplete
                        sx={{ width: '100%' }}
                        value={qualification.qualificationType}
                        options={unusedQualifications}
                        onChange={(event, newValue) => handleQualificationChange(index, newValue ?? '')}
                        renderInput={(params) => <TextField {...params} label='qualification' />}
                    />
                    {volunteerQualifications.length > 1 && unusedQualifications.length > 1 &&
                        <IconButton onClick={() => handleDeleteQualification(index)}>
                            <Delete />
                        </IconButton>
                    }
                    <Box mt={2} mr={volunteerQualifications.length > 1 && unusedQualifications.length > 1 ? 1 : 2}>
                        <input type="file" onChange={(event) => handleFileChange(event, qualification)} />
                    </Box>
                </Box>
            ))}

            <AddQualification
                availableQualifications={unusedQualifications}
                setVolunteerQualifications={setVolunteerQualifications} />
        </>
    )
};