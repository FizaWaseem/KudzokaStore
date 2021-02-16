import { Grid,Button } from '@material-ui/core';
import classes from './Vendor.module.css';
import React, { useState } from 'react';


 function AddCategory(props) {
    const [category,Addcategory]= useState({
        categoryName: "",
    
     });


     function handleinput(e){
         const{name,value}= e.target;
         Addcategory(prev =>{
             return {
                 ...prev,
                 [name]:value,
                
             };
            
         });
     }
     function handleAdd(e){
      props.onAdd(category);
                Addcategory({
                    categoryName:'',
        
                });
               
                e.preventDefault();
            }
    return (
     
        <Grid container>
        <Grid item xs={12} >
             <span className={classes.text} htmlFor="defaultFormRegisterNameEx" >
             Add Category
             </span>
             </Grid>
            <Grid item xs={6} md={4}>
             <input className={classes.inputfield} onChange={handleinput} name="categoryName" value={category.categoryName} type="text" id="defaultFormRegisterEmailEx"  />
             </Grid>
             <Grid item xs={2} md={1} >
            <Button className={classes.Addbtn} type="submit" onClick={handleAdd} >
                Add
            </Button>
              </Grid>
  
       
        </Grid>
       
       
    )
}
export {AddCategory};