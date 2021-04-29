import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const appNavStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  rpTitleSvg: {
    fill: "red",
    
  },
  iconList: {
    marginTop: 30,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 8,
    },
  },
  liButton: {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale3d(1.1, 1.1, 0.5)",
    },
  },
  iconButton: {
    color: "#DD9BAB",
    fontWeight: "900",
  },
  aTag: {
    color: "#DD9BAB",
    textDecoration: "none",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "rgb(106,101,111)",
    borderTop: "thin, solid, rgb(106,101,111)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "rgb(106,101,111)",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(1, 0, 0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default appNavStyles;
