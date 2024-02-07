import React from 'react';
import bhu_logo from '../../assets/Poster.png';
import './footerimage.css';

const FooterImage = () => {
    
    return (
        <div className='footer_image'>
            <img src={bhu_logo} alt="bhu_logo" />
        </div>
     )
}

export default FooterImage;