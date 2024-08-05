import React from 'react'
import rp from '../assets/images/rp.png'
import '../styles/Coursecard.css'
    
const Card = ({course}) => {
  console.log(course);
  return (
    <div className='course-card'>
      <h2 className='course-title'>{course.title}
      </h2>
      <img src={rp} alt="course thumbnail" className='course-image' />
      <p className='course-description'>{course.description}</p>
      
      <a href="" className="learn-more-link">Learn More</a>
    </div>
  )
}

export default Card
