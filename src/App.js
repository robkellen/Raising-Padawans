import React, { useState } from "react";
import clsx from "clsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import useAppStyles from "./AppStyles";
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

function App() {
  //defining classes and theme
  const classes = useAppStyles();

  // state to determine which tab is selected
  const [selected, setSelected] = useState("Home");

  //determine screen size of user to make tabs centered on large devices, and scrollable on small devices
  const theme = useTheme();
  const scrollableTabs = useMediaQuery(theme.breakpoints.down("sm"));

  //The `path` lets us build <Route> paths that are
  // relative to the parent route. The `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  console.log(path);

  const tabLinks = [
    { label: "Home", linkPath: `${url}` },
    { label: "Mom Life", linkPath: `${url}/mom-life` },
    { label: "Adventures", linkPath: `${url}/adventures` },
    { label: "Books", linkPath: `${url}/books` },
    { label: "Crafts", linkPath: `${url}/crafts` },
    { label: "About", linkPath: `${url}/about` },
  ];

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };

  console.log(selected);

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
                          onChange={handleChange}
                        >
                          {tabLinks.map((tabLink) => (
                            <Tab
                              key={tabLink.label}
                              component={Link}
                              label={tabLink.label}
                              classes={{
                                root: clsx(classes.divider, {
                                  [classes.selected]:
                                    selected === tabLink.label,
                                }),
                              }}
                              to={tabLink.linkPath}
                              value={tabLink.label}
                            />
                          ))}
                        </Tabs>
                      </AppBar>
                    )}
                  />
                  <Switch>
                    <Route exact path={path} component={BlogContent} />
                    <Route
                      path={[
                        `${path}/mom-life`,
                        `${path}/adventures`,
                        `${path}/books`,
                        `${path}/crafts`,
                      ]}
                      component={BlogContent}
                    />
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
