import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <div className="flex justify-between items-center mx-8">
                    <h2 className="my-2 text-3xl text-orange-500 uppercase title">Our Projects</h2>
                    <Link to="/list-project" className="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-full">
                        Show More
                    </Link>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {projects.map(project => (
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max" key={project.id}>
                                <div className="m-2 text-justify text-sm">
                                    <img src={project.image} alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{project.name}</h4>
                                    <p className="text-md leading-5 h-auto md:h-48">
                                        {project.description}
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
            </div>
        </>
    )
}

export default Portfolio;
