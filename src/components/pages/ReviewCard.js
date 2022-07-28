import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { img, feedBack, name } = review || {}
    return (
        <div className='bg-[#1c1c1c] text-center text-white px-3 py-7 h-[400px] sm:h-[390px]'>
            <div>
                <div>
                    <img className='w-[120px] h-[120px] rounded-full mx-auto' src={img} alt="" />
                </div>
                <article className='mt-2 leading-7'>
                    {
                        feedBack
                    }
                </article>
                <div className='text-center py-4 text-white'>
                    <span>
                        <FaQuoteLeft
                            className='text-[#458fd0] text-xl text-center mx-auto'
                        />
                    </span>
                    <p className='sm:text-2xl text-xl pt-3'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;