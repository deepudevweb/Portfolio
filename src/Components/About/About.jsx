import React from 'react';
import './About.css';
import Image from '../assets/avatar-2.svg'
import Aboutbox from './Aboutbox';
import pdffile from '../assets/Deepu.pdf'
const About = () => {
  return (
    <div className="background-container">
      <div className="background-animation">
        <section className="about container section" id='about'>
          <h2 className="section__title">About Me</h2>
          <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />
            <div className="about__data grid">
              <div className="about__info">
                <p className="about__description">

                  Enthusiastic Frontend Developer hailing from India, skilled in React.js. Transforming design visions into captivating web interfaces, I bring a blend of creativity and technical prowess. Committed to crafting seamless user experiences, I thrive on pushing boundaries and contributing to the ever-evolving landscape of web development.
                </p>
                <a href={pdffile} target='_blank' className="btn"> Download CV</a>
              </div>
              <div className="about__skills grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Development</h3>
                    <span className="skills__number">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage development"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Frame Work</h3>
                    <span className="skills__number">80%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage ui__design"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__number">60%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage photography"></span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <Aboutbox />
        </section>
      </div>
    </div>
  )
}

export default About;