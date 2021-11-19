import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import AppNavLogo from "./AppNavLogo";
import useAppNavStyles from "./AppNavStyles";

function AppNav() {
  //define styles
  const classes = useAppNavStyles();
  const theme = useTheme();

  //set initial state of side drawer to be closed
  const [open, setOpen] = useState(false);

  //functions to handle toggling of side drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const linkList = [
    {
      url: "https://www.pinterest.com/raisingpadawans/",
      icon: <PinterestIcon className={classes.iconButton} />,
      text: "RP on Pinterest",
    },
    {
      url: "https://www.instagram.com/raisingpadawans/",
      icon: <InstagramIcon className={classes.iconButton} />,
      text: "RP on Instagram",
    },
    {
      url: "https://www.facebook.com/raisingpadawans-105607621570004",
      icon: <FacebookIcon className={classes.iconButton} />,
      text: "RP on Facebook",
    },
    {
      url: "mailto:raisingpadawans@gmail.com",
      icon: <MailIcon className={classes.iconButton} />,
      text: "Message Us",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "#DD9BAB" }}
        classes={{
          root: clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            classes={{
              root: clsx(classes.menuButton, {
                [classes.hide]: open,
              }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <AppNavLogo />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          root: clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List classes={{ root: classes.iconList }}>
          {linkList.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.aTag}
              key={link.url}
            >
              <ListItem button classes={{ root: classes.liButton }}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.text}</ListItemText>
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default AppNav;
