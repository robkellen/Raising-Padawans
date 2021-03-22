import { makeStyles } from "@material-ui/core/styles";

const landingStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  mainContainer: {
    width: "100vw",
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(5, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));

export default landingStyles;
