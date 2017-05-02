// A single semester rendered as an <li>. SemesterList contains these.
import React, { PropTypes } from 'react';
import CourseBlockContainer from '../containers/CourseBlockContainer';
import styles from './../../public/stylesheets/semester.css';

const Semester = ({ semester, courseList, connectDropTarget }) => (
  // Indicate node should react to drop target events
  connectDropTarget(
    <li>
      <span className={styles.semesterheading}>{ semester }:</span>
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
