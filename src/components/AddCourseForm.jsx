import React, { PropTypes } from 'react';
import CoursePulldown from './CoursePulldown';

// All requirements and options to select 
// courses that fill the requirements
const AddCourseForm = ({ requirements, getCoursesByReq }) => (
  <ul>
    <li>
      {requirements.map(req =>
        <CoursePulldown
          key={req.toString()}
          requirement={req}
          courses={getCoursesByReq}
        />,
      )}
    </li>
  </ul>
);

AddCourseForm.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCoursesByReq: PropTypes.func.isRequired,
};

export default AddCourseForm;