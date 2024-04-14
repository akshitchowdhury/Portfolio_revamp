import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/1.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faBriefcase,
  faCode,
  faForward,
  faGear,
  faGears,
  faHome,
  faPerson,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import PlayKeys from "./PlayKeys";
import "./PlayKeys.css";
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
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            DevAshura
          </span>
        </a>
        <PlayKeys />

        <button
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          onMouseEnter={handleDropdownPosition}
          onMouseLeave={() => setDropdownPosition({ top: 0, left: 0 })}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={
  isDropdownOpen
    ? "absolute top-3/4 left-0 w-3/4 md:relative md:top-3/4 md:left-2 md:w-full"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-multi-level"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          <ul className="List flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-500  
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <Link
                to="/"
                onClick={resetDropdownPosition}
                style={{ color: "white" }}
                className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  size="lg"
                  className="player"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={resetDropdownPosition}
                style={{ color: "white" }}
                className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faPerson}
                  size="lg"
                  className="player"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={resetDropdownPosition}
                style={{ color: "white" }}
                className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
               md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white 
               md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
               transform transition duration-300 ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  size="lg"
                  className="player"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={resetDropdownPosition}
                className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faGear}
                  size="lg"
                  className="player"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={resetDropdownPosition}
                style={{ color: "white" }}
                className="navbar-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition duration-300 ease-in-out hover:scale-125"
              >
                <FontAwesomeIcon
                  icon={faAddressBook}
                  size="lg"
                  style={{ color: "lightgray" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
