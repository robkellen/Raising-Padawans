import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading() {
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item>
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Loading;
