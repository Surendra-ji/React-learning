import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import bhu_logo from '../../assets/bhu_logo.png';
import hindi_logo from '../../assets/hindi_logo.png';
import './header.css';
import { Navbar } from '../../components';

const Header = () => {
    
    return (
        <div className='header'>
            <div className='header__logo'>
                <div className='header__bhu-logo'>
                <img src={bhu_logo} alt="bhu_logo" />
                </div>
                <div className='header__hindi-logo d-flex align-center'>
                {/* <img src={hindi_logo} alt="hindi_logo" /> */}
                </div>
            </div>
            <Navbar />
        </div>  
     )
}

export default Header;