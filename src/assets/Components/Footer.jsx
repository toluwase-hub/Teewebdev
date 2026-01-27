import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {

     const PhoneNumber = "+2349043933210";
  const message =
    "Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!";
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;
  return (
    <div className='bg-[url(/images/fixedbackgroundpics.jpg)] bg-no-repeat bg-center bg-cover bg-fixed w-screen relative text-white py-10'>
        <div className='bg-black/70 absolute inset-0'></div>

    <div className='contains relative grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 bg-white/20 px-6 py-5 pt-8 rounded-3xl'>

    <div className='lg:col-span-1 md:col-span-1 col-span-2 flex flex-col gap-4'>
        <div>
            <h1 className='text-2xl font-medium'>TEE WEBSITE CODER</h1>

            <div className='flex gap-2 py-3 text-white/80'>
                <div className='hover:text-[#D4A]'>< FaTwitter size={15}/></div>
                <div className='hover:text-[#D4A]'>< CiFacebook size={15}/></div>
                <div className='hover:text-[#D4A]'> < FaLinkedin size={15}/></div>
                <div className='hover:text-[#D4A]'>< FaInstagram size={15}/></div>
                <div className='hover:text-[#D4A]'>< FaTiktok size={15}/></div>
            </div>
        </div>

        <div>
            <h1>
                Frontend Web Developer Crafting clean and responsive web experiences.
            </h1>
        </div>
    </div>

    <div>

        <div className='mb-2'>
            <h1 className='font-bold text-lg'>Quick Links</h1>
            <div className='border-t-2  border-[#D4A] w-20 '></div>
        </div>

        <div>
            <ul className='flex flex-col gap-1'>
               <Link to="/"><li className='hover:underline hover:text-[#f709cf] '>Home</li></Link>
               <Link to="/About"><li className='hover:underline hover:text-[#f709cf] '>About</li></Link>  
               <Link to="/Ourservice"><li className='hover:underline hover:text-[#f709cf] '>Services</li></Link> 
                <Link to="/Contact"><li className='hover:underline hover:text-[#f709cf] '>Contact</li></Link>

            </ul>
        </div>
    </div>

    <div>

        <div className='mb-2'>
            <h1 className='font-bold text-lg'>Skills</h1>
            <div className='border-t-2  border-[#D4A] w-20 '></div>
        </div>

        <div>
            <ul className='flex flex-col gap-1'>
                <li className='hover:underline hover:text-[#f709cf] '>HTML&CSS</li>
                <li className='hover:underline hover:text-[#f709cf] '>JavaScript</li>
                <li className='hover:underline hover:text-[#f709cf] '>React.js</li>
                <li className='hover:underline hover:text-[#f709cf] '>Responsive Design</li>
            </ul>
        </div>
    </div>


    <div>

        <div className='mb-2'>
            <h1 className='font-bold text-lg'>Resources</h1>
            <div className='border-t-2  border-[#D4A] w-20 '></div>
        </div>

        <div>
            <ul className='flex flex-col gap-1'>
                <li className='hover:underline hover:text-[#f709cf] '>GitHub</li>
                <li className='hover:underline hover:text-[#f709cf] '>Dribble</li>
                <li className='hover:underline hover:text-[#f709cf] '>CodePen</li>
                <li className='hover:underline hover:text-[#f709cf] '>LinkeDin</li>
            </ul>
        </div>
    </div>
    

    <div>

        <div className='mb-2'>
            <h1 className='font-bold text-lg'>Connect</h1>
            <div className='border-t-2  border-[#D4A] w-20 '></div>
        </div>

        <div>
            <ul className='flex flex-col gap-1'>
                <li className='hover:underline hover:text-[#f709cf] '>Twitter</li>
                <li className='hover:underline hover:text-[#f709cf] '>Instagram</li>
                <li className='hover:underline hover:text-[#f709cf] '>Tiktok</li>
                <li className='hover:underline hover:text-[#f709cf] '>Facebook</li>
                <li className='hover:underline hover:text-[#f709cf] '><a href={whatsappurl}>WhatsApp</a></li>

            </ul>
        </div>
    </div>


    </div>

    <h1 className='text-center font-light text-sm relative pt-5'>
        © 2026 <span>Tee Website Coder</span>. All rights reserved.
    </h1>

    </div>
  )
}

export default Footer