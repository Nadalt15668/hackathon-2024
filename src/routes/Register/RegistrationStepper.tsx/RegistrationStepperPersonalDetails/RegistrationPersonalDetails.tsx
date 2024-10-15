import { Box } from "@mui/material";
import { VolunteerInformation } from "../../VolunteerRegister";
import GenderMenu from "./GenderMenu/GenderMenu";
import RegistrationPersonalDetailsField from "./RegistrationPersonalDetailsField/RegistrationStepperPersonalDetailsField";

type RegistrationPersonalDetailsProps = {
  volunteerInformation: VolunteerInformation;
  setVolunteerInformation: React.Dispatch<React.SetStateAction<VolunteerInformation>>;
};

export default function RegistrationPersonalDetails({
  volunteerInformation,
  setVolunteerInformation,
}: RegistrationPersonalDetailsProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
        direction: "rtl",
        margin: "2rem",
      }}
    >
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="id"
        setVolunteerInformation={setVolunteerInformation}
        labelName="ת.ז"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="firstName"
        setVolunteerInformation={setVolunteerInformation}
        labelName="שם פרטי"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="lastName"
        setVolunteerInformation={setVolunteerInformation}
        labelName="שם משפחה"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="email"
        setVolunteerInformation={setVolunteerInformation}
        labelName="אימייל"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="phoneNumber"
        setVolunteerInformation={setVolunteerInformation}
        labelName="מספר טלפון"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="birthDate"
        setVolunteerInformation={setVolunteerInformation}
        textFieldType="date"
        labelName="תאריך לידה"
      />
      <RegistrationPersonalDetailsField
        volunteerInformation={volunteerInformation}
        fieldName="volunteerArea"
        setVolunteerInformation={setVolunteerInformation}
        labelName="איזור התנדבות"
      />
      <GenderMenu
        volunteerInformation={volunteerInformation}
        setVolunteerInformation={setVolunteerInformation}
      />
    </Box>
  );
}
