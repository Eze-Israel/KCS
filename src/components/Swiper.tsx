"use client"; // Required in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";




const slides = [
  {
    id: 1,
    text: "🌱 Welcome to the Future of Agro-Commerce!",
    subText: "Connecting farmers and buyers seamlessly in a digital marketplace.",
    bg:"/images/Kcs.jpg",
    
  },
  {
    id: 2,
    text: "🚜 Empowering Farmers with Technology",
    subText: "Sell fresh produce directly to consumers with secure transactions.",
    bg: "/images/kcs4.jpg",
    
  },
  {
    id: 3,
    text: "📦 Efficient Supply Chain Solutions",
    subText: "Track orders, manage deliveries, and optimize your sales effortlessly.",
    bg: "/images/kcs6.jpg",
    
  },
  {
    id: 4,
    text: "💳 Secure Payments & Easy Transactions",
    subText: "Seamless payments powered by Paystack for worry-free commerce.",
    bg: "/images/kcs5.jpg",
    
  },
  {
    id: 5,
    text: "🌱🚜📦💳 AGRO CIRCLE",
    subText: "The life cycle of Agriculture and Commerce.",
    bg: "/images/kcs3.jpg",
    
  },
];

const SwiperComponent = () => {

  const hoverEffect = {
    scaleY: 1.05,
   transition: {duration: 0.3},
 };


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000, disableOnInteraction: true  }}
      className="h-screen w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div
            className="relative inset-0  w-full h-full bg-cover bg-center pointer-events-none">
            <Image 
              src={slide.bg} 
              alt="Slide Image"
              fill // ✅ Makes it auto-resize inside the parent div
              style={{ objectFit: "cover" }} 
              quality={100}
              draggable={false} // Prevents image dragging 
              priority
              unoptimized  // Turns off Next.js processing
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 p-6 text-center">
            
            {/* Animated Text */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{opacity: 0, y: 50}}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{
                  y:0,
                  transition: {
                      // type:"spring",
                      // bounce:0.25,
                      duration:7,
                  }
              }}
              whileHover={hoverEffect}
              viewport={{once: true}}
            >
              {slide.text}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 5 }}
            >
              {slide.subText}
            </motion.p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
