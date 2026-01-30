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
  
  return (
   <>
    <BrowserRouter>
    
         
        <Navbar />
       
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/About' Component={About} />
          <Route path='/Ourservice' Component={Ourservice} />
          <Route path='/Contact' Component={Contact} />
    
        </Routes>
         
          <Footer />
          {/* <Loading /> */}

          <Backtotop />
          <Whatsappicon />

        </BrowserRouter>


   </>
  )
}

export default App
