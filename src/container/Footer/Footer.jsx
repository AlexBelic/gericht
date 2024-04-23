import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h3 className='app__footer-headtext'>Contact Us</h3>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230<br/>+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h3 className='app__footer-headtext'>Working Hours</h3>
      <p className="p__opensans">Monday-Friday:<br />08:00 am -12:00 am</p>
      <p className="p__opensans">Saturday-Sunday:<br />07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className='p__opensans'>2021 Gerícht. &copy; All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
