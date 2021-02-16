import { Grid } from "@material-ui/core";
import React,{useState} from "react";
import classes from "./sidebar.module.css";
import { NavLink,Route, Switch  } from "react-router-dom";
import user from "../../assets/Images/sidebar/user.svg";
import order from "../../assets/Images/sidebar/order.svg";
import wallet from "../../assets/Images/sidebar/wallet.svg";
import exit from "../../assets/Images/sidebar/exit.svg";
import { Template } from "../../Components/Template/Template";


const Sidebar=(props)=>{

  const [searchInput, setsearchInput] = useState("");

  console.log(searchInput);

    return(
        <> 
         
    <Grid container  className={classes.main}>
        <Grid container  xs={12} sm={4} md={3}  className={classes.select1} >
        <Grid item xs={5} sm={10} md={10} lg={10}>
          <NavLink to="/profile">
            <div className={classes.createprofile}>
            <img src={user} alt={user} />
              <h4 className={classes.createprofiletext}>My Account</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={5} sm={10} md={10} lg={10}>
         
           <NavLink to="/MyOrder">
            <div className={classes.createprofile}>
            <img src={order} alt="none" />
              <h4 className={classes.createprofiletext}>My Order</h4>
            </div>
          </NavLink> 
        </Grid>
        <Grid item xs={5} sm={10} md={10} lg={10}>
          <NavLink to="/MyWallet">
            <div className={classes.createprofile}>
            <img src={wallet} alt="none" />
              <h4 className={classes.createprofiletext}>My Wallet</h4>
            </div>
          </NavLink>
        </Grid>
        <Grid item xs={5} sm={10} md={10} lg={10}>
          <NavLink to="/Add Category">
            <div className={classes.logout}>
            <img src={exit} alt="none" />
              <h4 className={classes.createprofiletext}>Logout</h4>
            </div>
          </NavLink>
        </Grid>
        </Grid>
    {props.children}
       
  
        </Grid>
      
  

        </>
    );
};
export {Sidebar};