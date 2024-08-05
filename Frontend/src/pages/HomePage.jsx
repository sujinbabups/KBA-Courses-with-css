import React from 'react'
import { Link } from 'react-router-dom'
import Heros from '../components/Heros'
import CourseCards from '../components/CourseCards'
import '../styles/Coursecard.css'

const HomePage = () => {
  return (
    <>
      <Heros />
      <h2 className='course-heading'>Top Courses</h2>
      <CourseCards isHome={true} />
      <Link to="/courses">
        <button className='btn1' >View all Courses</button>
      </Link>
    </>
  )
}

export default HomePage
