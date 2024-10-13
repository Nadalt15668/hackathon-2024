import { AppBar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
