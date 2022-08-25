import React from 'react'
import './testi'
import IMG1 from '../../assests/avatar 1.png'
import IMG2 from '../../assests/avatar 2.png'
const Testi = () => {
  return (
    <section id='testi'>
      <h5>Review from others</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonials'>
          <div className='avatar'>
            <img src={IMG1} alt="avatar" />
            <h5 className='avatar__name'>Dr.hawre</h5>
            <small className='review'>
              lorem 
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='avatar'>
            <img src={IMG2} alt="avatar" />
            <h5 className='avatar__name'>Dr.Dilshad</h5>
            <small className='review'>
              lorem 
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testi