import './App.css';
import React from 'react';

import{ BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import data from "./data/data.json"
import Subnav from './components/Subnav';
import Slider from './components/Slider';
import Offer from './components/Offer';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts'
import HotAccessories from './components/HotAccessories'
import HotAccessoriesMenu from './components/HotAccessoriesMenu'
function App() {
  
  return (
   <Router>
   
     <Navbar />
     <Subnav logo={data.logo} />
     <Slider start={data.banner.start} />
     <Offer offers={data.offer}/> 
     <Heading heading={"STAR PRODUCTS"}/>
     <StarProducts starProduct = {data.starProduct} />
     <Heading heading={"HOT ACCESSORIES" } />
     <HotAccessoriesMenu />
     {/* <HotAccessories  musicCover={data.hotAccessoriesCover.music} music = {data.hotAccessories.music}/> */}
     <Routes>
     <Route exact path="/musicStore" element={ <HotAccessories   musicCover={data.hotAccessoriesCover.music} music = {data.hotAccessories.music}/>} />
     <Route exact path="/home" element={ <HotAccessories   home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
     <Route exact path="/SmartDevices" element={ <HotAccessories   smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice}/>} />
     <Route exact path="/Lifestyle" element={ <HotAccessories   lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
     <Route exact path="/MobileAccessories" element={ <HotAccessories   mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>} />
     </Routes>
    </Router>


   
  );
}

export default App;
