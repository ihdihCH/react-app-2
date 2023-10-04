import React from "react";
import "./Section.css"
import SectionData from "./SectionData";
import Work1 from "../../assets/work1.webp"
import Work2 from "../../assets/work2.webp"
import Work3 from "../../assets/work3.webp"
import Work6 from "../../assets/work6.webp"

const Section = ()=>{
    return(
        <div className="section">
            <h1>Poupelar Work</h1>
            <p>Choose Your Favourit Sit Weeb</p>
            <SectionData 
            className="firstSec"
            heading="Welcom In my portfolio"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip"
            img1={Work1}
            img2={Work2}
            />
            <SectionData
            className="firstSecRes"
            heading="Welcom In my Work"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip"
            img1={Work3}
            img2={Work6}
            />
        </div>
    )
}
export default Section