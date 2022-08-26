import React from "react";
import "./testi.css";
import IMG1 from "../../assests/avatar 1.png";
import IMG2 from "../../assests/avatar 2.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testi = () => {
  return (
    <section id="testi">
      <h5>Review from others</h5>
      <h2 className="h2">Testimonials</h2>

      <Swiper
        className="container testimonials__container"
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
            "I would rate his academic perfomance as exceptional, Diyari is
            energetic, enthusiastic and very freiendly with his peers and
            teachers. He is always intrested in discovering new things and
            helping others, He has been involved with many scientific and
            voluntary activities within university and outside"
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="avatar">
            <img src={IMG2} alt="avatar" />
          </div>
          <h5 className="avatar__name">Dr.Dilshad</h5>
          <small className="review">
            "Diyari Fariq M salih is one of the best students in his class, He
            shows dedication to his studies. He has very good concentraion power
            and he has the ability to learn very fast and better than most of
            the other students. He was the one explaining each and everything to
            them after class"
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testi;
