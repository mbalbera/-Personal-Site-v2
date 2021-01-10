import react from 'react'

const Project = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', flexDirection: props.isEven ? 'row' : 'row-reverse', marginBottom:100,   }}>
            <div 
                style={{ 
                    width: '60%', 
                    display: 'flex', 
                    flexDirection: props.info.imageType === 'phone' ?'row': 'column', 
                    justifyContent: props.info.imageType === 'phone' ? 'space-around' : '', 
                    alignItems: 'center',
                }}
            >
                <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontWeight: 'bold', fontSize: 22, /*alignSelf: props.info.imageType === 'phone' ?'baseline':''*/}}>
                    {props.info.title}
                </p>
                {
                    props.info.image 
                ?
                        <div style={{ maxHeight: 275, display: props.info.imageType === '' ? 'space-around' : 'flex', justifyContent: props.info.imageType === 'phone' ? '' : 'center', alignItems: props.info.imageType === 'phone' ? '' :'center' }}>
                        {/* <div style={{ maxHeight: 275, }}> */}
                        <img 
                            src={props.info.image}
                            style={{ width: '70%', objectFit: 'scale-down'}}
                        />
                    </div>
                :
                    null
                }
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontSize:20, marginBottom:20, textAlign:'center'}}>{props.info.desc}</p>
                <ul>
                    <li style={{color:props.darkMode?'rgb(255,255,255)':'', marginBottom:15}}>
                        {props.info.b1}
                    </li>
                    <li style={{color:props.darkMode?'rgb(255,255,255)':'', marginBottom:15}}>
                        {props.info.b2}
                    </li>
                    <li style={{color:props.darkMode?'rgb(255,255,255)':'', marginBottom:15}}>
                        {props.info.b3}
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Project