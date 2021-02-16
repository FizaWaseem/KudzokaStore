import React from 'react';
import classes from './numBox.module.css';
const numBox = ({num}) => {
    return (
        <span className={classes.spantag}>
        <b  className={classes.one}>{num}</b>
      </span>
    )
};

export {numBox};