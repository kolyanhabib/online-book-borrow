"use client";

import Image from "next/image";
import "animate.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Emily Carter",
      text: "This platform makes finding and borrowing books incredibly easy.",
      image: "https://i.ibb.co.com/nsZvLf6Z/photo-1.jpg",
      rating: 5,
    },
    {
      name: "Michael Brown",
      text: "Clean design and smooth experience. Really enjoyable to use.",
      image: "https://i.ibb.co.com/BHJbBwTR/photoo.webp",
      rating: 4,
    },
    {
      name: "John Doe",
      text: "A modern and user-friendly digital library. Highly recommended!",
      image: "https://i.ibb.co.com/x851HNH0/photo-3.webp",
      rating: 5,
    },
    {
      name: "Sarah Khan",
      text: "Very smooth and fast experience. Loved the UI!",
      image: "https://i.ibb.co.com/Qjm3TWzr/photo-7.png",
      rating: 5,
    },
    {
      name: "Daniel Smith",
      text: "Great collection and very easy to use platform.",
      image: "https://i.ibb.co.com/xq8GrzxW/photo-8.webp",
      rating: 4,
    },
    {
      name: "Olivia White",
      text: "Beautiful design and smooth performance.",
      image: "https://i.ibb.co.com/ps3jpQ0/photo-5.webp",
      rating: 5,
    },
    {
      name: "James Wilson",
      text: "Fast loading and very responsive experience.",
      image: "https://i.ibb.co.com/x851HNH0/photo-3.webp",
      rating: 4,
    },
    {
      name: "Sophia Lee",
      text: "One of the best digital library platforms I’ve used.",
      image: "https://i.ibb.co.com/mFbFnNbG/photo-4.webp",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
          What Our Users Say
        </h2>

        <p className="text-gray-500 mb-10">
          Real feedback from our happy readers
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides
          speed={800}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          grabCursor
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 rounded-2xl bg-white shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="h-16 w-16 relative mb-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="64px"
                    className="rounded-full object-cover border-2 border-purple-200"
                  />
                </div>

                
                <div className="flex mb-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-sm ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-4">“{review.text}”</p>

                <h4 className="font-semibold">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
