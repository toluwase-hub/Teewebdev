import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdCleaningServices } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Aboutherosection = () => {
  return (
    <>
    <div className='relative  '> 

    <img src="/images/mainheroback.jpg" className=' w-screen h-140 lg:h-170 object-cover' alt="" />
   
     <div className="absolute inset-0 bg-black/80"></div>
      <div className="contains absolute inset-0   items-center   flex justify-between    gap-20 text-white leading-relaxed">
            <div className='mt-8 '>
            <h1 className='text-6xl lg:text-7xl font-medium lg:font-bold' >ABOUT TEE  <span className='italic text-[#D4A] '>WEBSITE <br /></span> CODER </h1>
            <h5 className='text-xl lg:text-2xl py-3'>
                 <span>Specializing in clean code, modern </span> <span className='font-bold'>frameworks</span> , and seamless user experiences.
            </h5>

                <div className='flex  gap-5 mt-4 lg:mt-8'>
                    <button className=' p-2 px-4 py-3 rounded-md bg-[#D4A] font-bold '><span className='flex items-center gap-2'>
                        <Link to="/Ourservice"><span className='flex items-center gap-2'><span><MdCleaningServices /></span><span>Our Service</span></span></Link>
                        </span></button>
                    <button className='px-4 bg-green-600 p-2 rounded-md font-bold'><span  className='flex items-center gap-2'>
                       <Link to="/Contact"><span className='flex items-center gap-2'> <span><FiPhoneCall /></span>Contact us<span></span> </span></Link>
                        </span></button>
                </div>
            </div>
            <div className='hidden lg:flex animate-pulse'>
                <img src="/images/Aboutherosection.jpg" className='w-150 h-80 rounded-2xl object-cover' alt="" />
            </div>
      </div>
      </div>
    </>
  )
}

export default Aboutherosection