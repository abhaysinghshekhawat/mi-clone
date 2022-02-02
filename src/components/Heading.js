import React from 'react';
import '../styles/Heading.css';
const Heading = ({heading}) => {
  return (<div id="heading">
      <div className='line-div'></div>
      <h2>{heading}</h2>
      <div className='line-div'></div>
      </div>

  );
};

export default Heading;
