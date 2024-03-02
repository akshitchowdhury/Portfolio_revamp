import React from 'react'

import './Home.css'
// import { Link } from 'react-router-dom'

// import mainLogo from '../../assets/1.png'

const Home = () => {
 
 
 
 
    return (
        <>


<button
  type="button"
  className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
>
  Success
</button>
<h1 className="text-2xl text-blue-500">
      Hello world!
    </h1>
    {/* <div className='backDrop'>

    <div className='navBlock w-full'>
      <nav className="bg-cover">

      <div class="logo flex items-start justify-start px-3 py-2 mx-auto max-w-screen-xl">
    <img src={mainLogo} alt="logo" />
    </div>
  
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
          <div className="link-tab navbar-links flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-auto ">
            <Link to="/" className="navbar-link ">Home</Link>
            <Link to="/"  className="navbar-link">About Us</Link>
            <Link to="/"  className="navbar-link">Services</Link>
            <Link to="/"  className="navbar-link">Gallery</Link>
            <Link to="/"  className="navbar-link">Contact Us</Link>
            
          </div>
        </div>
        
      </nav>
    </div>
    </div> */}

    </>
  )
}

export default Home