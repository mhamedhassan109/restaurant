import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from './Footer/Footer'
import NavMenu from './Nav/NavMenu'
function Layout({shoppingCart,deleteHandler,handlerADDQuantity,handlerdecrement}) {
  return (
    <div>
        <NavMenu shoppingCart={shoppingCart} deleteHandler={deleteHandler} handlerADDQuantity={handlerADDQuantity} handlerdecrement={handlerdecrement}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout