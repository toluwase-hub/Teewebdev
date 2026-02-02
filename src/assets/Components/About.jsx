import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {

  // chatus on whatsapp link
  const PhoneNumber = "+2349043933210";
  const message =
    "Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!";
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;

  //   chatus on email link

    const emailaddress = "Olaniyitoluwase799@gmail.com";
    const subject = "Hello Dev Tee";

    const mailtolink = `mailto:${emailaddress}?subject=${subject}`;

     useEffect(() => {
          ScrollReveal().reveal(".reveal1", {
            distance: "100px",
            duration: 500,
            easing: "ease-out",
            origin: "bottom",
            interval: 600,
            reset: false,
          });
        }, []);

         useEffect(() => {
      ScrollReveal().reveal(".reveal2", {
        distance: "200px",
        duration: 500,
        easing: "ease-out",
        origin: "left",
        interval: 600,
        reset: false,
      });
    }, []);

  return (
    <div className="mt-6 contains lg:py-15 py-5 overflow-x-hidden">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
        About us
      </h1>
      <div className="flex flex-col  items-center gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80 text-center">
          About Tee Website Coder
        </h1>
        <div className="border-t-3  border-[#D4A] w-20 "></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-15 mt-15">
        <div className="reveal2">
          <img
            src="/images/mainheroback.jpg"
            className="object-cover hover:scale-102 transition-all duration-150 lg:w-200 w-full h-80  "
            alt=""
          />
        </div>

        <div className="reveal1">
          <div>
            <h1 className="text-2xl font-medium pb-5">
              Frontend & Backend Web Developer.
            </h1>

            <h1 className="pb-5 italic text-justify">
              Our expertise spans frontend development, where we craft clean,
              responsive, and intuitive interfaces using modern web
              technologies.
            </h1>
          </div>

          <div className=" flex flex-col lg:flex-row gap-5 ">
            <div className="flex flex-col gap-3">
              <div className="flex items-center ">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Name</span>: Olaniyi Toluwase
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Website</span>: www.example.com
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Phone </span>:
                  <a href={whatsappurl} className="underline">
                    +23443933210
                  </a>
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">City </span>: Oyo Oyo state,
                  Nigeria
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Age </span>: 20
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Degree </span>:Bachelor
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Email </span>
                  <a href={mailtolink}>
                  :olaniyitoluwase799@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex items-center">
                <h1> 📌 </h1>
                <p className="ps-2">
                  <span className="font-bold">Freelance </span>:Available
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-justify py-6">
              We are a passionate development team led by{" "}
              <span className="font-bold text-[#D4A] underline">
                Olaniyi Toluwase
              </span>{" "}
              , focused on building modern, reliable, and user-centered digital
              solutions. With a strong commitment to quality and innovation, we
              turn ideas into functional products that solve real-world problems
              and deliver great user experiences.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
