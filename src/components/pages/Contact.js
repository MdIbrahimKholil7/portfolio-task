import React, { useEffect, useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const Contact = () => {
    const [success, setSuccess] = useState('')
    const { ref, inView } = useInView({
        threshold:0.3
    })
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

    // form handler 
    const handleSubmit=e=>{
        e.preventDefault()
        emailjs.sendForm(
            'service_hzfs5ep','template_a662fha',e.target,'iyNwT38vA4zpSYRnG')
        .then(res=>{
            console.log('success')
            console.log(res)
            setSuccess('Thank you for your response.We will get touch with you very soon')
        }).catch(err=>{
            console.log(err)
        })
        e.target.reset()
    }

    return (
        <div 
        id='contact'
        ref={ref}
        className='overflow-x-hidden pb-16'>
            <motion.div 
            
            animate={animation}
            >
                <div className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                    <h3 className='md:text-[18px] text-[15px] uppercase'>Contact</h3>
                    <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>Get In <span className='text-[#458fd0] dark:text-white'>Touch</span></h1>
                </div>
            </motion.div>
            <div class="hero z-20 min-h-[80vh] ">
                <div class="hero-content flex-col lg:flex-row-reverse w-full">
                    <div class="flex-shrink-0 w-full max-w-sm ">
                        <div class="flex justify-center">
                            <div className='text-right text-black dark:text-white'>
                                <div className='mb-2'>
                                    <strong>Email</strong>
                                    <p>harrison_p@example.com</p>
                                </div>
                                <div className='mb-2'>
                                    <strong>Phone </strong>
                                    <p>8801723004411</p>
                                </div>
                                <div className='mb-2'>
                                    <strong>From </strong>
                                    <p>BD,Chuadanga</p>
                                </div>
                                <div className='mb-2'>
                                    <strong>Contact Us </strong>
                                    <p>www.ariful-islam.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:text-left w-full max-w-[700px] ">
                        <form onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 w-full mb-4 '>
                                <div>
                                    <input type="text" placeholder="First Name" class="input input-bordered w-full " name='fname' required/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Last Name" class="input input-bordered w-full" name='lname' required/>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 w-full'>
                                <div>
                                    <input type="email" placeholder="Email" class="input input-bordered w-full " name='email' required/>
                                </div>
                                <div>
                                    <input type="number" placeholder="Phone" class="input input-bordered w-full" required name='phone'/>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <textarea class="textarea w-full min-h-[120px] textarea-bordered h-24" placeholder="Bio" required name='message'></textarea>
                            </div>
                            <div className='flex justify-center sm:justify-end mt-5 '>
                                <button
                                type='submit'
                                    className='resume_btn font-bold rounded-full md:px-[14px] xl:px-[20px] px-[20px] py-[5px]'
                                >
                                    <span>
                                        <PaperAirplaneIcon
                                            className='w-[20px] rotate-45'
                                        />
                                    </span>
                                    Send Us Message
                                </button>
                            </div>
                            <div >
                               {
                                success &&  <p className='my-10 text-green-500 font-bold text-center text-[14px]'>{success}</p>
                               }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;