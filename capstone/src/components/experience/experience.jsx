import React from 'react'
import './experience.css'
import {BsCheck2Square} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills do I have?</h5>
      <h2 className='odd'>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Mechanical and mechatronics</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>Carpentary</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>Welding</h4>
              <small className='text-light'>intermid-high</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>Robotics</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>PYTHON</h4>
              <small className='text-light'>intermid-high</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>LPG fluid systems</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
         
        <div className='experince__backend'>
        <h3>Coding and Desgin</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>iintermid-high</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>ARDUINO</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>intermid-low</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>Illustration and Design</h4>
              <small className='text-light'>advanced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience