import React from "react";
import { motion } from 'framer-motion'
import { HiHome} from 'react-icons/hi';
import { FaUserAlt} from 'react-icons/fa';
import { BsFillGearFill} from 'react-icons/bs';
import { FaMobile} from 'react-icons/fa';
import logo from '../../assets/img2.png'
const sidebarVariants = {
    sidebarOpen: {
        width: "260px",
        transition: {
            when: "beforeChildren",
        },
    },

    sidebarClosed: {
        width: "0px",
        transition: {
            delay: 0.5
        }
    },

};

const LinkBoxVariants = {
    sidebarOpen: {
        x: '0',
        opacity: 1,
    },
    sidebarClosed: {
        x: '100vw',
        opacity: 0,
    },
};

const SideBar = ({ open }) => {
    return (
        <motion.div
            variants={sidebarVariants}
            animate={open ? "sidebarOpen" : "sidebarClosed"}
            transition={{ type: 'spring', stiffness: 120 }}
            className=''
        >
            <motion.div className='fixed top-[0] w-[210px] right-0' variants={LinkBoxVariants}>
                <div className="overflow-x-hidden sidebar" >
                    <div className="mt-12">
                        <img className="w-[134px] border-solid border-[8px] border-[#458fd0] rounded-lg h-[134px] object-cover mx-auto" src={logo} alt="logo" />
                        <h1 className="uppercase text-center text-[#458fd0] text-xl font-sans font-bold my-5">Ariful Islam</h1>
                    </div>
                    <div  className="px-10 mt-16">
                        <motion.ul className=" h-[100vh]" >
                            <li className="flex mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Home <span className="ml-2"><HiHome/></span></li>
                            <li className="flex mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">About <span className="ml-2"><FaUserAlt/></span></li>
                            <li className="flex mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Services<span className="ml-2"><BsFillGearFill/></span></li>
                            <li className="flex mt-5 pb-3 text-[#212529] font-bold text-[18px] li-style justify-end items-center">Contact<span className="ml-2"><FaMobile/></span></li>
                        </motion.ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SideBar;
