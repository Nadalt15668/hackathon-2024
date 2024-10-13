import { createTheme } from "@mui/material";
import "./theme.scss";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Assistant",
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      main: "#091057",
    },
    secondary: {
      main: "#024CAA",
    },
    background: {
      default: "#DBD3D3",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        className: "cool-orange-button",
      },
    },
    MuiTextField: {
      defaultProps: {
        className: "orange-theme-textfield",
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        className: "orange-theme-togglebutton-group",
      },
    },
  },
});

export default theme;
