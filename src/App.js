import React from 'react';
import  Header  from './container/Header/Header';
import AboutUs from './container/AboutUS/AboutUs';
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import  Navbar  from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;