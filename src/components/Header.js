import react from 'react'

const Header = () => {
    return (
        <div style={{ width: '100%', position: 'fixed', top: 0, backgroundColor: 'rgb(17,17,17)', height: 75, display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20}}>
            <div style={{width:'40%', display:'flex', }}>
                <p style={{color:'rgb(255,255,255)', textAlign:'left', fontSize:25}}>Mason Balbera</p>
            </div>
            <div style={{display:'flex', justifyContent:'space-around', width:'60%'}}>
                {/* <p style={{ color: 'rgb(255,255,255)', cursor:'pointer' }}>Home</p> */}
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer' }}>Projects</p>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer' }}>Resume</p>
                <p style={{ color: 'rgb(255,255,255)', cursor:'pointer' }}>Contact</p>
            </div>
        </div>
    )
}

export default Header