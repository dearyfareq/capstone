import React from 'react'
import './navi.css'
import {FaHome} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'
const Navi = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook/></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMessage/></a>
    </nav>
  )
}

export default Navi