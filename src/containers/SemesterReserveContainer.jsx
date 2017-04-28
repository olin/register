import { connect } from 'react-redux';
import SemesterReserve from '../components/SemesterReserve';

const filterCourse = (plannedCourses) => {
  const filteredPlanned = plannedCourses.filter(course =>
    course.semester === undefined,
  );
  return filteredPlanned;
};

const mapStateToProps = (state, ownProps) => (
  {
    key: ownProps.semester,
    courseList: filterCourse(state.LoginReducer.plannedCourses),
  }
);

const SemesterReserveContainer = connect(
  mapStateToProps,
)(SemesterReserve);

export default SemesterReserveContainer;
