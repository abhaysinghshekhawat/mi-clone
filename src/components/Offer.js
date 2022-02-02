import React from 'react';
import "../styles/Offer.css"

const Offer = ({offers}) => {
  return (
    <div id="offers">
        {
            offers.map((offer,idx)=>{
                return(
                    <div className="offer-content">
                        <a href={offer.url}><img className='offer-image' src={offer.image} alt="" /></a>
                    </div>
                )
            })
        }
    </div>
  );
};

export default Offer;
