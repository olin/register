import { connect } from 'react-redux';
import { updateSearchField, addCourse, updateSuggestions } from '../actions/actions';
import SearchField from '../components/SearchField';

// Connect with Presentational Component
const mapStateToProps = state => ({
  suggestions: state.CoursePlannerReducer.suggestions,
  val: state.CoursePlannerReducer.value,
  courses: state.CoursePlannerReducer.allCourses,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e, { newValue }) => {
    dispatch(updateSearchField(newValue));
  },
  onUpdateSuggestions: (suggestions) => {
    dispatch(updateSuggestions(suggestions));
  },
  onCourseAdd: (course) => {
    dispatch(addCourse(course));
  },
});

const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchField);

export default SearchFieldContainer;
