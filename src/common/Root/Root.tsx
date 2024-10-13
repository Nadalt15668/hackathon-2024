import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Root() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navigation />
        <Outlet />
      </StyledEngineProvider>
    </>
  );
}

export default Root;
