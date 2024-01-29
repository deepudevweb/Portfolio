import './App.css';
import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
// import Pricing from './Components/Pricing/Pricing';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services/>
      <Resume />
      <Portfolio />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App

