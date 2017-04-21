import React, { PropTypes } from 'react';
import CourseBlock from './CourseBlock'; // this will be changed to a container later!

const Semester = ({ num, courseList }) => (
  <div>
    { num }
    <li>
      <ul>
        {courseList.map(course => 
          if (course.semester == num) {
            <CourseBlock
              key={course.id}
              name={course.name}
              completed={course.completed}
            />
          }
        )};
      </ul>
    </li>
  </div>
);

Semester.propTypes = {
  num: PropTypes.string.isRequired,
  courseList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    semester: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Semester;