import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";
import CreateEvent from "./routes/CreateEvent/components/CreateEvent";
import EventsOverview from "./pages/municiple/EventsOverview/EventsOverview";
import EventOverview from "./pages/municiple/EventOverview/EventOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/events-overview",
        element: <EventsOverview />,
      },
      {
        path: "/event-overview/:eventId",
        element: <EventOverview />,
      },
    ],
  },
]);

export default router;
