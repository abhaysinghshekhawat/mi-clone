import React from 'react';
import '../styles/SubNavCard.css';
const SubNavCard = ({data}) => {
  return (
        <div id="subNavCard-main">
            {
                data.map((item,idx)=>(
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p className='i-price'>{item.price}</p>
                    </div>
                ))
            }
        </div>
  );
};

export default SubNavCard;
