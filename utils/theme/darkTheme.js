import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffe400",
    },
    mode: "dark",
    background: {
      default: "#353535",
      paper: "#242424",
    },
  },
});

export default darkTheme;
