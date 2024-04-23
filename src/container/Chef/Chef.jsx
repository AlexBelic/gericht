import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__wrapper app__bg section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi totam sunt eius debitis velit, repellat accusantium ratione, perferendis delectus voluptates sit, architecto quae quis possimus necessitatibus in nesciunt dicta.</p>
        </div>        
      </div>
      <div className="app__chef_sign">
        <h3>Kevin Luo</h3>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="Chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
