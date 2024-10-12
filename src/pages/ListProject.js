import React from 'react';
import {useDocTitle} from '../components/CustomHook';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ProjectData from '../data/projects.json';

const ListProject = () => {
    const [docTitle, setDocTitle] = useDocTitle('List Project');
    const { id } = useParams();

    const project = ProjectData.find(project => project.id === parseInt(id));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">List Project</h1>
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <img src={project.image} alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                            
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{project.name}</h4>
                            <p className="text-md leading-5 h-auto md:h-48">
                                {project.description}
                            </p>
                            <div className="flex justify-center my-4">
                                <Link to={`/detail-project/${project.id}`} className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Show More
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProject;

