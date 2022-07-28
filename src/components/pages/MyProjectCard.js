import React from 'react';

const MyProjectCard = ({ project }) => {
    const { img, title } = project || {}

    return (
        <div className='flex justify-center items-center'>
         
                <div className='max-w-[330px] relative project'>
                    <img className='w-full h-full object-cover' src={img} alt={title} />
                    <div className='project_card'>
                        <h4>{title}</h4>
                    </div>
                </div>
            
        </div>
    );
};

export default MyProjectCard;