import { makeStyles } from "@material-ui/core/styles";

const blogContentStyles = makeStyles((theme) => ({
  postsContainer: {
    justify: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffff",
  },
}));

export default blogContentStyles;
