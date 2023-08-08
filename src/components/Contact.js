import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kqjg4ue', 'template_4srsc2j', form.current, 'WayjGQ_gyKSG3mZXv')
      .then((result) => {
          console.log(result.text);
          window.location.reload()
      }, (error) => {
          console.log(error.text); 
      });
  };

  return (

    <div className='contactus-form'>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" id='name' placeholder='Your Name' required/>
      <input type="text" name="subject" id='subject' placeholder='Subject' required/>
      <input type="email" name="from_email" id='email' placeholder='Your Email' required/>
      <textarea name="message" id='message' placeholder="Let's change the world together." required/>
      <input type="submit" id='submit' value="Send" />
    </form>
    </div>
  );
};