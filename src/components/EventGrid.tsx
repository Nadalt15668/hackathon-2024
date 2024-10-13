import Grid from "../common/Grid/Grid";
import { Grid2 } from "@mui/material";
import { Event } from "../types";
import EventCard from "./Cards/EventCard/EventCard";

type EventGridProps = {
  events: Event[];
};

const renderEvent = (event: Event) => (
  <Grid2 key={event.id}>
    <EventCard event={event} />
  </Grid2>
);

const EventGrid = ({ events }: EventGridProps) => {
  return <Grid dataSet={events} render={renderEvent} />;
};

export default EventGrid;
