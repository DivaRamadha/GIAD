import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/mobile.svg';
import img3 from '../images/pm.svg';
import img4 from '../images/consultation.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl  uppercase title">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-orange-500'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl subtitle text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px]" src={img} />
                                    <h2 className="my-4 text-2xl text-center">Web Development</h2>
                                    <p className="text-md ">
                                        We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px]" src={img2} />
                                    <h2 className="my-4 text-2xl text-center">Mobile App Development</h2>
                                    <p className="text-md">
                                        We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px]" src={img3} />
                                    <h2 className="my-4 text-2xl text-center ">Project Management</h2>
                                    <p className="text-md">
                                    Streamline your projects with our expert management services, ensuring timely delivery, effective document handling, and alignment with your strategic goals, all while staying within budget.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px]" src={img4} />
                                    <h2 className="my-4 text-2xl text-center ">General IT Consultations</h2>
                                    <p className="text-md">
                                        Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center">
                            <div className='text-orange-500 mb-4'>
                                <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
                            </div>
                            <h3 className="text-3xl title">Planning & Strategy</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 subtitle'>
                                We'll collaborate to map out your application goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center">
                            <div className='text-orange-500 mb-4'>
                                <FontAwesomeIcon icon={faCode} size="3x" />
                            </div>
                            <h3 className="text-3xl  text-orange-500 title">Development & Progress Update</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 subtitle'>Once we agree on the plan, we cue my lofi playlist and dive into coding. From initial sketches to polished code, we keep you updated every step of the way.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex flex-col lg:mx-4 justify-center">
                            <div className='text-orange-500 mb-4'>
                                <FontAwesomeIcon icon={faRocket} size="3x" />    
                            </div>
                            <h3 className="text-3xl  text-blue-900 title">Development & Launch</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 subtitle'>This is where the magic happens! Based on the approved design, we'll translate everything into functional code, building your application from the ground up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;