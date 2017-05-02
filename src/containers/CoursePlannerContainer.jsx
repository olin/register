import { connect } from 'react-redux';
import { selectCourse, removeCourse } from '../actions/actions';
import CoursePlanner from '../components/CoursePlanner';

// Connect with Presentational Component
const mapStateToProps = state => ({
  categories: state.CoursePlanner.categories,
  otherCourses: state.CoursePlanner.otherCourses,
});

const mapDispatchToProps = dispatch => ({
  onCourseSelect: (catId, registrarId) => {
    dispatch(selectCourse(catId, registrarId));
  },
  onCourseRemove: (registrarId) => {
    dispatch(removeCourse(registrarId));
  },
});

const CoursePlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePlanner);

export default CoursePlannerContainer;
