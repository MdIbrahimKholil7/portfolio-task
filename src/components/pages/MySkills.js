import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'

const MySkills = ({ progress }) => {

    const { ref, inView } = useInView()
    const animation = useAnimation()
    const [animateCount, setAnimateCount] = useState(0)

    useEffect(() => {
        setAnimateCount(animateCount + 1)
        if (animateCount <= 1) {
            if (inView) {
                animation.start({
                    x: 0,
                    transition: {
                        delay: 0.6,
                        type: 'spring',
                        stiffness: 120,
                        duration: .3,
                        ease: 'easeInOut'

                    },
                    opacity: 1
                })
            }
            if (!inView) {
                animation.start({
                    x: -1000,
                    opacity: 0
                })
            }
        }
    }, [inView])

    return (
        <div
            ref={ref}
            className='my-10 dark:bg-slate-800 max-w-[1280px] mx-auto'
        >
            <div
            >
                <motion.div 
                animate={animation}
                className='text-center mt-20 inline-block w-full bottom-border relative mb-10 '>
                    <h3 className='md:text-[18px] dark:text-white text-[15px] uppercase'> Skills</h3>
                    <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold  '>My <span className='text-[#458fd0] dark:text-white'>Skills</span></h1>

                </motion.div>
            </div>
            {
                inView && <div class="container dark:bg-slate-800 mx-auto mb-[200]">
                    <div cla className='mb-7' ssName='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  relative dark:bg-slate-800">
                            <span class="title timer " data-from="0" data-to="95" data-speed="1800">90%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>HTML</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="80" data-speed="1500">80%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>CSS</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="80" data-speed="1500">80%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>Tailwind CSS</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="90" data-speed="1500">90%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>Bootstrap</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="50" data-speed="1500">50%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>JS</h1>
                        </div>
                    </div>

                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="75" data-speed="1800">75%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>Firebase</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="70" data-speed="1800">70%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>React JS</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="45" data-speed="1800">45%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>Node JS</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="55" data-speed="1800">55%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>MongoDB</h1>
                        </div>
                    </div>
                    <div className='mb-7'>
                        <div class="progress md:w-[140px] md:h-[140px] w-[100px] h-[100px] text-[16px]  dark:bg-slate-800">
                            <span class="title timer" data-from="0" data-to="40" data-speed="1800">40%</span>
                            <div class={`${progress ? 'dark' : 'overlay'}`}></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>
                        <div className='text-center font-bold'>
                            <h1 className='text-[#458fd0] text-[14px] md:text-[17px]'>Express JS</h1>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MySkills;