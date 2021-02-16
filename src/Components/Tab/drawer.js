import React from "react";
import {  Grid  } from '@material-ui/core';
import { Link } from "react-router-dom";
import classes from '../Template/Template.module.css';
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import GroceryStore from '../../assets/Images/product/GroceryStore.png';
import ListItemText from '@material-ui/core/ListItemText';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { tabitem, tabitemLocal } from "../data/item";
import dashboard from '../../assets/Images/header/dashboard.svg';
import settings from '../../assets/Images/header/settings.svg';
import myorder from "../../assets/Images/header/myorder.svg";
import shop from "../../assets/Images/header/shop.svg";
import exit from "../../assets/Images/header/exit.svg";
import footerlogo from "../../assets/Images/Footer/footerlogo.png";
//

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: "#fff",
    backgroundColor: "#25AAE1"
  }
}));


const ResponsiveDrawer=(props)=> {
//   
const [button, setbutton] = React.useState(null);
const handleClick = (event) => {
    setbutton(event.currentTarget);
  };

  const handleClose = () => {
    setbutton(null);
  };
  //
  const Classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
      <div className={Classes.toolbar} />
      <div className={classes.Groceryimg}>
            <Link to='/'>  <img src={GroceryStore} className={classes.GroceryStorelogo}/></Link>
              </div>
      <List>
        {tabitemLocal.map(
          (items) => (
            
            <ListItem button onClick={handleClose} key={items.id} component={Link} to={"/" + items.name} className={classes.ListItem} >
              <ListItemIcon className={classes.ListIcon}>
             {
              (items.id==='1')?<img src={dashboard}/>: 
             (items.id==='2')?<img src={shop}/>:
             (items.id==='3')?<img src={myorder}/>:
             (items.id==='4')?<img src={settings}/>:
             (items.id==='5')?<img src={exit}/>:"null"

              }
              </ListItemIcon>
             
              <ListItemText primary={items.name} />
             
            </ListItem>
          )
        )}
      
      </List>
      <div >
      <Link to='/'><img src={footerlogo} className={classes.kudzoka}/>
      </Link>
    </div>
    </div>
  );
  //  

  
  return (
    <>
      <span  >

          <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
           
                </Toolbar>
           
    
           
      

   {/* Toolbar */}

   <nav className={Classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: Classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xlDown implementation="css">
          <Drawer
            classes={{
              paper: Classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      </span>
      </>
  );
}


export  {ResponsiveDrawer};
