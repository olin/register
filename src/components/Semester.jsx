import React, { PropTypes } from 'react';
import CourseBlock from './CourseBlock'; // this will be changed to a container later!

const Semester = ({ num, courseList }) => (
  <div>
    Semester { num }
    <li>
      <ul>
        {courseList.map(course =>
          <CourseBlock
            key={course.id}
            name={course.name}
            completed={course.grade !== 'N/A'}
          />,
        )}
      </ul>
    </li>
  </div>
);

Semester.propTypes = {
  num: PropTypes.number.isRequired,
  courseList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    semester: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Semester;
