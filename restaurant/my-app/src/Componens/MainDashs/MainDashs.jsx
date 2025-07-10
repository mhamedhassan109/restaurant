import { Col, Container, Row } from "react-bootstrap"
import "./MainDashs.css"
import { Link } from "react-router-dom"


function MainDashs({CatogryHome,HandlerFilterHome,FilterHome}) {
  return (
    <div className="MainDashs">
        <Container>
              <Row className="section1">
                <Col sm="12" lg="3">

                <div className="Main img1">
                    {FilterHome.length > 0 && (
                         <img src ={FilterHome[0].img} alt="imgMain"/>
                    )}
                  
                </div>
                
                </Col>
                <Col sm="12" lg="6">
                <div className="Main only">
                    {FilterHome.length > 1 && (
                             <img src ={FilterHome[1].img} alt="imgMain"/>
                    )}
                   
                </div>
                </Col>
                <Col sm="12" lg="3">
                <div className="Main img3">
                     {FilterHome.length > 2 && (
                             <img src ={FilterHome[2].img} alt="imgMain"/>
                    )}
                </div>
                </Col>
            </Row>

            <Row className="section2">
                 <Col sm="12" lg="2">
                    <div className="imgMain">
                        {FilterHome.length > 3 && (
                             <img src ={FilterHome[3].img} alt="imgMain"/>
                    )}
                    </div>
                 </Col>
                <Col sm="12" lg="8">
                    <div className="textMain">
                            <h2>{FilterHome.length > 0 && (
                                <h2>{FilterHome[0].catogry}</h2>
                            )}</h2>
                            <p>Essence of the morning feast—a celebration of flavors, aromas, and nourishment crafted to elevate your day from the very start.</p>
                            <button> <Link to="ourmenu">order now</Link> </button>
                    </div>
                </Col>
                <Col sm="12" lg="2">
                     <div className="imgMain">
                        {FilterHome.length > 4 && (
                             <img src ={FilterHome[4].img} alt="imgMain"/>
                    )}
                     </div>
                </Col>
            </Row>
           

               <Row>
                <Col sm="12" lg="12">
                    <div className="catogry">
                       {CatogryHome.map((button)=>{
                        return(
                            <button onClick={()=>HandlerFilterHome(button)}>{button} menu</button>
                        )
                       })}
                    </div>
                </Col>
                
            </Row>
          
        </Container>
    </div>
  )
}

export default MainDashs