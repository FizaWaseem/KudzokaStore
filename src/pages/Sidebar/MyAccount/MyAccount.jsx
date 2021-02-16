import React from "react";
import classes from './MyAccount.module.css';
import { NavLink ,Link } from "react-router-dom";
import { Button,Container,Grid,Typography } from "@material-ui/core";
import { ChangePassword } from "./ChangePassword";
import { Template } from "../../../Components/Template/Template";

const MyAccount = () => {
   
return (
     <>
     <Template>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Pmain} container >
<Grid item xs={12} >
          <Typography className={classes.titlemain} >My Account</Typography>
        </Grid>
</Grid>
<Container>
    <form className={classes.form} >
   <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
          User name
        </span>
       </Grid>
       <Grid item xs={7}  sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterNameEx" />
        </Grid>
   </Grid> 
              
        <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
         Email Address
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="email" id="defaultFormRegisterEmailEx"  />
        </Grid>
   </Grid>
        <Grid container>
   <Grid item xs={3} sm={4}>
        <span className={classes.text} htmlFor="defaultFormRegisterConfirmEx" >
         Mobile Number
        </span>
        </Grid>
       <Grid item xs={7} sm={8}>
        <input className={classes.inputfield} type="text" id="defaultFormRegisterConfirmEx"  />
        </Grid>
   </Grid>
        <Grid container>
        <Grid item xs={12}  className={classes.link} >
        <ChangePassword text="Change Password"></ChangePassword>
         
        </Grid>
       
   </Grid>
  
        <Grid container className={classes.block}>
        <Grid item  xs={4} sm={4} md={4} > 
         <NavLink to="/MyAccount" className={classes.navlink}>
            <div className={classes.cancel}>
              <h4 className={classes.canceltext}>Cancel</h4>
            </div>
          </NavLink></Grid>
        <Grid item xs={4} sm={4} md={4} >
          <NavLink to="/MyAccount" className={classes.navlink}>
            <div className={classes.update}>
              <h4 className={classes.updatetext}>  Update</h4>
            </div>
          </NavLink>
        </Grid>
        </Grid>
      </form>
  
</Container>
</Grid>
</Template>
</>
);
};

export  {MyAccount};