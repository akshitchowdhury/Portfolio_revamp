import React from 'react';
import { generateLink } from '@reslear/whatsapp-link';

import '../SocialIcons.css'
// import './WhatsAppButton.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    container: {
      position: 'fixed',
      top: '50%',
      left: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: '9999',
    },
    icon: (color, hoverColor) => ({
      fontSize: '25px', // Adjust the font size here
      color: color,
      transition: 'transform 0.3s',
      cursor: 'pointer'
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


const WhatsApp = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = generateLink(phoneNumber=8638498584, message="Hi..Pratikshit this side...Contact me for further inquiries");
    window.open(url, '_blank');
  };

  return (
    <FontAwesomeIcon icon={faWhatsapp} onClick={handleClick} style={styles.icon('#5CE640', '#081450')} />
      
  );
};

export default WhatsApp;
