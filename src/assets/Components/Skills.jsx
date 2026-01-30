import React, { useEffect } from 'react'
const vitelogo = '/vite.svg'
const reactlogo = '/images/react.svg'
import ScrollReveal from 'scrollreveal'

const Skills = () => {

       useEffect(() => {
            ScrollReveal().reveal(".reveal6", {
              distance: "500px",
              duration: 1200,
              easing: "ease-out",
              origin: "bottom",
              interval: 600,
              reset: false,
            });
          }, []);
  return (
    <div className='bg-black/10'>
      <div className='py-20 contains'>
      <h1 className='text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2 '>
            Our Skills
        </h1>
        <div className='flex flex-col  items-center gap-6 reveal6'>
            <h1 className='text-2xl lg:text-4xl font-bold text-black/80 text-center'> Tee Website Coder Skills</h1>
            <div className='border-t-3  border-[#D4A] w-20 '></div>
            <h1 className='text-center'>We are highly proficient in HTML, CSS, Javascript,Bootstrap, Tailwind CSS, React JS.</h1>
        </div>  


        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 pt-15 reveal6'>

            <div className='flex flex-col justify-center items-center '>
                  <img src="/images/html (1).png" alt="" className='w-20 h-20 object-cover hover:rotate-y-180 transition-all duration-500  ' />
                  <p className='font-bold py-3'>HTML</p>
            </div>

            <div  className='flex flex-col justify-center items-center '>
                  <img src="/images/css-3.png" alt="" className='w-20 h-20 object-cover hover:rotate-y-180 transition-all duration-500' />
                  <p className='font-bold py-3'>CSS</p>
            </div>

            <div className='flex flex-col justify-center items-center '>
                  <img src="/images/java-script.png" alt="" className='w-20 h-20 object-cover hover:rotate-y-180 transition-all duration-500' />
                  <p className='font-bold py-3'>JAVA SCRIPT</p>
            </div>

            <div className='flex flex-col justify-center items-center '>
                  <img src="/images/bootstrap.png" alt="" className='w-20 h-20 object-cover hover:rotate-y-180 transition-all duration-500' />
                  <p className='font-bold py-3'>BOOTSTRAP</p>
            </div>

            <div className='flex flex-col justify-center items-center '>
                  <img src="/images/tailwind-csslgo.png" alt="" className='w-20 h-20 object-contain hover:rotate-y-180 transition-all duration-500' />
                  <p className='font-bold py-3'>TAILWIND</p>
            </div>

            <div className='flex flex-col justify-center items-center '>
                  <img src={vitelogo} alt="" className='w-20 h-20 object-cover hover:rotate-y-180 transition-all duration-500'/>
                  <p className='font-bold py-3'>VITE</p>
            </div>


            <div className='flex flex-col justify-center items-center '>
                  <img src={reactlogo} alt="" className='w-20 h-20 object-contain hover:rotate-y-180 transition-all duration-500'/>
                  <p className='font-bold py-3'>REACT</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Skills