import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import heroImageStyles from "./HeroImageStyles";
import FamilyChristmas from "../../utils/images/FamilyChristmas.jpeg";

function HeroImage() {
  //define style
  const classes = heroImageStyles();

  //set state of component based on route match
  const [image, setImage] = useState("");

  //match url to determine which db query to utilize in getUrl()
  let { url } = useRouteMatch();

  const getImage = () => {
    switch (url) {
      case "/blog/mom-life":
        return "https://res.cloudinary.com/robbiek/image/upload/v1622583937/Raising%20Padawans/A0436CA6-6711-4A08-89B3-BE3D08796D12_1_105_c_x4cz6d.jpg";
      case "/blog/adventures":
        return "https://res.cloudinary.com/robbiek/image/upload/v1622582895/Raising%20Padawans/7ADD7156-564F-49CD-825F-55714A0275AA_1_105_c_olngdr.jpg";
      case "/blog/books":
        return "https://res.cloudinary.com/robbiek/image/upload/v1622581724/Raising%20Padawans/B68A9E6F-7A55-4C36-84D6-A22FFC4AF14C_1_105_c_ugdofa.jpg";
      case "/blog/crafts":
        return "https://res.cloudinary.com/robbiek/image/upload/v1622583179/Raising%20Padawans/244F22D6-9EDD-47CC-A7BD-2C970F53282D_1_105_c_piwo9b.jpg";
      default:
        return "https://res.cloudinary.com/robbiek/image/upload/v1622584849/Raising%20Padawans/D35B4930-5BCE-45C4-B7EC-1D8725201746_vlzipi.png";
    }
  };

  //when component mounts set the background image based on the matching url
  useEffect(() => {
    setImage(getImage);
  }, [url]);

  return (
    <Paper
      square
      className={classes.mainImage}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={FamilyChristmas}
          alt={"imageAlt"}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainImageContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Sample Title
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Sample Description
            </Typography>
            <Link variant="subtitle1" href="#">
              Sample Link
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HeroImage;
