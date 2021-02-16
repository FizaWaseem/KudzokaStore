import { Grid } from "@material-ui/core";
import React from "react";
import Layout from "../../pages/Layout/Layout";
import { Sidebar } from "../../pages/Sidebar";
import { Footer } from "./Footer";
import { Header } from "./Header";

const MainTemplate=({children})=>{
    return(
        <>
       <Header/>
       {children}
       <Footer/>
        </>
    )
};
export {MainTemplate};