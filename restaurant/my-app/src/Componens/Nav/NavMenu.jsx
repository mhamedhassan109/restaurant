import {  Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import CartItem from "../CartItem/CartItem"
import {Link} from "react-router-dom"
import Logo from "../../Assets/logo.svg"

function NavMenu({shoppingCart,deleteHandler,handlerADDQuantity,handlerdecrement}) {
  const [show,setshow] = useState(false)
  const handlerSHow = ()=>{
      if(!show) {
        setshow(true)
        
      }else (
        setshow(false)
      )
  }

  // start reduce function total 

  const total = shoppingCart.reduce((acc , item)=>{
    return acc + item.price * item.Quantity
  },0)
  

// end reduce function total 
  return (
      <Navbar expand="lg" className="navbar ">
      <Container fluid>
        <Navbar.Brand ><Link to="/"><img src={Logo} alt="logo" /></Link></Navbar.Brand>


        <Navbar.Toggle className="bg-light"  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '300px' , color:"white"}}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/ourmenu">our menu</Link>
            <Link to="/contact">contact</Link>
          
            
          </Nav>

          <div className=" d-flex flex-1 ms-auto">
            <div className="icon">
              <span>{shoppingCart.length}</span>
            <FontAwesomeIcon className="carticon"  icon={faCartShopping} onClick={handlerSHow} />
            </div>
           

            {show && (
              <div className="showCart" >
                    <div className="close">
                      <div className="total">total: {total} USD</div>
                      <FontAwesomeIcon onClick={handlerSHow} icon={faXmark} />
                    </div>
                    <div className="cart">
                      {shoppingCart.length > 0 ? (
                        shoppingCart.map((item,index)=>{
                        return(
                            <CartItem key={item.id} item={item} deleteHandler={deleteHandler} index={index}handlerADDQuantity={handlerADDQuantity} handlerdecrement={handlerdecrement}/>
                        )
                      })

                      ) : <h2>no item</h2>}
                      
                    </div>
              </div>
            )}
          </div>
         
        
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
  )
}

export default NavMenu