import React from 'react';
import { SwiperSlide } from 'swiper/react';

const SliderCarousel = ({ place }) => {
    const { place_name, img, } = place;

    return (
        <div className='relative w-full'>
            <img className='w-full h-[400px] object-cover rounded-lg' src={img} alt="" />
            <p className='absolute bottom-4 left-4 text-4xl text-white font-title'>
                {
                    place_name
                }
            </p>
        </div>
    );
};

export default SliderCarousel;