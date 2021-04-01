import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import MomLifeContent from "./pages/BlogContent/MomLifeContent/MomLifeContent";
import HomeContent from "./pages/BlogContent/HomeContent/HomeContent";
import AdventuresContent from "./pages/BlogContent/AdventuresContent/AdventuresContent";
import BooksContent from "./pages/BlogContent/BooksContent/BooksContent";
import CraftsContent from "./pages/BlogContent/CraftsContent/CraftsContent";
// import PostDetail from "./pages/PostDetail";

function App() {
  //defining classes and theme
  const classes = appStyles();

  //determine screen size of user to make tabs centered on large devices, and scrollable on small devices
  const theme = useTheme();
  const scrollableTabs = useMediaQuery(theme.breakpoints.down("sm"));

  //define routes for BlogNav
  const routes = [
    "/",
    "/mom-life",
    "/adventures",
    "/books",
    "/crafts",
    "/about",
  ];

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
                    path="/"
                    render={(history) => (
                      <AppBar
                        position="static"
                        color="transparent"
                        className={classes.tabs}
                      >
                        <Tabs
                          value={history.location.pathname}
                          // onChange={handleChange}
                          variant={scrollableTabs ? "scrollable" : "fullWidth"}
                          scrollButtons="off"
                          centered={!scrollableTabs}
                          textColor="secondary"
                          aria-label="blog navigation items"
                          classes={{ indicator: classes.indicator }}
                        >
                          <Tab
                            component={Link}
                            value={routes[0]}
                            label="Home"
                            className={classes.divider}
                            to={routes[0]}
                          />
                          <Tab
                            component={Link}
                            value={routes[1]}
                            label="Mom Life"
                            className={classes.divider}
                            to={routes[1]}
                          />
                          <Tab
                            component={Link}
                            value={routes[2]}
                            label="Adventures"
                            className={classes.divider}
                            to={routes[2]}
                          />
                          <Tab
                            component={Link}
                            value={routes[3]}
                            aria-label="Books"
                            label="Books"
                            className={classes.divider}
                            to={routes[3]}
                          />
                          <Tab
                            component={Link}
                            value={routes[4]}
                            aria-label="Crafts"
                            label="Crafts"
                            className={classes.divider}
                            to={routes[4]}
                          />
                          <Tab
                            component={Link}
                            value={routes[5]}
                            aria-label="About"
                            label="About"
                            to={routes[5]}
                          />
                        </Tabs>
                      </AppBar>
                    )}
                  />
                  <Switch>
                    <Route exact path="/" component={HomeContent} />
                    <Route path="/mom-life" component={MomLifeContent} />
                    <Route path="/adventures" component={AdventuresContent} />
                    <Route path="/books" component={BooksContent} />
                    <Route path="/crafts" component={CraftsContent} />
                    <Route path="/about" component={HomeContent} />
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
