import React, { useState } from "react";
import { GoMultiSelect } from "react-icons/go";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const Navbar = () => {
  const Navlinks = ({ isActive }) =>
    isActive ? "text-white/80" : "text-white";

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
            <li
              className={`cursor-pointer hover:text-[#D4A]  text-black/70 ${Navlinks}`}
            >
              <Link to="/">Home</Link>
            </li>

            <li className=" hover:text-[#D4A]  cursor-pointer  text-black/70  flex items-center gap-2 relative  ">
              <Link to="/About">
                {" "}
                <span
                  className={`flex gap-1 justify-center items-center ${Navlinks}`}
                >
                  <span>About Us</span>
                </span>
              </Link>
            </li>

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
                  <li className="hover:text-[#D4A]  border-b indent-3 py-2 text-black/70  border-black/20">
                    {" "}
                    <Link to="/Ourservice">FrontEnd Design</Link>
                  </li>

                  <li className="hover:text-[#D4A]  py-2 indent-3 border-t  border-white/40 text-black/70 ">
                    BackEnd Design
                  </li>
                </ul>
              </div>
            </li>

            <li className="hover:text-[#D4A]  cursor-pointer  text-black/70  flex items-center gap-2">
              <Link to="/Contact">
                {" "}
                <span className="flex  gap-1 justify-center items-center">
                  <span>Contact Us</span>
                </span>
              </Link>
            </li>
          </ul>

          <div></div>

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
            <li className=" cursor-pointer hover:text-[#D4A] " 
            onClick={HandleCloseOnLink}
            >
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-[#D4A]  cursor-pointer flex items-center gap-2 relative  "
             onClick={HandleCloseOnLink}
             >
              <Link to="/About">
                {" "}
                <span className="flex gap-1 justify-center items-center">
                  <span>About Us</span>
                </span>
              </Link>
            </li>
            <ClickAwayListener onClickAway={HandleService}>
              <li
                className="hover:text-[#D4A]  cursor-pointer flex flex-col items-start  relative gap-2 "
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
                    <li className="hover:text-[#D4A]  border-b indent-3 py-2 text-black/70  border-black/20"
                     onClick={HandleCloseOnLink}
                     >
                      {" "}
                      <Link to="/Ourservice">FrontEnd Design</Link>
                    </li>

                    <li className="hover:text-[#D4A]  py-2 indent-3 border-t  border-white/40 text-black/70 "
                     onClick={HandleCloseOnLink}
                     >
                      BackEnd Design
                    </li>
                  </ul>
                </div>
              </li>
            </ClickAwayListener>

            <li className="hover:text-[#D4A]  cursor-pointer flex items-center gap-2"
             onClick={HandleCloseOnLink}
             >
              <Link to="/Contact">
                {" "}
                <span className="flex  gap-1 justify-center items-center">
                  <span>Contact us</span>
                </span>
              </Link>
            </li>
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
