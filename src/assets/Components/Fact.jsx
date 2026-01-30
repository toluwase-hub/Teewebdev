import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';


const Fact = () => {

     useEffect(() => {
          ScrollReveal().reveal(".reveal3", {
            distance: "200px",
            duration: 1200,
            easing: "ease-out",
            origin: "bottom",
            interval: 600,
            reset: false,
          });
        }, []);
  return (
    <div className='contains py-15'> 
    <div className='flex flex-col items-center gap-6'>

    
    <h1 className='text-center font-bold text-[#D4A] text-xl lg:text-2xl '>Facts</h1>
    <h1 className='text-center text-2xl lg:text-4xl font-bold text-black/80 '>Facts About Tee Website Coder</h1>
     <div className='border-t-3  border-[#D4A] w-20 '></div>
    </div>
    <div className='grid grid-cols-2 lg:grid-cols-4 mt-15 reveal3'>

        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-5xl font-bold animate-pulse'>5</h1>
            <div className='border-t-3 w-15 border-[#D4A] '></div>
            <h1>Clients</h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
             <h1 className='text-5xl font-bold animate-pulse'>5</h1>
            <div className='border-t-3 w-15 border-[#D4A] '></div>
            <h1>Projects</h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
             <h1 className='text-5xl font-bold animate-pulse'>24</h1>
            <div className='border-t-3 w-15 border-[#D4A] '></div>
            <h1>Hours Of Support</h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
             <h1 className='text-5xl font-bold animate-pulse'>2</h1>
            <div className='border-t-3 w-15 border-[#D4A] '></div>
            <h1>Workers</h1>
        </div>

    </div>
    </div>
  )
}

export default Fact