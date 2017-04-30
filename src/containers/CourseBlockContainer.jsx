import { connect as connectRedux } from 'react-redux';
import { DragSource } from 'react-dnd';
import CourseBlock from '../components/CourseBlock';
import { changeSemester } from '../actions/actions';

const findCourseById = (allCourses, courseId) => (
  allCourses.find(course => course._id === courseId)
);

const courseSource = {
  beginDrag(props) {
    return {
      course: props.course,
    };
  },
  canDrag(props) {
    return !props.completed;
  },
  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      const item = monitor.getDropResult();
      props.onDrop(item.courseId, item.newSemester);
    }
  },
};

const collect = connect => ({
  connectDragSource: connect.dragSource(),
});

const mapStateToProps = (state, ownProps) => {
  const course = findCourseById(state.LoginReducer.allCourses, ownProps.course.courseId);
  return {
    title: course.title,
    registrarId: course.registrarId,
    completed: ownProps.course.grade !== undefined,
  };
};

const mapDispatchToProps = dispatch => ({
  onDrop: (courseId, semester) => {
    dispatch(changeSemester(courseId, semester));
  },
});

const Wrapper = DragSource('course', courseSource, collect)(CourseBlock);
const CourseBlockContainer = connectRedux(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);

export default CourseBlockContainer;

