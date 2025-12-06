import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Innovative Learning for the Leaders of Tomorrow</h1>
        <p>Our advanced learning environment nurtures curiosity,
           creativity, and confidence. We prepare students with 
           industry-ready skills and real-world experience to
            help them excel in a rapidly changing world.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} /> </button>
      </div>
    </div>
  )
}

export default Hero
