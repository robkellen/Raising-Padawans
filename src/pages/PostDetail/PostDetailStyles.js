import { makeStyles } from "@material-ui/core/styles";

const usePostDetailStyles = makeStyles((theme) => ({
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
  socialMediaShareBtn: {
    padding: theme.spacing(2),
  },
}));

export default usePostDetailStyles;
