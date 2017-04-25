import { connect } from 'react-redux';
import { selectCourse } from '../actions/actions';
import CoursePlanner from '../components/CoursePlanner';

// Connect with Presentational Component
const mapStateToProps = state => ({
  categories: state.CoursePlannerReducer.categories,
});

const mapDispatchToProps = dispatch => ({
  onCourseSelect: (catId, courseId) => {
    dispatch(selectCourse(catId, courseId));
  },
});

const CoursePlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursePlanner);

export default CoursePlannerContainer;
