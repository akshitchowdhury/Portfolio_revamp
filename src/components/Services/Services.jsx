import React from 'react'
import './Services.css'
import ServicesCards from './ServicesCard'
import i1 from '../../assets/webDesign2.jpg'
import i2 from '../../assets/webDevelopment.jpg'
import i3 from '../../assets/app2.jpg'
import i6 from '../../assets/brandDesign2.jpg'

const Services = () => {

  const cardData = [{ title: 'Web Design', description: 'Fabrication project', image: i1 },
  { title: 'Web Dev', description: 'Bintalhind Project', image: i2 },
  { title: 'App Dev', description: 'Packers-Movers Project', image: i3 },
  { title: 'Logo Design', description: 'Pokemon Online store', image: i6 },]


  return (
    <>
     <div className='Services '>
     <div className='service-stack'>
      {cardData.map((card,index)=> (

        <ServicesCards key={index} cardData={card}/>
      ))
        
      }
    
   
    
      </div>
      </div>
    </>
  )
}

export default Services