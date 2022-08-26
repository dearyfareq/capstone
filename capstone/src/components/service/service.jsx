import React from 'react'
import './service.css'
import {BsCheck2All} from 'react-icons/bs'
const Service = () => {
  return (
    <section id='service'>
      <h5>what I can do</h5>
      <h2 className='odd'>Services & ability</h2>

      <div className='container service__container'>
{/*---------------------first list of service---------------------*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Design and Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Dynamic and responsive Webpages</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>colorful and intresting styling</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Photoshop, Illustrate and Design mockups</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Build forms and Webpage components</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>provide insight and information </p>
            </li>
          </ul>

        </article>
{/*---------------------first list of service---------------------*/}
{/*---------------------second list of service---------------------*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Admin/office work</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>advance skill in Word, Powerpoint and Excel</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>ability to handle data bases and informatino</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>build sheets for auto-tracking materials</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Constant aim to automate or simplify tasks and work</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>able to use and make complicated papers and CV</p>
            </li>
          </ul>
          
        </article>
{/*---------------------second list of service---------------------*/}
{/*---------------------third list of service---------------------*/}
<article className='service'>
          <div className='service__head'>
            <h3>mechnical</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>high ability in welding</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>able to craft in carpentary</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>able to provide insight and work in LPG fields</p>
            </li>
          </ul>
          
</article>

{/*---------------------third list of service---------------------*/}
      </div>
    </section>
  )
}

export default Service