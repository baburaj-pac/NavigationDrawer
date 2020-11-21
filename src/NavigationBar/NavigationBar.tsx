import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../Routes/Routes'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {
  AppBar,
  Divider,
  SvgIcon,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: "2.5%",
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const NavigationBar: React.FC = (props: any) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton aria-label="delete">
              <SvgIcon  onClick={toggleDrawer(true)}>
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
              </SvgIcon>
  </IconButton> */}
            <IconButton edge="start" className={classes.menuButton}
              color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Football Almanac
            </Typography>            
            {Routes.map((prop, key) => {
              return (                
                <NavLink activeStyle={{backgroundColor:'yellow'}}
                  to={prop.path} style={{ textDecoration: 'none',color:'white' }} 
                  key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                  <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} 
      onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                  {prop.icon}&nbsp;&nbsp; <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
          <Divider/>
          <MenuList>
            {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                  {prop.icon}&nbsp;&nbsp; <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);
