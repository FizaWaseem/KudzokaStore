import { Grid } from "@material-ui/core";
import React from "react";
import Layout from "../../pages/Layout/Layout";
import { Sidebar } from "../../pages/Sidebar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import classes from './Template.module.css';
const Template=({children})=>{
    return(
        <>
       <Header/>
       <Sidebar>
       {children}
       </Sidebar>
       <Footer/>
        </>
    )
};
export {Template};