import { makeStyles } from "@material-ui/core/styles";

const postDetailStyles = makeStyles(() => ({
  root: {
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
}));

export default postDetailStyles;
