import React from 'react'
import classes from "./Product.module.css";
import { Breadcrumbs, Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';
import { addTocart } from '../../redux/action/action';



  const ProductDetail=({addTocart ,currentData})=>{
    const [count, setCount] = React.useState(1);
  
function plus() {
    setCount( count + 1);
}

function minus() {
    setCount(Math.max(count - 1, 0));
}


    return (
        <div className={classes.ProductDetail} >
            <Grid container xs={12} className={classes.container} >
            {currentData.status=== 'Active' ? (
            <Grid item xs={12} sm={4} className={classes.detailimg} > 
            <img alt={"Img"} src={currentData.Img} className={classes.detailimage} />
                 </Grid>
                 ) : (
        ""
      )}
      {currentData.status=== 'Sale' ? (
        <Grid item xs={12} sm={4} className={classes.detailimg} > 
        <div className={classes.salebox}>
      <div className={classes.sale}>Sale!</div>
        
      </div>
            <img alt={"Img"} src={currentData.Img} className={classes.detailimage} />
                 </Grid>        ) : (
        ""
      )}
      {currentData.status=== 'Sold' ? (
       
        <Grid item xs={12} sm={4} className={classes.detailimg} > 
            <img alt={"Img"} src={currentData.Img} className={classes.detailimage} />
            </Grid> 
        ) : (
        ""
      )}
            <Grid item xs={12} sm={5} className={classes.detailBox} >
         
               <h5 className={classes.detail}> <span className={classes.name}>{currentData.name}</span>
               <br></br>
               <br></br>
               {currentData.status=== 'Active' ? (
               <b>Rs. {count*currentData.price}/-</b>
               ) : (
        ""
      )}
      {currentData.status=== 'Sale' ? (
        <b>Rs. {count*currentData.discount}/- <span className={classes.saleprice}>{currentData.price}/-</span></b>
        ) : (
        ""
      )}
      {currentData.status=== 'Sold' ? (
        <b>Rs. {count*currentData.price}/- <span style={{color:"#707070",marginLeft:".4rem"  }}>Out of stock</span></b>
        ) : (
        ""
      )}
               <br></br>
               
               <ButtonGroup className={classes.button}>
              <Button
               aria-label="reduce"
               onClick={() => {minus() }}
             >
               <RemoveIcon fontSize="small" />
             </Button>
             <Button   className={classes.button1} >{count}</Button>
             <Button
               aria-label="increase"
               onClick={() =>plus()}
             >
               <AddIcon fontSize="small" />
             </Button>
               </ButtonGroup> 
               <Button className={classes.addtocart} onClick={()=>addTocart(currentData.id)} >
                Add to cart
             </Button>
             <br/>
             <span className={classes.detailofproduct} >{currentData.detail}</span>
               </h5>
           </Grid>
          
           
           </Grid> 
    </div>
    )
};

const mapDispatchToProps=dispatch=>{
  return{
    addTocart: (id)=> dispatch(addTocart(id)),
  }
};

export default connect(null,mapDispatchToProps)(ProductDetail);