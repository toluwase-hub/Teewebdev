import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ScrollReveal from "scrollreveal";

const AskedQuestion = () => {
  const [que1, setQue1] = useState(false);
  const [que2, setQue2] = useState(false);
  const [que3, setQue3] = useState(false);
  const [que4, setQue4] = useState(false);
  const [que5, setQue5] = useState(false);
  const [que6, setQue6] = useState(false);
  const [que7, setQue7] = useState(false);

   useEffect(() => {
        ScrollReveal().reveal(".reveal8", {
          distance: "400px",
          duration: 1200,
          easing: "ease-out",
          origin: "bottom",
          interval: 400,
          reset: false,
        });
      }, []);

  return (
    <div className="contains py-15 ">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="flex flex-col  items-center gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80 text-center">
          What Our Clients Want to Know
        </h1>
        <div className="border-t-3  border-[#D4A] w-20 "></div>
      </div>

      <div className="flex flex-col gap-5 pt-20 max-w-250 m-auto">
        <div
          onClick={() => setQue1(!que1)}
          className="reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              What types of websites do you build?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que1 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que1 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500 `}
          >
            <h1 className="lg:text-lg text-sm">
              I create responsive websites including personal portfolios,
              business websites, landing pages, and custom web applications, all
              designed to work seamlessly across devices.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue2(!que2)}
          className="reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              What technologies do you use?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que2 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que2 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              I work with modern technologies such as HTML, CSS, JavaScript,
              React, and backend tools depending on the project requirements,
              ensuring scalable and efficient solutions.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue3(!que3)}
          className=" reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              How long does it take to build a website?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que3 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que3 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              Project timelines vary based on complexity, but most standard
              websites take between 1–3 weeks from planning to launch.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue4(!que4)}
          className=" reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              Do you offer website maintenance after launch?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que4 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que4 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              Yes, I provide ongoing maintenance, updates, and support to keep
              your website secure, fast, and up to date.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue5(!que5)}
          className="reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              Will my website be mobile-friendly?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que5 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que5 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              Absolutely. Every website I build is fully responsive and
              optimized for mobile, tablet, and desktop devices.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue6(!que6)}
          className="reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              Can you redesign an existing website?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que6 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que6 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              Yes, I can modernize and improve existing websites by enhancing
              design, performance, usability, and functionality.
            </h1>
          </div>
        </div>

        <div
          onClick={() => setQue7(!que7)}
          className="reveal8 items-center  shadow-lg rounded-2xl px-5 py-5 bg-black/3 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-between  ">
            <h1 className="font-medium text-md lg:text-xl group-hover:text-[#D4A]">
              How do we get started on a project?
            </h1>
            <div>
              {" "}
              {
                <IoIosArrowUp
                  className={`${
                    que7 ? "" : "rotate-180"
                  } transition-all duration-200`}
                />
              }
            </div>
          </div>
          <div
            className={`${
              que7 ? "max-h-200" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <h1 className="lg:text-lg text-sm">
              Simply reach out through my contact form with your project
              details, and I’ll get back to you to discuss goals, timelines, and
              next steps.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
