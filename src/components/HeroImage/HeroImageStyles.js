import { makeStyles } from "@material-ui/core/styles";

const heroImageStyles = makeStyles((theme) => ({
  mainImage: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(../../utils/images/FamilyChristmas.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "96vw",
  },
}));

export default heroImageStyles;
