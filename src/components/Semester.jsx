import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer'; // this will be changed to a container later!

const Semester = ({ semester, courseList }) => (
  <li>
    { semester }:
    <ul>
      {courseList.map(course =>
        <CourseBlockContainer
          key={course.courseId.toString()}
          course={course}
        />,
      )}
    </ul>
    <hr />
  </li>
);


Semester.propTypes = {
  semester: PropTypes.string.isRequired,
  courseList: PropTypes.arrayOf(PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    semester: PropTypes.string,
    grade: PropTypes.string,
  }).isRequired).isRequired,
};

export default Semester;
