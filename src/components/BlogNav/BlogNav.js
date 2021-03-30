import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
// import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LinkTab from "../LinkTab/LinkTab";
import ContentPanel from "../ContentPanel/ContentPanel";
import HomeTabContent from "../BlogContent/HomeTabContent/HomeTabContent";
import MomLifeTabContent from "../BlogContent/MomLifeTabContent/MomLifeTabContent";
import AdventuresTabContent from "../BlogContent/AdventuresTabContent/AdventuresTabContent";
import BooksTabContent from "../BlogContent/BooksTabContent/BooksTabContent";
import CraftsTabContent from "../BlogContent/CraftsTabContent/CraftsTabContent";
import blogNavStyles from "./BlogNavStyles";

ContentPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

function BlogNav() {
  //define styles
  const classes = blogNavStyles();

  //determine screen size of user to make tabs centered on large devices, and scrollable on small devices
  const theme = useTheme();
  const scrollableTabs = useMediaQuery(theme.breakpoints.down("sm"));

  //set initial state
  const [value, setValue] = useState(0);

  //handle change of scrollable nav elements
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant={scrollableTabs ? "scrollable" : "fullWidth"}
            scrollButtons="off"
            centered={!scrollableTabs}
            // indicatorColor="transparent"
            textColor="secondary"
            aria-label="blog navigation items"
            classes={{ indicator: classes.indicator }}
          >
            <LinkTab
              aria-label="Home"
              label="Home"
              {...a11yProps(0)}
              className={classes.divider}
            />
            <LinkTab
              aria-label="Mom Life"
              label="Mom Life"
              {...a11yProps(1)}
              className={classes.divider}
            />
            <LinkTab
              aria-label="Adventures"
              label="Adventures"
              {...a11yProps(2)}
              className={classes.divider}
            />
            <LinkTab
              aria-label="Books"
              label="Books"
              {...a11yProps(3)}
              className={classes.divider}
              href="/books"
            />
            <LinkTab
              aria-label="Crafts"
              label="Crafts"
              {...a11yProps(4)}
              className={classes.divider}
            />
            <LinkTab aria-label="About" label="About" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <ContentPanel value={value} index={0}>
          <HomeTabContent />
        </ContentPanel>
        <ContentPanel value={value} index={1}>
          <MomLifeTabContent />
        </ContentPanel>
        <ContentPanel value={value} index={2}>
          <AdventuresTabContent />
        </ContentPanel>
        <ContentPanel value={value} index={3}>
          <BooksTabContent />
        </ContentPanel>
        <ContentPanel value={value} index={4}>
          <CraftsTabContent />
        </ContentPanel>
        <ContentPanel value={value} index={5}>
          {/* About */}
        </ContentPanel>
      </div>
    </React.Fragment>
  );
}

export default BlogNav;
