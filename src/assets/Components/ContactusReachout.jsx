import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ScrollReveal from "scrollreveal";

const ContactusReachout = () => {

   useEffect(() => {
        ScrollReveal().reveal(".reveal14", {
          distance: "400px",
          duration: 1000,
          easing: "ease-out",
          origin: "bottom",
          interval: 400,
          reset: false,
        });
      }, []);

       useEffect(() => {
      ScrollReveal().reveal(".reveal15", {
        distance: "400px",
        duration: 1000,
        easing: "ease-out",
        origin: "bottom",
        interval: 400,
        reset: false,
      });
    }, []);

     useEffect(() => {
      ScrollReveal().reveal(".reveal16", {
        distance: "500px",
        duration: 1200,
        easing: "ease-out",
        origin: "left",
        interval: 600,
        reset: false,
      });
    }, []);

     useEffect(() => {
      ScrollReveal().reveal(".reveal17", {
        distance: "500px",
        duration: 1200,
        easing: "ease-out",
        origin: "right",
        interval: 600,
        reset: false,
      });
    }, []);

  // chat us on whatsapp link
  const PhoneNumber = "+2349043933210";
  const message =
    "Hello, Dev%20Tee%20i%20came%20across%20Your%20Portfolio%20and%20wanted%20reach%20out!";
  const whatsappurl = `https://wa.me/${PhoneNumber}?text=${message}`;

  //   chatus on email link

  const emailaddress = "Olaniyitoluwase799@gmail.com";
  const subject = "Hello Dev Tee";

  const mailtolink = `mailto:${emailaddress}?subject=${subject}`;

  const mapScr =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21102.40911188384!2d3.9293313745843874!3d7.8703152080085745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10375a36c601e8f9%3A0x26214050b9cc80b5!2sSabo%2C%20Oyo!5e0!3m2!1sen!2sng!4v1769533512849!5m2!1sen!2sng";
  return (
    <div className="contains py-10">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2 ">
        Reach Out
      </h1>
      <div className="flex flex-col  items-center gap-6">
        <div className="border-t-3 mt-3  border-[#D4A] w-20 "></div>
        <h1 className="reveal14 text-xl lg:text-xl font-light text-black/80 text-center">
          Tee Website is committed to delivering reliable and innovative digital
          solutions tailored to your needs. located in Oyo,Oyo State,Nigeria. We
          are available 24/7 providing professional support and Quality service
          you can trust.
        </h1>
      </div>

      <div className="py-5 pt-10">
        <div className="reveal14">
          <iframe
            className="rounded-lg"
            src={mapScr}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="shadow-xl/20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-20 px-5">
          <div className="flex flex-col gap-4  py-5  ">
            <div className="px-3">
              <FaHome size={40} />
              <h1 className="font-bold text-2xl">Contact information</h1>
            </div>
            <div className="flex items-center gap-2  group   rounded-3xl ">
              <div className="group-hover:text-[#D4A] transition-all duration-200">
                <FaHome size={30} />
              </div>
              <div className="reveal15">
                <h1 className="font-bold">Address</h1>
                <p className="hover:text-[#D4A] transition-all duration-200 hover:underline">
                  Sabo Area Oyo,Oyo State Nigeria.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2  group  rounded-3xl">
              <div className="group-hover:text-[#D4A] transition-all duration-200">
                <MdOutlineMail size={30} />
              </div>
              <div className="reveal15">
                <h1 className="font-bold">Email</h1>
                <p className="hover:text-[#D4A] transition-all duration-200 ">
                  Olaniyitoluwase@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2  group   rounded-3xl">
              <div className="group-hover:text-[#D4A] transition-all duration-200">
                <FiPhoneCall size={30} />
              </div>
              <div className="reveal15">
                <h1 className="font-bold">Phone</h1>
                <p className="hover:text-[#D4A] transition-all duration-200">
                  09043933210
                </p>
              </div>
            </div>
          </div>

          <div className="reveal16 flex gap-4  group hover:bg-[#f5e0ee] border border-[#D4A]   transition-all duration-300 py-10 px-5 rounded-3xl items-center">
            <div>
              <MdOutlineMail
                size={60}
                className="bg-[#D4A] group-hover:scale-105 text-white p-2 rounded-2xl"
              />
            </div>
            <div className="flex flex-col  ">
              <h1 className="font-medium text-xl">Send us An Email</h1>
              <h1 className="mb-4">
                Can't find what you'er looking for? contact us
              </h1>
              <a href={mailtolink}>
                {" "}
                <button className="bg-[#D4A] hover:bg-[#dd1d9d] text-white rounded-md py-2 px-2 w-full transition-all duration-200 font-medium">
                  Email Us
                </button>
              </a>
            </div>
          </div>

          <div className="reveal17 flex gap-4  py-10 px-5 rounded-3xl   group hover:bg-green-50  border border-green-600 transition-all duration-300 items-center">
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

export default ContactusReachout;
