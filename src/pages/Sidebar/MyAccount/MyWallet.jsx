import React from "react";
import classes from './MyAccount.module.css';
import { NavLink ,Link } from "react-router-dom";
import {Grid,Typography } from "@material-ui/core";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { CustomCheckbox } from "../../../Components/Checkbox/checkbox";
import { Checkbox_Wallet } from "../../../Components/Checkbox/checkbox_wallet";
import { Template } from "../../../Components/Template/Template";

const MyWallet = () => {
   
return (
     <>
     <Template>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.select2}>
     <Grid className={classes.Pmain} container >
<Grid item xs={12} >
          <Typography className={classes.titlemain} >My Wallet</Typography>
        </Grid>
</Grid>
<Grid container>
        <Grid container xs={12} md={6} className={classes.box}>
        <Grid item xs={12} >
          <Typography className={classes.title1} >How KUDZOKA PAY works?</Typography>
        </Grid>
        <Grid item xs={12}  className={classes.fullbox}>
      
            <Checkbox_Wallet text="Add your credit/debit card"/>
        </Grid>
        <Grid item xs={12}  className={classes.fullbox}>
            <Checkbox_Wallet text="Add credit though a voucher code"/>
        </Grid>
        <Grid item xs={12}  className={classes.fullbox}>
            <Checkbox_Wallet text="Send credit"/>
        </Grid>
   </Grid>
  
       
        <Grid container xs={12} md={6} className={classes.sideblock}>

        <Grid item xs={12}  >
          <Typography className={classes.title} >Add Card Detail</Typography>
        </Grid>
        <Grid item xs={12}  className={classes.full}>
       <label className={classes.label} for='DATE'>Enter Card Number</label>
        <input className={classes.inputarea} type="text" placeholder="1234-XXXX-XXXX-XX" id="defaultFormRegisterConfirmEx"  />
        </Grid>
<Grid item xs={6} md={6} className={classes.full}>
<label className={classes.label} for='DATE'>Expiry Date <HelpOutlineIcon className={classes.icon} /></label>
 <input className={classes.inputarea} type="text" placeholder="12-09-2020" id="defaultFormRegisterConfirmEx"  />
 </Grid>
 <Grid item xs={5} md={5} className={classes.full}>
<label className={classes.label} for='DATE'>CVV <HelpOutlineIcon className={classes.icon} /></label>
 <input className={classes.inputarea} type="text" placeholder="1234" id="defaultFormRegisterConfirmEx"  />
 </Grid>

        <Grid item xs={12} >
          <NavLink to="/MyAccount" className={classes.navlink}>
            <div className={classes.Addcard}>
              <h4 className={classes.updatetext}>Add Card</h4>
            </div>
          </NavLink>
        </Grid>
        </Grid>
  
</Grid>
</Grid>
</Template>
</>
);
};

export  {MyWallet};