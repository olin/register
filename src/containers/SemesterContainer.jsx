import { connect } from 'react-redux';
import Semester from '../components/Semester';

const filterCourse = (num, courses) => (
  courses.filter(course =>
    course.semester === num,
  )
);

const mapStateToProps = (state, ownProps) => (
  {
    num: ownProps.num,
    courseList: filterCourse(ownProps.num, state.LoginReducer.completedCourses),
  }
);

const SemesterContainer = connect(
  mapStateToProps,
)(Semester);

export default SemesterContainer;
