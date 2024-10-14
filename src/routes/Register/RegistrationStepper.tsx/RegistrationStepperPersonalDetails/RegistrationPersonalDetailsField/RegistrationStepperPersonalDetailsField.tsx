import { Box, FormLabel, TextFieldVariants } from "@mui/material";
import TextField from '@mui/material/TextField'
import { useState } from "react";
import { VolunteerInformation } from "../../../VolunteerRegister";

type RegistrationPersonalDetailsFieldProps = {
    labelName: string;
    fieldName: keyof VolunteerInformation;
    textFieldType?: React.HTMLInputTypeAttribute;
    variant?: TextFieldVariants;
    htmlInput?: any;
    volunteerInformation: VolunteerInformation;
    setVolunteerInformation: React.Dispatch<React.SetStateAction<VolunteerInformation>>
}

export default function RegistrationPersonalDetailsField({ labelName, fieldName, htmlInput, textFieldType = 'text', variant = 'filled', volunteerInformation, setVolunteerInformation }: RegistrationPersonalDetailsFieldProps) {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setVolunteerInformation(prevVolunteerInformation => ({
            ...prevVolunteerInformation,
            [fieldName]: event.target.value
        }))
    }

    return (
        <>
            <FormLabel sx={{ marginBlockStart: '1rem' }}>{labelName}:</FormLabel>
            <TextField
                onChange={handleOnChange}
                value={volunteerInformation[fieldName]}
                type={textFieldType}
                label={labelName}
                slotProps={{ htmlInput: htmlInput }} required></TextField>
        </>
    )
}