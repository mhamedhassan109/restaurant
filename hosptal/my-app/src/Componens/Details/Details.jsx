import { Col, Row } from "react-bootstrap";
import "./Datels.css";
import img1 from "../../Assits/team-1.jpg"


function Details() {
  return (
    <div className="Details">
       <Row>
        <Col sm="12" lg="6">
            <div className="imgDeteles">
                <img src={img1} alt="img detales"/>
            </div>
        </Col>
         <Col sm="12" lg="6">
            <div className="textDeteles">
                <h5>surgeon</h5>
                <h2>Dr. David Lee</h2>
                <p>
                    Dr. David Lee is a highly accomplished and compassionate physician, serving 
                    as our Chief Medical Officer. With over 20 years of experience in various medical specialties, 
                    Dr.David Lee brings a wealth of knowledge and expertise to our healthcare team.
                    </p>
                    <div className="iconDeyales">
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    
            </div>
        </Col>
       </Row>


       <Row>
        <Col sm ="12" lg="7">
        <div className="surgeon">
            <h4>surgeon</h4>
            <h2>Dr. David Lee</h2>
            <p>
                As a board-certified physician, Dr. David Lee has a profound 
                commitment to delivering exceptional healthcare services. Her leadership and strategic 
                vision have been instrumental in shaping our medical facility into a center of excellence.
                </p>
                <br/>
                <p>Patients appreciate her warm bedside manner, 
                    and she takes the time to listen to their concerns, ensuring that each 
                    individual receives personalized care tailored to their unique needs. Under Dr. 
                    David Lee’ guidance, our medical team continues to provide outstanding medical care.
                    </p>
                    <div className="iconSurgeon">
                        <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-instagram"></i>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
        </div>
        <div className="service">
             <h4>service</h4>
            <h2>My Service</h2>
            <div className="boxService">
                <div className="part1">
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>mental health solutions</h3>
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>world class treatment</h3>
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>medical advices & check Ups</h3>
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>emergency help available 24/7</h3>
                </div>
                <div className="part2">
                      <h3><span><i class="fa-solid fa-circle-check"></i></span>rapid patient improvement</h3>
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>medical research professionals</h3>
                    <h3><span><i class="fa-solid fa-circle-check"></i></span>trusted medical treatment</h3>
                </div>
            </div>
        </div>

        <div className="pediatrician">
              <h4>pediatrician</h4>
            <h2>Maria Andaloro</h2>
            <div className="boxPediatrician">
                <div className="iconPediatrician"><i class="fa-solid fa-graduation-cap"></i></div>
                <div className="textPediatrician">
                    <h5>MBBS</h5>
                    <p>Passing Year is 2012 Royal College of Surgeons of Harvard</p>
                </div>

                </div>

                <div className="boxPediatrician">
                <div className="iconPediatrician"><i class="fa-solid fa-graduation-cap"></i></div>
                <div className="textPediatrician">
                    <h5>BHMS</h5>
                    <p>Passing Year is 2017 <br/> esteemed University</p>
                </div>
            </div>
        
        </div>


        <div className="skills">
             <h4>skills</h4>
            <h2>My skill</h2>

            <h6>clinical diagnosis</h6>
            <div className="slider" style={{"--width":"90%"}}>
            </div>
             <h6>surgical expertise</h6>
            <div className="slider" style={{"--width":"40%"}}></div>
             <h6>public health knowledge</h6>
            <div className="slider" style={{"--width":"70%"}}></div>
        </div>
        </Col>

        <Col sm ="12" lg="5">
        <div className="opening">
            <div className="iconTime"><i class="fa-solid fa-clock"></i></div>
            <h2>opening hours</h2>
            <div className="boxTime">
                <div className="day">
                    <h5>Monday - Friday</h5>
                    <h5>Saturday</h5>
                    <h5>Sunday</h5>
                </div>
                <div className="hour">
                    <h5>8:00 - 7:00 pm</h5>
                    <h5>9:00 - 8.00 pm</h5>
                    <h5>10:00 - 9.00 pm</h5>
                </div>
            </div>
        </div>
        </Col>
       </Row>
      
    </div>
  )
}

export default Details