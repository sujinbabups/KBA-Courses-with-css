import React from 'react'
import '../styles/Coursecard.css'
import CourseCards from '../components/CourseCards'

const Coursepage = () => {
  return (
    <div >
      <h2 className='course-heading2'>Browse All Courses</h2>
      <CourseCards />
    </div>
  )
}

export default Coursepage
