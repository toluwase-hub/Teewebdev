import React from 'react'
import Navbar from '../Navbar'
import Herosection from '../Components/Herosection'
import Chatus from '../Components/Chatus'
import Skills from '../Components/Skills'
import AskedQuestion from '../Components/AskedQuestion'
import Aboutherosection from '../Components/Aboutherosection'
import Aboutusaboutsec from '../Components/Aboutusaboutsec'
import AboutusTeam from '../Components/AboutusTeam'
import Loading from '../Components/Loading'

const About = () => {
  return (
    <div className=''>
      <Aboutherosection />
      <Aboutusaboutsec />
      <Skills />
      <AboutusTeam />
      <AskedQuestion />
      <Chatus />
      {/* <Loading /> */}
      
    </div>
  )
}

export default About