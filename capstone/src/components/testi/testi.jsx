import React from "react";
import "./testi.css";
import IMG1 from "../../assests/avatar 1.png";
import IMG2 from "../../assests/avatar 2.png";
const Testi = () => {
  return (
    <section id="testi">
      <h5>Review from others</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
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
        </article>

        <article className="testimonials">
          <div className="avatar">
            <img src={IMG2} alt="avatar" />
          </div>
          <h5 className="avatar__name">Dr.Dilshad</h5>
          <small className="review">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto
            praesentium. Repellat, numquam quidem esse animi nihil quas neque
            quam repudiandae hic possimus, ipsam ipsum debitis consequatur
            veritatis? Voluptates, illum?
            </small>
        </article>
      </div>
    </section>
  );
};

export default Testi;
