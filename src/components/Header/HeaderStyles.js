import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(3),
  },

  svg: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "200px",
    },
  },
  headerText: {
    padding: theme.spacing(3),
  },
}));

export default headerStyles;
