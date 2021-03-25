import React from "react";
import landingStyles from "./LandingStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppNav from "../../components/AppNav/AppNav";
import Header from "../../components/Header/Header";
import BlogNav from "../../components/BlogNav/BlogNav";

function Landing() {
  //defining classes and theme
  const classes = landingStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Container className={classes.mainContainer}>
              <React.Fragment>
                <Grid>
                  <Grid item xs={12}>
                    <Header />
                  </Grid>
                  <BlogNav />
                </Grid>
              </React.Fragment>
            </Container>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Landing;
