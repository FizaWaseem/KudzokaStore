import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "	#30251a",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9D7A54",
  },
}))(LinearProgress);

const GreyLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "	#707070",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9D7A54",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  Bidbox:{
    backgroundColor: '#AD8955',
    borderRadius: '2%',
    color: 'black',
    marginTop: '-1.5rem',
},
bidamount:{
    paddingTop: '0.5rem',
},
bidstatus:{
  backgroundColor: ' rgb(172, 172, 172)',
  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
},
text:{
color:"rgb(172, 172, 172)"
},
freeshipping:{
    marginTop: '-1rem',
    paddingBottom: '0.5rem',
},
});

const ProgressBar = ({ bar_value, bar }) => {
  const classes = useStyles();

  return (
    <>
      {bar === "active" ? (
        <div className={classes.root}>
        <div className={classes.Bidbox}>
        <h2 className={classes.bidamount}>Bid $50</h2>
        <h3 className={classes.freeshipping}>+ free shipping</h3>
      </div>
          <BorderLinearProgress variant="determinate" value={bar_value} />
          <h4>ACCEPTING BID</h4>
        </div>
        
      ) : (
        ""
      )}
      {bar === "sold" ? (
        <div className={classes.root}>
        <div className={classes.Bidbox}>
        <h2 className={classes.bidstatus}>Sold</h2>
      </div>
         
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { ProgressBar };
