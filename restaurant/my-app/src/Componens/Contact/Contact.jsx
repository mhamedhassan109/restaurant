import "./Contact.css"
import VideoContact from "../../Assets/7426418-uhd_2560_1080_25fps.mp4"
function Contact() {
  return (
    <div className="Contact">
        <video autoPlay muted loop>
            <source src={VideoContact} />
        </video>
        <div className="form">
            <h2>Contact Us</h2>
            <p>We love hearing from you! Our 'Contact Us' section is the gateway to connecting with culinary oasis.</p>
            <form action="">
                <input type="text" placeholder="full name"/>
                <input type="email" placeholder="email address"/>
                <input type="text" placeholder="contact number"/>
                <input type="text" placeholder="sbject"/>
                <textarea placeholder="message"></textarea>
                <button>submit message</button>
            </form>
        
          </div>
    </div>
  )
}

export default Contact