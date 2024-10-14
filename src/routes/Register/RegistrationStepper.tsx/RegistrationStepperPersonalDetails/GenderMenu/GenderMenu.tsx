import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { VolunteerInformation } from "../../../VolunteerRegister";
import { genders } from "../../../../../dummyData";

type GenderMenuProps = {
    volunteerInformation: VolunteerInformation;
    setVolunteerInformation: React.Dispatch<React.SetStateAction<VolunteerInformation>>
}

export default function GenderMenu({ volunteerInformation, setVolunteerInformation }: GenderMenuProps) {
    const handleOnChange = (event: SelectChangeEvent<string>) => {
        setVolunteerInformation(prevVolunteerInformation => ({
            ...prevVolunteerInformation,
            gender: event.target.value
        }))
    }

    return (
        <>
            <InputLabel>מין:</InputLabel>
            <Select
                value={volunteerInformation.gender}
                onChange={handleOnChange}>
                {genders.map(gender => (
                    <MenuItem value={gender}>{gender}</MenuItem>
                ))}
            </Select>
        </>
    )
}