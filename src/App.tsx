import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Typography />
    </>
  );
}

export default App;
