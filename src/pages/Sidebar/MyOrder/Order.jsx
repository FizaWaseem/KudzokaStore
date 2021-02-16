 
 import { Typography,Grid } from "@material-ui/core";
 import React from "react";
 import classes from "./Order.module.css";
 import { NavLink ,Link } from "react-router-dom";
 
 const Order=({Img,number,price,itemno})=>{
    return(
        <>
 
 <div className={classes.orderBox} >
      <img alt={Img} src={Img} className={classes.img} />
        <Grid container xs={12} >
         <Grid item xs={12} >
            <h5 className={classes.price}>Order no <b>{number}</b>
            <br></br>
            <span className={classes.item}>Order {itemno} Items</span><br/>
            <b>Rs. {price}/-</b></h5>
      <Link className={classes.link} to="/">See Detail</Link>
         
        </Grid>
        </Grid>
    </div>
</>
    )}
    export {Order};