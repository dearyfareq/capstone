import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Diyari</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experince</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="facebook"><AiOutlineFacebook/></a>
        <a href="facebook"><AiFillGithub/></a>
        <a href="facebook"><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Life of a kurd</small>
      </div>
    </footer>
  )
}

export default Footer