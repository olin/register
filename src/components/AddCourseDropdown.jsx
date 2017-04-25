import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const AddCourseDropdown = ({ onSelect, id, category, courses, selected }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{category}</ControlLabel>
    <FormControl componentClass="select" value={selected} placeholder="select" onChange={onSelect}>
      {courses.map(course =>
        <option key={course.courseId} value={course.courseId}>{course.name}</option>,
      )}
    </FormControl>
  </FormGroup>
);

AddCourseDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    courseId: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: PropTypes.string.isRequired,
};

export default AddCourseDropdown;
