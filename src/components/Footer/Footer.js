import "./Footer.css"
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travel</h1>
                    <p>Choose Your Favourit Sit Weeb</p>
                </div>
                <div>
                    <a href="/"><i><BsTwitter/></i></a>
                    <a href="/"><i><ImFacebook/></i></a>
                    <a href="/"><i><AiFillInstagram/></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Travel</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Tourito</a>
                    <a href="/">My Work</a>
                </div>
                <div>
                    <h4>Coummunity</h4>
                    <a href="/">Facebook</a>
                    <a href="/">Git Hup</a>
                    <a href="/">Twitter</a>
                    <a href="/">Instagram</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Work</a>
                    <a href="/">Pop Up</a>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">Travel</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Tourito</a>
                    <a href="/">My Work</a>
                </div>
            </div>
        </div>
    )
}
export default Footer