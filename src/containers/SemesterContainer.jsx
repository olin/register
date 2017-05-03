import { connect as connectRedux } from 'react-redux';
import { DropTarget } from 'react-dnd';
import Semester from '../components/Semester';

const filterCourse = (semester, completedCourses, plannedCourses) => {
    const compareByCourseId = (a, b) => {
    // sort alphabetically by courseId (where the course code is stored in plannedCourses)
    if (a.courseId.toUpperCase() < b.courseId.toUpperCase()) {
      return -1;
    }
    return 1;
  };
  const compareByRegistrarId = (a, b) => {
    // sort alphabetically by registrarId (where the course code is stored in completedCourses)
    if (a.registrarId.toUpperCase() < b.registrarId.toUpperCase()) {
      return -1;
    }
    return 1;
  };
  const filteredCompleted = completedCourses.filter(course =>
    course.semester === semester,
  ).sort(compareByRegistrarId);
  console.log(plannedCourses, 'plannedCourses');
  const filteredPlanned = plannedCourses.filter(course =>
    course.semester === semester,
  ).sort(compareByCourseId);
  return filteredPlanned.concat(filteredCompleted);
};

// How the target reacts to drag and drop events
const semesterTarget = {
  drop(props, monitor) {
    // return drop result available to the drag source
    const sourceCourse = monitor.getItem();
    return {
      courseId: sourceCourse.courseId,
      newSemester: props.semester,
    };
  },
  canDrop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return props.semester !== sourceCourse.semester;
  },
};

// pass drag and drop props to component
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
      state.Student.completedCourses,
      state.Student.plannedCourses,
    ),
  }
);

const Wrapper = DropTarget('course', semesterTarget, collect)(Semester);
const SemesterContainer = connectRedux(
  mapStateToProps,
)(Wrapper);

export default SemesterContainer;
