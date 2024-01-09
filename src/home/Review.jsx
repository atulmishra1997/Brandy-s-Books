import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import proPic1 from '../assets/Mark.jpg';
import proPic2 from '../assets/Jeff.png';
import proPic3 from '../assets/Sundar.jpg';
import proPic4 from '../assets/Elon.jpg';

// React Icons
import {FaStar} from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Review() {
  return (
    <div className=' my-12 px-4 lg:px-24'>
        <h2 className=' text-5xl text-center font-bold text-slate-900 leading-snug my-5'>Reviews</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=' shadow-2xl bg-white py-8  px-4 md:m-5 rounded border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptatum non laborum sequi pariatur facere. Ratione, 
                        porro, veritatis harum eveniet perspiciatis quos cum incidunt
                         animi reiciendis reprehenderit beatae quibusdam vero tempora.</p>
                         <Avatar img={proPic1} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Mark Lorem</h5>
                         <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-white py-8  px-4 md:m-5 rounded border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptatum non laborum sequi pariatur facere. Ratione, 
                        porro, veritatis harum eveniet perspiciatis quos cum incidunt
                         animi reiciendis reprehenderit beatae quibusdam vero tempora.</p>
                         <Avatar img={proPic2} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Jeff Lorem</h5>
                         <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-white py-8  px-4 md:m-5 rounded border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptatum non laborum sequi pariatur facere. Ratione, 
                        porro, veritatis harum eveniet perspiciatis quos cum incidunt
                         animi reiciendis reprehenderit beatae quibusdam vero tempora.</p>
                         <Avatar img={proPic3} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Sundar Lorem</h5>
                         <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-white py-8  px-4 md:m-5 rounded border'>
            <div className='space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptatum non laborum sequi pariatur facere. Ratione, 
                        porro, veritatis harum eveniet perspiciatis quos cum incidunt
                         animi reiciendis reprehenderit beatae quibusdam vero tempora.</p>
                         <Avatar img={proPic4} alt="avatar of Jese" rounded className='w-10 mb-4' />
                         <h5 className='text-lg font-medium'>Elon Lorem</h5>
                         <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default Review