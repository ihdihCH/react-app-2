import React from "react";
import "./Work.css"
import WorkData from "./WorkData";
import blog1 from "../../assets/blog1.webp"
import blog2 from "../../assets/blog2.webp"
import blog3 from "../../assets/blog3.webp"
const Work =() =>{
    return(
        <div className="work">
            <h1>Our Work</h1>
            <p>Choose Your Favourit Sit Weeb</p>
            <div className="workCard">
                <WorkData
                image={blog1}
                heading="Welcom In my Work"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip"
                />
                <WorkData
                image={blog2}
                heading="Welcom In my Work"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip"
                />
                <WorkData
                image={blog3}
                heading="Welcom In my Work"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip"
                />
            </div>
        </div>
    )
}
export default Work