
import React from "react";
import classes from './Balance.module.css';
const Balance=({amount})=>{

    return(
        <>
      <span>
            <span className={classes.head_Balance}>
                Balance Rs
            </span>
            <br/>
            <span  className={classes.amount_Balance} > {amount}</span>
            </span>
        </>
    )
};
export {Balance};