import React from 'react'
import CV from '../../assests/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#Contact" className='btn btn-prime'>lets talk</a>
    </div>
  )
}

export default CTA