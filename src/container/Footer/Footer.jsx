import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import FooterOverlay from '../../components/Footer/FooterOverlay';
import Newsletter  from '../../components/Footer/Newsletter';
import spoon from '../../assets/spoon.png'
import gericht from '../.././assets/gericht.png';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Greater Noida ,Uttar Pradesh, India</p>
        <p className="p__opensans">+91- 7542918414</p>
        {/* <p className="p__opensans"></p> */}
      </div>

      <div className="app__footer-links_logo">
        <img src={gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={spoon} className="spoon__img" style={{ marginTop: "15" }} alt="" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 RAR. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;