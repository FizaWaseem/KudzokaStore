import { Container, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Tiger from '../../../assets/Images/product/Tiger.png'
import { VendorTemplate } from '../../../Components/Template/VendorTemplate';
import classes from './AddItem.module.css';

 const Vendor_Order=()=>{
 
    return (
      <VendorTemplate>
       <Grid container>
       
            <Grid item xs={12} className={classes.ordergrid}>
            <span className={classes.ordertitle}>
              Order's
            </span>
            <Grid container>
             <Grid item xs={12} sm={3} md={3} className={classes.orderbox}>
               <Grid container>
                 <Grid item xs={12}  className={classes.orderbox1}>
                   <b className={classes.orderhead}>
                     Order no 1345
                   </b>
                   <br/>
                   <span className={classes.username}>
                     13 item
                   </span>
                   <br/>
                   <b className={classes.orderprice}>
                     RS 1345/-
                   </b>
                 </Grid>
               </Grid>
             </Grid> 
             <Grid item xs={12} sm={8} md={8} className={classes.order}>
              <Grid container>
              <Grid item xs={5} sm={5} className={classes.orderInfo}>
              <Grid container>
              <Grid item xs={12}  className={classes.orderbox1}>
                   <b className={classes.orderhead}>
                     Order no 1345
                   </b>
                   <br/>
                   <span className={classes.username}>
                     13 item
                   </span>
                   <br/>
                   <b className={classes.orderprice}>
                     RS 1345/-
                   </b>
                 </Grid>
                 <Grid item xs={12} >
                   <span  className={classes.userInfo}>
                     User Information
                   </span>
                   <br/>
                   <span  className={classes.username}>
                   Username
                   </span>
                   <br/>
                   <span className={classes.name}>
                     Ronald grey
                   </span>
                   <br/>
                   <span className={classes.username}>
                   Number
                   </span>
                   <br/>
                   <span  className={classes.name}>
                    0900-78610
                   </span>
                   <br/>
                   <span className={classes.username}>
                  Address
                   </span>
                   <br/>
                   <span  className={classes.name}>
                   Plot No.87 street no 108,Off University
                   </span>
                 </Grid>
               </Grid>
             </Grid>
             <Grid item xs={6} md={6} className={classes.orderproduct} >
               <Grid container>
                 <Grid item xs={4} className={classes.orderimg}>
                   <img src={Tiger} className={classes.oimg}/>
                 </Grid>
                 <Grid item xs={7}>
                  <h5 className={classes.name} >
Lu Tiger Ticky pack Box-24pcs
                  </h5>
                  <span className={classes.quality}>
Quantity : 
                  </span>
                  <span className={classes.name}>
2
                  </span>
                  <span className={classes.quality}>
RS: 
                  </span>
                  <span className={classes.name}>
120/-
                  </span>
                 </Grid>
                 <Grid item xs={12}>
                 <Grid container className={classes.Button}>
                 <button className={classes.notAvailableButton} 
        type="submit" 
        >Not Available </button>
    <button className={classes.submitButton} 
        type="submit" 
        >Done </button>
</Grid>
                 </Grid>
               </Grid>
             </Grid>
              </Grid>
             </Grid>
             </Grid>
              

</Grid>         
       </Grid>
  
          
       </VendorTemplate>
    );
}
export {Vendor_Order};