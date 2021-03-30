import { makeStyles } from "@material-ui/core/styles";

const blogNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "rgba(244, 242, 255, 0.3)",
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

export default blogNavStyles;
