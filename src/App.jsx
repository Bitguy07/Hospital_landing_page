import React from 'react';
import Navbar from './Components/Navbar';
import HeroSec from './Components/HeroSec';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Carousel_1 from './Components/Carousel_1';
import Article from './Components/Article';
import Footer from './Components/Footer';

export const App = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-max'>
        <Navbar/>
        <HeroSec/>
        <Services/>
        <Testimonials/>        
        <Carousel_1/>
        <Article/>
        <Footer/>
      </div>
    </div>
  );
};
