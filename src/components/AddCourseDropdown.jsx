import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styles from '../../public/stylesheets/add-course-dropdown.css';

const AddCourseDropdown = ({ onSelect, catId, category, courses, selected }) => (
  <li className={styles.dropdown}>
    <FormGroup controlId={catId}>
      <ControlLabel>{category}</ControlLabel>
      <FormControl componentClass="select" value={selected} onChange={onSelect}>
        <option key={' '} value={' '} />
        {courses.map(course =>
          <option key={course.registrarId} value={course.registrarId}>{course.title}</option>,
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
    registrarId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selected: PropTypes.string.isRequired,
};

export default AddCourseDropdown;
