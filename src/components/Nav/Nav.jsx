import React from 'react'
import { Link } from 'react-router-dom'

import mainLogo from '../../assets/1.png'
import './Nav.css'
const Nav = () => {
  return (
    <div className='navBlock w-full'>
    <nav className="navbar bg-cover">

    <div class="logo flex items-start justify-start px-3 py-2 mx-auto max-w-screen-xl">
  <img className="logo" src={mainLogo}  alt="logo" />
  </div>

  {/* <button
type="button"
className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg"
>
Success
</button> */}

      <div className="container mr-4 px-4 py-4 flex justify-between items-end">
      
        <div className="link-tab navbar-links flex flex-col md:flex-row md:items-end md:justify-between w-full md:w-full ">
          <Link to="/" className="navbar-link ">Home</Link>
          <Link to="/about"  className="navbar-link">About Us</Link>
          <Link to="/"  className="navbar-link">Services</Link>
          <Link to="/"  className="navbar-link">Gallery</Link>
          <Link to="/"  className="navbar-link">Contact Us</Link>
          
        </div>
      </div>
      
    </nav>
  </div>
  )
}

export default Nav