import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Slider = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay
                autoplay-delay="2500"
                autoplay-disable-on-interaction="false"
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src="https://i.ibb.co/qJ8zHxr/food1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/RbrGcwR/food2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/qm6TPMn/food3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/mNWRthW/food4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;