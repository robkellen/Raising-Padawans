import { makeStyles } from "@material-ui/core/styles";

const postCardStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: 400,
    flexGrow: 1,
    border: "10px solid white",
  },
  media: {
    height: 240,
    objectFit: "cover",
  },
  cardLink: {
    textDecoration: 0,
  },
}));

export default postCardStyles;
