import { connect } from 'react-redux';
import { selectCourse } from '../actions/actions';
import CoursePlanner from '../components/CoursePlanner';

// Connect with Presentational Component
const mapStateToProps = state => ({
  requirements: state.CoursePlannerReducer.requirements,
});

const mapDispatchToProps = dispatch => ({
  onCourseSelect: (courseId) => {
    dispatch(selectCourse(courseId));
  },
});

const CoursePlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePlanner);

export default CoursePlannerContainer;
