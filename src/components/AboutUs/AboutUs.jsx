import React from 'react'
import './AboutUs.css'
import Nav from '../Nav/Nav'
import profile from '../../assets/aboutBG.jpg'
const AboutUs = () => {
  return (
    <>

    <div className='about'>
    {/* <Nav/> */}
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
  <p className="paraText bubblegum-sans-regular md:ml-4 mb-4 md:mb-0" style={{ marginRight: '4%' }}>
  Welcome to my digital sanctuary! I'm Pratikshit Chowdhury, your guide through this captivating space. If you've found yourself here after clicking on my portfolio link, consider yourself among the cultured few. Explore with curiosity, for within these digital walls lies a tapestry of creativity waiting to be unraveled. </p>
  <img src={profile} alt="placeholder" className="eventImg md:w-1/2 max-h-full" style={{ height: 'auto', borderRadius: '5%' }} />
</div>
    </div>
    </>
  )
}

export default AboutUs