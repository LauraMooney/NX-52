import React from 'react';
import { brand1, brand2, brand3, brand4, brand5 } from './imports';
import './brand.css';

const Brand = () => (
  <div className="nx52__brand section__padding">
    <div>
      <img src={brand1} />
    </div>
    <div>
      <img src={brand2} />
    </div>
    <div>
      <img src={brand3} />
    </div>
    <div>
      <img src={brand4} />
    </div>
    <div>
      <img src={brand5} />
    </div>
  </div>
);

export default Brand;
