import { Grid } from '@material-ui/core';
import classes from "./Tab.module.css";
import React, { Children } from 'react'
import { Footer } from '../Template/Footer';
import { VendorHeader } from '../Template/VendorHeader';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import myorder from "../../assets/Images/header/myorder.svg";
import shop from "../../assets/Images/header/shop.svg";
import exit from "../../assets/Images/header/exit.svg";
import { NavLink ,Route,Switch} from 'react-router-dom';
import { VendorAddCategory } from '../../pages/Vendor/VenAddCategory/Vendor-Add-Category';
import { AddItem, Store } from '../../pages/Vendor';
import { Order } from '../../pages/Sidebar/MyOrder/Order';
import { Vendor_Order } from '../../pages/Vendor/AddItemInfo/Vendor_Order';
 const Menu_bar = () => {

    
    return (
        <>
        
    <Grid container className={classes.menu}>
       <Grid items   className={classes.item} ><DashboardOutlinedIcon className={classes.icon}/> Dashboard</Grid>
       <NavLink className={classes.navLink}  to="/Add Category" > <Grid items  className={classes.item}><img  src={myorder} className={classes.icon} />  Add Category</Grid></NavLink> 
       <NavLink className={classes.navLink} to="/Add Item">  <Grid items className={classes.item} ><img src={myorder} className={classes.icon} /> Add Item</Grid></NavLink>
       <NavLink className={classes.navLink} to="/Store">  <Grid items className={classes.item} ><img src={shop} className={classes.icon}/>Store</Grid></NavLink>
       <NavLink className={classes.navLink} to="/Order"> <Grid items className={classes.item} ><img src={myorder} className={classes.icon} />Order</Grid></NavLink>
       <Grid items className={classes.item} ><SettingsOutlinedIcon className={classes.icon}/>Settings</Grid>
       <NavLink className={classes.navLink} to="/">  <Grid items className={classes.item}><img src={exit} className={classes.icon} />Logout</Grid></NavLink>
    </Grid>

             {/* <Switch>
      <Route exact path="/Dashboard" render={() => <div>Dashboard</div>} />
            <Route exact path="/Add Category" render={() => <div><VendorAddCategory></VendorAddCategory></div> } />
            <Route path="/Add Item" render={() => <div>   <AddItem></AddItem></div>} />
            <Route path="/Store" render={() => <div>   <Store></Store></div>} />
            <Route path="/Order" render={() => <div> <Vendor_Order/></div>} />
          </Switch> */}
            {/* </Grid> */}
      
        </>
    )
}
export default  Menu_bar;