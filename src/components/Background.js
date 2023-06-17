import React, { useState } from 'react'

const Background = (props) => {
    const [showMore, setShowMore] = useState(false)
    const bigText = "I'm Mason Balbera, a results-driven technology leader experienced in engineering management and full-stack development. As the VP of Technology at Matter Product Studio, I lead teams, uncover inefficiencies, and drive revenue growth. With a track record of establishing processes, delivering scalable solutions, and mentoring junior team members, I bring a passion for innovation and cross-functional collaboration to drive technological excellence and growth."
    const smallText = "I'm Mason Balbera, a results-driven technology leader experienced in engineering management and full-stack development. As the VP of Technology at Matter Product Studio, I lead teams, uncover inefficiencies, and drive revenue growth."
    
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
                Hi!
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


