import { makeStyles } from "@material-ui/core/styles";

const useAppStyles = makeStyles((theme) => ({
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
    backgroundColor: "rgba(221, 155, 171, 0.3)",
  },
  postsContainer: {
    order: 2,
  },
  navRoot: {
    flexGrow: 1,
    width: "100%",
  },
  tabs: {
    backgroundColor: " rgb(106,101,111) !important",
    borderTop: "thin solid gray",
    borderBottom: "thin solid gray",
    "& span.MuiTab-wrapper": {
      
    },
    "& .MuiTab-root": {
      padding: "6px 0px",
      fontWeight: "bolder",
      "&:hover": {
        color: "#DD9BAB",
      },
    },
  },
  indicator: {
    display: "none",
  },
  divider: {
    "& span.MuiTab-wrapper": {
      // color: "white",
      borderRight: "3px solid #DD9BAB",
      [theme.breakpoints.down("md")]: {
        // padding: "2px 5px 2px 0px",
        borderRight: "2px solid rgba(0, 0, 0, 0.54)",
        padding: "2px 10px",
      },
    },
  },
}));

export default useAppStyles;
