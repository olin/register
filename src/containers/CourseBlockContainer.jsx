import { connect as connectRedux } from 'react-redux';
import { DragSource } from 'react-dnd';
import CourseBlock from '../components/CourseBlock';
import { changeSemester } from '../actions/actions';

const findCourseById = (allCourses, courseId) => (
  // find and return the course with a matching id in allCourses
  allCourses.find(course => course._id === courseId)
);

// Behavior of the drag source
const courseSource = {
  // Object representing dragged item to be used by the drop target
  beginDrag(props) {
    return {
      courseId: props.course.courseId,
      semester: props.course.semester,
    };
  },
  // Completed courses cannot be moved
  canDrag(props) {
    return !props.completed;
  },
  // Conditions under which the drag is completed
  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      // if the target accepts the drag source, dispatch an action
      const item = monitor.getDropResult();
      props.onDrop(item.courseId, item.newSemester);
    }
    // otherwise do nothing. This is necessary to end the drag in the event
    // of a failed drop.
  },
};

// pass properties to the component
const collect = connect => ({
  connectDragSource: connect.dragSource(),
});

const mapStateToProps = (state, ownProps) => {
  const course = findCourseById(state.Courses, ownProps.course.courseId);
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

