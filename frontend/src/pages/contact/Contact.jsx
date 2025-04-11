import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div className='contact'>
        <div className="contactBorder"></div>      
          <h1 className="contactTitle">Contact Us</h1>
          <form className='contactForm'>
            <input type="text" className="contactFormText" placeholder='Your Name...'/>
            <input type="email" className="contactFormText" placeholder='Your Email...'/>
            <input type="number" className="contactFormText" placeholder='Your Phone...' />
            <textarea className="contactFormText" placeholder='Your Message...'></textarea>  
            <button className="contactFormButton">Send</button>  
          </form>
    </div>
  )
}
