import { Grid } from '@material-ui/core';
import React,{useEffect} from 'react';
import CartProduct from '../../Components/Product_Store/CartProduct';
import { MainTemplate } from '../../Components/Template/MainTemplate';
import classes from "./Addtocart.module.css";
import { NavLink,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Get_TOTAL } from '../../redux/action/actionTypes';



 const Addtocart=({cart,dispatch,total})=>{ 

    // const [cartTotal, setcartTotal] = useState(0);
    // useEffect(() => {
    //   let Total=0;
    //   let amount=0;
    //   cart.forEach((items)=>{
    //       amount= items.price* items.qty;
    //     Total += amount;
    //   });
    //   setcartTotal(Total);
    // },[cart,cartTotal]);

useEffect(() => {
 dispatch({type:Get_TOTAL});
});




    return (
      <MainTemplate>
        <Grid container >
        <Grid container className={classes.Addtocart}>
            <Grid item xs={12}>
                <p className={classes.text} >
                    Add To Cart
                </p>
            </Grid>
        </Grid>
        <Grid container className={classes.itembox} xs={12} sm={7} md={8}>
        {(cart.length === 0) ?
          <Grid item xs={12}>
          <div className={classes.Link}>
            Your cart is currently empty.Go and shopping <Link to='/'className={classes.Link}>here</Link>
          </div>
          </Grid>
        :
        <Grid item xs={12}>
            {
        cart.map((items)=>{
          return(
        <CartProduct key={items.id} cartData={items}/>
    
        );
   })
   }   
            </Grid> 
        }
            
        </Grid>
        <Grid container  xs={12} sm={4} md={3} className={classes.summarycontainer} >
        <Grid item xs={12}> 
          <p className={classes.title}> 
          Summary</p> 
        </Grid>
            <Grid item xs={12} className={classes.summary}>
<Grid container className={classes.total}>
    <Grid item xs={10} className={classes.totaltext}>Sub Total Rs.</Grid>
    <Grid item xs={2}>{total}</Grid>
    <Grid item xs={10} className={classes.totaltext}>Delivery Charges</Grid>
    <Grid item xs={2}>20</Grid>
</Grid>
<Grid container >
    <Grid item xs={10} className={classes.subtotaltext}>Sub Total Rs</Grid>
    <Grid item xs={2}  className={classes.amount}>{20+total}</Grid>
    <Grid item xs={12} className={classes.totaltext}>
   <NavLink to='/Addtocart' className={classes.checkout}>
    <div className={classes.checkoutbtn}>
        <h5>
            Checkout
        </h5>
    </div>
    </NavLink>
   </Grid>
</Grid>
            </Grid>
            </Grid>
      </Grid>
      </MainTemplate>
    )
};

const mapStatetoProps=(state)=>{
  return{
    cart:state.shop.cart,
    total:state.shop.total,
  
  };
};
export default connect(mapStatetoProps)( Addtocart);
