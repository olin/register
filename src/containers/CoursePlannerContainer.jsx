import { connect } from 'react-redux';
import { selectCourse, removeCourse } from '../actions/actions';
import CoursePlanner from '../components/CoursePlanner';

// Connect with Presentational Component
const mapStateToProps = state => ({
  categories: state.CoursePlannerReducer.categories,
  otherCourses: state.CoursePlannerReducer.otherCourses,
});

const mapDispatchToProps = dispatch => ({
  onCourseSelect: (catId, courseCode) => {
    dispatch(selectCourse(catId, courseCode));
  },
  onCourseRemove: (courseCode) => {
    dispatch(removeCourse(courseCode));
  },
});

const CoursePlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePlanner);

export default CoursePlannerContainer;
