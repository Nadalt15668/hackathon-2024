import { Typography } from "@mui/material";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { Volunteer } from "../../../types";
import RolesList from "../../RolesList/RoleList";

export type VolunteerCardProps = {
  volunteer: Omit<Volunteer, "id">;
};

const VolunteerCard = ({ volunteer }: VolunteerCardProps) => {
  return (
    <GlassCard>
      <Typography>{volunteer.firstName + " " + volunteer.lastName}</Typography>
      <RolesList roles={volunteer.role.map(({ role }) => role)} />
    </GlassCard>
  );
};

export default VolunteerCard;
