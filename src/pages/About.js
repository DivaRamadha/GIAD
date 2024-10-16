import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import simas from "../images/clients/simas.png";

const About = () => {
  // Set judul dokumen
  useDocTitle("About Us");

  // Data tentang pemilik dan komisaris
  const owners = [
    {
      name: "Ihsan Muafa Luthfi",
      // role: 'Expert on Web Development and Project Management',
      description:
        "Founder and strategic leader, Ihsan began his career as a Software Engineer at an IT consultancy in Jakarta. With extensive experience, he has transitioned into various leadership roles, including Project Manager and business owner. Currently serving as a Senior Software Engineer at a leading Indonesian company, he continues to leverage his technical expertise and leadership skills to drive innovation and enhance digital solutions, staying at the forefront of the rapidly evolving tech industry.",
      image: '/assets/ihsan.jpg', // Ganti dengan link gambar
    },
    {
      name: "Diva Ramadha Ristanto",
      // role: 'Full Stack Developer',
      description:
        "Founder and chief visionary, Diva have over 5 years of experience in software development. He is expert on both frontend and backend development. He has been finished a lot of projects in the field of both mobile application and web development.",
      image: '/assets/diva.png', // Ganti dengan link gambar
    },
    {
      name: "Gagas Pandu Wibowo",
      // role: '',
      description:
        "Founder and chief visionary, With a deep passion for QA Automation and Software Engineering, Gagas journey began as a Software Quality Engineer at fiverr, He also have many projects in both domestic and international",
      image: '/assets/gagas.jpg', // Ganti dengan link gambar
    },
    {
      name: "Andrew Jonathan",
      // role: 'Marketing Specialist',
      description: "Founder and chief visionary, ",
      image: '/assets/andrew.jpg', // Ganti dengan link gambar
    },
  ];

  const advisor = {
    name: "Tommy Lukman",
    role: "Commissioner / Senior Advisor",
    description:
      "Having worked for international corporations for more than 20 years, has a track record of creating, managing, and overseeing high-achieving IT teams. Technical and leadership expertise are bolstered by certifications in information security (ISO 27001:2022) and insurance (AAAIJ and AIIS), the latter of which was approved by the British Standard Institution in 2023. They are an essential asset to every firm, dedicated to fostering innovation and guaranteeing operational excellence through strategic IT solutions.",
    image: '/assets/mr.png', // Ganti dengan link gambar
  };

  return (
    <>
      <NavBar />
      <div
        className="relative bg-cover bg-center text-white p-6 text-center mt-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1000&q=80')`,
          minHeight: "500px",
        }}
      >
        {/* Overlay hitam dengan transparansi */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Konten di atas overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-5xl bld">Meet Our Team</h1>
          <p className="text-lg mt-2">
            We are a dedicated team passionate about web development.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {owners.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-center">
                {member.name}
              </h3>
              <h4 className="text-xl text-gray-600 text-center">
                {member.role}
              </h4>
              <p className="text-justify mt-2">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center">{advisor.name}</h3>
          <h4 className="text-xl text-gray-600 text-center">{advisor.role}</h4>
          <img
            src={advisor.image}
            alt={advisor.name}
            className="rounded-full w-32 h-32 mx-auto my-4"
          />
          <p className="text-justify">{advisor.description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
