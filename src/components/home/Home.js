import React, { useState } from 'react';
import AboutMe from '../pages/AboutMe';
import MobileNav from '../pages/MobileNav';
import SideBar from '../pages/SideBar';
const Home = () => {

    return (
        <div>
            <div>
                <MobileNav />
            </div>
            <div className='flex justify-between items-center'>
                <div className=' w-full'>
                    <AboutMe />
                </div>
                <SideBar />
            </div>
        </div>
    );
};

export default Home;