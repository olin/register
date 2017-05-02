import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const AddCourseDropdown = ({ onSelect, catId, category, courses, selected }) => (
  <li>
    <FormGroup controlId={catId}>
      <ControlLabel>{category}</ControlLabel>
      <FormControl componentClass="select" value={selected} onChange={onSelect}>
        <option key={' '} value={' '} />
        {courses.map(course =>
          <option key={course.courseCode} value={course.courseCode}>{course.title}</option>,
        )}
      </FormControl>
    </FormGroup>
  </li>
);

AddCourseDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  catId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    courseCode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: PropTypes.string.isRequired,
};

export default AddCourseDropdown;
