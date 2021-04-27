import { makeStyles } from "@material-ui/core/styles";

const postDetailStyles = makeStyles(() => ({
  root: {
    marginTop: "25px",
    // backgroundImage: `url(https://img.wallpapersafari.com/desktop/1600/900/52/36/oukOBZ.png)`,
    backgroundSize: "auto",
    // backgroundRepeat: "no-repeat",
  },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   left: 0,
  //   bottom: 0,
  //   backgroundColor: "#845228",
  //   opacity: 0.9,
  //   zIndex: 0,
  // },
  postTitle: {
    textAlign: "center",
  },
  mainPostImg: {
    maxWidth: "75%",
  },
  postContent: {
    textAlign: "left",
  },
}));

export default postDetailStyles;
