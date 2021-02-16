import React from "react";
import classes from './checkbox.module.css'

const CustomCheckbox = ({text,text2}) => {
  return (
    <div className={classes.div}>
     <p className={classes.text2}>{text2}</p>
    <input type='checkbox' className={classes.checkbox}/>
    <p className={classes.text}>{text}</p>
   
    </div>
  );
};
export {CustomCheckbox};
