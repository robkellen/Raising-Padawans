import { makeStyles } from "@material-ui/core";

const useDividerStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 0.75,
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  border: {
    borderBottom: "2px solid black",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: "black",
    fontFamily: "Roboto",
  },
}));

export default useDividerStyles;
