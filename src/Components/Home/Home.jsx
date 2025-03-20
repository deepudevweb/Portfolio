<<<<<<< HEAD
import React from 'react';
import './Home.css';
import Me from '../assets/avatar-1.svg'
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <div class="area" >
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <div class="text-container">
            <h1>Deepu prajapati</h1>
          </div>
          <span className="home__education">I' am a front-End developer
          </span>

          <Headersocials />

          <a href="https://github.com/deepudevweb" target='_blank' className="btn">Hire Me</a>

          <Scrolldown />
        </div>
        <Shapes />
      </section>
    </div >
    
  )
}

export default Home;
=======
import React from 'react';
import './Home.css';
import Me from '../assets/avatar-1.svg'
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <div class="area" >
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <div class="text-container">
            <h1>Deepu prajapati</h1>
          </div>
          <span className="home__education">I' am a front-End developer
          </span>

          <Headersocials />

          <a href="https://github.com/deepudevweb" target='_blank' className="btn">Hire Me</a>

          <Scrolldown />
        </div>
        <Shapes />
      </section>
    </div >
    
  )
}

export default Home;
>>>>>>> ab5bf47fce061cdea05ee9488621eb8f35bec37f
