import { makeStyles } from "@material-ui/core/styles";

const postCardStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    height: 400,
    flexGrow: 1,
    border: "10px solid white",
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
}));

export default postCardStyles;
