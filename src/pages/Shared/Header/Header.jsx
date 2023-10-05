// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderCarousel from '../../../components/SliderCarousel/SliderCarousel';
import img1 from '../../../assets/images/Rectangle-1.png';
import img2 from '../../../assets/images/Sajek.png';
import img3 from '../../../assets/images/Sreemongol.png';
import img4 from '../../../assets/images/sundorbon.png';
import img5 from '../../../assets/images/Rectangle-2.png';
import { useEffect, useState } from 'react';



const Header = ({ setCurrentPlace, currentPlace }) => {

    const places = [
        {
            id: 1,
            place_name: 'cox bazar',
            description: 'Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...',
            img: img1,
        },
        {
            id: 2,
            place_name: 'Sajek',
            description: 'Sajek is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...',
            img: img2,
        },
        {
            id: 3,
            place_name: 'Sreemongol',
            description: 'Sreemongol is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...',
            img: img3,
        },
        {
            id: 4,
            place_name: 'sundarban',
            description: 'Sundarban is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...',
            img: img4,
        },
        {
            id: 5,
            place_name: 'saintmartin',
            description: 'Saintmartin is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...',
            img: img5,
        },
    ]


    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setCurrentPlace(places[currentSlide])
    }, [currentSlide])

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex); // Update the currentSlide state with the real index of the 

        // console.log(swiper.realIndex);

        const place = places.filter(p => p.id == swiper.realIndex + 1)
        setCurrentPlace(...place)
    };

    console.log(currentPlace);

    return (
        <div className="flex flex-wrap md:flex-nowrap gap-10 items-start mt-36">

            <div className="space-y-4">
                <h2 className="text-8xl text-white font-bold capitalize font-title">
                    {currentPlace?.place_name}
                </h2>
                <p className="text-[#ffffffc2] w-1/2">
                    {currentPlace?.description}
                </p>
                <button className="btn btn-warning">Booking</button>
            </div>

            <div className='w-3/5 h-[500px]'>
                <Swiper

                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    slidesPerView = {3}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          },
                          0 : {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          }
                      
                    }}
                    modules={[Navigation]}
                    slideToClickedSlide={true}
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => console.log(swiper)}

                    className="mySwiper h-full">

                    {
                        places.map(place => (
                            <SwiperSlide key={place.id} >
                                <SliderCarousel place={place} />
                            </SwiperSlide>
                        ))
                    }
                    {/* <SwiperSlide >Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>

        </div>
    );
};

export default Header;