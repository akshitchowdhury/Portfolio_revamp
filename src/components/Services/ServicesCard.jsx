import React from 'react';

import './ServicesCard.css';
import card from '@material-tailwind/react/theme/components/card';
const ServicesCards = ({cardData}) => {


  return (
    <>
        <img className="card rounded-t-lg w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" src={cardData.image} alt="card1" />
      
  
    
    </>
  );
}

export default ServicesCards;
