import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import "./variables.scss";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
