import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo' rel="noreferrer">Diyari</a>
      <ul className='permalinks'>
        <li><a href="#home" rel="noreferrer">Home</a></li>
        <li><a href="#about" rel="noreferrer">About</a></li>
        <li><a href="#experience" rel="noreferrer">Experince</a></li>
        <li><a href="#service" rel="noreferrer">Service</a></li>
        <li><a href="#portfolio" rel="noreferrer">Portfolio</a></li>
        <li><a href="#testimonials" rel="noreferrer">testimonials</a></li>
        <li><a href="#contact" rel="noreferrer">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/deary.fareq/" rel="noreferrer"><AiOutlineFacebook/></a>
        <a href="https://github.com/dearyfareq" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://www.instagram.com/dearyfareq/" rel="noreferrer"> <BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Life of a kurd</small>
      </div>
    </footer>
  )
}

export default Footer