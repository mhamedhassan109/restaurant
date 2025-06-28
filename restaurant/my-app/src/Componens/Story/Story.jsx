import { Col, Container, Row } from "react-bootstrap"
import "./Story.css"
import story1 from "../../Assets/place.jpg"
import Stort2 from "../../Assets/papper.jpg"
import story3 from "../../Assets/fire.jpg"
import { Link } from "react-router-dom"


function Story() {
  return (
    <div className="Story">
        <Container>
            <Row >
               <div className="HeddingStory">
                 <h6>story</h6>
                <h2>In 2025, our company's journey <br/> commenced.</h2>
                <p>What began as a humble endeavour has blossomed into a celebration of flavours, an expedition through tastes and traditions.</p>
                </div>
                <Col sm ="12" lg="5">

                <div className="restorantPlace">
                    <img src ={story1} alt="story"/>
                </div>
                
                </Col>
                <Col sm ="12" lg="7">
                <div className="storyText">
                    <h2>About us</h2>
                    <p>
                        Achievement, and every milestone resonates with the spirit of our journey. Embark with us on this narrative of perseverance and accomplishment, where each chapter unfolds the stories 
                        behind our victories and the essence of our unwavering determination.
                     </p>
                     <button><Link to="/about">get About</Link></button>

                </div>
                <div className="storyphoto">
                   <div className="story1">
                     <img src={Stort2} alt="story 2"/>
                   </div>
                   <div className="story2">
                     <img src={story3} alt="story 3"/>
                   </div>
                   
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Story