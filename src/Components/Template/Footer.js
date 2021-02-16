import { Grid,Container } from "@material-ui/core";
import React from "react";
import classes from './Template.module.css';
import {Link } from "react-router-dom";
import footerlogo from "../../assets/Images/Footer/footerlogo.png";
import Image9 from "../../assets/Images/Footer/Image9.png";
import Image10 from "../../assets/Images/Footer/Image10.png";
import whatsapp from "../../assets/Images/Footer/whatsapp.png";
import instagram from "../../assets/Images/Footer/instagram.svg";
import facebook from "../../assets/Images/Footer/facebook.svg";
const Footer=()=>{
    return(
        <>
        <Grid container xs={12} className={classes.Footer}>
            <Container>
                <Grid container className={classes.Footerdetail}>
                    <Grid item xs={5} sm={4} md={4} lg={3}>
                    <Link to='/'> 
                    <img src={footerlogo} className={classes.Footerlogo}/> </Link>
                    </Grid>
                    <Grid item  xs={7} sm={5} md={5} lg={6} className={classes.social}><div>
                        <h6 className={classes.socialtext} >Download the app</h6>
                        <img className={classes.img1} src={Image9}/>
                        <img className={classes.img2} src={Image10}/>
                    </div></Grid>
                    <Grid item xs={12} sm={3} lg={3} className={classes.social}><div>
                        <h6 className={classes.socialtext}>CONNECT WITH</h6>
                        <Grid container className={classes.socialmedia}>
                            <Grid item>
                            <img className={classes.fb} src={facebook}/>
                            </Grid>
                            <Grid item>
                            <img className={classes.insta} src={instagram}/>
                            </Grid>
                            <Grid item>
                            <img className={classes.whatsapp} src={whatsapp}/> 
                            </Grid>
                        </Grid>
                    </div></Grid>
                </Grid>
                <Grid container className={classes.copyright} >
                    <Grid item xs={12}>Copyright Reserved.</Grid>
                   
                </Grid>
            </Container>
        </Grid>
        </>
    )
};
export {Footer};