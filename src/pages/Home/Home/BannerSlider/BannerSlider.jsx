import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import SliderCard from "../SliderCard/SliderCard";
const BannerSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        centeredSlides={true}
      >
        <SwiperSlide>
          <SliderCard></SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard></SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard></SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard></SliderCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
