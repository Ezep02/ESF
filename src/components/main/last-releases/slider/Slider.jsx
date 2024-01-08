import React, { useRef, useEffect } from 'react';
import {Swiper, SwiperSlide} from "swiper/react"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        // Detén la reproducción del video anterior
        const prevSlideVideo = document.querySelector('.swiper-slide-prev video');
        if (prevSlideVideo) {
          prevSlideVideo.pause();
        }

        // Inicia la reproducción del video actual
        const currentSlideVideo = document.querySelector('.swiper-slide-active video');
        if (currentSlideVideo) {
          currentSlideVideo.play();
        }
      });
    }
  }, []);



  return (
    <div className='
      rounded-2xl
      h-full
      cursor-pointer
      overflow-hidden
      '>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center items-center h-full w-full">

            <video src="/vid-1.mp4" className='object-cover h-full w-full rounded-2xl' autoPlay loop muted></video>

        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center h-full w-full">
          <video src="/vid-2.mp4"className='object-cover h-full w-full rounded-2xl' autoPlay loop muted></video>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center h-full w-full">
          <video src="/vid-5.mp4" className='object-cover h-full w-full rounded-2xl' autoPlay loop muted></video>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-full w-full">
          <video src="/vid-4.mp4" className='object-cover h-full w-full rounded-2xl' autoPlay loop muted></video>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Slider