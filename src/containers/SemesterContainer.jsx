import { connect } from 'react-redux';
import Semester from '../components/Semester';

const filterCourse = (semester, completedCourses, plannedCourses) => {
  const filteredCompleted = completedCourses.filter(course =>
    course.semester === semester,
  );
  const filteredPlanned = plannedCourses.filter(course =>
    course.semester === semester,
  );
  return filteredPlanned.concat(filteredCompleted);
};

const mapStateToProps = (state, ownProps) => (
  {
    // key: ownProps.key,
    semester: ownProps.semester,
    courseList: filterCourse(
      ownProps.semester,
      state.LoginReducer.completedCourses,
      state.LoginReducer.plannedCourses,
    ),
  }
);

const SemesterContainer = connect(
  mapStateToProps,
)(Semester);

export default SemesterContainer;
