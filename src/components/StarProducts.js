import React from 'react';
import '../styles/StarProduct.css'
const StarProducts = ({starProduct}) => {
  return (
      <div id="sp-outer">
            <div className="sp-inner-0">
                <a href={starProduct[0].url}><img src={starProduct[0].image} alt="" /></a>
            </div>

           <div className="sp-inner-1">
            <div  >
                <a href={starProduct[1].url}><img src={starProduct[1].image} alt="" /></a>
            </div>

            <div  >
                <a href={starProduct[2].url}><img src={starProduct[2].image} alt="" /></a>
            </div>

            <div  >
                <a href={starProduct[3].url}><img src={starProduct[3].image} alt="" /></a>
            </div>
          
           </div>
      </div>
  );
};

export default StarProducts;
