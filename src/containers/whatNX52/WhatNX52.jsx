import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatnx52.css';

const Whatnx52 = () => (
  <div className="nx52__whatnx52 section__margin" id="wnx52">
    <div className="nx52__whatnx52-feature">
      <Feature title="What does NX-52 do?" text="NX-52 is focused on training AI systems to be helpful, truthful, and safe. Our team is exploring and developing methods to learn from experience driven development." />
    </div>
    <div className="nx52__whatnx52-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="nx52__whatnx52-container">
      <Feature title="Chatbots" text="Chatbots are fast becoming the default entry point for customer service channels globally." />
      <Feature title="Face Detection" text="Detect Human Faces and Recognize Facial Features in your Software" />
      <Feature title="Education" text="Learn Aspects of AI with NX-52- What AI realistically can do. How to work with an AI team and build" />
    </div>
  </div>
);

export default Whatnx52;
