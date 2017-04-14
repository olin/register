import React, { PropTypes } from 'react';
import CoursePulldown from './CoursePulldown';

// All requirements and options to select
// courses that fill the requirements
const AddCourseForm = ({ requirements }) => (
  <ul>
    {requirements.map(req =>
      <CoursePulldown
        key={req.toString()}
        requirement={req}
        courses={[{ name: 'Course1', id: 'CourseID' }]}
      />,
    )}
  </ul>
);

AddCourseForm.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddCourseForm;
