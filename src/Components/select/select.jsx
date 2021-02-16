import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import classes from './select.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

  // account:
  // {
  //  width:'100%',
  //   paddingLeft: '.5rem',
  //   paddingRight: '.5rem',
  //   fontWeight: 500,
  //   fontSize: '16px',
  //   fontSize: '12px',
  //   textTransform: 'capitalize',
  //    color: 'black',
    
  // },
 
  icon2:{
    color: '#25aae1',
    fontSize:'1rem',
    // fontSize:'.8rem' ,
    
  }
  ,
  menu:{
    marginTop:'50px' , 
     background: 'rgba(0,0,0,0.2)',
     fontWeight:"600",
  }, 
   list:{
    
    fontWeight: 500,
 '&:hover:': {
    color:'black',
    borderLeft:'1px solid black',
  }}


}));


const Select = () => {
 
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [city, setcity] = useState(null);
   useEffect(() => {
   const fetchApi =async () =>{
     const url =`http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f40159c8a907d4395a967922e90215aa` ;
     const response = await fetch(url);
     const resJson = await response.json();
     console.log(resJson);
    
   };
    fetchApi();
   })

  return (
    <Grid  container className={classes.Select}>
     <Grid  item>
      <Button aria-controls="simple-menu"
      // endIcon={<ExpandMoreIcon className={Classes.icon} />}
     
      className={classes.account}
       aria-haspopup="true" onClick={handleClick}>
       <LocationOnIcon className={Classes.icon2}/>
    <b>Karachi</b> 
      </Button>
      <Menu className={Classes.menu} 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem  className={Classes.list} onClick={handleClose}>Lahore</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Islamabad</MenuItem>
      
      </Menu>
      </Grid>
    </Grid>
  );
}
export {Select}