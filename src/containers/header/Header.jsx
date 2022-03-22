import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="nx52__header section__padding" id="home">
    <div className="nx52__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with NX-52 OpenAI</h1>
      <p>NX-52 has a mission to ensure that artificial intelligence benefits all of humanity. An important part of this effort is training AI systems to do what humans want and what they do.</p>

      <div className="nx52__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="nx52__header-content__people">
        <img src={people} />
        <p>5,400 people connected with NX-52 in the last 24 hours</p>
      </div>
    </div>

    <div className="nx52__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
