import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/1.png';
import './Nav.css'
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleDropdownPosition = (e) => {
    const dropdownLinkRect = e.target.getBoundingClientRect();
    let leftPosition = dropdownLinkRect.left;
    if (window.innerWidth - dropdownLinkRect.left < 200) {
      leftPosition = window.innerWidth - 200;
    }
    setDropdownPosition({ top: dropdownLinkRect.bottom, left: leftPosition });
  };

  const resetDropdownPosition = () => {
    setIsDropdownOpen(false);
    setDropdownPosition({ top: 0, left: 0 });
  };

  return (
    <nav className="Navbar  border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 rounded-lg" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevAshura</span>
        </a>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          onMouseEnter={handleDropdownPosition}
          onMouseLeave={() => setDropdownPosition({ top: 0, left: 0 })}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={isDropdownOpen ? "absolute top-full left-0 w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-multi-level" style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
          <ul className="List flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link to="/" onClick={resetDropdownPosition} className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125">Home</Link>

            </li>
            <li>
              <Link to="/about" onClick={resetDropdownPosition} className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125">About Me</Link>
            </li>
            <li>
              <Link to="/projects" onClick={resetDropdownPosition} className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125">Projects</Link>
            </li>
            {!isMobile && (
              <li>
                <button
                  onClick={toggleServicesDropdown}
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-white dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125"
                  onMouseEnter={handleDropdownPosition}
                  onMouseLeave={handleDropdownPosition}
                >
                  <Link to="/services" className="navbar-link">Services</Link>
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div className={isServicesDropdownOpen ? "absolute top-full left-0 z-10 font-normal bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" : "hidden z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"} style={{ top: dropdownPosition.top, left: dropdownPosition.left }}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 text-white  ">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-white ">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-white ">Sign out</a>
                  </div>
                </div>
              </li>
            )}
            {isMobile &&
            (
              <li>
                <Link to="/services" onClick={resetDropdownPosition} className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125">Services</Link>
              </li>
            )}
            <li>
              <Link to="/contact" onClick={resetDropdownPosition} className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
