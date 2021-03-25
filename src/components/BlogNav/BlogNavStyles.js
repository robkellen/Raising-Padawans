import { makeStyles } from "@material-ui/core/styles";

const blogNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    [theme.breakpoints.up("md")]: {
      margin: "auto",
    },
  },
}));

export default blogNavStyles;
