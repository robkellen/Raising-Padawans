import { makeStyles } from "@material-ui/core/styles";

const usePostCardStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    height: 400,
    flexGrow: 1,
    // border: "5px solid white",
  },
  paper: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.03, 1.03, 0.5)" },
  },
  media: {
    height: 240,
    objectFit: "cover",
  },
  cardLink: {
    color: "black",
    textDecoration: "none",
  },
  title: {
    color: "black",
    textDecoration: "none",
  },
  tagLink: {
    color: "#707070",
    textDecoration: "none",
    display: "inline-block",
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {},
}));

export default usePostCardStyles;
