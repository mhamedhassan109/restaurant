import { Col, Row } from "react-bootstrap"
import "./Serves.css"
import icon1 from "../../Assets/icon1.svg"
import icon2 from "../../Assets/icon2.svg"
import icon3 from "../../Assets/icon3.svg"
import icon4 from "../../Assets/icon4.svg"

function Serves() {
  return (
    <div className="Serves">
        <Row>
            <Col sm="12" lg="3">
                <div className="box">
                    <div className="servesImg">
                        <img src={icon1} alt="serves"/>
                    </div>
                    <div className="servesText">
                        <h3>Custom Menus</h3>
                        <p>Crafted just for you, every dish is a celebration of taste, creativity, and sophistication.</p>
                    </div>
                </div>
                
            </Col>
              <Col sm="12" lg="3">
                <div className="box">
                    <div className="servesImg">
                        <img src={icon2} alt="serves"/>
                    </div>
                    <div className="servesText">
                        <h3>Stress-Free Hosting</h3>
                        <p>Crafted just for you, every dish is a celebration of taste, creativity, and sophistication.</p>
                    </div>
                </div>
                
            </Col>
              <Col sm="12" lg="3">
                <div className="box">
                    <div className="servesImg">
                        <img src={icon3} alt="serves"/>
                    </div>
                    <div className="servesText">
                        <h3>Restaurant-Quality</h3>
                        <p>Crafted just for you, every dish is a celebration of taste, creativity, and sophistication.</p>
                    </div>
                </div>
                
            </Col>
              <Col sm="12" lg="3">
                <div className="box">
                    <div className="servesImg">
                        <img src={icon4} alt="serves"/>
                    </div>
                    <div className="servesText">
                        <h3>Fresh Ingredients</h3>
                        <p>Crafted just for you, every dish is a celebration of taste, creativity, and sophistication.</p>
                    </div>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}

export default Serves