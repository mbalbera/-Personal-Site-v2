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
    darkMode: true
  }

  toggleColorScheme = ()=>{
    this.setState({darkMode:!this.state.darkMode})
  }

  render(){
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
                <a href={Resume} target="_blank"><p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0, textDecoration:'none' }}>Resume</p></a>
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
        <main>
          {/* <!-- main-container --> */}
          <div class="main-container" style={{ backgroundColor: this.state.darkMode ? '#3c4659':null, padding:50, }}>
            <div style={{ overflowY: 'scroll', marginBottom: 100}}>
              <div style={{width:'100%'}}>
                <Background darkMode={this.state.darkMode}/>
              </div>
              <div id="projects" style={{ width: '100%', marginTop:100 }}>
                <Projects darkMode={this.state.darkMode}/>
              </div>
              <div id="skills" style={{ width: '100%', marginTop:100 }}>
                <Skills darkMode={this.state.darkMode}/>
              </div>
              <div id="contact" style={{ width: '100%', marginTop:100 }}>
                <Email darkMode={this.state.darkMode}/>
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
