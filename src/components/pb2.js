const ProjectBig = (props) => {

    const isWeb = props.info.imageType === 'web' 

    return (
        <div style={{ width: '100%', }}>
            <div style={{ display: 'flex', flexDirection: isWeb ? 'column' :'row' }}>
                {
                    props.info.image &&
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <img
                            src={props.info.image}
                            style={{ width: isWeb ? '100%' :'60%', objectFit: 'scale-down', maxHeight:500 }}
                            alt=""
                        />
                    </div>
                }
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontWeight: 'bold', fontSize: 22, }}>
                        {props.info.title}
                    </p>
                    <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontSize: 20, marginBottom: 20, textAlign: 'left' }}>{props.info.desc}</p>
                    <ul>
                        <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', marginBottom: 15 }}>
                            {'• '}{props.info.b1}
                        </li>
                        <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', marginBottom: 15 }}>
                            {'• '}{props.info.b2}
                        </li>
                        <li style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', marginBottom: 15 }}>
                            {'• '}{props.info.b3}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectBig