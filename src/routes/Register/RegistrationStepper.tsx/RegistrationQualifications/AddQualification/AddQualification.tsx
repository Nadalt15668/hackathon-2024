import { Add } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Qualification } from "../../../VolunteerRegister";

type AddQualificationProps = {
  availableQualifications: Qualification["qualificationType"][];
  setVolunteerQualifications: React.Dispatch<React.SetStateAction<Qualification[]>>;
};

export default function AddQualification({
  setVolunteerQualifications,
  availableQualifications,
}: AddQualificationProps) {
  const handleAddQualification = () => {
    setVolunteerQualifications((prevVolunteerQualifications) => [
      ...prevVolunteerQualifications,
      {
        qualificationType: availableQualifications[0],
        qualificationVerification: null,
      },
    ]);
  };

  return (
    <>
      <IconButton onClick={handleAddQualification}>
        <Add />
        <Typography>הוסף הכשרה</Typography>
      </IconButton>
    </>
  );
}
