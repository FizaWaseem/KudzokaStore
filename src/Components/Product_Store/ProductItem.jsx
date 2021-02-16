import React, { useEffect,useState } from 'react'
import classes from "./Product.module.css";
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import bag from '../../assets/Images/product/bag.svg';
import { item } from '../data/item';
import { addTocart, LoadItem ,increaseValue,decreasValue} from '../../redux/action/action';
import { connect } from 'react-redux';


  const ProductItem=({productData,addTocart,LoadItem,increaseValue,decreasValue})=>{
// const [Quantity, setQuantity] = useState(1);
// useEffect(()=>{
// let amount=1;
// let amount=0;
// product.forEach(element => {
//   amount= element.price* amount;
//   amount += amount;
  
// });
// setQuantity(amount);
// },[product,Quantity]);
// console.log(Quantity)
    return (
        <div className={classes.ProductItem} >
           {productData.status ==='Active' ? ( 
         <Grid container xs={12} >
         <Grid item xs={12} > 
         <div className={classes.productimg} >
          <Link to={{pathname: `/ProductDetail/${productData.id}`}}>
         <img alt={"Img"} src={productData.Img} className={classes.image} onClick={()=>LoadItem(productData)} />
         </Link>
         </div> 
         
              </Grid>
         <Grid item xs={12} sm={12} className={classes.element} >
            <h5 className={classes.detail}> {productData.name}
            <br></br>
            <br></br>
            <b>Rs. {productData.amount*productData.price}/-</b>
            <br></br>
            <ButtonGroup className={classes.button}>
           <Button
            aria-label="reduce"
            onClick={() =>decreasValue(productData.id)}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button className={classes.button1} >{productData.amount}</Button>
          <Button
            aria-label="increase"
            onClick={() =>increaseValue(productData.id)}
          >
            <AddIcon fontSize="small" />
          </Button>
        
            </ButtonGroup>
            <Button className={classes.bag} onClick={()=>addTocart(productData.id)} >
          <img src={bag} className={classes.bag1} />
          </Button>
            </h5>
        </Grid>
        
        </Grid>
        ) : (
        ""
      )}
      {productData.status === "Sold" ? (
        <div className={classes.root}>
      <Grid container xs={12} className={classes.productcontainer} >
      <div className={classes.box}>
        <h2 className={classes.status}>Out Of Stock</h2>
     
         <Grid item xs={12} > 
         <div className={classes.productimg} >
         
         <Link to={`/ProductDetail/${productData.id}`}>
         <img alt={"Img"} src={productData.Img} className={classes.image} onClick={()=>LoadItem(productData)}  />
         </Link>
         </div> 
         
              </Grid>
         <Grid item xs={12} sm={12} className={classes.element} >
            <h5 className={classes.detail}> {productData.name}
            <br></br>
            <br></br>
            <b>Rs. {productData.amount*productData.price}/-</b>
            <br></br>
            <ButtonGroup className={classes.button}>
           <Button
            aria-label="reduce"
            onClick={() => decreasValue(productData.id)}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button   className={classes.button1} >{productData.amount}</Button>
          <Button
            aria-label="increase"
            onClick={() =>increaseValue(productData.id)}
          >
            <AddIcon fontSize="small" />
          </Button>
        

            </ButtonGroup> 
            
            <Button className={classes.bag} onClick={()=>addTocart(productData.id)}  >
          <img src={bag} className={classes.bag1} />
          </Button>
            </h5>
        </Grid>
        </div>
        </Grid>
       
        </div>
           ) : (
        ""
      )}
     
      {productData.status === "Sale" ? (
      <Grid container xs={12} className={classes.productcontainer} >
      <div className={classes.salebox}>
      <div className={classes.sale}>Sale!</div>
        
      </div>
         <Grid item xs={12} > 
         <div className={classes.productimg} >
         <Link to={{pathname: `/ProductDetail/${productData.id}`}}>
         <img alt={"Img"} src={productData.Img} className={classes.image} onClick={()=>LoadItem(productData)} />
         </Link>
         </div> 
         
              </Grid>
         <Grid item xs={12} sm={12} className={classes.element} >
            <h5 className={classes.detail}> {productData.name}
            <br></br>
            <br></br>
            <b>Rs. {productData.amount*productData.price}/-</b>
            <br></br>
            <ButtonGroup className={classes.button}>
           <Button
            aria-label="reduce"
            onClick={() => decreasValue(productData.id)}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button   className={classes.button1} >{productData.amount}</Button>
          <Button
            aria-label="increase"
            onClick={() =>increaseValue(productData.id)}
          >
            <AddIcon fontSize="small" />
          </Button>
            </ButtonGroup> 
           
            <Button className={classes.bag} onClick={()=>addTocart(productData.id)} >
          <img src={bag} className={classes.bag1} />
          </Button>
            </h5>
        </Grid>
       
        </Grid>
       
       
           ) : (
        ""
      )}
     
    </div>
    );
};

const mapDispatchToProps=dispatch=>{
  return{
    addTocart: (id)=> dispatch(addTocart(id)),
    LoadItem: (items)=> dispatch(LoadItem(items)),
    increaseValue: (id)=> dispatch(increaseValue(id)),
    decreasValue: (id)=> dispatch(decreasValue(id)),
  };
};

export default connect(null,mapDispatchToProps)(ProductItem);
