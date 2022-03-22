import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="nx52__footer section__padding">
    <div className="nx52__footer-heading">
      <h1 className="gradient__text">Step into the future with NX-52</h1>
    </div>

    <div className="nx52__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="nx52__footer-links">
      <div className="nx52__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Playerton, Trainsville, Oregon. 032093 <br /> All Rights Reserved</p>
      </div>
      <div className="nx52__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="nx52__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="nx52__footer-links_div">
        <h4>Get in touch</h4>
        <p>Playerton, Trainsville, Oregon</p>
        <p>0800 1294059</p>
        <p>info@NX-52.net</p>
      </div>
    </div>

    <div className="nx52__footer-copyright">
      <p>@2022 NX-52. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
