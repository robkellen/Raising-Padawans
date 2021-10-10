import { createMuiTheme } from "@material-ui/core/styles";

const darkPink = "#DD9BAB";
const lightPink = "##F2DEE3";
const darkGrey = "#6A656F";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: darkPink,
    },
    secondary: {
      main: darkGrey,
    },
    common: {
      lightPink,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Roboto",
      fontWeight: 700,
      color: darkGrey,
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "3rem",
      fontWeight: 500,
      color: darkGrey,
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "2rem",
      fontWeight: 300,
      color: darkGrey,
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "3rem",
      color: darkGrey,
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "2rem",
      fontWeight: 700,
      color: darkGrey,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: darkGrey,
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: darkPink,
    },
  },
});

export default theme;
