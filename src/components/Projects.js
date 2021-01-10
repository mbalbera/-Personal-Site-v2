import react from 'react'
import Project from './Project'
import Fifteen from '../assets/fifteenpuzzle.png'
import AllocateRite from '../assets/allocaterite.png'
import Microbets from '../assets/microbets.png'
import Finx from '../assets/finx.png'

const Projects = (props) => {
    const projs = [
        {
            title: 'AllocateRite',
            image: AllocateRite,
            imageType:'web',
            desc: 'An AI driven Fintech platform that can replace your financial advisor',
            b1: 'Developed web and mobile applications using React, React Native, and AWS.',
            b2: 'Utilized SSO Authentication with AWS cognito on both web and mobile platforms.',
            b3: 'Acted as the Product Owner to define the product vision, prioritize needs, oversee team wide development.',
        },
        {
            title: 'Microbets',
            image: Microbets,
            imageType:'phone',
            desc: 'A mobile sports-gambling platform that utilizes a swipe based user interface to improve UX for new and experienced gamblers',
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
            title: 'Fifteen Puzzle',
            image: Fifteen,
            imageType:'web',
            desc: 'A sliding puzzle that trains spatial awareness and cognitive skills, with fifteen randomly arranged tiles and one empty tile',
            b1: 'Constructed a digital replica of a famous puzzle using Javascript and custom CSS.',
            b2: 'Developed a Ruby on Rails API backend to maintain overall top scores and individualized highscores.',
            b3: 'Engineered functionality to solve the puzzle if a user cannot finish it by themselves.',
        },
    ]
    let mapped = []
    projs.forEach((ele, idx) => {
        let isEven = idx % 2 === 0
        mapped.push(
            <Project info={ele} isEven={isEven} darkMode={props.darkMode}/>
        )
    })
    return (
        <div>
            <p style={{ color: props.darkMode ? 'rgb(255,255,255)' : '', fontWeight: 'bold', fontSize: 22 }}>
                Projects
            </p>
            <div>
                {mapped}
            </div>
        </div>
    )
}

export default Projects