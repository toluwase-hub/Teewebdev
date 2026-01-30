import React, { useEffect } from "react";
import { FaRocketchat } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Chatus = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal9", {
      distance: "500px",
      duration: 1200,
      easing: "ease-out",
      origin: "left",
      interval: 500,
      reset: false,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal10", {
      distance: "500px",
      duration: 1200,
      easing: "ease-out",
      origin: "right",
      interval: 600,
      reset: false,
    });
  }, []);

  const PhoneNumber = "+2349043933210";
  const message =
    "Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!";
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;
  return (
    <div className="contains py-10">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
        Contact Us
      </h1>
      <div className="flex flex-col  items-center gap-6 reveal9">
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80 text-center">
          Reach Out For Inquiries Or Support
        </h1>
        <div className="border-t-3  border-[#D4A] w-20 "></div>
      </div>

      <div className="py-10">
        <h1 className="text-center text-lg pb-10 reveal9">
          Have any questions or need assistance? Get in touch with us and we'll
          be happy to help you out.
        </h1>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="reveal9 flex gap-4 bg-black/3 shadow-xl group  hover:shadow-lg transition-all duration-300 py-10 px-5 rounded-3xl items-center">
            <div>
              <FaRocketchat
                size={60}
                className="bg-[#D4A] group-hover:scale-105 text-white p-2 rounded-2xl"
              />
            </div>
            <div className="flex flex-col  ">
              <h1 className="font-medium text-xl">Get in touch with us</h1>
              <h1 className="mb-4">
                Can't find what you'er looking for? contact us
              </h1>
              <Link to="/contact#gotocontact">
                {" "}
                <button className="bg-[#D4A] hover:bg-[#dd1d9d] text-white rounded-md py-2 px-2 w-full transition-all duration-200 font-medium">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="reveal10 flex gap-4  py-10 px-5 rounded-3xl  bg-black/3 shadow-xl group  hover:shadow-lg transition-all duration-300 items-center">
            <div>
              <MdWhatsapp
                size={60}
                className="bg-green-600 group-hover:scale-105 text-white p-2 rounded-2xl "
              />
            </div>
            <div className="flex flex-col  ">
              <h1 className="font-medium text-xl">
                Chat a live agent on Whatsapp
              </h1>
              <h1 className="mb-4">
                for relay service, please send us a direct message.
              </h1>
              <a href={whatsappurl}>
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-md py-2 transition-all w-full duration-200 font-medium">
                  Start chat
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatus;
