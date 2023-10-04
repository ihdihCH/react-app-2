import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import bacgkround from "../assets/background1.webp"
import Section from "../components/Section/Section";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
const Home = ()=>{
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={bacgkround}
        title="Welcoom In Portfolio Website"
        text="Choose Your Favourit Sit Weeb"
        buttonText="Read More"
        url="/"
        btnClass="show"
        /> 
        <Section/>
        <Work/>
        <Footer/>
        </>
    )
}
export default Home