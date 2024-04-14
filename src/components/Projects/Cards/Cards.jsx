import React from 'react';
import c1 from '../../../assets/bg2.jpg';
import './Cards.css';
import card from '@material-tailwind/react/theme/components/card';
const Cards = ({cardData}) => {


  return (
    <div className="card flex flex-col max-w-sm bg-green-300
    hover:bg-red-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-full" src={cardData.image} alt="card1" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{marginLeft: '25%'}}>{cardData.title}</h5>
        </a>
        
      </div>
    </div>
  );
}

export default Cards;
