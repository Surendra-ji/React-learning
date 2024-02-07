import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Requisition from './Requisition';
import Photo_Gallery from './pages/Photo_Gallery';
import History from './pages/History';
import Membership from './pages/Membership';
import './App.css';

const App = () => {
  
  return (
    <>
    {/* <HomePage/>
    <Requisition/> */}
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/requisition' element={<Requisition/>} />
      <Route path='/pages/photo_gallery' element={<Photo_Gallery/>} />
      <Route path='/pages/history' element={<History/>} />
      <Route path='/pages/membership' element={<Membership/>} />
      </Routes>
    </>
  );
  
};


export default App;

