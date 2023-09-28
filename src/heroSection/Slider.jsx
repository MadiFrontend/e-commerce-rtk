import React from "react";
// import slider1 from "../../public/images/slider1.jpg";
import Cards from "../card/Cards";
import { register } from "swiper/element/bundle";

register();

function Slider() {
  return (
    <div className="w-full mt-16 pt-16">
      <swiper-container
        speed="500"
        loop="true"
        Navigation
        Autoplay
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
        // slidesPerView={1}
        // spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
      >
        <swiper-slide>
          <img
            src="https://images.vexels.com/content/197753/preview/online-store-sale-slider-template-a3cc06.png"
            alt="slider"
            className="w-full "
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg?w=900"
            alt="slider"
            className="w-full"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://images.vexels.com/content/197863/preview/handmade-online-shop-slider-template-7d508f.png"
            alt="slider"
            className="w-full"
          />
        </swiper-slide>
      </swiper-container>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Slider;
