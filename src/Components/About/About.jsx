import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
              {setPlayState(true)}
            } />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Creating Pathways to Success</h2>
            <p>We offer high-quality programs designed to build
               confidence, strengthen skills, and encourage innovation. 
               With dedicated faculty  
              students are guided toward achieving their highest 
              potential.</p>
            <p>Our programs help students grow through hands-on learning 
               and industry-focused training. 
              We aim to develop confident, skilled individuals
               who can excel in classrooms, careers, and 
               communities.</p>
            <p>Through innovative teaching and a student-centered
               approach, we prepare learners for academic and 
               professional excellence.</p>
        </div>
    </div>
  )
}

export default About
