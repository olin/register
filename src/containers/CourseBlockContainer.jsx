import { connect } from 'react-redux';
import CourseBlock from '../components/CourseBlock';

const findCourseById = (allCourses, courseId) => (
  // eslint-disable-next-line no-underscore-dangle
  allCourses.find(course => course._id === courseId)
);

const mapStateToProps = (state, ownProps) => {
  const course = findCourseById(state.LoginReducer.allCourses, ownProps.course.courseId);
  return {
  	// eslint-disable-next-line no-underscore-dangle
    title: course.title,
    registrarId: course.registrarId,
    completed: ownProps.course.grade !== undefined,
  };
};

const CourseBlockContainer = connect(
  mapStateToProps,
)(CourseBlock);

export default CourseBlockContainer;
