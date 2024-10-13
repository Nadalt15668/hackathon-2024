import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
type DateProps = {
  date: Date;
};

const Date = ({ date }: DateProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CalendarMonthIcon className="date-icon" />
      <Typography variant="h6" color="white">
        {date.toLocaleDateString("he-IL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Typography>
    </Stack>
  );
};

export default Date;
