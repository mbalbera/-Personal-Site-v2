import React from 'react'
// components
import ProjectSmall from './ProjectSmall'
import Slider from './Slider'
// imgs
import Fifteen from '../assets/fifteenpuzzle.png'
import CryptoLads from '../assets/cryptoLads.png'
import AllocateRite from '../assets/allocaterite.png'
import Microbets from '../assets/microbets.png'
import Finx from '../assets/finx.png'

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

    const renderProjs = ()=>{
        if(props.isSmallScreen){
            return <div> {projs?.map((ele, idx)=>{ return <ProjectSmall info={ele} darkMode={props.darkMode} key={idx}/>})}</div>
        }
        else{
            return <Slider slides={projs} isSmallScreen={props.isSmallScreen} darkMode={props.darkMode}/>
        }
    }

    return (
        <div id='Projects'>
            <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : 'rgb(17,17,17)', fontWeight: 'bold', fontSize: 28, margin: props.isSmallScreen ? 'auto' : '', marginBottom: 25, marginLeft: 10, paddingLeft:props.isSmallScreen? 50:150, paddingRight:props.isSmallScreen? 50:150  }}>
                PROJECTS
            </p>
            <div style={{padding:props.isSmallScreen? 25:75}}>
                {renderProjs()}
            </div>
        </div>
    )
}

export default Projects