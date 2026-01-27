import React from 'react'
import Navbar from '../Navbar'
import Herosection from '../Components/Herosection'
import Chatus from '../Components/Chatus'
import Skills from '../Components/Skills'
import AskedQuestion from '../Components/AskedQuestion'
import Aboutherosection from '../Components/Aboutherosection'
import Aboutusaboutsec from '../Components/Aboutusaboutsec'
import AboutusTeam from '../Components/AboutusTeam'

const About = () => {
  return (
    <div className=''>
      <Aboutherosection />
      <Aboutusaboutsec />
      <Skills />
      <AboutusTeam />
      <AskedQuestion />
      <Chatus />
      
    </div>
  )
}

export default About