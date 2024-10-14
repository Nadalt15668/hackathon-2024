import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";
import "./variables.scss";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Toaster />
          <RouterProvider router={router} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
