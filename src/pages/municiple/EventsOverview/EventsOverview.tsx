import EventGrid from "../../../components/EventGrid";
import { events } from "../../../dummyData";
import Page from "../../../common/Page/Page";
import Card from "../../../common/GlassCard/GlassCard";

const EventsOverview = () => {
  //todo: add context for events
  return (
    <Page>
      <Card>
        <EventGrid events={events} />;
      </Card>
    </Page>
  );
};

export default EventsOverview;
