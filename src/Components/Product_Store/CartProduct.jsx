import React from 'react'
import classes from "./Product.module.css";
import { Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import del from '../../assets/Images/del.svg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { connect } from 'react-redux';
import { increaseValue,decreasValue, removeFromcart } from '../../redux/action/action';


const CartProduct=({cartData,removeFromcart,increaseValue,decreasValue })=>{
    return (
    <div className={classes.Box}>
    <Grid container xs={12} >
    <Grid item xs={3} >  
    <img alt="Img" src={cartData.Img} className={classes.img} />
    </Grid>
    <Grid item xs={7} sm={7} >
       <span className={classes.price}>
      <span className={classes.cartname}>{cartData.name}</span> 
       <br></br>
       <br></br>
       <br></br>
       
       <ButtonGroup className={classes.ButtonGroup}>
      <Button
       aria-label="reduce"
       onClick={() =>decreasValue(cartData.id,cartData.amount)}
     >
       <RemoveIcon fontSize="small" />
     </Button>
     <Button  >{cartData.amount}</Button>
     <Button
       aria-label="increase"
       onClick={() =>increaseValue(cartData.id)}
     >
       <AddIcon fontSize="small" />
     </Button>
   
   </ButtonGroup> 
   <Button className={classes.del} onClick={()=>removeFromcart(cartData.id)}  >
        <img src={del} className={classes.delicon}/>
     </Button>
       </span>
   </Grid>
   <Grid item xs={2} sm={2} className={classes.pricetag}>
  
   {cartData.status=== 'Active' ? (
            <span >  <b >Rs. {cartData.amount*cartData.price}/-</b></span> 
               ) : (
        ""
      )}
      {cartData.status=== 'Sale' ? (
        <b >Rs. {cartData.amount*cartData.discount}/- <span className={classes.saleprice}>{cartData.price}/-</span></b>
        ) : (
        ""
      )}
      {cartData.status=== 'Sold' ? (
        <b >Rs. {cartData.amount*cartData.price}/- <span style={{color:"#707070",marginLeft:".4rem"  }}>Out of stock</span></b>
        ) : (
        ""
      )}
   </Grid> 
   </Grid>
</div>     
    );
};
const mapDispatchToProps=dispatch=>{
  return{
    removeFromcart: (id)=> dispatch(removeFromcart(id)),
    increaseValue: (id)=> dispatch(increaseValue(id)),
    decreasValue: (id,amount)=> dispatch(decreasValue(id,amount)),
  }
};
export default connect(null,mapDispatchToProps)(CartProduct);