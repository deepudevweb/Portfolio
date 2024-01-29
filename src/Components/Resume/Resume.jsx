import React from 'react';
import './Resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <div className="background-container">
    <div className="background-animation">
    <section className="resume container resume" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card 
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card 
                key={index}
                icon={val.icon}
                title={val.title}
                year={val.year}
                desc={val.desc}
                />
              )
            }
          })}
        </div>
      </div>
    </section>
    </div>
    <img src="../assets/UC-dd0c0bb4-b57b-4e68-b01d-b6d84aa82923.jpg" alt="" />
    </div>
    
  )
}

export default Resume;