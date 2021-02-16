import React,{useState} from 'react'
import classes from "./StoreHome-2.module.css";
import { Grid } from '@material-ui/core';
import GroceryStore from "../../assets/Images/product/GroceryStore.png";
import superStore from "../../assets/Images/product/superStore.svg";
import Tiger from "../../assets/Images/product/Tiger.png";
import phone from "../../assets/Images/product/phone.svg";
import clock from "../../assets/Images/product/clock.svg";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addTocart } from '../..//redux/action/action';
import ProductDetail from '../../Components/Product_Store/Product-detail';
import Slider_products from '../../Components/Slider_products/Slider_products';
import { MainTemplate } from '../../Components/Template/MainTemplate';



const ProductDetails=( { addTocart,currentItem})=> {
  const [cart,setcart]=useState([
  ]);
  
    // const {items } = props.location;

      
    return (
      <MainTemplate>
        <Grid container >
        <Grid container className={classes.Addtocart}>
            <Grid item xs={12} className={classes.head}>
            <Grid container xs={12} className={classes.container}>
<Grid container xs={4} sm={5} >
            <Grid item xs={12}  >
            <Grid container  >
                <Grid item xs={4} sm={3} md={4} lg={3}  >
              
                <img src={superStore} className={classes.icon}/></Grid><Grid item xs={8}  sm={9} md={8} lg={9} className={classes.text} >Super Store</Grid>
                    <br></br>
                    <Grid item xs={4} sm={3} md={4} lg={3}    ><img src={phone} className={classes.icon} /></Grid><Grid item xs={8} sm={9} md={8} lg={9} className={classes.text} >0900-78601</Grid>
                    <br/>
                    <Grid item xs={4} sm={3} md={4} lg={3}    > <img src={clock} className={classes.icon}/></Grid><Grid item xs={8} sm={9} md={8} lg={9} className={classes.text} >01:00am-09:00am</Grid>
               
                </Grid></Grid>
</Grid>         
   <Grid container xs={8} sm={5} >
   <Link to='/'>
<img  className={classes.store} src={GroceryStore}/>
</Link>      </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container>
       
                    <Grid item xs={12}>
           <ProductDetail key={currentItem.id} currentData={currentItem} />
           </Grid> 
          
            </Grid>
            <Grid container>
            <Grid item xs={12} > <h4 className={classes.Relateditem}>Related Items</h4></Grid>
            <Grid item xs={12} >
       
               <Slider_products/>
 </Grid>
            </Grid>
        </Grid>
    </MainTemplate>
       
    );
};
const mapStateToProps=(state)=>{
  return{
    currentItem:state.shop.currentItem,
  }
};
const mapDispatchToProps=dispatch=>{
  return{
    addTocart: (id)=> dispatch(addTocart(id)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);