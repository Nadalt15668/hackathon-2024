import { Button } from "@mui/material";

type AssignVolunteerBtnProps = {
  isEnabled: boolean;
};

const AssignVolunteersBtn = ({ isEnabled }: AssignVolunteerBtnProps) => {
  return (
    <Button variant={"contained"} disabled={!isEnabled}>
      Assign Volunteers
    </Button>
  );
};

export default AssignVolunteersBtn;
