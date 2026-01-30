import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const Aboutusaboutsec = () => {

     useEffect(() => {
          ScrollReveal().reveal(".reveal11", {
            distance: "500px",
            duration: 1200,
            easing: "ease-out",
            origin: "left",
            interval: 600,
            reset: false,
          });
        }, []);

         useEffect(() => {
      ScrollReveal().reveal(".reveal12", {
        distance: "500px",
        duration: 1200,
        easing: "ease-out",
        origin: "right",
        interval: 600,
        reset: false,
      });
    }, []);
  return (
    <div className='contains py-20'>


      <h1 className='text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2'>
            Our Story   
        </h1>
        <div className='flex flex-col  items-center gap-6'>
            <h1 className='text-2xl lg:text-4xl font-bold text-black/80 text-center'>About tee Website Coder</h1>
            <div className='border-t-3  border-[#D4A] w-20 '></div>
        </div>  


        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 items-center mt-15' >

            <div className='reveal11'>
                <p className=''>
                   <span>📌</span> <span>My name is <span className='font-bold text-[#D4A] underline'>Olaniyi Toluwase</span>, a passionate Frontend Developer with over one year of hands-on experience in the tech industry. I specialize in creating visually appealing, responsive, and user-friendly web interfaces that deliver seamless user experiences. My journey into web development has been driven by curiosity, creativity, and a strong desire to build products that make an impact.</span>
                </p> <br />
                <p>
                   📌 Over the past year, I have developed a solid foundation in core web technologies including HTML, CSS, and JavaScript. I focus on writing clean, maintainable code while ensuring that websites are accessible, performant, and optimized across all devices and browsers. Attention to detail and consistency are key principles in my development process.
                </p> <br />
                <p>
                   📌 I am experienced in using modern styling frameworks such as Bootstrap and Tailwind CSS, which allow me to efficiently design responsive layouts while maintaining flexibility and customization. These tools help me bring designs to life quickly without compromising on quality or performance.
                </p> <br />
                <p>
                   📌 In addition, I work with React.js to build dynamic, component-based user interfaces. I enjoy breaking down complex problems into reusable components and continuously improving my skills by learning best practices in modern frontend development. React has enabled me to create scalable and interactive web applications that enhance user engagement.
                </p> <br />
                <p>
                   📌 As a frontend developer, I am committed to continuous learning and growth in the ever-evolving tech space. I enjoy collaborating with others, exploring new technologies, and refining my craft with every project. My goal is to create meaningful digital experiences while growing into a highly skilled and impactful web developer.
                </p>
            </div>
            <div className='reveal12'>
                <img src="/images/aboutside.jpg" className='object-cover w-full lg:w-150 h-100  rounded-3xl ' alt="" />
            </div>


        </div> 
    </div>
  )
}

export default Aboutusaboutsec