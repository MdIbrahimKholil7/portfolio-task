import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { BiChevronsLeft } from 'react-icons/bi';
import { BiChevronsRight } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/img2.png'
const sidebarVariants = {
    sidebarOpen: {
        width: "260px",
        transition: {
            // when: "beforeChildren",
            delay: 0.1,

        },
    },

    sidebarClosed: {
        width: "0px",
        transition: {
            delay: 0.1,

        }
    },

};

const LinkBoxVariants = {
    sidebarOpen: {
        x: '0',
        opacity: 1,
        transition: {
            // delay: 0.1,
            type: 'tween'
        }
    },
    sidebarClosed: {
        x: '100vw',
        opacity: 0,
        transition: {
            delay: 0.1
        }
    },
};

const imgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


// theme handler 

const SideBar = ({ progress, setProgress }) => {
    const [open, setOpen] = useState(true)
    const theme=JSON.parse(localStorage.getItem('theme'))
    const [rotate, setRotate] = useState(false)
    const [dark, setDark] = useState(theme?.theme || 'light')
    useEffect(() => {
        document.body.className = dark
    }, [dark])
   

    // sidebar toggler 
    const handleToggler = () => {
        setOpen(!open)
    }
    console.log(progress)
    const themeHandler = () => {
        setProgress(!progress)
        if (dark === 'light') {
            setDark('dark')
        } else {
            setDark('light')
        }
        localStorage.setItem('theme', JSON.stringify({ theme: dark }))
        // localStorage.setItem('skill', JSON.stringify({ skill: !progress }))
    }
    return (
        <div className="lg:block hidden">
            {/* toggler  */}
            <div className="fixed top-0 right-0">
                <div>
                    <h4 className="text-2xl mt-3 pl-2 text-white py-2 px-2 flex justify-center items-center bg-[#458fd0]"><BiChevronsRight
                        onClick={() => handleToggler()}
                        className="cursor-pointer"
                    /></h4>
                </div>
            </div>
            {/* nav link  */}
            <motion.div
                variants={sidebarVariants}
                animate={open ? "sidebarOpen" : "sidebarClosed"}

                className='ml-0'
            >
                <motion.div className='fixed top-[0] w-[260px] right-0' variants={LinkBoxVariants}

                >
                    <div className="overflow-x-hidden sidebar dark:shadow-2xl dark:bg-gray-700 " >
                        <div>
                            <h4 className="text-2xl  mt-3 pl-2 text-[#458fd0]">
                                <motion.span
                                    animate={{
                                        rotate: rotate ? 180 : 0
                                    }}
                                    transition={{ ease: 'easeInOut' }}
                                >
                                    <BiChevronsLeft
                                        onClick={() => handleToggler()}
                                        className="cursor-pointer"

                                    />
                                </motion.span>
                            </h4>
                        </div>
                        <div className="mt-7">

                            <motion.img
                                variants={imgVariants}
                                initial='hidden'
                                animate='visible'
                                className="w-[134px] border-solid border-[8px] border-[#458fd0] rounded-lg h-[134px] object-cover mx-auto" src={logo} alt="logo" />

                            <h1 className="uppercase text-center text-[#458fd0] text-xl font-sans font-bold my-5">Ariful Islam</h1>
                        </div>
                        <div className="px-16 mt-16">
                            <motion.ul className=" h-[100vh]" >
                                <HashLink
                                    smooth to='/'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Home <span className="ml-2"><HiHome /></span></motion.li>
                                </HashLink>
                                <HashLink
                                    smooth to='/#about'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">About <span className="ml-2"><FaUserAlt /></span></motion.li>
                                </HashLink>
                                <HashLink
                                    smooth to='/#service'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Services<span className="ml-2"><BsFillGearFill /></span></motion.li>
                                </HashLink>
                                <HashLink
                                smooth to='/#contact'
                                >
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Contact<span className="ml-2"><FaMobile /></span></motion.li>
                                </HashLink>
                                <div className="text-center mt-5">
                                    <label className="swap swap-rotate">

                                        <input onClick={() => themeHandler()} type="checkbox" />

                                        {/* <!-- sun icon --> */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* <!-- moon icon --> */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </div>
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SideBar;
