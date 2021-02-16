import React from 'react';
import { Order } from "./Order";
import classes from './Order.module.css';
import { NavLink ,Link } from "react-router-dom";
import { Grid} from "@material-ui/core";
import GroceryStore from "../../../assets/Images/product/GroceryStore.png";

 const InProgress=()=> {
    return (
       
           <Grid container className={classes.Inprogress} >
<Grid item xs={12} sm={12} md={4} >
            <Order Img={GroceryStore} number={"1450"} price={"770"} itemno={"13"} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} >
            <Order Img={GroceryStore} number={"1450"} price={"770"} itemno={"13"} />
          </Grid>
    
         
</Grid> 
        
    )
};
export {InProgress};