// export default HeroSection;
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-[88vw] flex md:h-[400px] items-center justify-center mt-5 h-auto  md:w-full "
      >
        <SwiperSlide>
          <img src="/images/slider1.jpg" className="bg-contain " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider2.jpg" className="bg-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider3.jpg" className="bg-contain" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
