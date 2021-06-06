import { makeStyles } from "@material-ui/core/styles";

const blogContentStyles = makeStyles((theme) => ({
  postsContainer: {
    height: "80"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  },
}));

export default blogContentStyles;
