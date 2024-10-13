import { createBrowserRouter } from "react-router-dom";
import Root from "./common/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

export default router;
