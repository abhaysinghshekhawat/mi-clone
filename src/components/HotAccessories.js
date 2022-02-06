import React from 'react';

import '../styles/Hotacess.css';
const HotAccessories = ({musicCover,music,homeCover,home,lifeStyle,lifeStyleCover, mobileAccessories,mobileAccessoriesCover,smartDevices,smartDevicesCover}) => {
  return (
      
       

        <div id="a-view">
             <div id="a-cover">
                <img src={musicCover || homeCover || lifeStyleCover || mobileAccessoriesCover || smartDevicesCover} alt="" />
            </div>
            

            

            <div id="a-content">
           

            {
               music && music.map((item,idx)=>(
                    <div className='a-features'>
                        <img src={item.image} alt="" />
                        <p className='a-name'>{item.name}</p>
                        <p className="price-tag">{item.price}</p>
                    </div>
                ))
            }

            {
               home && home.map((item,idx)=>(
                    <div className='a-features'>
                        <img src={item.image} alt="" />
                        <p className='a-name'>{item.name}</p>
                        <p className="price-tag">{item.price}</p>
                    </div>
                ))
            }

            {
               lifeStyle && lifeStyle.map((item,idx)=>(
                    <div className='a-features'>
                        <img src={item.image} alt="" />
                        <p className='a-name'>{item.name}</p>
                        <p className="price-tag">{item.price}</p>
                    </div>
                ))
            }

            {
               mobileAccessories && mobileAccessories.map((item,idx)=>(
                    <div className='a-features'>
                        <img src={item.image} alt="" />
                        <p className='a-name'>{item.name}</p>
                        <p className="price-tag">{item.price}</p>
                    </div>
                ))
            }

            {
               smartDevices && smartDevices.map((item,idx)=>(
                    <div className='a-features'>
                        <img src={item.image} alt="" />
                        <p className='a-name'>{item.name}</p>
                        <p className="price-tag">{item.price}</p>
                    </div>
                ))
            }

                   { !lifeStyle && <div className='a-features'>
                        <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" alt="" />
                        
                    </div>
                }
            </div>
        </div>
      
  );
};

export default HotAccessories;
