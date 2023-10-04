import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import bacgkround3 from "../assets/background3.webp"
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
const Contact = ()=>{
    return(
        <>
        <Navbar/>
        <Hero
        cName="heroMed"
        heroImg={bacgkround3}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact