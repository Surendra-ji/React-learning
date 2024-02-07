import React from 'react';

import {Footer, 
    Header, 
    ImageSlider, 
    Features, 
    BookSlider} from './containers';
    
import './homepage.css';

const HomePage = () => {
  
  const containerStyles = {
    display: "block",
    max_width : "720px",
    height: "auto",
    margin: "0 auto",
  };

  return (
    <div className='homepage'>
     <div className='header__bg'>
      <Header /> 
     </div>
     <div style={containerStyles}>
     <ImageSlider/>
     </div>
     <Features/>
     <BookSlider />
     <Footer/>
    </div>
  );
  
};


export default HomePage;
