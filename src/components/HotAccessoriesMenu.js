import React from 'react';
import '../styles/Hotacess.css';
import {Link} from 'react-router-dom';
const HotAccessoriesMenu = () => {
  return (
<div id="a-menu">
    <Link className="a-links" to="/musicStore">Music Store</Link>
    <Link className="a-links" to="/SmartDevices">Smart Devices</Link>
    <Link className="a-links" to="/Home">Home</Link>
    <Link className="a-links" to="/Lifestyle">Lifestyle</Link>
    <Link className="a-links" to="/MobileAccessories">Mobile Accessories</Link>
</div>
  );
};

export default HotAccessoriesMenu;
