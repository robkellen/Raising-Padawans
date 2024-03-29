import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RPLogo from "../../utils/images/RPLogo";
import useHeaderStyles from "./HeaderStyles";
import "./Header.css";

function Header() {
  //define style
  const classes = useHeaderStyles();

  return (
    <React.Fragment>
      <Paper square className={classes.main}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom className={classes.header}>
              <span className={classes.headerLeft}>THE</span>
              <span>
                <RPLogo className={classes.svg}/>
              </span>
              <span className={classes.headerRight}>BLOG</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              className={classes.headerSubText}
              id="subtext"
            >
              A blog for chic geeks everywhere.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default Header;
