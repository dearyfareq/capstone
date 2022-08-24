import React from "react";
import "./about.css";
import ME from "../../assests/afandy 2.png";
import { FaAward } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2 className="odd">about myself</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="afandy 2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>experince</h5>
              <small>+3 years of konwlage</small>
            </article>

            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>clients</h5>
              <small>100+ localy</small>
            </article>

            <article className="about__card">
              <GoGraph className="about__icon" />
              <h5>projects</h5>
              <small>done in many fields</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            ipsum iusto odit aperiam tenetur, voluptate provident accusamus fuga
            itaque? Voluptates eveniet ab similique. Officia minus reprehenderit
            impedit animi laudantium iusto.
          </p> 
          <a href="#contact" className="btn btn-primary">Let's talk!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
