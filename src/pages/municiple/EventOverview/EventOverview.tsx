import { useParams } from "react-router-dom";
import { events } from "../../../dummyData";
import { Event, RoleName, Volunteer } from "../../../types";
import Page from "../../../common/Page/Page";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { Typography } from "@mui/material";
import VolunteerGrid from "../../../components/VolunteerGrid";
import { volunteers } from "../../../dummyData";

type EventUrlParams = {
  eventId: Event["id"];
};

const getQualifiedVoulnteers = (roles: RoleName[]): Volunteer[] =>
  volunteers.filter((volunteer) =>
    volunteer.role.some(
      ({ role: { name }, isVerified }) => isVerified && roles.includes(name)
    )
  );

const EventOverview = () => {
  const { eventId } = useParams<EventUrlParams>();
  const event = events.find(({ id }) => id === eventId);

  if (event === undefined) {
    return;
  }

  return (
    <Page>
      <GlassCard>
        <Typography>{event.description}</Typography>
        <VolunteerGrid
          volunteers={getQualifiedVoulnteers(
            event.requires.map(({ name }) => name)
          )}
        />
      </GlassCard>
    </Page>
  );
};

export default EventOverview;
