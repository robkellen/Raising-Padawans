import { makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  mainContainer: {
    marginTop: 60,
    marginLeft: "0 !important",
    marginRight: "0 !important",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    minWidth: "100%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "calc(100vw - 72px)",
    },
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
  navRoot: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: "rgba(244, 242, 255, 0.3)",
  },
  tabs: {
    "& .MuiTab-root": {
      padding: "6px 0px",
    },
  },
  indicator: {
    display: "none",
  },
  divider: {
    "& span.MuiTab-wrapper": {
      borderRight: "4px solid rgba(0, 0, 0, 0.54)",
      [theme.breakpoints.down("md")]: {
        // padding: "2px 5px 2px 0px",
        borderRight: "2px solid rgba(0, 0, 0, 0.54)",
        padding: "2px 10px",
      },
    },
  },
}));

export default appStyles;
