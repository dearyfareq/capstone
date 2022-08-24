import React from 'react'
import './service.css'
import {BsCheck2All} from 'react-icons/bs'
const Service = () => {
  return (
    <section id='service'>
      <h2>what i can do</h2>
      <h2>service</h2>

      <div className='container service__container'>
{/*---------------------first list of service---------------------*/}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>

        </article>
{/*---------------------first list of service---------------------*/}
{/*---------------------second list of service---------------------*/}
        <article className='service'>
          <div className='service__head'>
            <h3>web design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
          
        </article>
{/*---------------------second list of service---------------------*/}
{/*---------------------third list of service---------------------*/}
<article className='service'>
          <div className='service__head'>
            <h3>mechnica</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
          
</article>

{/*---------------------third list of service---------------------*/}
      </div>
    </section>
  )
}

export default Service