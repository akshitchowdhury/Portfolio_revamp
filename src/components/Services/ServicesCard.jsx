import React from 'react';

import './ServicesCard.css';
import card from '@material-tailwind/react/theme/components/card';
const ServicesCards = ({cardData}) => {


  return (
    <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-full" src={cardData.image} alt="card1" />
      </a>
      <div className="p-5">
        
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-white dark:text-white" style={{marginLeft: '25%'}}>{cardData.title}</h5>
        

      </div>
    </div>
  );
}

export default ServicesCards;
