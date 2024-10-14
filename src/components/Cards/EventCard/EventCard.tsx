import { Box, styled, Typography } from "@mui/material";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { type Event } from "../../../types";
import Date from "./Date/Date";
import UrgencyWrapper from "./UrgencyBadge/UrgencyWrapper";
import RolesList from "../../RolesList/RoleList";
import Address from "./Address/Address";
import { useNavigate } from "react-router-dom";
import "./EventCard.scss";

export type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate();
  const ThemedTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

  const handleClick = (eventId: Event["id"]) => {
    navigate(`/event-overview/${eventId}`);
  };

  return (
    <UrgencyWrapper urgency={event.urgency}>
      <Box className="event-card">
        <GlassCard>
          <Box onClick={() => handleClick(event.id)}>
            <ThemedTypography variant="h4">
              {event.description}
            </ThemedTypography>
            <Date date={event.time} />
            <RolesList roles={event.requires} />
            <Address address={event.location} />
          </Box>
        </GlassCard>
      </Box>
    </UrgencyWrapper>
  );
};

export default EventCard;
