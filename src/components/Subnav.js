import React,{useState} from 'react';
import "../styles/Subnav.css";

import data from '../data/data.json';
import SubNavCard from './SubNavCard'
const magnify = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>


const Subnav = ({logo}) => {
        const [tgMiPhones,setMiPhones] = useState(false);
        const [tgRedmiPhones,setRedmiPhones] = useState(false);
        const [tgTv,setTv] = useState(false);
        const [tgLaptops,setLaptops] = useState(false);
        const [tgFitness,setFitness] = useState(false);
        const [tgHome,setHome] = useState(false);
        const [tgAudio,setAudio] = useState(false);
        const [tgAccessories,setAccessories] = useState(false);
function mouseOver(e){
    if(e.target.innerText==="Xiaomi Phones"){
    setMiPhones(true);
    setTv(false);
    setLaptops(false);
    setFitness(false);
    setAccessories(false);
    setAudio(false);
    setHome(false);
    setRedmiPhones(false);
    
    }
    else if(e.target.innerText==="Redmi Phones"){
        setRedmiPhones(true);
        setMiPhones(false);
    setTv(false);
    setLaptops(false);
    setFitness(false);
    setAccessories(false);
    setAudio(false);
    setHome(false);

    }
    else if(e.target.innerText==="Tv"){
        setTv(true);
        setRedmiPhones(false);
        setMiPhones(false);
        setLaptops(false);
        setFitness(false);
        setAccessories(false);
        setAudio(false);
        setHome(false);
        
    }
    else if(e.target.innerText==="Laptops"){
        setLaptops(true);
        setRedmiPhones(false);
        setMiPhones(false);
        setTv(false);
        setFitness(false);
        setAccessories(false);
        setAudio(false);
        setHome(false);
            
        
    }
    else if(e.target.innerText==="Fitness"){
        setFitness(true);
        setRedmiPhones(false);
        setMiPhones(false);
        setTv(false);
        setLaptops(false);
        setAccessories(false);
        setAudio(false);
        setHome(false);
            

        
    }
    else if(e.target.innerText==="Home"){
        setHome(true);
        setRedmiPhones(false);
        setMiPhones(false);
        setTv(false);
        setLaptops(false);
        setFitness(false);
        setAccessories(false);
        setAudio(false);
        
    }
    else if(e.target.innerText==="Audio"){
        setAudio(true);
        setRedmiPhones(false);
        setMiPhones(false);
        setTv(false);
        setLaptops(false);
        setFitness(false);
        setAccessories(false);
        setHome(false);
        
    }
    else if(e.target.innerText==="Accessories"){
        setAccessories(true);
        setRedmiPhones(false);
    setMiPhones(false);
    setTv(false);
    setLaptops(false);
    setFitness(false);
    setAudio(false);
    setHome(false);

        
    }
}

function onLeave(){
    setRedmiPhones(false);
    setMiPhones(false);
    setTv(false);
    setLaptops(false);
    setFitness(false);
    setAccessories(false);
    setAudio(false);
    setHome(false);
        
        
}
  return (
      <>
      <nav>
          <a>
              <div id="logo-div">
              <img id="logo-image" src={logo} alt="Not" />
              </div>
          </a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Xiaomi Phones</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Redmi Phones</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Tv</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Laptops</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Fitness</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Home</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Audio</a>
            <a href="" onMouseOver={mouseOver} className='nav-links'>Accessories</a>

            <div id="search-bar">
                <input type="text" name="search-bar" /> {magnify}
            </div>

            


      </nav>
      <div id="nav-card-div" onMouseOut={onLeave}>
      {
        tgMiPhones && <SubNavCard data={data.miPhones} />
      }
       {
        tgRedmiPhones && <SubNavCard data={data.redmiPhones} />
      }
       {
        tgTv && <SubNavCard data={data.tv} />
      }
       {
        tgLaptops && <SubNavCard data={data.laptop} />
      }
       {
        tgHome && <SubNavCard data={data.home} />
      }
       {
        tgAccessories && <SubNavCard data={data.accessories} />
      }
       {
        tgFitness && <SubNavCard data={data.fitnessAndLifeStyle} />
      }
       {
        tgAudio && <SubNavCard data={data.audio} />
      }
      
      </div>
</>
  );
};

export default Subnav;
