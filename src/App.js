import React from 'react'
import logo from './assets/Mason-icon.png';
// import Header from './components/Header'
// import LeftBar from './components/LeftBar'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Email from './components/Email'

import Resume from "./assets/resume.pdf"

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Link, animateScroll as scroll, Element } from "react-scroll";
import Switch from "react-switch";

import './App.css';

class App extends React.Component{
  state={
    darkMode: true,
    isSmallScreen:false
  }
  componentDidMount(){
    document.title = `Mason Balbera`;
    this.updateWindowDimensions()
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 1000) {
      this.setState({ isSmallScreen: true, screenWidth: window.innerWidth });
    } else {
      this.setState({ isSmallScreen: false, screenWidth: window.innerWidth });
    }
  };

  toggleColorScheme = ()=>{
    this.setState({darkMode:!this.state.darkMode})
  }

  render(){
    if(this.state.isSmallScreen){
      return(
        <div style={{width:'100%'}}>
          <div style={{ width: '100%', position: 'fixed', top: 0, height: 75, display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor:'rgb(35,43,59)' }}>
            <div>
              <p style={{ margin:0, fontSize: '22px', fontWeight: 'bold', color: ''}}>Mason Balbera</p>
            </div>
            <div>
              <Switch
                onChange={() => this.toggleColorScheme()}
                checked={this.state.darkMode}
                uncheckedIcon={false}//moon
                checkedIcon={false}//sun
                offColor='#F5DC09'
                onColor='#5569CD'
                offHandleColor='#cccccc'
                onHandleColor='#cccccc'
              />
            </div>
          </div>
          <div style={{width:'95%', backgroundColor:this.state.darkMode?'rgb(60,70,88)':'rgb(255,255,255)', margin:'auto',marginTop:75, borderRadius:'12px'}}>
            <div style={{ width: '100%' }}>
              <Background darkMode={this.state.darkMode} isSmallScreen={true} />
            </div>
            <div id="projects" style={{ width: '100%', marginTop: 50 }}>
              <Projects darkMode={this.state.darkMode} isSmallScreen={true} />
            </div>
            <div id="skills" style={{ width: '100%', marginTop: 50 }}>
              <Skills darkMode={this.state.darkMode} isSmallScreen={true} />
            </div>
            <div id="contact" style={{ width: '100%', marginTop: 50 }}>
              <Email darkMode={this.state.darkMode} isSmallScreen={true} />
            </div>
            <div style={{display:'flex', width: '100%', justifyContent:'space-around', alignItems:'center',paddingBottom:25 }}>
              <a href="https://github.com/mbalbera" target="_blank">
                <FaGithub color={this.state.darkMode ? "rgb(255,255,255)":'rgb(60,70,88)'} size="50" />
              </a>
              <a href={Resume} target="_blank" style={{textDecoration:'none'}}>
                <p style={{ color:this.state.darkMode ?  'rgb(255,255,255)':'rgb(60,70,88)', cursor: 'pointer', margin: 0, textDecoration: 'none' }}>Resume</p>
              </a>
              <a href="https://www.linkedin.com/in/masonbalbera/" target="_blank">
                <FaLinkedin color={this.state.darkMode ? "rgb(255,255,255)":'rgb(60,70,88)'} size="50" />
              </a>
            </div>
          </div>
        </div>
      )
    }

    return(
      <body>
        {/* <!-- header --> */}
        <header>
          {/* <!-- header-container --> */}
          <div class="header-container" >
            <div style={{ height: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
              <div style={{ width: '40%', display: 'flex', }}>
                <p style={{ color: 'rgb(255,255,255)', textAlign: 'left',margin:0, fontWeight:'bold' }}>Mason Balbera</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                {/* <Link
                  activeClass="active"
                  to="#projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                > */}
                  <a href="#projects" style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none' }}>Projects</a>
                {/* </Link>
                <Link
                  activeClass="active"
                  to="#skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                > */}
                  <a href="#skills" style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none'}}>Skills</a>
                {/* </Link> */}
                <a style={{textDecoration:'none'}} href={Resume} target="_blank"><p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none' }}>Resume</p></a>
                {/* <Link
                  activeClass="active"
                  to="#contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                > */}
                <a href="#contact" style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none'}}>Contact</a>
                {/* </Link> */}
              </div>
            </div>
            {/* <Header/> */}
          </div>
          {/* <!-- /header-container --> */}
</header>
        {/* <!-- /header --> */}

        {/* <!-- nav --> */}
        <div class="side-nav-container">
          <div class="side-nav">
            <div style={{width:'60%', margin:'auto', height: '80%', }}>
              <ul class="side-menu">
                <li style={{marginTop: '70%'}}>
                  <a href="https://github.com/mbalbera" target="_blank">
                    <FaGithub color="rgb(255,255,255)" size="50" />
                  </a>
                </li>
                <li style={{marginTop: '70%'}}>
                  <a href="https://www.linkedin.com/in/masonbalbera/" target="_blank">
                    <FaLinkedin color="rgb(255,255,255)" size="50" />
                  </a>
                </li>
                <li style={{marginTop: '70%'}}>
                  <Switch
                    onChange={() => this.toggleColorScheme()}
                    checked={this.state.darkMode}
                    uncheckedIcon={false}//moon
                    checkedIcon={false}//sun
                    offColor='#F5DC09'
                    onColor='#5569CD'
                    offHandleColor='#cccccc'
                    onHandleColor='#cccccc'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /nav --> */}

        {/* <!-- main --> */}
        <main style={{ width: '-webkit-fill-available' }}>
          {/* <!-- main-container --> */}
          <div class="main-container" style={{ backgroundColor: this.state.darkMode ? '#3c4659' : null, padding: 50, }}>
            <div style={{ overflowY: 'scroll', marginBottom: 100}}>
              <div style={{width:'100%'}}>
                <Background darkMode={this.state.darkMode} isSmallScreen={false}/>
              </div>
              <div id="projects" style={{ width: '100%', marginTop:100 }}>
                <Projects darkMode={this.state.darkMode} isSmallScreen={false}/>
              </div>
              <div id="skills" style={{ width: '100%', marginTop:100 }}>
                <Skills darkMode={this.state.darkMode} isSmallScreen={false}/>
              </div>
              <div id="contact" style={{ width: '100%', marginTop:100 }}>
                <Email darkMode={this.state.darkMode} isSmallScreen={false}/>
              </div>
            </div>
          </div>
          {/* <!-- /main-container --> */}
        </main>
        {/* <!-- /main --> */}

      </body>
    )
    
  }
}

export default App;
