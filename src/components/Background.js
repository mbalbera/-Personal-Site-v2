import react from 'react'

const Background = (props) => {
    return (
        <div style={{padding:props.isSmallScreen? 50:150, height:'85', }}>
            <p style={{fontSize:30,color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)', }}>
                Hi! My name is
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 36, color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(35,43,59)', }}>
                Mason Balbera.
            </p>
            <p style={{fontSize:30,color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)', }}>
                {/* I am a Full Stack Web and Mobile app developer creating engaging applications from ideation to completion. */}
                I am a Full Stack Developer.
            </p>
        </div>
    )
}

export default Background


