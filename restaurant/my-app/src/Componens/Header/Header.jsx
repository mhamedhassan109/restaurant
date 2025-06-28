import { Col, Row } from "react-bootstrap"
import "./Header.css"
import ButtonHero from "./ButtonHero"


function Header({titlepage,mainTitle,imgHero}) {
  return (
   <div className="Header">
      
     
      <Row>
        <div className="hero">
       
        <div className="textHero">
        
         <h5>{titlepage}</h5>
          
        <h2 className="mainTitle">{mainTitle}</h2>
         

          <p>Sustenance and delight—a journey through culinary landscapes where each dish 
            narrates a unique tale.</p>
          <div className="buttonHero">
            <ButtonHero/>
          </div>
        </div>
         <div className="imgHero">
        <img src={imgHero} alt="hero"/>
         
         </div>
      </div>
      </Row>
    
    </div>
  )
}

export default Header