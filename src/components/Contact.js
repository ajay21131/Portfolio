import React from 'react'
import { useRef } from 'react'
import LinkedIn from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import'./Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lq6qr9l', 'template_0pjcxzp', form.current, {
        publicKey: 'Qgd_cSt5JFZdOczFW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <section id='contact'>
    <div id='social'>
        <h1 className='socialTitle'>Socials</h1>
        <p className='socialDesc'>Here you can contact with me on my social media</p>

        <div className='socialImgs'>
            <a href='#'> <img src={LinkedIn} alt='LinkedIn' className='socialImg' /></a>

            <a href='https://github.com/'><img src={Github} alt='Github' className='socialImg' /></a>

            <a href='https://www.instagram.com/ajaysaini61975/'><img src={Instagram} alt='Instagram' className='socialImg' /></a>

            <a href='https://www.facebook.com/profile.php?id=100042041356010&sk=grid'><img src={Facebook} alt='Facebook' className='socialImg' /></a>
            
        </div>

        <div id='contactPage'>
            <h1 className='contactTitle'>Contact</h1>
            <span className='contactDesc'>Feel free to contact me</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input type='text' className='name' placeholder='Your Name' name="from_name" required/>
                <input type='email' className='email' placeholder='Your Email' name="your_email" required/>
                <textarea className='msg' rows="5" placeholder='Your Message' name="message" required ></textarea>
                <button type='submit' value='Send' className='submitBtn' onClick={() => {alert("Your Form is submitted.")}} >Submit</button>
            </form>
        </div>
    </div>

  </section>
  )
}

export default Contact
