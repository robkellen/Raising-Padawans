import { makeStyles } from "@material-ui/core/styles";

const heroImageStyles = makeStyles((theme) => ({
  mainImage: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(../../utils/images/FamilyChristmas.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    minWidth: "100%",
    order: 1,
    // zIndex: 1,
    overflow: "auto",
    [theme.breakpoints.up("lg")]: {
      height: 768,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainImageContent: {
    position: "relative",
    // padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(40),
      // paddingRight: 0,
    },
    textAlign: "center",
  },
}));

export default heroImageStyles;
