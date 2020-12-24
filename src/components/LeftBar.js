import react from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const LeftBar = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'rgb(17,17,17)', position:'fixed', left: 0, top:100,width:'10%'}}>
            <div>
                <a href="">
                    <FaGithub color="rgb(255,255,255)" style={{height: 50}}/>
                </a>
            </div>
            <div>
                <a href="">
                    <FaLinkedin color="rgb(255,255,255)" style={{ height: 50 }}/>
                </a>
            </div>
        </div>
    )
}

export default LeftBar