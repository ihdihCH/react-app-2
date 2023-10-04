import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import bacgkround2 from "../assets/background2.webp"
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";
const About = ()=>{
    return(
        <>
        <Navbar/>
        <Hero
        cName="heroMed"
        heroImg={bacgkround2}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default About