import { makeStyles } from "@material-ui/core/styles";

const postDetailStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.paper,
  },
  container: {
    marginTop: "25px",
    backgroundSize: "auto",
  },
  postTitle: {
    textAlign: "center",
  },
  mainPostImg: {
    minWidth: "35%",
    maxWidth: "50%",
  },
  postContent: {
    textAlign: "left",
  },
  divider: {
    backgroundColor: "white !important",
  },
}));

export default postDetailStyles;
