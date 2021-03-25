import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeTabContent from "../BlogContent/HomeTabContent/HomeTabContent";
import MomLifeTabContent from "../BlogContent/MomLifeTabContent/MomLifeTabContent";
import AdventuresTabContent from "../BlogContent/AdventuresTabContent/AdventuresTabContent";
import BooksTabContent from "../BlogContent/BooksTabContent/BooksTabContent";
import CraftsTabContent from "../BlogContent/CraftsTabContent/CraftsTabContent";
import blogNavStyles from "./BlogNavStyles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <React.Fragment>{children}</React.Fragment>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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
            variant={scrollableTabs ? "scrollable" : "standard"}
            scrollButtons="off"
            centered={!scrollableTabs}
            indicatorColor="primary"
            textColor="primary"
            aria-label="blog navigation items"
          >
            <Tab aria-label="Home" label="Home" {...a11yProps(0)} />
            <Tab aria-label="Mom Life" label="Mom Life" {...a11yProps(1)} />
            <Tab aria-label="Adventures" label="Adventures" {...a11yProps(2)} />
            <Tab aria-label="Books" label="Books" {...a11yProps(3)} />
            <Tab aria-label="Crafts" label="Crafts" {...a11yProps(4)} />
            <Tab aria-label="About" label="About" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <HomeTabContent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MomLifeTabContent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AdventuresTabContent />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <BooksTabContent />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CraftsTabContent />
        </TabPanel>
        <TabPanel value={value} index={5}>
          {/* About */}
        </TabPanel>
      </div>
    </React.Fragment>
  );
}

export default BlogNav;
