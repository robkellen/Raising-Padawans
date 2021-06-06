import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import appStyles from "./AppStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppNav from "./components/AppNav/AppNav";
import Header from "./components/Header/Header";
import BlogContent from "./pages/BlogContent/BlogContent";
import PostDetail from "./pages/PostDetail/PostDetail";

function App(props) {
  //defining classes and theme
  const classes = appStyles();

  //determine screen size of user to make tabs centered on large devices, and scrollable on small devices
  const theme = useTheme();
  const scrollableTabs = useMediaQuery(theme.breakpoints.down("sm"));

  //The `path` lets us build <Route> paths that are
  // relative to the parent route. The `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Container className={classes.mainContainer}>
              <Grid>
                <Grid item xs={12}>
                  <Header />
                </Grid>

                <div className={classes.navRoot}>
                  <Route
                    path={path}
                    render={() => (
                      <AppBar
                        position="static"
                        // color="transparent"
                        className={classes.tabs}
                        elevation={0}
                      >
                        <Tabs
                          value={false}
                          variant={scrollableTabs ? "scrollable" : "fullWidth"}
                          scrollButtons="off"
                          centered={!scrollableTabs}
                          aria-label="blog navigation items"
                          classes={{ indicator: classes.indicator }}
                        >
                          <Tab
                            component={Link}
                            label="Home"
                            className={classes.divider}
                            to={`${url}`}
                          />
                          <Tab
                            component={Link}
                            label="Mom Life"
                            className={classes.divider}
                            to={`${url}/mom-life`}
                          />
                          <Tab
                            component={Link}
                            label="Adventures"
                            className={classes.divider}
                            to={`${url}/adventures`}
                          />
                          <Tab
                            component={Link}
                            aria-label="Books"
                            label="Books"
                            className={classes.divider}
                            to={`${url}/books`}
                          />
                          <Tab
                            component={Link}
                            aria-label="Crafts"
                            label="Crafts"
                            className={classes.divider}
                            to={`${url}/crafts`}
                          />
                          <Tab
                            component={Link}
                            aria-label="About"
                            label="About"
                            to={`${url}/about`}
                          />
                        </Tabs>
                      </AppBar>
                    )}
                  />
                  <Switch>
                    <Route path={`${path}/mom-life`} component={BlogContent} />
                    <Route
                      path={`${path}/adventures`}
                      component={BlogContent}
                    />
                    <Route path={`${path}/books`} component={BlogContent} />
                    <Route path={`${path}/crafts`} component={BlogContent} />
                    <Route
                      exact
                      path={`${path}/about`}
                      component={BlogContent}
                    />
                    <Route
                      exact
                      path={`${path}/:slug`}
                      component={PostDetail}
                    />
                    <Route path={path} component={BlogContent} />
                  </Switch>
                </div>
              </Grid>
            </Container>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
