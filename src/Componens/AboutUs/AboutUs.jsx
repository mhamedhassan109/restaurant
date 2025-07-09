import "./AboutUs.css"
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg from "../../Assets/About USRestrant.avif"
function AboutUs() {
  return (
    <div className="AboutUs">
         <Container>
          <Row className="sectionStory d-flex align-items-center">
              <Col sm="12" lg="6">
              <div className="story">
                <h2>About us</h2>
              </div>
              </Col>
              <Col sm="12" lg="6">
              <div className="text">
                <p>Our story is not just about seafood—it's about people. Our team is like a family, and we extend that warmth and hospitality to every guest who walks through our doors. Whether you're a seafood connoisseur or new to the flavors of the ocean, we invite you to join us for a 
                  dining experience that’s as memorable as the sea itself.</p>
                  <p>Founded with a passion for exceptional cuisine and warm hospitality, our restaurant is dedicated to creating
                     memorable moments for every guest.</p>
              </div>
              </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col sm="12" lg="6">

            <div className="imgAbout">
              <img src={AboutImg} alt='about'/>
            </div>
            
            </Col>
            <Col sm="12" lg="6">
            <div className="textAbout">
              <h2>Sustainability & Responsibility</h2>
              <p>We are dedicated to preserving the oceans and the delicate ecosystems within them.</p>
              <p>Our seafood is responsibly sourced from sustainable fisheries, ensuring that we contribute to the health of marine life for future generations. We partner with suppliers who share our commitment to ethical fishing practices and environmental stewardship.</p>
             
            </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default AboutUs