import React from "react";
import { MdVisibility } from "react-icons/md";
import { PiUserFocus } from "react-icons/pi";

const Mission = () => {
  return (
    <div className="bg-black/10 py-20">
      <div className="contains">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="shadow-xl bg-white px-6 py-8 rounded-3xl flex flex-col justify-center items-center gap-3 group hover:border border-blue-300 hover:shadow-2xl  transition-all duration-300">
            <div className="text-white transition-all duration-300 group-hover:scale-110 bg-blue-600 py-2 px-2 rounded-2xl">
              <PiUserFocus size={50} />
            </div>
            <h1 className="text-3xl font-bold text-black/90 ">Our Mission</h1>
            <div className="flex gap-3">
              <h1>📌</h1>
              <h1 className="">
                My mission is to design and build responsive, user-focused web
                interfaces that combine clean code, modern design principles,
                and performance best practices.
              </h1>
            </div>

            <div className="flex gap-3">
              <h1>📌</h1>
              <h1>
                {" "}
                I strive to continuously learn, adapt, and deliver digital
                experiences that are both functional and aesthetically
                compelling.
              </h1>
            </div>
          </div>
          <div className="shadow-xl bg-white px-6 py-8 rounded-3xl flex flex-col justify-center items-center gap-3 group hover:border border-green-300 hover:shadow-2xl  transition-all duration-300">
            <div className="text-white bg-green-500 py-2 px-2 rounded-2xl transition-all duration-300 group-hover:scale-110">
              <MdVisibility size={50} />
            </div>
            <h1 className="text-3xl font-bold text-black/90 ">Our Vision</h1>
            <div className="flex gap-3">
              <h1>📌</h1>
              <h1>
                To create intuitive, accessible, and visually engaging web
                experiences that seamlessly connect people with technology and
                make the web more human-centered.
              </h1>
            </div>

            <div className="flex gap-3">
              <h1>📌</h1>

              <h1>
                I envision a web where design and functionality work in harmony
                where every interaction feels intentional, inclusive, and
                effortless. By focusing on usability, accessibility
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
