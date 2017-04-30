import { connect as connectRedux } from 'react-redux';
import { DropTarget } from 'react-dnd';
import Semester from '../components/Semester';

const filterCourse = (semester, completedCourses, plannedCourses) => {
  const compare = (a, b) => {
    if (a.registrarId.toUpperCase() < b.registrarId.toUpperCase()) {
      return -1;
    }
    return 1;
  };
  const filteredCompleted = completedCourses.filter(course =>
    course.semester === semester,
  ).sort(compare);
  const filteredPlanned = plannedCourses.filter(course =>
    course.semester === semester,
  ).sort(compare);
  return filteredPlanned.concat(filteredCompleted);
};

const semesterTarget = {
  drop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return {
      courseId: sourceCourse.course.courseId,
      newSemester: props.semester,
    };
  },
  canDrop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return props.semester !== sourceCourse.course.semester;
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

const mapStateToProps = (state, ownProps) => (
  {
    semester: ownProps.semester,
    courseList: filterCourse(
      ownProps.semester,
      state.LoginReducer.completedCourses,
      state.LoginReducer.plannedCourses,
    ),
  }
);

const Wrapper = DropTarget('course', semesterTarget, collect)(Semester);
const SemesterContainer = connectRedux(
  mapStateToProps,
)(Wrapper);

export default SemesterContainer;
