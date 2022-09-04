function Skills(props){

    return(
        <div id="Skills">
            <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', fontWeight: 'bold', fontSize: 28, marginBottom: 75, marginLeft:10 }}>
                SKILLS
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: props.isSmallScreen ? 'column' : 'row'}}>
                <div style={{ flexDirection: 'column', marginLeft: props.isSmallScreen ? 20 : 0, marginBottom:props.isSmallScreen ? 40 : 0 }}>
                    <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>LANGUAGES</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Javascript (ES6)</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Ruby</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Python</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Solidity</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>HTML / CSS</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Typescript</p>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: props.isSmallScreen ? 20 : 0, marginBottom:props.isSmallScreen ? 40 : 0 }}>
                    <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>FRAMEWORKS</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>React (Native)</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Ruby on Rails</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Flask</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Node</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Django</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Tailwind</p>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: props.isSmallScreen ? 20 : 0 }}>
                    <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>TOOLS</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>AWS</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Git</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Postman</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>PostgreSQL</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>GraphQL</p>
                    <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Chrome DevTools</p>
                </div>
            </div>
        </div>
    )
}

export default Skills