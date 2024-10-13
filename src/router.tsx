import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";
import CreateEvent from "./routes/CreateEvent/components/CreateEvent";
import Register from "./routes/Register/Register";

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
        path: "/volunteerRegister",
        element: <Register />,
      }
    ],
  },
]);

export default router;
