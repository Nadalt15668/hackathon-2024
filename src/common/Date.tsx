import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
type DateProps = {
  date: Date;
};

const Date = ({ date }: DateProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CalendarToday sx={{ fontSize: 20, color: "rgb(147,197,253)" }} />
      <Typography variant="h6" color="white">
        {eventData.date}
      </Typography>
    </Stack>
  );
};

export default Date;
