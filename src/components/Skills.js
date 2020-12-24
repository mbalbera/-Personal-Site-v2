import react from 'react'

const Skills = (props) => (
    <div id="Skills">
        <p style={{ fontWeight: 'bolder', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)', textAlign: 'center' }}>SKILLS</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ flexDirection: 'column', }}>
                <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>LANGUAGES</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Javascript (ES6)</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Ruby</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Python</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>HTML</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>CSS</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>SASS</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>SQL</p>
            </div>
            <div style={{ flexDirection: 'column',  }}>
                <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>FRAMEWORKS</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>React</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>React Native</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Ruby on Rails</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Node</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Redux</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>MobX</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Gatsby</p>
            </div>
            <div style={{ flexDirection: 'column',  }}>
                <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>TOOLS</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Git</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Chrome DevTools</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Postman</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>PostgreSQL</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>SQLite</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Xcode iOS Simulator</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Andriod Studio</p>
            </div>
            <div style={{ flexDirection: 'column', }}>
                <p style={{ fontWeight: 'bold', color: props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>DESIGN</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Marvel</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Sketch</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Wireframing</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Photoshop</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Proto.io</p>
                <p style={{color:props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)'}}>Semantic UI</p>
            </div>
        </div>
    </div>
)

export default Skills