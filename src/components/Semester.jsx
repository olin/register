import React, { PropTypes } from 'react';
import CourseBlock from './CourseBlock'; // this will be changed to a container later!

const Semester = ({ num, courseList }) => (
  <div>
    { num }
    <li>
      {courseList.map(course =>
        <CourseBlock
          key={course.id}
          name={course.name}
          completed={course.completed}
        />
      )};
    </li>
  </div>
);

Semester.propTypes = {
  num: PropTypes.string.isRequired,
  courseList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};
