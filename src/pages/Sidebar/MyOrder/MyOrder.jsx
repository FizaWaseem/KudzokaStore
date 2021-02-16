import React from "react";
import classes from './Order.module.css';
import {  withStyles } from '@material-ui/core/styles';
import { Grid,Typography } from "@material-ui/core";
import {InputWithIcon} from "../../../Components/Search/search";
import Search from "../../../assets/Images/sidebar/Search.svg"
import {numBox } from "../../../Components/numBox";
import { Template } from "../../../Components/Template/Template";
import { InProgress } from "./InProgress";
import PreviousOrder from "./PreviousOrder";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container >
         {props.children}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const StyledTabs = withStyles({
  indicator: {
    display: 'none',
    '& > span': {
      maxWidth: 100,
      width: '80%',
      backgroundColor: '#25AAE1',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
      maxWidth: "100%",
    textTransform: 'none',
    color: '#707070',
   
    '&:focus': {
      color: '#25AAE1',
    },
  },

}))((props) => <Tab disableRipple {...props} />);
  


const MyOrder = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [searchInput, setsearchInput] = React.useState("");

  console.log(searchInput);
return (
     <>
     <Template>
     <Grid item xs={12} sm={6} md={8} lg={8} className={classes.main}>
     <Grid className={classes.order} container >
<Grid item xs={5} md={8} >
          <Typography className={classes.title} >My Order</Typography>
        </Grid>
        <Grid item xs={7}  md={4} className={classes.search}> 
          <InputWithIcon
                value={searchInput}
                onChange={setsearchInput}
                color="#707070"
                type='text'
                placeholder='Search Order by no'
                ImgLeft={Search}
              />
              </Grid>
 </Grid>
<StyledTabs 
         className={classes.progressbox}
        StyledTabs value={value} onChange={handleChange} centered aria-label="simple tabs example">
     
          <StyledTab className={classes.progressbox1}    label="Inprogress Order(1)" {...a11yProps(0)} />
          <StyledTab className={classes.progressbox1}  label=" Previous Order(1)" {...a11yProps(1)} />
    </StyledTabs>
  
    <TabPanel value={value} index={0} >
       <InProgress/>
        </TabPanel>
        <TabPanel value={value} index={1} >
       <PreviousOrder/>
        </TabPanel>


</Grid>
</Template>
</>
);
};

export  {MyOrder};