import GlassCard from "../../../common/GlassCard/GlassCard";
import { Volunteer } from "../../../types";

export type VolunteerCardProps = {
  volunteer: Omit<Volunteer, "id">;
};

const VolunteerCard = ({ volunteer }: VolunteerCardProps) => {
  return <GlassCard>Volunteer</GlassCard>;
};

export default VolunteerCard;
