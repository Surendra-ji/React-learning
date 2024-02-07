import React from 'react';
import './footer.css';

import { FooterImage, ContactUs, FollowUs, UsefulLinks, ForVisitors } from '../../components';

const Footer = () => {
    
    return (
        <div className='footer'>
         <div className='footer_image'>
            <FooterImage/>
         </div>
         <div className='footer_text'>
            <ContactUs/>
            <UsefulLinks/>
            <FollowUs/>
            <ForVisitors/>
         </div>
        </div>
         
     )
}

export default Footer;