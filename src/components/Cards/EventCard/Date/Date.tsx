import { Stack, styled, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
type DateProps = {
  date: Date;
};

const Date = ({ date }: DateProps) => {
  const ThemedTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CalendarMonthIcon className="date-icon" />
      <ThemedTypography variant="h6">
        {date.toLocaleDateString("he-IL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </ThemedTypography>
    </Stack>
  );
};

export default Date;
