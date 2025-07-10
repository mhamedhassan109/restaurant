import React from 'react'
import Header from '../Componens/Header/Header'
import HomeHero from "../Assets/homeHero.png"
import Contact from '../Componens/Contact/Contact'
import Serves from '../Componens/Serves/Serves'
import Story from '../Componens/Story/Story'
import MainDashs from '../Componens/MainDashs/MainDashs'

function Home({CatogryHome,HandlerFilterHome,FilterHome}) {
  return (
    <>
    <Header titlepage = "home" mainTitle="Healthy & Tasty food." imgHero={HomeHero}/>
    <Serves/>

     <Story/>

     <MainDashs CatogryHome={CatogryHome} HandlerFilterHome={HandlerFilterHome} FilterHome={FilterHome}/>
  
    <Contact/>
   

    </>
  )
}

export default Home