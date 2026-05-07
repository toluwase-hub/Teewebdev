import React, { useState } from "react";

const Frontendservice = () => {
  // chat us on whatsapp link
  const PhoneNumber = "+2349043933210";
  //  corporate
  const corporateMessage =
    "Hello, Dev%20Tee%20i%20am%20interested%20in%20CORPORATE%20website%20package!";
  const corporatewhatsappurl = `https://wa.me/${PhoneNumber}?text=${corporateMessage}`;
  // E_commerce
  const e_commerceMessage =
    "Hello, Dev%20Tee%20i%20am%20interested%20in%20E_COMMERCE%20website%20package!";
  const e_commercewhatsappurl = `https://wa.me/${PhoneNumber}?text=${e_commerceMessage}`;
  // costom
  const costomMessage =
    "Hello, Dev%20Tee%20i%20am%20interested%20in%20CUSTOM%20website%20package!";
  const costomwhatsappurl = `https://wa.me/${PhoneNumber}?text=${costomMessage}`;

  const usd_to_naira = 1650;

  const [currency, setCurrency] = useState("NGN");

  const price1NGN = 300000;
  const price2NGN = 400000;

  const price1USD = (price1NGN / usd_to_naira).toFixed(2);
  const price2USD = (price2NGN / usd_to_naira).toFixed(2);

  return (
    <div className="contains py-15 ">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
        TEE WEBSITE CODER PRICING
      </h1>
      <div className="flex flex-col  items-center gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80 text-center">
          Our Website Development Pricing Packages
        </h1>
        <div className="border-t-3  border-[#D4A] w-20 "></div>
      </div>
      <div className="flex  gap-2 items-center justify-center py-10">
        <div className="transition-all duration-500 border border-black/10 px-1 py-1 flex  gap-1 items-center justify-center rounded-2xl">
          <button
            className={`transition-all duration-100 px-2 py-1 rounded-xl  ${currency === "NGN" ? "bg-[#D4A] text-white font-bold" : "bg-white font-semibold"}`}
            onClick={() => setCurrency("NGN")}
          >
            NGN (#)
          </button>
          <button
            className={`transition-all duration-100 px-2 py-1 rounded-xl ${currency !== "NGN" ? "bg-[#D4A] text-white font-bold" : "bg-white font-semibold"}`}
            onClick={() => setCurrency("USD")}
          >
            USD ($)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div className="rounded-2xl border border-[#D4A] flex flex-col pb-5  hover:bg-black/3 ">
            <div className="bg-black text-white py-4 px-4 rounded-t-2xl flex flex-col gap-3">
              <div className="text-2xl font-bold">
                CORPORATE{" "}
                <span className="text-sm font-light">
                  (Landing Page/Portfolio)
                </span>
              </div>
              <div className="font-bold text-4xl">
                {currency === "NGN" ? "#" : "$"}{" "}
                {currency === "NGN" ? price1NGN : price1USD}
              </div>
            </div>

            <div className="flex flex-col gap-3 px-4 py-5">
              <div>
                <span className="text-[#D4A]">✓</span> Domain & Hosting(1 year)
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Business Emails
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Logo Design
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> On Page SEO
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Up to 5 Pages
              </div>
            </div>
            <a href={corporatewhatsappurl}>
              <button className="bg-black w-[93%] text-white font-bold py-3 rounded-xl mx-4 hover:scale-101 transition-all ">
                Order Now
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="rounded-2xl border border-[#D4A] flex flex-col pb-5 hover:bg-[#fdeff9]  ">
            <div className="bg-[#D4A] text-white py-4 px-4 rounded-t-2xl flex flex-col gap-3 relative">
              <span className="bg-[#6B21AB] font-bold px-2 rounded-3xl absolute right-4 top-1">
                Top Pick
              </span>
              <div className="text-2xl font-bold">
                E-COMMERCE{" "}
                <span className="text-sm font-light">
                  (Online Market Place)
                </span>
              </div>
              <div className="font-bold text-4xl">
                {currency === "NGN" ? "#" : "$"}{" "}
                {currency === "NGN" ? price2NGN : price2USD}
              </div>
            </div>

            <div className="flex flex-col gap-3 px-4 py-5">
              <div>
                <span className="text-[#D4A]">✓</span> Domain & Hosting(1 year)
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Business Emails
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Logo Design
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> On Page SEO
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Up to 100 Products
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Payment Gateway
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> 1 Month Support
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Analytics Integration
              </div>
            </div>

            <a href={e_commercewhatsappurl}>
              <button className="bg-[#D4A] w-[93%] text-white font-bold py-3 rounded-xl mx-4 hover:scale-101 transition-all ">
                Order Now
              </button>
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-[#D4A] flex flex-col pb-5 hover:bg-black/3  ">
            <div className="bg-black text-white py-4 px-4 rounded-t-2xl flex flex-col gap-3">
              <div className="text-2xl font-bold">CUSTOM</div>
              <div className="font-bold text-4xl">
                {currency === "NGN" ? "#" : "$"} XXX,XXX
              </div>
            </div>

            <div className="flex flex-col gap-3 px-4 py-5">
              <div>
                <span className="text-[#D4A]">✓</span> Domain & Hosting(1 year)
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> User & Admin Dashboard
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> On Page SEO & Off Page
                CEO
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Payment Gateway
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Analytics Integration
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Continuous Support
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Content Management
              </div>
              <div>
                <span className="text-[#D4A]">✓</span> Socia Media Integration
              </div>
            </div>

            <a href={costomwhatsappurl}>
              <button className="bg-black w-[93%] text-white font-bold py-3 rounded-xl mx-4 hover:scale-101 transition-all  ">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontendservice;
