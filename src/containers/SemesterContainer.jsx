import { connect } from 'react-redux';
import Semester from '../components/Semester';

const filterCourse = (num, completedCourses, plannedCourses) => {
  const filteredCompleted = completedCourses.filter(course =>
    course.courseStudent.semester === num,
  );
  const filteredPlanned = plannedCourses.filter(course =>
    course.courseStudent.semester === num,
  );
  return filteredPlanned.concat(filteredCompleted);
};

const mapStateToProps = (state, ownProps) => (
  {
    num: ownProps.num,
    courseList: filterCourse(
      ownProps.num,
      state.LoginReducer.completedCourses,
      state.LoginReducer.plannedCourses,
    ),
  }
);

const SemesterContainer = connect(
  mapStateToProps,
)(Semester);

export default SemesterContainer;
