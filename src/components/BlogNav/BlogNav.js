import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeTabContent from "../HomeTabContent/HomeTabContent";
import blogNavStyles from "./BlogNavStyles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
      centered
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

function BlogNav() {
  //define styles
  const classes = blogNavStyles();

  //set initial state
  const [value, setValue] = useState(0);

  //handle change of scrollable nav elements
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            centered
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Mom Life" {...a11yProps(1)} />
            <Tab label="Adventures" {...a11yProps(2)} />
            <Tab label="Books" {...a11yProps(3)} />
            <Tab label="Crafts" {...a11yProps(4)} />
            <Tab label="About" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <HomeTabContent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Mom Life
        </TabPanel>
        <TabPanel value={value} index={2}>
          Adventures
        </TabPanel>
        <TabPanel value={value} index={3}>
          Books
        </TabPanel>
        <TabPanel value={value} index={4}>
          Crafts
        </TabPanel>
        <TabPanel value={value} index={5}>
          About
        </TabPanel>
      </div>
    </React.Fragment>
  );
}

export default BlogNav;
