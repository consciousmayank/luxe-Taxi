"use client";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSlider() {
 
  const images = [
    "rectangular-image-1.jpg",
    "rectangular-image-2.jpg",
    "rectangular-image-3.jpg",
    "rectangular-image-4.jpg",
    "rectangular-image-5.jpg",
  ];


  return (
    <div className="w-full bg-red-500">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[500px] flex flex-col"
      >
        <div className="swiper-pagination absolute bottom-4 z-10"></div>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                // loader={() => image}
                src={`/images/${image}`}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain bg-gradient-to-r bg-primary to-bg-secondary"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
