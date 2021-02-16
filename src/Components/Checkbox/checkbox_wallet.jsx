import React from "react";
import classes from './checkbox.module.css'

const Checkbox_Wallet = ({text,text2}) => {
  return (
    <div className={classes.box}>
    <input type='checkbox' className={classes.checkbox}/>
    <p className={classes.text}>{text}</p>
   
    </div>
  );
};
export {Checkbox_Wallet};