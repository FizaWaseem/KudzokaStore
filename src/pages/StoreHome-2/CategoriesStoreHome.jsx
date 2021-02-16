import React, { useState } from 'react'
import classes from "./StoreHome-2.module.css";
import { Grid } from '@material-ui/core';
import GroceryStore from "../../assets/Images/product/GroceryStore.png";
import superStore from "../../assets/Images/product/superStore.svg";
import phone from "../../assets/Images/product/phone.svg";
import clock from "../../assets/Images/product/clock.svg";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {  item,categories } from '../../Components/data/item';
import ProductItem from '../../Components/Product_Store/ProductItem';
import { connect } from 'react-redux';
import { MainTemplate } from '../../Components/Template/MainTemplate';

const CategoriesStore=({product})=> {
   const [category,setCategory]=useState('Fruit & Vagetable');

   const GetCategory=()=>{
  
    return(
      
       item.filter((products)=> products.categories === category
    ));
  };
  

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
</Link>         </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} className={classes.Relateditem} >
                <h4 >
                    Categories
                </h4>
            </Grid>
            {categories.map((category)=>{
              return(  <Grid item key={category.id} >
<button className={classes.categorydiv}  onClick ={(e) =>setCategory(e.target.value)} value={category.title} >
{category.title}
</button>
            </Grid>
              );
            })}
 
        </Grid>
        {/* <Grid>
          <select onChange ={(e) =>setCategory(e.target.value)}>
            <option value={'Fruit & Vagetable'}>Fruite</option>
            <option value={'Dairy & Bakery Items'}>Dairy & Bakery Items</option>
            <option value={'FoodGrain & Oil and Masala'}>'FoodGrain & Oil and Masala'</option>
          </select>
        </Grid> */}
        <Grid container className={classes.category_product}>
                    
                        {GetCategory().map((items)=>{
                          return(
                            <Grid item xs={12} sm={6} md={3} className={classes.product} >
                            <ProductItem key={items.id}
                  productData={items}   
                 />
                  </Grid> 
                          );
                        })}
       
        </Grid>
        </Grid>
        </MainTemplate>
       
     );
 };
 const mapStatetoProps=state=>{
   return{
    product: state.shop.product,
   }
   
 }
 export default connect(mapStatetoProps)(CategoriesStore);