import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import heroImageStyles from "./HeroImageStyles";
import FamilyChristmas from "../../utils/images/FamilyChristmas.jpeg";

function HeroImage() {
  //define style
  const classes = heroImageStyles();

  return (
    <Paper
      className={classes.mainImage}
      style={{
        backgroundImage: `url(${FamilyChristmas})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={FamilyChristmas}
          alt="Family Christmas"
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
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
