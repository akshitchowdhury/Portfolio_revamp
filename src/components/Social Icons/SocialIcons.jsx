import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faChild, faEnvelope, faPaw, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css'
import WhatsApp from './Whatsapp/Whatsapp';


const SocialIcons = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return ( <>
      <div className="discountButton  top-0 w-12 h-12  bg-amber-800 shadow-md rounded-full">
        <button
          className={`w-12 h-12 bg-${isOpen ? 'blue' : 'green'}-500 text-white rounded-full transition duration-300 flex items-center justify-center`}
          onClick={toggleAccordion}
        > 
          {isOpen ? <FontAwesomeIcon icon={faAddressBook}/> : <FontAwesomeIcon icon={faAddressBook}/>}
        </button>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
        >
          {(ref) => ( 
            
              
    <div ref={ref} className='social-icons absolute top-0 left-24  p-2 rounded-lg' 
    style={styles.container}>
      <a href="https://www.instagram.com/_axe_it_chowdhury/" style={styles.link}><FontAwesomeIcon icon={faInstagram} style={styles.icon('#E717A9', '#E717A9')} /></a>
      {/* <a href="https://www.instagram.com/play_pawws?igsh=YXVrOXJjb2gweTNw&utm_source=qr" style={styles.link}><FontAwesomeIcon icon={faWhatsapp} style={styles.icon('#405DE6', '#405DE6')} /></a>
       */}
      <a> <WhatsApp/> </a>
      <a href="akshitchowdhury@gmail.com" style={styles.link}><FontAwesomeIcon icon={faEnvelope} style={styles.icon('#EA4335', '#EA4335')} /></a>
      <a href="tel:+91 8638498584" style={styles.link}><FontAwesomeIcon icon={faPhone} style={styles.icon('#34A853', '#34A853')} /></a>
      
      
    </div>
            

            
          )}
        </Transition>
      </div>
    </>
  );
}



const styles = {
  container: {
    position: 'fixed',
    top: '70%',
    left: '-60px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: '9999',
  },
  icon: (color, hoverColor) => ({
    fontSize: '25px', // Adjust the font size here
    color: color,
    transition: 'transform 0.3s',
  }),
  link: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover svg': {
      transform: 'scale(1.1)',
      color: (theme) => theme.color.hoverColor,
    },
  },
};

export default SocialIcons;
