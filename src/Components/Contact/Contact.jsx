import React from 'react';
import './Contact.css';

const Contact = () => {
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

          <form action="" className="contact form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" className="contact__form-input" placeholder='Insert your name'/>
              </div>

              <div className="contact__form-div">
                <input type="emsil" className="contact__form-input" placeholder='Insert your subject'/>
              </div>

              <div className="contact__form-div">
                <input type="text" className="contact__form-input" placeholder='Insert your message'/>
              </div>

              <div className="contact__form-div contact__form-arae">
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                className='contact__form-input'
                placeholder='Write your message'>
                </textarea>
              </div>
              <button className="btn">Send message</button>
            </div>
          </form>
        </div>
    </section>
    </div>
    </div>
  )
}

export default Contact;