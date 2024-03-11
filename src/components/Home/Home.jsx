import React from 'react'

import './Home.css'

import profile from '../../assets/profile.jpg'

const Home = () => {
 
 
 
 
    return (
        <>



     <div className='backDrop'>

       <div className= 'profile'>

       <p className='text-white max-w-md '>
          Hello there...Pratikshit Chowdhury this side..If you clicked on my portfolio link and were redirected to this magnificient space; then it shows that you are a Man/Woman of culture
        </p>
        <img src= {profile} alt="proPic" />

       

       </div>

        
    </div> 

    </>
  )
}

export default Home