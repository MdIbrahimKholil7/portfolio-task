import React from 'react';
import {motion} from 'framer-motion'
const MyProjectCard = ({ project }) => {
    const { img, title } = project || {}
    const serviceCardVariants={
        visible:{
            opacity:1,
            transition:{
                duration:6,
                ease:'easeInOut'
            }
        },
        hidden:{
            opacity:0
        }
    }
    return (
        <motion.div 
        variants={serviceCardVariants}
        initial='hidden'
        animate='visible'
        className='flex justify-center items-center'>
         
                <div className='max-w-[330px] relative project'>
                    <img className='w-full h-full object-cover' src={img} alt={title} />
                    <div className='project_card'>
                        <h4>{title}</h4>
                    </div>
                </div>
            
        </motion.div>
    );
};

export default MyProjectCard;