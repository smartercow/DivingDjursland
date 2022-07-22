import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import Image from "next/image";
const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-60 sm:h-72 md:h-80"
      >
        <SwiperSlide>
          <Image
            src="/images/slider1.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src="/images/slider2.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src="/images/slider3.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
