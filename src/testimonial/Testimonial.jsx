import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css'
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div>
            <Swiper
            effect={'cards'}
             loop={true}
            grabCursor={true}

            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-heading'>Lucie Toma</div>
                <div className='card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
            </SwiperSlide>
        </Swiper></div>
    )
}

export default Testimonial