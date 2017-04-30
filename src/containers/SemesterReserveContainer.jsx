import { connect as connectRedux } from 'react-redux';
import { DropTarget } from 'react-dnd';
import SemesterReserve from '../components/SemesterReserve';

const filterCourse = (plannedCourses) => {
  const compare = (a, b) => {
    if (a.registrarId.toUpperCase() < b.registrarId.toUpperCase()) {
      return -1;
    }
    return 1;
  };
  const filteredPlanned = plannedCourses.filter(course =>
    course.semester === undefined,
  ).sort(compare);
  return filteredPlanned;
};

// How the target reacts to drag and drop events
const semesterTarget = {
  drop(props, monitor) {
    // return drop result available to the drag sourc
    const sourceCourse = monitor.getItem();
    return {
      courseId: sourceCourse.courseId,
      newSemester: undefined,
    };
  },
  canDrop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return sourceCourse.semester !== undefined;
  },
};

// pass drag and drop props to component
const collect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

const mapStateToProps = state => (
  {
    courseList: filterCourse(state.LoginReducer.plannedCourses),
  }
);

const Wrapper = DropTarget('course', semesterTarget, collect)(SemesterReserve);
const SemesterReserveContainer = connectRedux(
  mapStateToProps,
)(Wrapper);

export default SemesterReserveContainer;
