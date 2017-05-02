import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer';
import styles from './../../public/stylesheets/semester.css';

const SemesterReserve = ({ courseList, connectDropTarget }) => (
  // Indicate node should react to drop target events
  connectDropTarget(
    <li>
      <span className={styles.semesterheading}>Unassigned Courses:</span>
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
