import React from 'react';
import img from '../../assets/img3.jpg'
const AboutMe = () => {
    return (
        <div >
            <div>
                <div className='text-center mt-20 inline-block w-full bottom-border relative'>
                    <h3 className='text-[18px] uppercase'> Introduction</h3>
                    <h1 className='text-4xl uppercase dark:text-[#458fd0] font-bold '>About <span className='text-[#458fd0] dark:text-white'>Me</span></h1>
                </div>
                <div class="hero min-h-screen">
                    <div class="hero-content items-start flex-col justify-between w-full lg:flex-row-reverse">
                        <img src={img} class="lg:max-w-[317px]max-w-[300px] sm:max-w-[440px] h-auto lg:h-[346px] object-cover border-solid border-[8px] border-[#458fd0] rounded-lg  shadow-2xl " alt='img' />
                        <div className='w-full text-white '>
                            <div className='w-full text-white '>
                                <div>
                                    <div className='flex justify-between items-center py-3 px-2 bg-[#458fd0] w-full'>
                                        <div className='border-solid border-[2px] border-white rounded-full p-1 flex justify-center items-center'>
                                            <div className='w-[7px] h-[7px] rounded-full bg-white'></div>
                                        </div>
                                        <div>
                                            <p>About Me</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* description  */}
                            <div className='mt-5 text-right px-5 text-black'>
                                <div >
                                    <p className='uppercase font-bold my-3 text-black text-xl'><span className='text-[#458fd0]'>Hello!</span> My Name is Ariful Islam</p>
                                    <article className='border_bottom pb-4 mb-3'>
                                        Hi, I am passionate to work with any type of cloud infrastructure. My main focus is aws architecture. Build system for various kind of web application or website. Deployment, automation, auto calling, cloudformation , opsworks and beanstack is my key.

                                        <p className='mt-3'> Also, I am a big fan of Ansible, Jenkins, chef . I use them for making my workflow faster and reliable.</p>
                                    </article>
                                    <div className='grid grid-cols-2 gap-7'>
                                        <div>
                                            <div className='mb-2'>
                                                <p>harrison_p@example.com</p>
                                                <strong>Email</strong>
                                            </div>
                                            <div className='mb-2'>
                                                <p>8801723004411</p>
                                                <strong>Phone :</strong>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>From :</strong>
                                                <span>BD,Chuadanga</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='mb-2'>
                                                <strong>Name :</strong>
                                                <span>Ariful Islam</span>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>Age :</strong>
                                                <span>25</span>
                                            </div>
                                            <div className='mb-2'>
                                                <strong>Job :</strong>
                                                <span>AWS Developer</span>
                                            </div>
                                        </div>
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