import react from 'react'

const Background = (props) => {
    return (
        <div>
            <p style={{color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)'}}>
                Hi my name is
            </p>
            <p style={{color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)'}}>
                Mason Balbera.
            </p>
            <p style={{color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)'}}>
                I am a Full Stack Web and Mobile app developer creating engaging applications from ideation to completion.
                Using JavaScript, React, React - Native, Ruby on Rails and Python I build awesome applications.Study of the law and success in financial planning has primed me to deliver simple and effective code.I am fully committed to every step of the process from scratch to launch.
            </p>
        </div>
    )
}

export default Background


