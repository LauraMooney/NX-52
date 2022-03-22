import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Models to Follow',
    text: 'We trained language models that are much better at following user intentions.',
  },
  {
    title: 'Large-scale language models',
    text: 'These models are usually trained with the objective of next word prediction on a dataset of human-written text.',
  },
  {
    title: 'Human Feedback',
    text: 'We’ve applied reinforcement learning from human feedback to train language models that are better at summarization.',
  },
  {
    title: 'More Alignment Research',
    text: 'We first train a reward model via supervised learning to predict which summaries humans will prefer.',
  },
];

const Features = () => (
  <div className="nx52__features section__padding" id="features">
    <div className="nx52__features-heading">
      <h1 className="gradient__text">Nx-52 is the leading manufacturer of AI technologies. Join us now and step into the future!</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="nx52__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
