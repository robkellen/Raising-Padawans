import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(3),
    backgroundColor: "#f7f7f7",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "large",
    },
  },
  headerLeft: {
    marginRight: "10px",
    color: "#2C3C69",
  },
  headerRight: {
    marginLeft: "10px",
    color: "#2C3C69",
  },
  svg: {
    position: "relative",
    // filter: "drop-shadow(0px 0px 10px #116466)",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "200px",
    },
  },
  headerSubText: {
    display: "flex",
    color: "#2C3C69",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    fontStyle: "italic",
    [theme.breakpoints.down("sm")]: {
      fontSize: "medium",
    },
  },
}));

export default headerStyles;
