import EventGrid from "../../../components/EventGrid";
import { events } from "../../../dummyData";
import Page from "../../../common/Page/Page";
import { useEvents, useGetEvents } from "../../../hooks";

const EventsOverview = () => {
  const events = useGetEvents();
  return (
    <Page>
      <EventGrid events={events} />
    </Page>
  );
};

export default EventsOverview;
