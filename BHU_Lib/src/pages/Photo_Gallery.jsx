import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import {IoIosCloseCircleOutline } from "react-icons/io";
import {Header} from '../containers';
import "./photo_gallery.css"
import PhotoMenu from './PhotoMenu';    

const Photo_Gallery = () => {

  const [pics, setPics] = useState(PhotoMenu);
  const [indn, setIndn] = useState('all');
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const filterItem = (category) => {
    const updateItems = PhotoMenu.filter((curElem) => {
      return curElem.category === category;
    });

    setPics(updateItems);
    setIndn(category);
  }
  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <>
    <Header />
    <div className='photo_container'>
        <div className='photo_heading'>
        <p>PHOTO GALLERY</p>
        </div>
        <div className='photo_division'>
            <div className='photo_division_innerbox'>
              <Button variant={indn==='all'?'contained':"default"}
               onClick={() => {setPics(PhotoMenu); setIndn('all');}}>
                All
                </Button>
              <Button variant={indn==='building'?'contained':"default"}
               onClick={() => filterItem('building')}>
                Building
                </Button>
              <Button variant={indn==='stack'?'contained':"default"}
              onClick={() => filterItem('stack')}>
                Stack
                </Button>
              <Button variant={indn==='Member'?'contained':"default"}
              onClick={() => filterItem('Member')}>
                Member
                </Button>
              <Button variant={indn==='study hall'?'contained':"default"}
               onClick={() => filterItem('study hall')}>
                Study Hall
                </Button>
            </div>
            </div>
            <div className={model? "model open": "model"}>
              <img src={process.env.PUBLIC_URL + tempImgSrc} alt="photo"/>
              <IoIosCloseCircleOutline onClick={() => setModel(false)}/>
            </div>
            <div className='gallery'>
              {
                pics.map((item, index) => {
                  return( 
                    <div className='photo_box' key={index} 
                    onClick={() => getImage(item.path)}
                    >
                      <img src={process.env.PUBLIC_URL + item.path} style={{width:'100%'}} alt="photo" />
                    </div>
                  )
                })
              }
            </div>                                                                                                                                                                                                                                               
    </div>
    </>
  );
  
};


export default Photo_Gallery;
