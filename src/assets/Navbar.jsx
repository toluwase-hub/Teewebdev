import React, { useEffect, useState } from "react";
import { GoMultiSelect } from "react-icons/go";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  // const Navlinks = ({ isActive }) =>
  //   isActive ? "text-white/80" : "text-white";

  const [Show, setShow] = useState(false);

  // useState for desktop drop
  const [Service, setService] = useState(false);

  // usestate for mobile dropdown
  const [Services, setServices] = useState(false);

  const HandleService = () => {
    setServices(false);
  };

  // function to close the nav bar anytime any of the link is clicked
  const HandleCloseOnLink = ()=> {
    setShow(false)
  }

  // generating local time
  const [time, setTime] = useState('');

  useEffect(()=>{
      const timer = setInterval(() => {
        const nigeriaTime = new Date().toLocaleString('en-NG',{
          timeZone: 'Africa/Lagos',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        });
        setTime(nigeriaTime);
      }, 1000);
      return () => clearInterval(timer);
  },[]);

  let Message;

  if (time < 12){
    Message = "Good Morning ☁️"
  } else if (time == 12 && time < 16){
    Message = "Good Afternoon 🌤️ "
  } else {
    Message = "Good Evening 🌙"
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Desktop Nav */}

      <div className=" border-b-3 border-white/50 w-screen shadow-xl">
        <nav className="flex items-center contains justify-between  px-1 py-3">
          <div className="text-[#D4A]">
            <span className="text-">
              {" "}
              <span className="italic text-5xl font-bold">T</span> <span></span>
              ee
            </span>
            <span className="font-bold animate-pulse ">Web</span>
            <span>Coder</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
           <NavLink to="/"
           
           className={({isActive}) =>
           isActive ? "text-[#D4A]" : "text-black/70"}>
            <li
              className={`cursor-pointer hover:text-[#D4A]  `}
            >
              Home
            </li>
            </NavLink>
            <NavLink to="/About"
            className={({isActive}) =>
           isActive ? "text-[#D4A]" : "text-black/70"}>
            <li className=" hover:text-[#D4A]  cursor-pointer  flex items-center gap-2 relative  ">
              
                {" "}
                <span
                  className={`flex gap-1 justify-center items-center `}
                >
                  <span>About Us</span>
                </span>
              
            </li>
            </NavLink>

            <li
              className="hover:text-[#D4A] cursor-pointer  text-black/70  flex items-center  relative gap-2 "
              onMouseOver={() => setService(true)}
              onMouseOut={() => setService(false)}
            >
              <span className="flex gap-1  justify-center items-center  ">
                <span>Our service</span>
                <span className="mt-1 transition-all duration-500">
                  {
                    <IoIosArrowUp
                      className={`${
                        Service ? "" : "rotate-180"
                      } transition-all duration-300`}
                    />
                  }
                </span>
              </span>
              <div
                className={`absolute bg-white shadow-xl overflow-hidden rounded-md top-14 z-40 w-50 transition-all duration-400 text-black-70 px-2   ${
                  Service ? "max-h-200" : "max-h-0"
                }`}
              >
                <ul className="">
                 <NavLink to="/Ourservice"
                 className={({isActive}) =>
           isActive ? "text-[#D4A]" : "text-black/70"}>
                  <li className="hover:text-[#D4A]  border-b indent-3 py-2   border-black/20">
                    {" "}
                    FrontEnd Design
                  </li>
                  </NavLink>

                  <li className="hover:text-[#D4A]  py-2 indent-3 border-t  border-white/40 text-black/70 ">
                    BackEnd Design
                  </li>
                </ul>
              </div>
            </li>
            <NavLink to="/Contact"
            className={({isActive}) =>
           isActive ? "text-[#D4A]" : "text-black/70"}>
            <li className="hover:text-[#D4A]  cursor-pointer    flex items-center gap-2">
              
                {" "}
                <span className="flex  gap-1 justify-center items-center">
                  <span>Contact Us</span>
                </span>
              
            </li>
            </NavLink>
          </ul>

          <div className="font-light text-xs text-[#D4A]">
            {Message} 
            
          </div>

          {/* Desktop Button */}

          <div className="flex gap-5">
            <div className="">
             <Link to="/Ourservice"> <span className="text-[#D4a] hover:text-[#e2149d]">
                <FaCode size={25} className="animate-spin " />
              </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="showbutton"
              className="lg:hidden transition-all text-[#D4A] "
              onClick={() => setShow(!Show)}
            >
              {Show ? (
                <MdOutlineCancelPresentation size={26} />
              ) : (
                <AiOutlineMenu size={26} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* <ClickAwayListener onClickAway={Handleclosesidebar} > */}

      <div
        id="sidebar"
        className={` bg-black/80    lg:hidden  transition-all duration-500 ease-in-out right-0   z-50 w-full h-screen absolute overflow-y-scroll scrollbar-hide
    ${Show ? " block  " : " hidden "}
  `}
      >
        <div className="bg-white w-[90%] rounded-2xl mx-auto mt-3">
          <ul className="flex flex-col gap-4 p-6  pl-7">
            <NavLink to="/"
            className={({isActive}) =>
           isActive ? "text-[#D4A] bg-[#f1e3ed] " : "text-black/70"}><li className=" cursor-pointer hover:text-[#D4A] hover:bg-[#f1e3ed]  px-1 " 
            onClick={HandleCloseOnLink}
            >
              Home
            </li>
            </NavLink>

          <NavLink to="/About"
          className={({isActive}) =>
           isActive ? "text-[#D4A] bg-[#f1e3ed] " : "text-black/70"}>
            <li className="hover:text-[#D4A]  cursor-pointer flex items-center gap-2 relative hover:bg-[#f1e3ed] rounded px-1 "
             onClick={HandleCloseOnLink}
             >
              
                {" "}
                <span className="flex gap-1 justify-center items-center">
                  <span>About Us</span>
                </span>
              
            </li>
            </NavLink>
            <ClickAwayListener onClickAway={HandleService}>
              <li
                className="hover:text-[#D4A] hover:bg-[#f1e3ed] rounded px-1  cursor-pointer flex flex-col items-start  relative gap-2 "
                onClick={() => setServices(!Services)}
              >
                <span className="flex gap-1  justify-center items-center  ">
                  <span>Our service</span>
                  <span className="mt-1 transition-all duration-500">
                    {
                      <IoIosArrowUp
                        className={`${
                          Services ? "" : "rotate-180"
                        } transition-all duration-300`}
                      />
                    }
                  </span>
                </span>
                <div
                  className={`  bg-white shadow-xl  rounded-md overflow-hidden px-2  w-50 transition-all duration-400   ${
                    Services ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <ul className="">
                   <NavLink to="/Ourservice"
                   className={({isActive}) =>
           isActive ? "text-[#D4A] " : "text-black/70"}>
                    <li className="hover:text-[#D4A]  border-b indent-3 py-2   border-black/20"
                     onClick={HandleCloseOnLink}
                     >
                      {" "}
                      FrontEnd Design
                    </li>
                    </NavLink>

                    <li className="hover:text-[#D4A]  py-2 indent-3 border-t  border-white/40 text-black/70 "
                     onClick={HandleCloseOnLink}
                     >
                      BackEnd Design
                    </li>
                  </ul>
                </div>
              </li>
            </ClickAwayListener>
            <NavLink to="/Contact"
            className={({isActive}) =>
           isActive ? "text-[#D4A] bg-[#f1e3ed] " : "text-black/70"}>
            <li className="hover:text-[#D4A] hover:bg-[#f1e3ed] rounded px-1  cursor-pointer flex items-center gap-2"
             onClick={HandleCloseOnLink}
             >
              
                {" "}
                <span className="flex  gap-1 justify-center items-center">
                  <span>Contact us</span>
                </span>
              
            </li>
            </NavLink>
          </ul>

          {/* <div className="indent-6">
                       <button className="border  py-2 px-3 rounded-lg  lg:hidden" > Contact Us
                       </button>
                       
          </div> */}
        </div>
      </div>
      {/* </ClickAwayListener> */}
    </div>
  );
};

export default Navbar;
