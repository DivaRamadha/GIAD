import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-orange-500 uppercase title">Our Projects</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-orange-500 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <img src="https://picsum.photos/200/300" alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                                
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Nabila</h4>
                                <p className="text-md leading-5 h-auto md:h-48">
                                    Nabila is a mobile app that has been downloaded by more than 10,000 users, with a rating of 4.7 out of 5 stars from over 4,000 users. The app is designed to provide a convenient and user-friendly experience for its customers. With its clean and modern design, Nabila is perfect for anyone looking for a reliable and efficient way to manage their daily activities.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Show More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src="https://picsum.photos/200/301" alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                                
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Pusat Investasi Pemerintah</h4>
                                <p className="text-md leading-5 h-auto md:h-48">
                                    We develop website application for institutions, companies, and organizations. We provide them with a modern and user-friendly platform to manage their operations, automate processes, and improve communication between employees, customers, and partners. 
                                    Our web application can be used to manage all aspects of operations, including customer relationship management, inventory management, project management, and more.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Show More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src="https://picsum.photos/200/300" alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Praktis POS</h4>
                                <p className="text-md leading-5 h-auto md:h-48">
                                    Our Mobile Web and Tablet POS Application is designed for businesses and organizations to manage their sales operations effectively. It offers a user-friendly interface and can integrate with existing systems through well-structured APIs. With this system in place, you enjoy benefits such as: 
                                    increased accuracy in sales operations.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Show More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <img src="https://picsum.photos/200/301" alt="project" className="rounded-t-md h-48 w-full object-cover" style={{ borderRadius: '10px' }} />
                                
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">AktaCorp</h4>
                                <p className="text-md leading-5 h-auto md:h-48">
                                    Our company registration system helps to manage the process of establishing a company, whether PT (Limited Liability Company), CV (Limited Partnership), or any other type of business entity. With an easily customizable menu, you get to define your user experience and make your company registration process fully customizable and memorable.
                                    With use cases already recorded for quite a number of company registrations, we can assure you of a stress-less company registration platform.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-orange-500 hover:bg-orange-400 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Show More
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;