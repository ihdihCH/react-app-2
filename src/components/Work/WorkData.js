import "./Work.css"

const WorkData =(props) =>{
    return(
        <div className="workDaCard">
            <div className="workImage">
                <img src={props.image} alt="imgName"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default WorkData