import React from 'react';
import courses from '../courses.json';
import Card from './Card';
// console.log(courses);
const CourseCards = ({isHome=false}) => {
  const courselist=isHome?courses.slice(0,3):courses;
  return (
    <>
      <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       
        <div  className='course-div' style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {courselist.map((course) => (
            <Card key={course.courseId} course={course} />
            
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseCards;
