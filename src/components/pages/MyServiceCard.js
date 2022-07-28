import React, { useEffect, useState } from 'react';

const MyServiceCard = ({ service }) => {

    const { title, img, serviceDesc } = service
    const [desc, setDesc] = useState('')
    const [open, setOpen] = useState(false)
    const details = serviceDesc.length > 70 ? serviceDesc.slice(0, 73) : serviceDesc

    useEffect(() => {
        setDesc(details)
    }, [details])

    const handleDesc = () => {
        setDesc(serviceDesc)
        setOpen(true)
    }
    const handleShowLess = () => {
        setDesc(details)
        setOpen(false)
    }

    const btn = <button className='text-[#458fd0] hover:text-white' onClick={handleDesc}>... See more</button>
    const showMoreBtn = details.length > 69 && btn


    return (
        <div
            className='flex justify-center items-start card-hover relative'
        >
            <div className=''>
                <div

                    className='lg:max-w-[270px] md:max-w-[300px] max-w-[300px]
        shadow-xl p-3 rounded-lg bg-white dark:bg-slate-700  hover:text-white lg:mt-20 service-card 
         '
                >
                    <div
                        className='text-right'
                    >
                        <div
                            className='flex justify-end my-5'
                        >
                            {
                                img && <img className='w-[60px] ' src={img} alt="" />
                            }
                        </div>
                        <h3
                            className='text-[17px] text-[#458fd0] font-bold mb-1'
                        >
                            {title}
                        </h3>
                        <article className='leading-7 article dark:text-white hover:text-white text-[#575757]'>
                            {
                                desc
                            }
                            <>
                                <span className='ml-1 block'>
                                    {
                                        open ? <button className='text-[#458fd0] hover:text-white' onClick={handleShowLess}>ShowLess</button> : showMoreBtn
                                    }
                                </span>
                            </>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;