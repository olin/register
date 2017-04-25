import React, { PropTypes } from 'react';

const CourseBlock = ({ name, completed }) => (
  <li>
    {name}
  </li>
);

CourseBlock.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default CourseBlock;
