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
              <h5>experinced</h5>
              <small>In a wide range of fields</small>
            </article>

            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>Personals assisted</h5>
              <small>100+ localy</small>
            </article>

            <article className="about__card">
              <GoGraph className="about__icon" />
              <h5>projects</h5>
              <small>Done in different subjects</small>
            </article>
          </div>
          <p>
            I am an ambitious young student who thrives to become a person who
            will help both the old and new generation in this ever so quickly
            developing society, I chose mechanical and mechatronical engineering
            as my major so as to gain expertise in many different fields in
            order to achieve my goals; I have also worked voluntarily in
            seminars and courses around the topics of communication, equality,
            human rights and self-development; while also learning programing
            and art through both digital and hand methods.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
