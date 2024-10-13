import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";
import CreateEvent from "./routes/CreateEvent/components/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
    ],
  },
]);

export default router;
