import { ChevronLeftIcon, DocumentIcon } from '@heroicons/react/solid';
import React from 'react';
import img from '../../assets/img3.jpg'
const AboutMe = () => {
    return (
        <div className='max-w-[1386px] mx-auto'>
            <div>
                <div className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                    <h3 className='md:text-[18px] text-[15px] uppercase'> Introduction</h3>
                    <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>About <span className='text-[#458fd0] dark:text-white'>Me</span></h1>
                </div>
                <div class="hero min-h-[80vh] lg:mt-20 ">
                    <div class="hero-content items-start gap-7 lg:gap-6 xl:gap-40 flex-col justify-between w-full lg:flex-row-reverse">

                        <img src={img} class="lg:max-w-[317px]max-w-[300px] sm:max-w-[440px] h-auto lg:h-[346px] object-cover border-solid border-[8px] border-[#458fd0] rounded-lg  shadow-2xl mx-auto" alt='img' />

                        <div className='w-full text-white mt-9 lg:mt-0'>
                            <div className='w-full text-white '>
                                <div>
                                    <div className='flex justify-between items-center py-3 px-2 bg-[#458fd0] w-full'>
                                        <div className='border-solid border-[2px] border-white rounded-full p-1 flex justify-center items-center'>
                                            <div className='w-[7px] h-[7px] rounded-full bg-white'></div>
                                        </div>
                                        <div>
                                            <p className='text-[17px]'> About Me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* description  */}
                            <div className='mt-5 text-right px-5 text-black dark:text-white'>
                                <div >
                                    <p className='uppercase font-bold my-3 text-black dark:text-white lg:text-xl md:text-[18px] text-[16px]'><span className='text-[#458fd0]'>Hello!</span> My Name is Ariful Islam</p>
                                    <article className='border_bottom pb-4 mb-3'>
                                        Hi, I am passionate to work with any type of cloud infrastructure. My main focus is aws architecture. Build system for various kind of web application or website. Deployment, automation, auto calling, cloudformation , opsworks and beanstack is my key.

                                        <p className='mt-3'> Also, I am a big fan of Ansible, Jenkins, chef . I use them for making my workflow faster and reliable.</p>
                                    </article>
                                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-7 gap-4 border_bottom'>
                                        <div>
                                            <div className='mb-2'>
                                                <p>harrison_p@example.com</p>
                                                <strong>Email :</strong>
                                            </div>
                                            <div className='mb-2'>
                                                <p>8801723004411</p>
                                                <strong>Phone : </strong>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>From : </strong>
                                                <span>BD,Chuadanga</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-2'>
                                                <strong>Name : </strong>
                                                <span>Ariful Islam</span>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>Age : </strong>
                                                <span>25</span>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>Job : </strong>
                                                <span>AWS Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center md:flex-row flex-col mt-8'>
                                        <button
                                            className='hire_btn rounded-full uppercase font-bold inline-block md:mr-7 mb-5 md:mb-0 md:px-[14px] xl:px-[20px] px-[20px] py-[5px]'
                                        >
                                            <span>
                                                <ChevronLeftIcon
                                                    className='w-[20px]'
                                                />
                                            </span>
                                            Hire Me
                                        </button>
                                        <button
                                            className='resume_btn font-bold rounded-full md:px-[14px] xl:px-[20px] px-[20px] py-[5px]'
                                        >
                                            <span>
                                                <DocumentIcon
                                                    className='w-[20px]'
                                                />
                                            </span>
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;