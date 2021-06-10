import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import HeroImage from "../../components/HeroImage/HeroImage";
import Posts from "../../components/Posts/Posts";

import blogContentStyles from "./BlogContentStyles";

import PostDetail from "../PostDetail/PostDetail";

function BlogContent() {
  //defining classes and theme
  const classes = blogContentStyles();

  //match url to determine which db query to utilize in getUrl()
  let { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Grid>
        <Switch>
          <Route exact path={path}>
            <Grid item xs={12}>
              <HeroImage />
            </Grid>
            <Container className={classes.postsContainer}>
              {/* <Grid
                container
                justify="center"
                spacing={3}
                className={classes.postsGrid}
              > */}
                <Posts />
              {/* </Grid> */}
            </Container>
          </Route>

          <Route path={`${path}/:slug`} component={PostDetail} />
        </Switch>
      </Grid>
    </React.Fragment>
  );
}

export default BlogContent;
