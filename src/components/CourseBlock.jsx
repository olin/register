import React, { PropTypes } from 'react';

const CourseBlock = ({ title, registrarId, completed }) => (
  <li>
    {registrarId}:{title} {completed.toString()}
  </li>
);

CourseBlock.propTypes = {
  title: PropTypes.string.isRequired,
  registrarId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired, // for styling?
};

export default CourseBlock;
