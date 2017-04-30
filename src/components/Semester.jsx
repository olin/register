import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer';

const Semester = ({ semester, courseList, connectDropTarget }) => (
  connectDropTarget(
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
    </li>,
  )
);

Semester.propTypes = {
  semester: PropTypes.string.isRequired,
  courseList: PropTypes.arrayOf(PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    semester: PropTypes.string,
    grade: PropTypes.string,
  }).isRequired).isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

export default Semester;
