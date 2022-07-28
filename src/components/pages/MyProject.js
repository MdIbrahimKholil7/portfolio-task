import React, { useState } from 'react';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import img8 from '../../assets/images/img8.jpg'
import Modal from './Modal';
import MyProjectCard from './MyProjectCard';
const MyProject = () => {
    const [openModal, setOpenModal] = useState(null)
    const projects = [
        {
            img: img1,
            title: 'Salon'
        },
        {
            img: img2,
            title: 'Photo Studio'
        },
        {
            img: img3,
            title: 'Rennesme Skin'
        },
        {
            img: img4,
            title: 'Vision Glass'
        },
        {
            img: img5,
            title: 'Hyrex Studio'
        },
        {
            img: img6,
            title: 'Reddot Media'
        },
        {
            img: img7,
            title: 'Car Studio'
        },
        {
            img: img7,
            title: 'Design Blast'
        },
    ]
    const [projectLength,setProjectLength]=useState(projects.length)
    const [imgIndex,setImgIndex]=useState(0)
    return (
        <div className='max-w-[1386px] mx-auto px-5'>
            <div>
                <div>
                    <div className='text-center mt-20 inline-block w-full bottom-border relative mb-10 lg:mb-0'>
                        <h3 className='md:text-[18px] text-[15px] uppercase'>Best Of My</h3>
                        <h1 className='lg:text-4xl md:text-3xl  text-2xl uppercase dark:text-[#458fd0] font-bold '>New <span className='text-[#458fd0] dark:text-white'>Projects</span></h1>
                    </div>
                </div>
                <div className='md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-6 lg:gap-0 xl:gap-6'>
                    {
                        projects.map((project, index) => <div
                            key={index}
                            onClick={()=>setOpenModal(index)}
                            >
                            <MyProjectCard
                                project={project}
                            />
                        </div>

                        )
                    }
                </div>
            </div>

            {
               typeof openModal === 'number' && <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                projectLength={projectLength}
                setProjectLength={setProjectLength}
                projects={projects}
                />
            }
        </div>
    );
};

export default MyProject;