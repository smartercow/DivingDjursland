import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/clientApp";
import { useEffect, useState } from "react";
const Slider = () => {
  const [slideList, setSlideList] = useState([]);
  const [update, setUpdate] = useState(false);

  const slideCollectionRef = collection(firestore, "Slides");

  useEffect(() => {
    const getSlides = async () => {
      const slideData = await getDocs(slideCollectionRef);
      setSlideList(
        slideData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getSlides();
  }, []);
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
        {slideList.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.image} layout="fill" objectFit="cover" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
