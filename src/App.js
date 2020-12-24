import logo from './assets/Mason-icon.png';
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{width:'100%', display:'flex',}}>
        <div style={{width:'20%',}}>
          <LeftBar/>
        </div>
        <div style={{width:'80%',}}>

        </div>
      </div>
    </div>
  );
}

export default App;
