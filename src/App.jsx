import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Backtotop from './assets/Components/Backtotop'
import Home from './assets/routes/Home'
import About from './assets/routes/About'
import Ourservice from './assets/routes/Ourservice'
import Contact from './assets/routes/Contact'
import Footer from './assets/Components/Footer'
import Whatsappicon from './assets/Components/Whatsappicon'
import Loading from './assets/Components/Loading'






function App() {

  const Tops = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const comingSoon = () => {
    alert('Coming Soon !!!')
  }
  
  return (
   <>
  
    
    
         
        <Navbar comingSoon={comingSoon} />
       
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Ourservice' element={<Ourservice comingSoon={comingSoon} />}  />
          <Route path='/Contact' element={<Contact />} />
    
        </Routes>
        
         
          <Footer Tops={Tops} />
          {/* <Loading /> */}

          <Backtotop />
          <Whatsappicon />

       


   </>
  )
}

export default App
