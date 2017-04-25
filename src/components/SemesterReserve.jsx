import REact, { PropTypes } from 'react';
import CourseBlock from './CourseBLock';

const SemesterReserve = ({ courseList }) => (
  <div>
    Assign to a semester:
    <li>
      <ul>
        {courseList.map(course =>
          <CourseBlock
            key={course.id}
            name={course.name}
            completed={course.grade && true}
          />,
        )}
      </ul>
    </li>
  </div>
);

Semester.propTypes = {
  courseList: PropTypes.arrayOf(PropTypes.shape({
    courseInfo: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      registrarId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      credits: PropTypes.number.isRequired,
      ENGRCredits: PropTypes.number,
      AHSCredits: PropTypes.number,
      MTHCredits: PropTypes.number,
      SCICredits: PropTypes.number,
      ECredits: PropTypes.number,
      NDGRCredits: PropTypes.number,
    }).isRequired,
    courseStudent: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      courseId: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}