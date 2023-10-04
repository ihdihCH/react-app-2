import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import bacgkround4 from "../assets/background4.webp"
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
const Service = ()=>{
    return(
        <>
        <Navbar/>
        <Hero
        cName="heroMed"
        heroImg={bacgkround4}
        title="Service"
        btnClass="hide"
        />
        <Work/>
        <Footer/>
        </>
    )
}
export default Service