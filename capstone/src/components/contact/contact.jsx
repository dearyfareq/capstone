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
            <GoMail/>
            <h4>Email</h4>
            <h5>dearyfariq15@gmail.com</h5>
            <a href="mailto:dearyfariq15@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Deary Fareq</h5>
            <a href="https://m.me/deary.fareq">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>dearyfariq15@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=9647511913938">Send a message</a>
          </article>

        </div>
        {/* contact options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact