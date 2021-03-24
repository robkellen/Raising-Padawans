import { makeStyles } from "@material-ui/core/styles";

const landingStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  mainContainer: {
    // width: "100%",
    marginTop: 60,
    marginLeft: "0 !important",
    marginRight: "0 !important",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    minWidth: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  postsContainer: {
    order: 2,
  },
}));

export default landingStyles;
