import react from 'react'

const Header = () => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', maxHeight:40 }}>
            <div style={{width:'40%', display:'flex', }}>
                <p style={{color:'rgb(255,255,255)', textAlign:'left', }}>Mason Balbera</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', width:'60%'}}>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer', }}>Skills</p>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer', }}>Projects</p>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer', }}>Resume</p>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer', }}>Contact</p>
            </div>
        </div>
    )
}

export default Header