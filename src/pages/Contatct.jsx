import React from 'react'
import Header from '../Componens/Header/Header'
import ContactHero from "../Assets/ContactHero.png"
import Contact from '../Componens/Contact/Contact'
import Serves from '../Componens/Serves/Serves'
function Contatct() {
  return (
    <>
    <Header titlepage="Contatct" mainTitle = "Connect with Us!" imgHero={ContactHero}/>

    <Serves/>

    <Contact/>

     </>
  )
}

export default Contatct