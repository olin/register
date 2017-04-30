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

const semesterTarget = {
  drop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return {
      courseId: sourceCourse.course.courseId,
      newSemester: undefined,
    };
  },
  canDrop(props, monitor) {
    const sourceCourse = monitor.getItem();
    return sourceCourse.course.semester !== undefined;
  },
};

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
