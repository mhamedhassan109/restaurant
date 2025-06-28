import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faAngleRight, faG, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Logo from "../../Assets/logo.svg"
function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row>
            <Col sm="12" lg="3">
            <div className="section1">
              <div className="logo"><Link to="/"><img src={Logo} alt="logo" /></Link></div>
              <div className="socailMedia">
               <Link to="/"> <FontAwesomeIcon icon={faFacebook} /></Link>
               <Link to="https://mail.google.com/mail/u/0/#inbox"> <FontAwesomeIcon icon={faG} /></Link>
               <Link to="https://github.com/mhamedhassan109"> <FontAwesomeIcon icon={faGithub} /></Link>
               <Link to="/"> <FontAwesomeIcon icon={faInstagram} /></Link>
              </div>
            </div>
            </Col>

            <Col sm="12" lg="5">
            <div className="section2">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about us</Link>
                </li>
                <li>
                  <Link to="/ourmenu">menu our</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              <div className="contactUs">
                <h5><FontAwesomeIcon icon={faPhoneVolume} /> :1225208683</h5>
                <h6><FontAwesomeIcon icon={faG} /> :mh887315@gmail.com</h6>
              </div>
            </div>
            </Col>

            <Col sm="12" lg="4">
            <div className="section3">
              <h3>Subscribe to newsletters</h3>
              <form action="">
                <input type="email" placeholder="email"/>
                <button><FontAwesomeIcon icon={faAngleRight} /></button>
              </form>
            </div>
            </Col>
        </Row>

        <Row>
          <div className="copyRight">
            <p>© Mohamed Hassan, 2025 - Restaurant Website Project</p>
          </div>
        </Row>
      </Container>
    </div> 
  )
}

export default Footer