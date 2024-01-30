import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_134dkqo', 'template_xoilgtk', form.current, 'LZazUpxRKCZVzlnA7')
      .then((result) => {
          console.log(result.text);
          console.log("message send");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="background-container">
    <div className="background-animation">
    <section className="contact container section" id='contact'>
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">Don't like forms? Send me an email. 👋</p>
          </div>

          <form ref={form}  className="contact-form" onSubmit={sendEmail} >
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" className="contact__form-input" placeholder='Insert your name' name="user_name" />
              </div>

              <div className="contact__form-div">
                <input type="email" className="contact__form-input" placeholder='Insert your Email' name="user_email"  />
              </div>

              <div className="contact__form-div contact__form-arae">
                <textarea 
                name="message" 
                id="" 
                cols="30" 
                rows="10" 
                className='contact__form-input'
                placeholder='Write your message'>
                </textarea>
              </div>
            </div>
            <button className='btn' value="Send"  >Send message</button>
          </form>
        </div>
    </section>
    </div>
    </div>
  )
}

export default Contact;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };