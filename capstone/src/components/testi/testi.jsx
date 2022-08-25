import React from "react";
import "./testi.css";
import IMG1 from "../../assests/avatar 1.png";
import IMG2 from "../../assests/avatar 2.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testi = () => {
  return (
    <section id="testi">
      <h5>Review from others</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
           >
        <SwiperSlide className="testimonials">
          <div className="avatar">
            <img src={IMG1} alt="avata" />
          </div>
          <h5 className="avatar__name">Dr.hawre</h5>
          <small className="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto
            praesentium. Repellat, numquam quidem esse animi nihil quas neque
            quam repudiandae hic possimus, ipsam ipsum debitis consequatur
            veritatis? Voluptates, illum?
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="avatar">
            <img src={IMG2} alt="avatar" />
          </div>
          <h5 className="avatar__name">Dr.Dilshad</h5>
          <small className="review">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto
            praesentium. Repellat, numquam quidem esse animi nihil quas neque
            quam repudiandae hic possimus, ipsam ipsum debitis consequatur
            veritatis? Voluptates, illum?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testi;
