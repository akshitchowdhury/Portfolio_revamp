import React from 'react'
import { Link } from 'react-router-dom'

import mainLogo from '../../assets/1.png'
import './Nav.css'
import DropdownMenu from './DropdownMenu'
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
          <Link to="/" className="navbar-link  ">HOME</Link>
          <Link to="/about"  className="navbar-link">ABOUT ME</Link>
          
          <Link to="/projects"  className="navbar-link"><DropdownMenu/></Link>
          <Link to="/"  className="navbar-link">CONTACT</Link>
          
          
        </div>
      </div>
      
    </nav>
  </div>
  )
}

export default Nav

// import { useState } from "react";

// export default function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-between border-b border-gray-400 py-8">
//       <a href="/">
//         <img src="https://designbygio.it/images/logo.png" alt="logo" />
//       </a>
//       <nav>
//         <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//             onClick={() => setIsNavOpen((prev) => !prev)}
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//           </div>

//           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//             <div
//               className="absolute top-0 right-0 px-8 py-8"
//               onClick={() => setIsNavOpen(false)}
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </div>
//             <ul className="flex flex-col items-center justify-between min-h-[250px]">
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/about">About</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/portfolio">Portfolio</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase">
//                 <a href="/contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </div>
//   );
// }
