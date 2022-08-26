import React from 'react'
import './contact.css'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch!</h5>
      <h2>contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <GoMail className='contact__icons'/>
            <h4>Email</h4>
            <h5>dearyfariq15@gmail.com</h5>
            <a href="mailto:dearyfariq15@gmail.com"  rel="noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__icons'/>
            <h4>Messenger</h4>
            <h5>Deary Fareq</h5>
            <a href="https://m.me/deary.fareq"  rel="noreferrer" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__icons'/>
            <h4>WhatsApp</h4>
            <h5>+9647511913938</h5>
            <a href="https://api.whatsapp.com/send?phone=9647511913938"  rel="noreferrer" target='_blank'>Send a message</a>
          </article>

        </div>
        {/* contact options */}
        <form action="">
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="email" name='email' placeholder='your Email' required/>
          <textarea name="message"  rows="7" placeholder='your review' required></textarea>
          <button type='submit' className='btn btn-prime'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact