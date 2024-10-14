import { useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../../dummyData";
import { Event, RoleName, Volunteer } from "../../../types";
import Page from "../../../common/Page/Page";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { Box, Typography } from "@mui/material";
import VolunteerGrid from "../../../components/VolunteerGrid";
import { volunteers } from "../../../dummyData";
import VolunteerFilter from "../../../components/VolunteerFilter";
import "./EventOverview.scss";
import VolunteerCounter from "../../../components/VolunteerCounter";
import { useSelectedVolunteers } from "../../../hooks";
import AssignVolunteersBtn from "../../../components/AssignVolunteersBtn";

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
  const [selectedRole, setSelectedRole] = useState<"" | RoleName>("");
  const [selectedVolunteers, setSelectedVolunteers] = useSelectedVolunteers();
  const event = events.find(({ id }) => id === eventId);

  if (event === undefined) {
    return;
  }

  const requirsToFilterBy: RoleName[] =
    selectedRole === ""
      ? event.requires.map(({ name }) => name)
      : [selectedRole];

  return (
    <Page>
      <GlassCard>
        <Box className="description-filter-container ">
          <Typography variant="h3">{event.description}</Typography>
          <VolunteerCounter
            volunteersRequired={event.requires.length}
            volunteersCount={selectedVolunteers.length}
          />
          <VolunteerFilter
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            allRequiredRoles={event.requires.map(({ name }) => name)}
          />
        </Box>
        <VolunteerGrid
          volunteers={getQualifiedVoulnteers(requirsToFilterBy)}
          selectedVolunteers={selectedVolunteers}
          setSelectedVolunteers={setSelectedVolunteers}
        />
        <AssignVolunteersBtn
          isEnabled={selectedVolunteers.length === event.requires.length}
        />
      </GlassCard>
    </Page>
  );
};

export default EventOverview;
