import React, { useState } from 'react';
import { useDocTitle } from "../components/CustomHook";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";

const ListProject = () => {
  // Set judul dokumen
  const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);  // Menyimpan project yang dipilih

    const handleShowMoreClick = (project) => {
        setSelectedProject(project);  // Set project yang dipilih
        setShowPopup(true);  // Menampilkan popup
    };

    const handleClosePopup = () => {
        setShowPopup(false);  // Menutup popup
        setSelectedProject(null);  // Reset project yang dipilih
    };

  // Data tentang pemilik dan komisaris

  return (
    <>
      <NavBar />
      <div
        className="relative bg-cover bg-center text-white p-6 text-center mt-40 mb-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=1000&q=80')`,
          minHeight: "300px",
        }}
      >
        {/* Overlay hitam dengan transparansi */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Konten di atas overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-5xl bld">Our Projects</h1>
          <p className="text-lg mt-2">
            We are a dedicated team passionate about web development.
          </p>
        </div>
      </div>

      <div className="px-4 mb-20" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max"
              key={project.id}
            >
              <div className="m-2 text-justify text-sm">
                <img
                  src={project.image}
                  alt="project"
                  className="rounded-t-md h-48 w-full object-cover"
                  style={{ borderRadius: "10px" }}
                />
                <h4 className="font-semibold mt-4 text-lg md:text-2xl text-left">
                  {project.title}
                </h4>
                <div className="flex flex-col mb-2">
                                        <span>{project.company}</span>
                                    </div>
                <span className="inline-block bg-orange-500 rounded-full px-2 text-white mb-4">
                  {project.category}
                </span>
                <p className="text-md leading-5 h-auto md:h-24 overflow-hidden">
                  {project.description.slice(0, 150)}
                  {project.description.length > 150 && "..."}
                </p>
                <div className="flex justify-center my-4">
                <button
                        onClick={() => handleShowMoreClick(project)} // Membuka popup dengan detail project
                        className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                      >
                        Show More
                        <svg
                          className="w-4 h-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {showPopup && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full h-4/5 overflow-y-auto relative">
              {" "}
              {/* Menambahkan overflow-y-auto */}
              <button
                onClick={handleClosePopup} // Menutup popup
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.image}
                alt="project"
                className="rounded-t-md h-48 w-full object-cover mb-4"
              />
              <div className="flex flex-col mb-2">
                <span>{selectedProject.company}</span>
              </div>
              <span className="inline-block bg-orange-500 rounded-full px-2 text-white mb-4">
                {selectedProject.category}
              </span>
              <p>{selectedProject.description}</p>
              <div className="flex justify-center mt-4 w-full">
                <button
                  onClick={handleClosePopup}
                  className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-full w-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};


export default ListProject;
