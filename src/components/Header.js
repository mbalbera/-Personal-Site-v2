import React from 'react'
import Resume from "../assets/resume.pdf"

const Header = () => {

  const handleScroll = (e,id) => {
    console.log('handleScroll')
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <header>
          {/* <!-- header-container --> */}
          <div className="header-container" >
            <div style={{ height: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
              <div style={{ width: '40%', display: 'flex', }}>
                <p style={{ color: 'rgb(255,255,255)', textAlign: 'left',margin:0, fontWeight:'bold' }}>Mason Balbera</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                <a 
                  href="#projects" 
                  onClick={(e) => handleScroll(e,'projects')} 
                  style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none' }}
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  onClick={(e) => handleScroll(e,'skills')} 
                  style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none'}}
                >
                  Skills
                </a>
                <a 
                  style={{textDecoration:'none'}}
                  href={Resume} 
                  target="_blank"
                  rel="noreferrer"
                >
                  <p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none' }}>Resume</p>
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e,'contact')} 
                  style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none'}}
                >Contact
                </a>
              </div>
            </div>
            {/* <Header/> */}
          </div>
          {/* <!-- /header-container --> */}
</header>
    )
}

export default Header