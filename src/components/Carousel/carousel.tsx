'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const sliders = [
  {
    name: 'slider1',
    url: '/images/pictures/apartamento1.jpg'
  },
  {
    name: 'slider2',
    url: '/images/pictures/apartamento2.jpg'
  },
  {
    name: 'slider3',
    url: '/images/pictures/apartamento3.jpg'
  },
  {
    name: 'slider4',
    url: '/images/pictures/apartamento4.jpg'
  }
]

export const CarouselCompt = () => {
  return (
    <div className='h-full'>

      <Swiper

        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          sliders.map((slider) => {
            return (
              <SwiperSlide key={slider.name}>
                <div className="swiper-slide">
                  <Image src={slider.url} alt={slider.name} width={1920} height={1080} />
                </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  );
}