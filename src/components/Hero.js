import React from 'react'
import team from '../images/team-india.jpg';

export default function Hero() {
  return (
    <section className='hero'>
        <img src={team} alt='section image' className='hero-image' />
        <h1 className='hero-h1'>T20 Inidan team 2022 </h1>
        <p className='hero-p'>T20 indian team players list is listed below. This time Rohit Sharma is taking charge as Captain. All the best to Team India !!!
        </p>

    </section>
  )
}
