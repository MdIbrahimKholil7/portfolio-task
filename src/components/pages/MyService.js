import React from 'react';
import coding from '../../assets/coding.svg'
import photo from '../../assets/photo.svg'
import light from '../../assets/light.svg'
import phone from '../../assets/phone.svg'
import pen from '../../assets/ppen.svg'
import camera from '../../assets/camera.svg'
import MyServiceCard from './MyServiceCard';
const MyService = () => {

    const services = [
        {
            title: 'Coding',
            img: coding,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'ILLUSTRATION',
            img: null,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Photography',
            img: photo,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Web Development',
            img: light,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'App Development',
            img: phone,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Copy Writing',
            img: pen,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Video Editing',
            img: camera,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
        {
            title: 'Creative Branding',
            img: null,
            serviceDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam rerum, pariatur perferendis animi, voluptatibus vero, dolore porro est reprehenderit repellat ullam ab optio! At similique quam odit omnis saepe ipsum labore amet reprehenderit provident, soluta itaque deleniti repudiandae possimus?'
        },
    ]



    return (
        <div className='services min-h-screen bg-red-400 mt-20' >
            <div>
                <div className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                    <h3 className='md:text-[18px] text-[15px] uppercase'> My Services</h3>
                    <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>My <span className='text-[#458fd0] dark:text-white'>Services</span></h1>

                </div>
            </div>

            <div
                className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-6 gap-3 px-5 py-20 '
            >
                {/* service card  */}
                {
                    services.map((service, index) => <MyServiceCard
                        key={index}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default MyService;