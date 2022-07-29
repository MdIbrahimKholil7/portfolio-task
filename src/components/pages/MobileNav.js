import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
import { HashLink } from 'react-router-hash-link';
const MobileNav = () => {
    const [open, setOpen] = useState(true)
    const [rotate, setRotate] = useState(false)
    const [dark, setDark] = useState('light')
    const [openMenu, setOpenMenu] = useState(false)

    const openVariants = {
        openNav: {
            y: '-0.8vh',
            opacity: 0.7,
            x: '0',
            transition: {
                duration: 0.4,
                height: '70vh'
            },

        },
        closeNav: {
            y: '-160vh',
            opacity: 0,
            transition: {
                duration: 0.5
            },
            height: 0
        }
    }
    useEffect(() => {
        document.body.className = dark
    }, [dark])

    const themeHandler = () => {
        if (dark === 'light') {
            setDark('dark')
        } else {
            setDark('light')
        }

    }
    const handleNav = () => {
        setOpenMenu(!openMenu
        )
        console.log(openMenu)
    }
    return (
        <div className='lg:hidden nav-z block mb-[61px] w-full'>
            <div className='fixed top-0 left-0 w-full z-[999]'>
                <div className='flex justify-between items-center w-[100vw] bg-white dark:bg-slate-800 py-4 nav-border px-5'>
                    <div onClick={() => setOpenMenu(!openMenu)} className='cursor-pointer text-[#458fd0]' >
                        {
                            openMenu ? <XIcon
                                className='w-[30px]'
                            /> : <MenuAlt3Icon
                                className='w-[30px]'
                            />

                        }
                    </div>
                    <div>
                        <h3 className='text-[#458fd0] text-2xl font-bold font-serif'>Ariful Islam</h3>
                    </div>
                </div>

                <motion.div
                    /*  variants={openVariants}
                     animate={openMenu ? 'openNav' : 'closeNav'} */
                    className=" mt-1 ">
                    <motion.ul
                        variants={openVariants}
                        animate={openMenu ? 'openNav' : 'closeNav'}
                        className=" h-[100vh] w-full z-[-777]  nav-bg py-20 dark:bg-slate-700" >
                        <HashLink 
                        smooth to='/'
                        >
                            <li className="flex  dark:text-white dark:border-b-white mt-5 pb-3 text-white font-bold text-[18px] li-style justify-center items-center">
                                Home
                                <span className="ml-2">
                                    <HiHome />
                                </span>
                            </li>
                        </HashLink>
                        <HashLink
                            smooth to='/#about'
                        >
                            <li className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-white font-bold text-[18px] li-style justify-center items-center">
                                About
                                <span className="ml-2">
                                    <FaUserAlt />
                                </span>
                            </li>
                        </HashLink>
                        <HashLink
                            smooth to='/#service'
                        >
                            <li className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-white font-bold text-[18px] li-style justify-center items-center">
                                Services
                                <span className="ml-2">
                                    <BsFillGearFill />
                                </span>
                            </li>
                        </HashLink>
                        <HashLink
                        smooth to='/#contact'
                        >
                            <li className="flex dark:text-white dark:border-b-white mt-5 pb-3 text-white font-bold text-[18px] li-style justify-center items-center">
                                Contact
                                <span className="ml-2">
                                    <FaMobile />
                                </span>
                            </li>
                        </HashLink>
                        <div className="text-center mt-5 text-white">
                            <label className="swap swap-rotate">
                                <input onClick={() => themeHandler()} type="checkbox" />

                                {/* <!-- sun icon --> */}
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* <!-- moon icon --> */}
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                        </div>
                    </motion.ul>
                </motion.div>


            </div>
        </div>
    )
}

export default MobileNav;