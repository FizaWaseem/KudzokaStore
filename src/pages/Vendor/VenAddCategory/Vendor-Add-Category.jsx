import { Button, Container, Grid, Paper } from '@material-ui/core'
import React, {  useState } from 'react'
import classes from './Vendor.module.css';
import { CategoryArea } from './CategoryArea';
import { AddCategory } from './AddCategory';
import { VendorTemplate } from '../../../Components/Template/VendorTemplate';

 const VendorAddCategory=()=> {
     const[notes,setNotes]=useState([]);
    
    function handleAddclick(note){
setNotes(prevNotes =>{
    return [...prevNotes,note]
});    
    }

    function handleDelete(id){
setNotes(prevNotes=>{
    return prevNotes.filter((elem,index)=>{
        return index !==id;
    });
});
    }

    return (
        <>
       <VendorTemplate>
       <Grid container>
           <Grid item xs={12} className={classes.grid}>
               <Paper  className={classes.paper}>
               <Container className={classes.container}>
                   <Grid container>
                       <Grid item xs={12}>
                        <h4 className={classes.title}>
                            Add Category
                        </h4>
                       </Grid>
                      <AddCategory onAdd={handleAddclick}/>
                   </Grid>  
   <Grid container   >
       <Grid item xs={4} className={classes.title_box}>
           <span className={classes.boxtext} >ID</span>
       </Grid>
       <Grid item xs={4} className={classes.title_box}>
       <span className={classes.boxtext}>Category  </span>
       </Grid>
       <Grid item xs={4} className={classes.title_box}>
       <span className={classes.boxtext}>Action  </span>
       </Grid>
       <Grid container  className={classes.category_box} >
       
         { notes.map((note,index)=>{
       return(
       <CategoryArea
       xs={12}
       key={index}
       id={index}
categoryName={note.categoryName}
OnDelete={handleDelete}

/>
       );
   })
   }

  
   </Grid>  
   </Grid>
 

               </Container>
               </Paper>
           </Grid>
       </Grid>
    </VendorTemplate>
       </>
    )
}
export{VendorAddCategory};