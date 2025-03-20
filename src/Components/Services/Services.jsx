import React from 'react';
import './Services.css';
import Image1 from '../assets/frame-svgrepo-com.svg';
import Image2 from '../assets/web-development-svgrepo-com.svg';
import Image3 from '../assets/web-page-browser-window-svgrepo-com.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frame Work",
    description:
      "React, Axios, Nextjs, Bulma, Tailwind, Embla, Bootstrap, React-icon, React Bootstrap",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      " JavaScript, HTML, CSS",
  },
  {
    id: 3,
    image: Image3,
    title: "Tools",
    description:
      "Git, vs Code, Linux, Node, Verson Control, Npm, Codepen",
  },
];

const Services = () => {
  return (
    <div className="background-container">
    <div className="background-animation">
    <section className="services container section">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="service__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
    </div>
    </div>
  )
}

export default Services;