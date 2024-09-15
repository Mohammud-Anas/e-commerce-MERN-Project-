import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Carousel = ({ bannerImages }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%] h-[240px] md:h-[400px] top-[120px] md:top-[140px]  pt-2 z-[-1] shadow-lg "
      >
        {bannerImages.map((url, index) => (
          <SwiperSlide
            className=" w-full h-full flex justify-center items-center"
            key={index}
          >
            <img
              src={url}
              alt={index}
              className=" w-full h-full object-cover block md:object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
