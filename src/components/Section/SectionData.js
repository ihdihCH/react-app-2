import { Component } from "react";
import "./Section.css"

class SectionData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="secText">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image">
                <img src={this.props.img1} alt="ImgName"/>
                <img src={this.props.img2} alt="ImgName"/>
            </div>
        </div>
        )
    }
}
export default SectionData