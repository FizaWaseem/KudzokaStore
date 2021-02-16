import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import classes from "./Tab.module.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid} from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import myorder from "../../assets/Images/header/myorder.svg";
import shop from "../../assets/Images/header/shop.svg";
import exit from "../../assets/Images/header/exit.svg";
import { VendorAddCategory } from '../../pages/Vendor/VenAddCategory/Vendor-Add-Category';
import { AddItem, Store } from '../../pages/Vendor';
import { Order } from '../../pages/Sidebar/MyOrder/Order';
import { Vendor_Order } from '../../pages/Vendor/AddItemInfo/Vendor_Order';
import { NavLink, Route,Switch ,Link} from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container >
         {props.children}
        </Grid>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 100,
        width: '80%',
        backgroundColor: '#ffff',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
        maxWidth: "10%",
      textTransform: 'none',
      color: '#fff',
      marginRight: theme.spacing(0),
      '& > span': {
        maxWidth: 150,
        marginLeft: '.4rem',
        width: '100%',
        flexDirection: "row" , 
      },
      '&:focus': {
        opacity: 1,
      },
    },

  }))((props) => <Tab disableRipple {...props} />);
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: '#25A1', 
    [theme.breakpoints.down("sm")]: {
        display: "none"
      }
  },

  demo1: {
    backgroundColor: '#25AAE1',
  },
}));


 const Tabbar=(props)=> {
  const Classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={Classes.root}>
      <AppBar position="static" className={Classes.demo1}>
        <StyledTabs 
        className={classes.tab} 
        StyledTabs value={value} onChange={handleChange} centered aria-label="simple tabs example" className={classes.styletab}>
          <StyledTab className={classes.styletab} icon={<DashboardOutlinedIcon className={classes.icon}/>}    label="Dashboard"  />
         <NavLink to="/AddCategory">     <StyledTab className={classes.styletab} icon={<img  src={myorder} className={classes.icon}/>} label="Add Category"  /></NavLink> 
          <StyledTab className={classes.styletab} icon={<img src={myorder} className={classes.icon}/>} label="Add Item"  />
          <StyledTab className={classes.styletab} icon={<img src={shop} className={classes.icon}/>} label="Store" {...a11yProps(3)} />
          <StyledTab className={classes.styletab} icon={<img src={myorder} className={classes.icon}/>} label="Order" {...a11yProps(4)} />
          <StyledTab className={classes.styletab} icon={<SettingsOutlinedIcon className={classes.icon}/>}  label="Settings" {...a11yProps(5)} />
          <StyledTab className={classes.styletab}  icon={<img src={exit} className={classes.icon}/>}  label="Logout" {...a11yProps(6)} />
        </StyledTabs>
      </AppBar>
      {/* <TabPanel value={value} index={0} >
        Dasboard
        </TabPanel>
        <TabPanel value={value} index={1} >
      <VendorAddCategory></VendorAddCategory>
        </TabPanel>
        <TabPanel value={value} index={2} >
        <AddItem></AddItem>
        </TabPanel>
        <TabPanel value={value} index={3} >
       <Store/>
        </TabPanel>
        <TabPanel value={value} index={4} >
      <Vendor_Order/>
        </TabPanel>
        <TabPanel value={value} index={5} >
          Item
        </TabPanel>
        <NavLink to="/"> 
        <TabPanel value={value} index={6}  >
         Click here to Logout
        </TabPanel></NavLink> */}
       
      
      {props.children}
        {/* <Switch>
      <Route exact path="/Dashboard" render={() => <div>Dashboard</div>} />
            <Route exact path="/Add Category" render={() => <div><VendorAddCategory></VendorAddCategory></div> } />
            <Route path="/Add Item" render={() => <div>   <AddItem></AddItem></div>} />
            <Route path="/Store" render={() => <div>   <Store></Store></div>} />
            <Route path="/Order" render={() => <div> <Vendor_Order/></div>} />
          </Switch> */}
    </div>
  );
}
export {Tabbar};
