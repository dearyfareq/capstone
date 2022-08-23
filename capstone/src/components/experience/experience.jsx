import React from 'react'
import './experience.css'
import {BsCheck2Square} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills do I have?</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>frontend development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>REACT</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>PYTHON</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>GITHUB</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
         
        <div className='experince__backend'>
        <h3>Backend development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>WELDING</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>WOODWORKING</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>ARDUINO</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>ROBOTICS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>DESGIN</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experince__details'>
              <BsCheck2Square className='experience__details-icon'/>
              <h4>ILLUSTRATION</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience