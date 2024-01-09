import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerSlide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const BannerSlide = () => {
  return (
    <div className=' banner w-[15rem] md:w-[30rem]'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602574232i/55539565.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full'src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470282721i/29502358.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full'src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348637184i/6684862.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536184191i/41721428.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full'src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590806892i/53642699.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600432716i/51942513.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' rounded-lg overflow-hidden'>
          <img className='h-full' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673265751i/61420096.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSlide