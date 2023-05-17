const ProjectBig = (props) => {
    return (
        <div style={{ width: '100%', }}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection:  'row',
                    alignItems: 'center',
                }}
            >
                <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontWeight: 'bold', fontSize: 22, }}>
                    {props.info.title}
                </p>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {
                    props.info.image &&
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, maxWidth:'60%' }}>
                        <img
                            src={props.info.image}
                            style={{ width: '60%', objectFit: 'scale-down' }}
                        />
                    </div>
                }
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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