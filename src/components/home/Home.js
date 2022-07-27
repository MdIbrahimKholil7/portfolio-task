import React, { useState } from 'react';
import AboutMe from '../pages/AboutMe';
import SideBar from '../pages/SideBar';
const Home = () => {
    const [open, setOpen] = useState(true)
    return (
        <div>
            <button onClick={() => setOpen(!open)}>Toggle</button>
            <div className='flex justify-between items-center'>
                <div className='px-5 w-full'>
                    <AboutMe />

                </div>
                <SideBar
                    open={open}
                />
            </div>
        </div>
    );
};

export default Home;