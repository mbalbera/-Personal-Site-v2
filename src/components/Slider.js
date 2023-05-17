import React, { useState } from 'react';
import ProjectBig from './pb2';
import ProjectSmall from './ProjectSmall';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import './Slider.css'; // Import your CSS file for styling


const Slider = ({slides, isSmallScreen, darkMode}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showSlide = (info)=>{
    if(isSmallScreen){
      console.log('in small screen mode')
        return <ProjectSmall info={info} darkMode={darkMode} />
    }
    else{
        return <ProjectBig info={info} darkMode={darkMode} />
    }
}

  return (
      <div className="slider-container">
        <div className="slider-content" style={{display:'flex', alignItems:'center', justifyItems:'center'}}>
          <div
            className="slide"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {slides?.map((slide, index) => (
              <div className="slide-item" key={index}>
                <div style={{display:'flex', alignSelf:'center', justifySelf:'center', paddingLeft:75, paddingRight:75}}>
                  {showSlide(slide)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow left-arrow" style={{borderRadius:'50%', display:'flex', alignItems:'center', justifyItems:'center'}} onClick={handlePrevClick}>
          <FaArrowLeft 
              color={darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)'} 
              size={35}
              style={{cursor:'pointer'}}
          />
        </button>
        <button className="arrow right-arrow" style={{borderRadius:'50%', display:'flex', alignItems:'center', justifyItems:'center'}} onClick={handleNextClick}>
          <FaArrowRight
              color={darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)'} 
              size={35}
              style={{cursor:'pointer'}}
          />
        </button>
      </div>
  );
};

export default Slider;