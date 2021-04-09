import { makeStyles } from "@material-ui/core/styles";

const postCardStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: 400,
  },
  media: {
    height: 240,
    objectFit: "cover",
  },
}));

export default postCardStyles;
