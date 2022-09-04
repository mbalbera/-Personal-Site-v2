import react from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Switch from "react-switch";


const LeftBar = (props) => {
    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'rgb(17,17,17)', position:'fixed', left: 0, top:0, height:'100%',zIndex:-1}}>
            {/* <div style={{display:'flex', width:'100%', marginTop:150, justifyContent:'center',alignItems:'center'}}>
                <p style={{color:'rgb(255,255,255)', fontWeight:'bold'}}>Background</p>
            </div> */}
            {/* <div style={{display:'flex', width:'100%', marginTop:115, justifyContent:'center',alignItems:'center', cursor:'pointer'}}>
                <p style={{ color: 'rgb(255,255,255)', fontWeight: 'bold', }}>Skills</p>
            </div>
            <div style={{display:'flex', width:'100%', marginTop:50, justifyContent:'center',alignItems:'center', cursor:'pointer'}}>
                <p style={{ color: 'rgb(255,255,255)', fontWeight: 'bold', }}>Projects</p>
            </div> */}
           
            <div style={{display:'flex', width:'100%', marginTop:150, justifyContent:'center',alignItems:'center'}}>
                <a href="https://github.com/mbalbera" target="_blank">
                    <FaGithub color="rgb(255,255,255)" size="50" />
                </a>
            </div>
            <div style={{display:'flex', width:'100%', marginTop:50, justifyContent:'center',alignItems:'center'}}>
                <a href="https://www.linkedin.com/in/masonbalbera/" target="_blank">
                    <FaLinkedin color="rgb(255,255,255)" size="50" />
                </a>
            </div>
            
            <div style={{display:'flex', width:'100%', marginTop:50, justifyContent:'center',alignItems:'center'}}>
                <Switch 
                    onChange={()=>props.toggleColorScheme()} 
                    checked={props.darkMode}
                    uncheckedIcon={false}//moon
                    checkedIcon={false}//sun
                    offColor='#F5DC09'
                    onColor='#5569CD'
                    offHandleColor='#cccccc'
                    onHandleColor='#cccccc'
                />
            </div>
        </div>
    )
}

export default LeftBar