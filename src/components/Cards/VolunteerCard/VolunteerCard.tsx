import { Badge, Box, styled, Typography } from "@mui/material";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { Volunteer } from "../../../types";
import RolesList from "../../RolesList/RoleList";
import "./VolunteerCard.scss";

export type VolunteerCardProps = {
  volunteer: Omit<Volunteer, "id">;
  isSelected: boolean;
  toggleSelect: () => void;
};

const VolunteerCard = ({
  volunteer,
  isSelected,
  toggleSelect,
}: VolunteerCardProps) => {
  const TransparentBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: isSelected ? theme.palette.primary.main : "transparent", // Makes the background transparent
      border: "2px solid", // Defines the badge border
      borderColor: theme.palette.primary.main, // Uses the theme's primary color for the border
    },
  }));

  return (
    <TransparentBadge badgeContent={""} color="info" className="volunteer-card">
      <GlassCard>
        <Box onClick={toggleSelect}>
          <Typography variant="h5">
            {volunteer.firstName + " " + volunteer.lastName}
          </Typography>
          <RolesList roles={volunteer.role.map(({ role }) => role)} />
        </Box>
      </GlassCard>
    </TransparentBadge>
  );
};

export default VolunteerCard;
