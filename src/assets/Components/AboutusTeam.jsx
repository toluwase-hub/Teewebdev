import React, { useState } from "react";

const AboutusTeam = () => {
  const [ShowAboutid, setShowAboutid] = useState(null);

  const HandleShowAbout = (id) => {
    setShowAboutid(id);
  };

  const HandHideAbout = () => {
    setShowAboutid(null);
  };

  const TeamMembers = [
    {
      image: (
        <img
          src="/images/aboutside.jpg"
          className="w-30 h-30 rounded-full object-cover"
          alt="team1"
        />
      ),
      teamName: "Dev Toluwase",
      id: 1,
      position: "Frontend Developer",
      about:
        " specialize in building responsive, high-performance user interfaces using modern web technologies. Our focus is on clean code, accessibility, and seamless user experiences across devices and browsers. We transform design concepts into interactive, scalable products that feel intuitive and fast.",
    },

    {
      image: (
        <img
          src="/images/fixedbackgroundpics.jpg"
          className="w-30 h-30 rounded-full object-cover"
          alt="team2"
        />
      ),
      teamName: "Des john",
      id: 2,
      position: "UI Engineer",
      about:
        " bridge the gap between design and development by translating visual systems into reusable, consistent UI components. With a strong eye for detail, we ensure design accuracy, maintain design systems, and create interfaces that are both beautiful and functional.",
    },

    {
      image: (
        <img
          src="/images/subheropic.jpg"
          className="w-30 h-30 rounded-full object-cover"
          alt="team3"
        />
      ),
      teamName: "Dev Moses",
      id: 3,
      position: "JavaScript Engineer",
      about:
        " handle the logic behind dynamic and interactive experiences. From state management to API integration, we ensure applications are smooth, efficient, and scalable. Our work focuses on performance optimization, clean architecture, and delivering reliable frontend functionality.",
    },

    {
      image: (
        <img
          src="/images/Aboutherosection.jpg"
          className="w-30 h-30 rounded-full object-cover"
          alt="team4"
        />
      ),
      teamName: "Dev Favour",
      id: 4,
      position: "Accessibility & Performance Specialist",
      about:
        " focus on making web applications inclusive, fast, and user-friendly for everyone. By following accessibility standards and performance best practices, we ensure our products are usable across devices, networks, and assistive technologies without compromising design or functionality.",
    },
  ];

  return (
    <div className="contains pt-20">
      <h1 className="text-center font-bold text-[#D4A] text-xl lg:text-2xl mb-2">
        The People Behind the Pixels
      </h1>
      <div className="flex flex-col  items-center gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-black/80 text-center">
          A Web developer-driven team turning ideas into interactive interfaces.
        </h1>
        <div className="border-t-3  border-[#D4A] w-20 "></div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  py-15">
        {TeamMembers.map((Member) => (
          <div
            key={Member.id}
            className={`  flex  flex-col gap-2 shadow-2xl px-2 py-5 rounded-3xl items-center justify-center  hover:shadow-xl relative`}
          >
            <div className="">{Member.image}</div>
            <h1 className="font-medium text-3xl">{Member.teamName}</h1>
            <h1 className="font-light text-lg text-center">{Member.position}</h1>
            <h1 className="text-center line-clamp-3">
              {Member.teamName} {Member.about}
            </h1>
            <div
              className={`  ${
                ShowAboutid === Member.id ? "bg-[#D4A]" : ""
              } absolute shadow-2xl  py-3 px-3 text-white/90  rounded-3xl `}
            >
              {ShowAboutid === Member.id && (
                <p>
                  <span className="font-bold">📌{Member.teamName} </span>
                  {Member.about}
                </p>
              )}
            </div>
            <button
              onClick={() =>
                ShowAboutid === Member.id
                  ? HandHideAbout()
                  : HandleShowAbout(Member.id)
              }
              className="bg-[#D4A] rounded-md px-2 p-2 text-white"
            >
              {" "}
              {ShowAboutid === Member.id ? "Read Less «" : "Read More »"}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusTeam;
