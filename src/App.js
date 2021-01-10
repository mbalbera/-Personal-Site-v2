import React from 'react'
import logo from './assets/Mason-icon.png';
// import Header from './components/Header'
// import LeftBar from './components/LeftBar'
import Email from './components/Email'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'

import { FaGithub, FaLinkedin } from 'react-icons/fa'


import Switch from "react-switch";

import './App.css';
import Project from './components/Project';

class App extends React.Component{
  state={
    darkMode: false
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
                <p style={{ color: 'rgb(255,255,255)', textAlign: 'left',margin:0 }}>Mason Balbera</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                <p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0}}>Skills</p>
                <p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0 }}>Projects</p>
                <p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0}}>Resume</p>
                <p style={{ color: 'rgb(255,255,255)', cursor: 'pointer', margin: 0}}>Contact</p>
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
              <Background darkMode={this.state.darkMode}/>
              <Projects darkMode={this.state.darkMode}/>
              <Skills darkMode={this.state.darkMode}/>
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
