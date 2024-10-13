import { useParams } from "react-router-dom";

type EventUrlParams = {
  eventId: string;
};

const EventOverview = () => {
  const { eventId } = useParams<EventUrlParams>();
  

  return <div>EventOverview</div>;
};

export default EventOverview;
