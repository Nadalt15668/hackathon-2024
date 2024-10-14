import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";
import CreateEvent from "./routes/CreateEvent/components/CreateEvent";
import EventsOverview from "./pages/municiple/EventsOverview/EventsOverview";
import EventOverview from "./pages/municiple/EventOverview/EventOverview";
import VolunteerRegister from "./routes/Register/VolunteerRegister";

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
        path: "/volunteer-register",
        element: <VolunteerRegister />,
      }
    ],
  },
]);

export default router;
