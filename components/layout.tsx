import { NextComponentType, NextPageContext } from "next";
import Footer from "./footer";
import Nav from "./nav";

type props = {
    children:any 
}

export default function Layout({children}:props){
    return(
        <>
        
        <Nav/>
        <main>{children}</main>
        <Footer/>
        </>
        );
}