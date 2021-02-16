import React from "react";
import { Container, Grid  } from '@material-ui/core';
import { NavLink ,Link } from "react-router-dom";
import classes from './Template.module.css';
import GroceryStore from '../../assets/Images/product/GroceryStore.png';
import bell from '../../assets/Images/header/bell.svg';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CartIcon} from "../cartIcon/CartIcon";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// 

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { tabitem } from "../data/item";
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
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
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


const VendorHeader=()=>{

    const [button, setbutton] = React.useState(null);
    const handleClick = (event) => {
        setbutton(event.currentTarget);
      };
    
      const handleClose = () => {
        setMobileOpen(!mobileOpen);
      };

    //   
    const Classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <div className={Classes.toolbar} />
        <div className={classes.Groceryimg}>
              <Link to='/'>  <img src={GroceryStore} className={classes.GroceryStorelogo}/></Link>
                </div>
        <List>
          {tabitem.map(
            (items) => (
              
              <ListItem button onClick={handleClose} key={items.id} component={Link} to={"/" + items.name} >
                <ListItemIcon>
               {
                (items.id==='1')?<img src={dashboard}/>: 
               (items.id==='2')?<img src={myorder}/>:
               (items.id==='3')?<img src={myorder}/>:
               (items.id==='4')?<img src={shop}/>:
               (items.id==='5')?<img src={myorder}/>:
               (items.id==='6')?<img src={settings}/>:
               (items.id==='7')?<img src={exit}/>:"null"

                }
                </ListItemIcon>
               
                <ListItemText primary={items.name} />
               
              </ListItem>
            )
          )}
        
        </List>
        <div >
       <Link to='/'></Link>   <img src={footerlogo} className={classes.kudzoka}/>
      </div>
      </div>
    );
    //   
    return(
        <>
        <Grid container className={classes.header} xs={12}>
       
            <Grid item xs={6} sm={9} md={9} >
            <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={Classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.storeimg}>
          <Link to="/"> 
           <img src={GroceryStore} className={classes.GroceryStore}/></Link>
                </div>
        </Toolbar>
            </Grid>
            <Grid item xs={5} sm={9} md={10}  className={classes.Vendormargin} >
            <Button className={classes.text}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
       <img src={bell} className={classes.bell}/>
      </Button>
      <Button className={classes.text}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
      <KeyboardArrowDownIcon className={classes.headicon} />
      </Button>
      <Menu
        id="customized-menu"
        anchorEl={button}
        keepMounted
        open={Boolean(button)}
        onClose={handleClose}
        className={classes.menuicon}
      >
        <MenuItem>
      <Link to="/profile"> <ListItemText primary="profile" /></Link>
         
        </MenuItem>
        </Menu>
      </Grid>
            
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
     
        </Grid>

        </>
    )
};
export {VendorHeader};