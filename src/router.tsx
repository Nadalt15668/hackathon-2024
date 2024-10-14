import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";
import CreateEvent from "./routes/CreateEvent/components/CreateEvent";
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
        path: "/volunteer-register",
        element: <VolunteerRegister />,
      }
    ],
  },
]);

export default router;
