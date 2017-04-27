import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer';

const Semester = ({ courseList }) => (
  <div>
    Unassigned Courses:
    <li>
      <ul>
        {courseList.map(course =>
          <CourseBlockContainer
            key={course.id}
            course={course}
          />,
        )}
      </ul>
      <hr />
    </li>
  </div>
);


Semester.propTypes = {
  courseList: PropTypes.arrayOf(PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.string,
  }).isRequired).isRequired,
};

export default Semester;
