import { Typography } from "@mui/material";

type VolunteerCounterProps = {
  volunteersCount: number;
  volunteersRequired: number;
};
const VolunteerCounter = ({
  volunteersCount,
  volunteersRequired,
}: VolunteerCounterProps) => {
  return (
    <Typography variant="h4">
      selected <strong>{volunteersCount}</strong> volunteers from{" "}
      <strong>{volunteersRequired}</strong>
    </Typography>
  );
};

export default VolunteerCounter;
