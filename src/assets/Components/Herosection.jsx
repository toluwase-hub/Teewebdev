import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Herosection = () => {

    // chat us on whatsapp link
     const PhoneNumber = "+2349043933210";
  const message =
    "Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!";
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;

//   chatus on email link

    const emailaddress = "Olaniyitoluwase799@gmail.com";
    const subject = "Hello Dev Tee";

    const mailtolink = `mailto:${emailaddress}?subject=${subject}`;

  return (
    <>
    <div className='relative  '> 

    <img src="/images/mainheroback.jpg" className=' w-screen h-140 lg:h-170 object-cover' alt="" />
   
     <div className="absolute inset-0 bg-black/80"></div>
      <div className="contains absolute inset-0   items-center   flex justify-between    gap-20 text-white leading-relaxed">
            <div className='mt-8 '>
            <h1 className='text-7xl font-medium lg:font-bold' > TEE  <span className='italic text-[#D4A] '>WEBSITE <br /></span> CODER </h1>
            <h5 className='text-xl lg:text-2xl py-3'>
                We Are The Best <span>let Handle Your </span> <span className='font-bold'>Website</span> Design and, development For You.
            </h5>

                <div className='flex  gap-5 mt-4 lg:mt-8'>
                   <a href={mailtolink}><button className=' p-2 px-4 py-3 rounded-md bg-[#D4A] font-bold '><span className='flex items-center gap-2'>
                        <span><MdOutlineMail /></span><span>Email</span>
                        </span></button>
                        </a>
                    <a href={whatsappurl} ><button className='px-4 bg-green-600 p-2 py-3 rounded-md font-bold'><span  className='flex items-center gap-2'>
                        <span><FaWhatsapp /></span>Whatsapp<span></span>
                        </span></button>
                        </a>
                </div>
            </div>
            <div className='hidden lg:flex animate-pulse'>
                <img src="/images/subheropic.jpg" className='w-150 h-80 rounded-2xl object-cover' alt="" />
            </div>
      </div>
      </div>
    </>
  )
}

export default Herosection