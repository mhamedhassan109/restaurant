import React from 'react'
import Header from '../Componens/Header/Header'
import AboutHero from "../Assets/aboutHero.png"
import AboutUs from '../Componens/AboutUs/AboutUs'

function About() {
  return (
    <>
    <Header titlepage="about us" mainTitle="our story" imgHero = {AboutHero}  />
  
       <AboutUs/>
   
    </>
  )
}

export default About