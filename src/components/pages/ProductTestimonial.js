import React from 'react';
import Slider from 'react-slick';
import { products } from './clientsReview';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductTestimonial = () => {

    const settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,

    };

    return (
        <div className=' h-[250px] products'>
            <div>
            <div>
                    <Slider {...settings}>
                        {
                            products?.map((product, index) => <div>
                                <img src={product.img} alt="" />
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProductTestimonial;