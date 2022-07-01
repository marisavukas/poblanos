import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
const Footer = () => (
    <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
    

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} /> */}
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

    </div>

    <div className="footer__copyright">
      <p>2022 Poblano's Grill. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;