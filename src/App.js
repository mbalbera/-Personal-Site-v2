import React from 'react'
import logo from './assets/Mason-icon.png';
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import Email from './components/Email'
import Background from './components/Background'
import Skills from './components/Skills'
import './App.css';

class App extends React.Component{
  state={
    darkMode: false
  }

  toggleColorScheme = ()=>{
    this.setState({darkMode:!this.state.darkMode})
  }

  render(){
    return (
      <div className="App" style={{backgroundColor:'rgb(0,0,255)'}}>
        <Header darkMode={this.state.darkMode}/>
        <LeftBar toggleColorScheme={this.toggleColorScheme} darkMode={this.state.darkMode}/>
        <div style={{ width: '90%', margin: 'auto', marginTop: 115, position: 'absolute', right: 0, zIndex: -10, backgroundColor: this.state.darkMode ? '#243447' :'rgb(240,241,244)', }}>
          <div style={{ width:'90%', margin:'auto',}}>
            <Background darkMode={this.state.darkMode} />
            <Skills darkMode={this.state.darkMode}/>
            <Email darkMode={this.state.darkMode} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
