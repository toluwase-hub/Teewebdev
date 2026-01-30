import React, { useEffect } from "react";
import { PiUserFocus } from "react-icons/pi";
import { HiHomeModern } from "react-icons/hi2";
import { MdOutlineCleaningServices } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { SiHyperskill } from "react-icons/si";
import { FcCollaboration } from "react-icons/fc";
import { GiCrystalGrowth } from "react-icons/gi";
import ScrollReveal from "scrollreveal";

const Service = () => {

   useEffect(() => {
        ScrollReveal().reveal(".reveal7", {
          distance: "100px",
          duration: 1000,
          easing: "ease-out",
          origin: "bottom",
          interval: 150,
          reset: false,
        });
      }, []);
  return (
    <div className="bg-[url(/images/fixedbackgroundpics.jpg)] bg-no-repeat bg-center bg-cover bg-fixed w-screen relative">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="contains py-5 relative">
        <div className="mt-6 contains lg:py-6 py-5">
          <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
            WHAT WE DO
          </h1>
          <div className="flex flex-col  items-center gap-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
              Tee Website Coder Services
            </h1>
            <div className="border-t-3  border-[#D4A] w-20 "></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
          <div className="  bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-blue-300 :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-blue-600 py-2 px-2 rounded-2xl">
                <HiHomeModern size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  Modern & Intuitive Interfaces
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  I specialize in building modern, responsive user interfaces
                  that bring ideas to life on the web. My focus is on creating
                  visually appealing layouts that not only look great but also
                  feel intuitive and effortless for users.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-red-300 :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-red-600 py-2 px-2 rounded-2xl">
                <MdOutlineCleaningServices size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  Clean & Scalable Frontend Development
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  I develop clean, maintainable frontend code using modern
                  technologies and best practices. By writing well-structured
                  and scalable code, I ensure that your website is fast,
                  reliable, and easy to extend as your business grows.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-[#D4A]  :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-[#f80faa]  py-2 px-2 rounded-2xl">
                <DiResponsive size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  Fully Responsive Design
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  Responsive design is at the core of my work. I make sure your
                  website looks and functions perfectly on all screen sizes—from
                  mobile devices to large desktop displays. This approach
                  guarantees a consistent user experience.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-green-300 :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-green-600 py-2 px-2 rounded-2xl">
                <SiHyperskill size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  User-Centered Experience & Interactions
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  I place a strong emphasis on user experience (UX) and
                  interaction design. Smooth animations, thoughtful transitions,
                  and clear navigation help guide users naturally through your
                  content.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-blue-300 :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-blue-600 py-2 px-2 rounded-2xl">
                <FcCollaboration size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  Collaborative & Flexible Workflow
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  Collaboration and communication are essential parts of my
                  workflow. I work closely with designers, backend developers,
                  or clients to turn concepts into fully functional interfaces.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-3xl py-5 px-5 shadow-2xl group hover:bg-white/25 transition-all duration-300 hover:border border-yellow-300 :">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white transition-all duration-300 group-hover:scale-110 bg-yellow-600 py-2 px-2 rounded-2xl">
                <GiCrystalGrowth size={50} />
              </div>
              <div className="reveal7">
                <h1 className="text-3xl font-bold text-center text-white/90">
                  Quality, Reliability & Continuous Growth
                </h1>
              </div>
              <div>
                <h1 className="text-white/90 reveal7">
                  Above all, I am committed to delivering high-quality results
                  that add real value. I take pride in meeting deadlines, paying
                  attention to detail, and continuously improving my skills to
                  stay up to date with the latest frontend trends.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
