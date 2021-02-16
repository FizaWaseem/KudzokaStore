import { Grid,Button } from '@material-ui/core';
import classes from './Vendor.module.css';
import del from '../../../assets/Images/del.svg';
import React, { useState } from 'react';

 function CategoryArea(props) {
  

    return (
            <Grid container xs={12}  className={classes.box}>
            <Grid item xs={4}>
                <span className={classes.textArea} >1</span>
            </Grid>
            <Grid item xs={4}>
            <span className={classes.textArea}>{props.categoryName}  </span>
            </Grid>
            <Grid item xs={4}>
            <Button className={classes.textArea} onClick={()=>props.OnDelete(props.id)}>
            <img src={del}/> </Button>
            </Grid>
        </Grid>
  
  
    )
}
export {CategoryArea};