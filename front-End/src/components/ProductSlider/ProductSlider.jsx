import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./productSlider.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const ProductSlider = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="containerSlider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/habitacion-hotel-revolve2-1546271048.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.ambito.com/p/d5069798a379128c4d48dc586dede974/adjuntos/239/imagenes/036/681/0036681204/2jpg.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/61/37/613753900.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/33/18/331828796.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/73/21/732178900.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlZoBqCVJN32weDAcB8zJaAwb-TniEmQ3-Q&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/47/97/479710082.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zsstmI4e5oOIRY4PYNOFz-a8uDu5Eyn83Q&usqp=CAU" alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
