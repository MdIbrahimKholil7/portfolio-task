import React from 'react';

const Footer = () => {
    const date=new Date()

    return (
        <div className=' footer-img h-[230px] text-[18px]'>
            <div className='text-center flex justify-center items-center h-full'> 
                <div className='h-full flex justify-center items-center flex-col'>
                    <p className='text-white'><span className='text-[#458fd0]'>Ariful Islam</span> All Rights Reserved {date.getFullYear()} &copy;</p>
                    <p className='text-white'>Developed By <span className='text-[#458fd0]'>Ariful Islam</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;