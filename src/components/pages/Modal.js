import { XIcon } from '@heroicons/react/solid';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';
import {motion} from 'framer-motion'
const Modal = ({ openModal, setOpenModal, projects, projectLength }) => {
    const { img } = projects[openModal] || {}
    const handleDecrease = (item) => {
        if (openModal === 'increase') {
            if (openModal >= projectLength - 1) {
                setOpenModal(0)
            } else {
                setOpenModal(openModal + 1)
            }
        } else {
            if (openModal <= 0) {
                setOpenModal(projectLength - 1)
            } else {
                setOpenModal(openModal - 1)
            }
        }
    }

    const modalVariants={
        visible:{
         
            opacity:1,
            transition:{
                duration:0.5,
                ease:'easeInOut'
            }
        },
        hidden:{
           
            opacity:0
        }
    }
    return (
        <div className='relative bg-slate-500'>
            <div
                style={{ backgroundColor: '#00000080' }}
                className='project_modal' >
                <motion.div 
                className='flex justify-center items-center w-full h-full'
                variants={modalVariants}
                initial={'hidden'}
                animate={'visible'}
                >
                    <div className='md:max-w-[450px] sm:max-w-[400px] max-w-[250px] mx-auto '>
                        <img className='w-full h-full' src={img} alt="" />
                    </div>

                </motion.div>

                <div onClick={() => setOpenModal(null)} className=' z-[88] cross-icon '>
                    <span className=''>
                        <XIcon
                            className='w-[30px] text-white'
                        />
                    </span>
                </div>
                {/* arrow div  */}
                <div className='arrow flex justify-between items-center'>
                    <span>
                        <BiLeftArrow
                            onClick={() => handleDecrease('increase')}
                            className='text-[30px] text-white cursor-pointer'
                        />
                    </span>
                    <span>
                        <BiRightArrow
                            onClick={() => handleDecrease('decrease')}
                            className='text-[30px] text-white cursor-pointer'
                        />
                    </span>
                </div>
            </div >
        </div>
    );
};

export default Modal;