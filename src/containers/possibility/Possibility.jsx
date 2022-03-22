import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="nx52__possibility section__padding" id="possibility">
    <div className="nx52__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="nx52__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>NX-52 has produced countless models that have been launched with clients across the globe. AI is the future and the possibilities are endless.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
