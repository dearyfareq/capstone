import React from 'react'
import './navi.css'
import {FaHome} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'
const Navi = () => {
  return (
    <nav>
      <a href="#header" className='active'><FaHome/></a>
      <a href="#about"><FaUserTie/></a>
      <a href="#experience"><GiNotebook/></a>
      <a href="#service"><RiServiceFill/></a>
      <a href="#contact"><MdMessage/></a>
    </nav>
  )
}

export default Navi