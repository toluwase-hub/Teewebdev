import React from 'react'
import Herosection from '../Components/Herosection'
import About from '../Components/About'
import Fact from '../Components/Fact'
import Skills from '../Components/Skills'
import Mission from '../Components/Mission'
import Service from '../Components/Service'
import AskedQuestion from '../Components/AskedQuestion'
import Chatus from '../Components/Chatus'
import Loading from '../Components/Loading'

const Home = () => {
  return (
    <>
    <Herosection />
    
    <About />
    <Fact />
    <Mission />
    <Skills />
    <Service />
    <AskedQuestion />
    <Chatus />
    </>
    
  )
}

export default Home