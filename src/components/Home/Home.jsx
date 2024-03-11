import React from 'react'

import './Home.css'

import profile from '../../assets/profile.jpg'

const Home = () => {
 
 
 
 
    return (
        <>



     <div className='backDrop'>

      <span className='intro1 '>  {`${"<Welcome>"}`} </span>
       <div className= 'profile'>

       <p className='text-white max-w-md '>
       Welcome to my digital sanctuary! I'm Pratikshit Chowdhury, your guide through this captivating space. If you've found yourself here after clicking on my portfolio link, consider yourself among the cultured few. Explore with curiosity, for within these digital walls lies a tapestry of creativity waiting to be unraveled.
        </p>
        <img src= {profile} alt="proPic" />

       

       </div>
        
       <span className='intro2 '>  {`${"</Welcome>"}`} </span>
    </div> 
      
    </>
  )
}

export default Home