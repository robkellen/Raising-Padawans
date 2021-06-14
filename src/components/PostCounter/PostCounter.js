import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import postCounterStyles from "./PostCounterStyles";

function PostCounter({ numLoaded, total }) {
  //defining styles for PostCounter component
  const classes = postCounterStyles();

  return (
    <Grid item className={classes.root}>
      <Box>
        <Paper>
          <Typography
            className={classes.counter}
            variant="button"
            display="block"
            gutterBottom
          >
            Viewing {numLoaded} / {total} Posts
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
}

export default PostCounter;
