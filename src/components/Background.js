import React, { useState } from 'react'

const Background = (props) => {
    const [showMore, setShowMore] = useState(false)
    const bigText = "I am a Results-driven software engineering manager with a proven track record of leading and mentoring high-performing teams. Currently an Engineering Manager at Matter Product Studio, driving productivity and employee satisfaction through an AI certification program. Doubled engineering team size and increased revenue by addressing process inefficiencies. Skilled in JavaScript, React, Python, Ruby on Rails, AWS, and more. Let's connect to discuss how my expertise can contribute to your organization's success."
    const smallText = "I am a results-driven software engineering manager. I have led and mentored high-performing teams. As well as built some pretty cool stuff. Let's connect to discuss how my expertise can contribute to your organization's success."
    
    const showRightAmountOfText = (str) => {
        if(showMore){
            return str
        }else{
            return str.split('.')[0] + '..'
        }
    }

    const padding = props.isSmallScreen? 50:150

    return (
        <div style={{paddingLeft:padding, paddingRight:padding, paddingTop:padding, height:'85', }}>
            <p style={{fontSize:30,color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)', }}>
                Hi! My name is
            </p>
            <p style={{ fontWeight: 'bold', fontSize: 36, color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(35,43,59)', }}>
                Mason Balbera.
            </p>
            <p style={{fontSize:30, cursor:'pointer', color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)', cursor:'default'}}>
                {showRightAmountOfText(props.isSmallScreen? smallText:bigText)}
                 <span style={{fontSize:20,color:props.darkMode? 'rgb(230,230,230)': 'rgb(17,17,17)', fontWeight:'bold', marginLeft:5 }} onClick={()=>setShowMore(!showMore)}>
                 {!showMore ? 'Show More' : ''}
            </span>
            </p>
           
        </div>
    )
}

export default Background


