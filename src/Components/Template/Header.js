import React,{useState} from "react";
import { Container, Grid } from '@material-ui/core';
import { NavLink ,Link } from "react-router-dom";
import classes from './Template.module.css';
import logo from '../../assets/Images/logo.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CartIcon from "../cartIcon/CartIcon";
import { Select } from "../select";
import { Balance } from "../Balance";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ResponsiveDrawer } from "../Tab/drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

const Header=()=>{
  const Classes = useStyles();
   
    const handleopen = (event) => {
        setbutton(event.currentTarget);
      };
    
      const handleclose = () => {
        setbutton(null);
      };
      const [button, setbutton] = useState(null);
      
    

    return(
        <>
        <Grid container className={classes.header} xs={12}>
            <Grid item xs={0} sm={2} md={1} lg={0} className={classes.margin}>

             <ResponsiveDrawer/>
            
            </Grid>
            <Grid item xs={3} sm={2} md={1} lg={0} className={classes.location}>
            <Select/>
            </Grid>
            <Grid item className={classes.image} xs={4} sm={7} md={7} lg={7}>
               <Link to="/"><img className={classes.img} src={logo}/></Link> 
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={3} className={classes.Balance}>
           <Balance amount="2300/-"/>
         
            <NavLink to='/Addtocart'>
        <CartIcon/>
            </NavLink>
            <Button className={classes.btn_head}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={ handleopen} >
      <KeyboardArrowDownIcon className={classes.headicon} />
      </Button>
      
      <Menu
        id="customized-menu"
        anchorEl={button}
        keepMounted
        open={Boolean(button)}
        onClose={handleclose}
        className={classes.menuicon}
      >
        <MenuItem>
      <Link to="/Add Category"  className={classes.Link}> <ListItemText primary="Vendor" /></Link>
         
        </MenuItem>
        </Menu>
         
        </Grid>

        </Grid>

        </>
    )
};

export  {Header};