import React, { useEffect, useState } from 'react';
import coding from '../../assets/coding.svg'
import photo from '../../assets/photo.svg'
import light from '../../assets/light.svg'
import phone from '../../assets/phone.svg'
import pen from '../../assets/ppen.svg'
import camera from '../../assets/camera.svg'
import MyServiceCard from './MyServiceCard';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const MyService = () => {
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

    const { ref: cardRef, inView: cardView } = useInView({
        threshold: 0.3
    })
    const serviceAnimation = useAnimation()
    const [cardCount, setCardCount] = useState(0)
    useEffect(() => {
        setCardCount(cardCount + 1)
        if (cardCount <= 1) {
            if (cardView) {
                serviceAnimation.start({
                    transition: {
                        delay: 0.4,
                        duration: 1,
                        ease: 'easeInOut'
                    },
                    opacity: 1
                })
            }
            if (!cardView) {
                serviceAnimation.start({
                    opacity: 0
                })
            }
        }
    }, [cardView])

    const services = [
        {
            title: 'Coding',
            img: coding,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'ILLUSTRATION',
            img: null,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Photography',
            img: photo,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Web Development',
            img: light,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'App Development',
            img: phone,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Copy Writing',
            img: pen,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Video Editing',
            img: camera,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Creative Branding',
            img: null,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
    ]

    return (
        <div
            id='service'
            ref={ref}
            className='services min-h-screen mt-20 overflow-x-hidden' >
            <motion.div
                animate={animation}
            >

                <div className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                    <h3 className='md:text-[18px] dark:text-slate-500 text-[15px] uppercase'> My Services</h3>
                    <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>My <span className='text-[#458fd0] dark:text-slate-700'>Services</span></h1>

                </div>
            </motion.div>

            <motion.div
                ref={cardRef}
                animate={serviceAnimation}
                className='max-w-[1008px] mx-auto '>
                <div
                    className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-6 gap-3 px-5 lg:py-20 py-10'
                >
                    {/* service card  */}
                    {
                        services.map((service, index) => <div
                            key={index}
                        >
                            <MyServiceCard


                                service={service}
                            />
                        </div>)
                    }
                </div>
            </motion.div>

        </div>
    );
};

export default MyService;