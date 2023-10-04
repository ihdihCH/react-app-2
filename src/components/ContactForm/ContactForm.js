import "./ContactForm.css"

const ContactForm =() =>{
    return(
        <div className="formContainer">
            <h1>Send a messag to Us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}
export default ContactForm