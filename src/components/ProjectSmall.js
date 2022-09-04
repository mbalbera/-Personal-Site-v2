import react from 'react'

const ProjectSmall = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', width: '100%', marginBottom: 25, }}>
           
            <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', fontWeight: 'bold', fontSize: 22, width:'100%', margin:'auto', textAlign:'center' }}>
                {props.info.title}
            </p>
            {
                props.info.image
                    ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: props.info.imageType === 'phone' ?25:'' }}>
                        <img
                            src={props.info.image}
                            style={{ width: props.info.imageType === 'phone' ?'50%':'100%', objectFit: 'scale-down' }}
                        />
                    </div>
                    :
                    null
            }
            
                <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', fontSize: 20, marginBottom: 20, textAlign: 'center' }}>{props.info.desc}</p>
                <ul style={{width:'80%', margin:'auto'}}>
                    <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', marginBottom: 15 }}>
                        {props.info.b1}
                    </li>
                    <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', marginBottom: 15 }}>
                        {props.info.b2}
                    </li>
                    <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', marginBottom: 15 }}>
                        {props.info.b3}
                    </li>

                </ul>
        </div>
    )
}

export default ProjectSmall