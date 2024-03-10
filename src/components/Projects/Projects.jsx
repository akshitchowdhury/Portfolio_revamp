import React from 'react'
import './Projects.css'
import Cards from './Cards/Cards'

import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
import i4 from '../../assets/i4.jpg'
import i5 from '../../assets/homeBg.jpg'
import i6 from '../../assets/homeBg3.jpg'

const Projects = () => {
  const cardData = [{ title: 'Project 1', description: 'Bintalhind Project', image: i1 },
  { title: 'Project 2', description: 'Fabrication project', image: i2 },
  { title: 'Project 3', description: 'Alwyn Packers and Movers Project', image: i3 },
  { title: 'Project 4', description: 'Pokemon Online store', image: i4 },
  { title: 'Project 5', description: 'Infintiy Travels' , image: i5},
  { title: 'Project 6', description: 'Spiderman Miles Morlaes', image: i6 },]

  return (
    <>    
    <div className='Projects'>
        
    <div className='card-stack'>
      {cardData.map((card,index)=> (

        <Cards key={index} cardData={card}/>
      ))
        
      }
    
   
    
    </div>
    </div>
    
    </>

  )
}

export default Projects