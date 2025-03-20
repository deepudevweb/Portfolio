import React from 'react'
import './About.css'
const Aboutbox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">9</h3>
                <span className="about__subtitle">Projects completed</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Framework</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">6</h3>
                <span className="about__subtitle">Tools</span>
            </div>
        </div>
    </div>
  )
}

export default Aboutbox;