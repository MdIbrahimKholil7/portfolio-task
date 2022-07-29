import React, { useState } from 'react';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';
import MobileNav from '../pages/MobileNav';
import MyProject from '../pages/MyProject';
import MyService from '../pages/MyService';
import MySkills from '../pages/MySkills';
import ProductTestimonial from '../pages/ProductTestimonial';
import SideBar from '../pages/SideBar';
import Testimonials from '../pages/Testimonials';
const Home = () => {
    const skill=JSON.parse(localStorage.getItem('skill'))
    const [progress,setProgress]=useState(skill?.skill || false)
    return (
        <div >
            <div>
                <MobileNav />
            </div>
            <div className='flex justify-between items-center'>
                <div className=' w-full'>
                    <AboutMe />
                    <MyService />
                    <MyProject />
                    <MySkills
                    progress={progress}
                    />
                    <Testimonials />
                    <Contact />
                    {/* <ProductTestimonial/> */}
                    <Footer/>
                </div>
                <SideBar 
                progress={progress}
                setProgress={setProgress}
                />

            </div>
        </div>
    );
};

export default Home;