import React ,{useEffect, useState} from 'react'
import classes from "./StoreHome-2.module.css";
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import GroceryStore from "../../assets/Images/product/GroceryStore.png";
import superStore from "../../assets/Images/product/superStore.svg";
import phone from "../../assets/Images/product/phone.svg";
import clock from "../../assets/Images/product/clock.svg";
import prince from "../../assets/Images/product/prince.png";
import { InputWithIcon } from '../../Components/Search/search';
import Search from "../../assets/Images/sidebar/Search.svg"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
 import RemoveIcon from '@material-ui/icons/Remove';
import { category } from '../../Components/data/category';
import { CustomCheckbox } from '../../Components/Checkbox/checkbox';
import banner from '../../assets/Images/product/banner.png';
import { connect } from 'react-redux';
import ProductItem from '../../Components/Product_Store/ProductItem';
import { MainTemplate } from '../../Components/Template/MainTemplate';
import { Pagination } from '@material-ui/lab';

  

const StoreHome2=({product})=> {

  const [expanded, setExpanded] = useState(false);
   //pagination
   const[currentPage,setcurrentPage]= useState(1);
   const[postPerPage,setPerpage]= useState(8);
    const [searchInput, setsearchInput] = useState("");

    console.log(searchInput);


    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
//Get Current posts 
    const indexofLastPost=currentPage * postPerPage;
    const indexofFirstPost = indexofLastPost -postPerPage;
    const currentPost= product.slice(indexofFirstPost,indexofLastPost);
  
const handlePost=()=>{
  setcurrentPage( currentPage+1)
  console.log(currentPost);
 
};

    return (
      <MainTemplate>
        <Grid container  >
        <Grid container className={classes.Addtocart}>
            <Grid item xs={12} className={classes.head}>
            <Grid container xs={12} className={classes.container}>
<Grid container xs={4} sm={5} >
            <Grid item xs={12}  >
            <Grid container  >
                <Grid item xs={4} sm={3} md={4} lg={3}  >
                
                <img src={superStore} className={classes.icon}/></Grid><Grid item xs={8}  sm={9} md={8} lg={9} className={classes.text} >Super Store</Grid>
                    <br></br>
                    <Grid item xs={4} sm={3} md={4} lg={3}><img src={phone} className={classes.icon} /></Grid><Grid item xs={8} sm={9} md={8} lg={9} className={classes.text} >0900-78601</Grid>
                    <br/>
                    <Grid item xs={4} sm={3} md={4} lg={3}> <img src={clock} className={classes.icon}/></Grid><Grid item xs={8} sm={9} md={8} lg={9} className={classes.text} >01:00am-09:00am</Grid>
               
                </Grid></Grid>
</Grid>            <Grid container xs={8} sm={5} >
<Link to='/'>
<img  className={classes.store} src={GroceryStore}/>
</Link>

              
                </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* -- content */}
        <Grid container xs={12}>
            <Grid container xs={12} sm={5} md={4} lg={3} className={classes.searcharea}>
               <Grid item xs={12} className={classes.search}>
               <InputWithIcon
                value={searchInput}
                onChange={setsearchInput}
                color="#707070"
                type='text'
                placeholder='Search Order by no'
                ImgLeft={Search}
              />
               </Grid>
                {/* --Side bar categories*/}
               <Grid container  className={classes.category}>
<Grid item xs={12} >
<Grid container  > 
{category.map(({id,name, category:subcategory, ...rest}) => (
    <Grid item xs={12} key={id} className={classes.items} { ...rest} >
    <Accordion  style={{ padding: "0px 5px"}} expanded={expanded === id} onChange={handleChange(id)}>
    <AccordionSummary   expandIcon={expanded === id?<RemoveIcon  className={classes.plus}/> : <AddIcon  className={classes.plus} />}>

    {name}
</AccordionSummary>
<AccordionDetails   >
    {Array.isArray(subcategory) ? (
        <Grid container  >
        {subcategory.map((subitem)=>(
            <Grid item xs={12} className={classes.subitem} key={subitem.id} >
      
   <CustomCheckbox text2={subitem.name} value={subitem.name}
   />
    </Grid>
    ))}
   
    </Grid>
 
    ):null} 
    </AccordionDetails>
   
    </Accordion>
</Grid>
))}


  </Grid>
    </Grid>
          </Grid>
          </Grid>
          {/* Products Area */}
            <Grid container xs={12} sm={7} md={8} lg={9} className={classes.products}>
              <Grid container xs={12}>
              <Link to='/CategoriesStore' className={classes.banner}>
              <img src={banner} className={classes.banner}   /> 
              </Link>
              </Grid>
              <Grid container >
              {
                currentPost.map((items)=>{
                    return(
                    <Grid item xs={12} sm={6} md={4} className={classes.product} >
                    {/* <Link to={{ pathname: `/ProductDetail/${items.id}`, items: items }} className={classes.link}> */}
                  <ProductItem key={items.id}
                   productData={items}>
                 </ProductItem>
                 
                  {/* </Link>     */}
                  </Grid> 
                  );
   })
   }     
 
              </Grid>
              {/* pagination */}
              <Grid className={classes.Pagination} >
              <Pagination
            onChange={handlePost}
            currentPage={currentPost}
               count={4}  variant="outlined" color="primary" />
              </Grid>
             
            </Grid>
        
       
        </Grid>
        </Grid>
        </MainTemplate>
    );
};
const mapStatetoProps=(state)=>{
  return{
    product:state.shop.product,
  }
}
export default connect(mapStatetoProps)(StoreHome2);