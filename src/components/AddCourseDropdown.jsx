import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const AddCourseDropdown = ({ onSelect, id, category, courses, selected }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{category}</ControlLabel>
    <FormControl componentClass="select" value={selected} onSelect={onSelect}>
      {courses.map(course =>
        <option value={course}>{course}</option>,
      )}
    </FormControl>
  </FormGroup>
);

AddCourseDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.number.isRequired,
};

export default AddCourseDropdown;
