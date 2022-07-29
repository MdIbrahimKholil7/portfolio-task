import { ChevronUpIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';

const Footer = () => {
    const date=new Date()
    
    const scrollBtn = () => {
        window.scrollTo({
            top: '8rem',
            behavior: 'auto'
        })
    }
    return (
        <div className=' footer-img h-[230px] text-[18px] relative'>
            <div className='text-center flex justify-center items-center h-full'> 
                <div className='h-full flex justify-center items-center flex-col'>
                    <p className='text-white'><span className='text-[#458fd0]'>Ariful Islam</span> All Rights Reserved {date.getFullYear()} &copy;</p>
                    <p className='text-white'>Developed By <span className='text-[#458fd0]'>Ariful Islam</span></p>
                </div>
            </div>
            <div onClick={()=>scrollBtn()} className='absolute top-[-14px] left-[49%] w-[37px] rounded-md flex justify-center items-center h-[34px] bg-[#458fd0] cursor-pointer'>
                <ChevronUpIcon
                className='text-2xl text-white'
                />
            </div>
        </div>
    );
};

export default Footer;