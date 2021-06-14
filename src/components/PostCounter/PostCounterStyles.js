import { makeStyles } from "@material-ui/core/styles";

const postCounterStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  counter: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

export default postCounterStyles;
