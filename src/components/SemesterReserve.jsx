import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer';

const SemesterReserve = ({ courseList, connectDropTarget }) => (
  connectDropTarget(
    <li>
      Unassigned Courses:
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

SemesterReserve.propTypes = {
  courseList: PropTypes.arrayOf(PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.string,
  }).isRequired).isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

export default SemesterReserve;
