"use client";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "/images/slide-1.jpg",
    title: "Welcome to Epic Journey Cabs",
    subtitle: "The well-renowned travel agency in Chandigarh offers Car rental service for North India holidays",
    link: "/about-us",
    buttonText: "Read more"
  },
  {
    image: "/images/slide-2.jpg",
    title: "Chandigarh Taxi Service",
    subtitle: "Epic Journey Cabs indulge in providing reliable tourist transport in Chandigarh. We have all types of Cab like SUV, Sedan, Hatchbacks, (Tempo Traveller), etc.",
    link: "/car-rentals",
    buttonText: "Car Rentals"
  },
  {
    image: "/images/slide-3.jpg",
    title: "One Way Taxi",
    subtitle: "Book a Taxi for North India's tourist places such Manali, Dalhousie, Dharamshala, Shimla, Kashmir etc.",
    link: "/one-way-taxis",
    buttonText: "One Way Taxi"
  }
];

export default function ImageSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl">
                  {slide.subtitle}
                </p>
                <Link 
                  href={slide.link}
                  className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-lg"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
