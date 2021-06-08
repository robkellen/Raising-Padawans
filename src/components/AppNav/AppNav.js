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
import appNavStyles from "./AppNavStyles";

function AppNav() {
  //define styles
  const classes = appNavStyles();
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

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "#DD9BAB" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <AppNavLogo />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
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
        <List className={classes.iconList}>
          <a
            href="https://www.pinterest.com/raisingpadawans/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <PinterestIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Pinterest</ListItemText>
            </ListItem>
          </a>
          <a
            href="https://www.instagram.com/raisingpadawans/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <InstagramIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Instagram</ListItemText>
            </ListItem>
          </a>
          <a
            href="https://www.facebook.com/raisingpadawans-105607621570004"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button className={classes.liButton}>
              <ListItemIcon>
                <FacebookIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>RP on Facebook</ListItemText>
            </ListItem>
          </a>
          <a
            href="mailto:rob.h.kellen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.aTag}
          >
            <ListItem button variant="raised" className={classes.liButton}>
              <ListItemIcon>
                <MailIcon className={classes.iconButton} />
              </ListItemIcon>
              <ListItemText>Send Us A Message</ListItemText>
            </ListItem>
          </a>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default AppNav;
