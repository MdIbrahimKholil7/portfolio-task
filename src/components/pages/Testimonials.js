import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import clientReviews from './clientsReview';
import ReviewCard from './ReviewCard';
import client7 from '../../assets/images/client7.jpg'
import client8 from '../../assets/images/client8.jpg'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const Testimonials = () => {
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
                    x: 1000,
                    opacity: 0
                })
            }
        }
    }, [inView])
    const settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };


    return (
        <div ref={ref} className='px-5 mb-20 overflow-x-hidden'>
            <motion.div 
            
            animate={animation}
            className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                <h3 className='md:text-[18px] text-[15px] uppercase'>Testimonials</h3>
                <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>What <span className='text-[#458fd0] dark:text-white'>Clients</span> Says</h1>
            </motion.div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-7 mt-20 items-center'>
                <div>
                    <Slider {...settings}>
                        {
                            clientReviews?.map((review, index) => <ReviewCard
                                key={index}
                                review={review}
                            />)
                        }
                    </Slider>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <img className='w-full rounded-md' src={client7} alt="" />
                    </div>
                    <div>
                        <img className='w-full rounded-md' src={client8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;