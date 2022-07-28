import React, { useState } from 'react';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';
import MobileNav from '../pages/MobileNav';
import MyProject from '../pages/MyProject';
import MyService from '../pages/MyService';
import ProductTestimonial from '../pages/ProductTestimonial';
import SideBar from '../pages/SideBar';
import Testimonials from '../pages/Testimonials';
const Home = () => {

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
                    <Testimonials />
                    <Contact />
                    {/* <ProductTestimonial/> */}
                    <Footer/>
                </div>
                <SideBar />

            </div>
        </div>
    );
};

export default Home;