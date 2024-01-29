import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { IoLayersSharp } from "react-icons/io5";
import { MdStickyNote2 } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import './Sidebar.css';
// import logo from '../assets/logo.svg'

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#Home" className="nav__logo">
       <h3>D.P</h3> 
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <IoHomeSharp className='sidelogo'/>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <FaUser className='sidelogo'/>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <IoBriefcase className='sidelogo'/>
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <FaUserGraduate className='sidelogo'/>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <IoLayersSharp className='sidelogo'/>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <FaCommentDots className='sidelogo'/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside> 

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
     <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Sidebar;