import React from "react";
import { useDocTitle } from "../components/CustomHook";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';

const ListProject = () => {
  // Set judul dokumen
  useDocTitle("About Us");

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
                        {projects.map(project => (
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max" key={project.id}>
                            <div className="m-2 text-justify text-sm">
                                <img src={project.image} alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                                <h4 className="font-semibold mt-4 text-lg md:text-2xl text-left">{project.title}</h4>
                                <span className="inline-block bg-orange-500 rounded-full px-2 text-white mb-4">{project.category}</span>
                                <p className="text-md leading-5 h-auto md:h-24 overflow-hidden">
                                    {project.description.slice(0, 150)}{project.description.length > 150 && '...'}
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to={`/list-project/${project.id}`} className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Show More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
      <Footer />
    </>
  );
};

// {
//     "id": 0,
//     "image": "/assets/ahchat.png",
//     "title": "AhaChat",
//     "location": "Vietnam",
//     "category": "Mobile",
//     "description": "Nabila is a mobile app that has been downloaded by more than 10,000 users, with a rating of 4.7 out of 5 stars from over 4,000 users. The app is designed to provide a convenient and user-friendly experience for its customers. With its clean and modern design, Nabila is perfect for anyone looking for a reliable and efficient way to manage their daily activities."
// },
// {
//     "id": 12,
//     "image": "https://picsum.photos/200/301",
//     "title": "File Inventory Management",
//     "location": "Jakarta, Indonesia",
//     "description": "Project from PT Primamitra Langgeng Sejahtera."
// },
// {
//     "id": 13,
//     "image": "https://picsum.photos/200/301",
//     "title": "Budget Planning BT Cocoa",
//     "location": "Jakarta, Indonesia",
//     "description": "Project from PT Olam Indonesia"
// }

export default ListProject;
