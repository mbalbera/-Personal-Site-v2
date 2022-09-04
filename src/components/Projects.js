import React, {useState} from 'react'
// components
import Project from './Project'
import ProjectSmall from './ProjectSmall'
import ProjectBig from './pb2'
// icons
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa'
// imgs
import Fifteen from '../assets/fifteenpuzzle.png'
import AllocateRite from '../assets/allocaterite.png'
import Microbets from '../assets/microbets.png'
import Finx from '../assets/finx.png'
import CryptoLads from '../assets/cryptoLads.png'

const projs = [
    {
        title: 'AllocateRite',
        image: AllocateRite,
        imageType:'web',
        desc: 'An AI driven Fintech platform built to replace your financial advisor',
        b1: 'Developed web and mobile applications using React, React Native, and AWS.',
        b2: 'Utilized SSO Authentication with AWS cognito on both web and mobile platforms.',
        b3: 'Acted as the Product Owner to define the product vision, prioritize needs, oversee team wide development.',
    },
    {
        title: 'Microbets',
        image: Microbets,
        imageType:'phone',
        desc: 'A mobile sports-gambling platform that utilizes a swipe based UX/UI',
        b1: 'Utilized react-native to make an application that works both on iOS and Android platforms.',
        b2: 'Built on a Ruby on Rails backend to manage data from both the API that supplied gambling information as well as user data.',
        b3: 'Leveraged Redux to maintain a user’s information throughout the entirety of the application.',
    },
   
    {
        title: 'FinX',
        image: Finx,
        imageType: 'phone',
        desc: 'A Fintech platform created to teach the entire population about the financial tools at their disposal',
        b1: 'Developed mobile applications with Javascript, React Native, frontend and an AWS Lambda Node.js backend',
        b2: 'Implemented agile development and standard documentation practices across the development team',
        b3: 'Refactored, refined and refocused legacy code in both Javascript and Python to improve speed and performance',
    },
    {
        title: 'CryptoLads',
        image: CryptoLads,
        imageType: 'web',
        desc: 'An NFT collection minted using Solidity',
        b1: 'Used standard ERC-1155 to allow for more efficient trading',
        b2: 'Set up smart contracts to handle all sales of the NFTs with a 2% royalty',
        b3: 'Listed the collection for sale on Opensea',
    },
    {
        title: 'Fifteen Puzzle',
        image: Fifteen,
        imageType: 'web',
        desc: 'A sliding puzzle that trains spatial awareness and cognitive skills, with fifteen randomly arranged tiles',
        b1: 'Constructed a digital replica of a famous puzzle using Javascript and custom CSS.',
        b2: 'Developed a Ruby on Rails API backend to maintain overall top scores and individualized highscores.',
        b3: 'Engineered functionality to solve the puzzle if a user cannot finish it by themselves.',
    },

   
]
const Projects = (props) => {

    const [current, setCurrent] = useState(0)
    const [hover, setHover] = useState('')

    let mapped = []
    projs.forEach((ele, idx) => {
        if(props.isSmallScreen){
            mapped.push(
                <ProjectSmall info={ele} darkMode={props.darkMode}/>
            )
        }
        else{
            let isEven = idx % 2 !== 0
            mapped.push(
                <Project info={ele} isEven={isEven} darkMode={props.darkMode}/>
            )
        }
    })

    const settingCurrent = (direction)=>{
        let x = 0
        if(direction){
            x = current + 1 
        }
        else{
            current === 0 ? x = projs.length - 1 : x = current - 1
        }
        setCurrent(x)
    }

    return (
        <div>
            <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', fontWeight: 'bold', fontSize: 28, margin: props.isSmallScreen ? 'auto' : '', marginBottom: 75, marginLeft: 10 }}>
                PROJECTS
            </p>
            {/* <div>
                {mapped}
            </div> */}
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', height:'80%', width:'100%', height:'100%'}}>
                <div style={{width:'20%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <div 
                        onMouseEnter={()=>setHover('left')} 
                        onMouseLeave={()=>setHover('')} 
                        style={{ width: '50px', height: '50px', backgroundColor: hover === 'left' ? props.darkMode ? 'rgb(35,43,59)' : '#D3D3D3' : 'transparent', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <FaArrowLeft 
                            color={props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)'} 
                            onClick={() => settingCurrent(false)}
                            size={35}
                            style={{cursor:'pointer'}}
                        />
                    </div>
                </div>
                <div style={{width:'60%'}}>
                    {props.isSmallScreen ? <ProjectSmall info={projs[current % projs.length]} darkMode={props.darkMode} /> : <ProjectBig info={projs[current % projs.length]} darkMode={props.darkMode} />}
                </div>
                <div style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div
                        onMouseEnter={() => setHover('right')}
                        onMouseLeave={() => setHover('')}
                        style={{ width: '50px', height: '50px', backgroundColor: hover === 'right' ? props.darkMode ? 'rgb(35,43,59)' : '#D3D3D3' : 'transparent', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <FaArrowRight
                            color={props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)'}
                            onClick={() => settingCurrent(true)}
                            size={35}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects