<<<<<<< HEAD
import React from 'react';
import './Portfolio.css';
import Menu from './Menu';
import { useState } from 'react';
const Portfolio = () => {
  const [items,  setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
       return curElem.category === categoryItem;
    })

    setItems(updatedItems)
  }
  return (
    <div className="background-container">
    <div className="background-animation">
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() =>filterItem 
        ("IMDb Movie Api")}>IMDb movie</span>
        <span className="work__item" onClick={() =>filterItem 
        ("ID Generator Api")}>Id Generator</span>
        <span className="work__item" onClick={() =>filterItem 
        ("Searchbar Api")}> Image Seachbar</span>
      </div>
      <div className="work__container grid">
         {items.map((elem) => {
          const{id, image, title, category, link} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <div className="work__category">{category}</div>
              <h3 className="work__title">{title}</h3>
              <a href={link} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
         })}
      </div>
    </section>
    </div>
    </div>
  )
}

=======
import React from 'react';
import './Portfolio.css';
import Menu from './Menu';
import { useState } from 'react';
const Portfolio = () => {
  const [items,  setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
       return curElem.category === categoryItem;
    })

    setItems(updatedItems)
  }
  return (
    <div className="background-container">
    <div className="background-animation">
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>All</span>
        <span className="work__item" onClick={() =>filterItem 
        ("IMDb Movie Api")}>IMDb movie</span>
        <span className="work__item" onClick={() =>filterItem 
        ("ID Generator Api")}>Id Generator</span>
        <span className="work__item" onClick={() =>filterItem 
        ("Searchbar Api")}> Image Seachbar</span>
      </div>
      <div className="work__container grid">
         {items.map((elem) => {
          const{id, image, title, category, link} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <div className="work__category">{category}</div>
              <h3 className="work__title">{title}</h3>
              <a href={link} target="_blank" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
         })}
      </div>
    </section>
    </div>
    </div>
  )
}

>>>>>>> ab5bf47fce061cdea05ee9488621eb8f35bec37f
export default Portfolio;