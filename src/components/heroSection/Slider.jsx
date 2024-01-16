import { register } from "swiper/element/bundle";
register();

function Slider() {
  return (
    <div className="w-full">
      <swiper-container
        speed="500"
        loop="true"
        Navigation
        Autoplay
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
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
    </div>
  );
}

export default Slider;
