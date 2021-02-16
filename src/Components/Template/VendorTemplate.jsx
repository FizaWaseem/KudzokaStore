import { Grid } from "@material-ui/core";
import React from "react";
import Layout from "../../pages/Layout/Layout";
import { ResponsiveDrawer } from "../Tab/drawer";
import Menu_bar from "../Tab/Menu_bar";
import { Tabbar } from "../Tab/Tab";
import { Footer } from "./Footer";
import classes from './Template.module.css';
import { VendorHeader } from "./VendorHeader";
const VendorTemplate=({children})=>{
    return(
        <>
<VendorHeader/>
       {/* <Tabbar/> */}
       <Menu_bar></Menu_bar>
       {children}
       <Footer/>
        </>
    )
};
export {VendorTemplate};