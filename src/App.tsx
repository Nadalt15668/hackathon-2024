import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./variables.scss";
import { Toaster } from "react-hot-toast";

function App() {
  const theme = createTheme({
    direction: "rtl",
  });

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
