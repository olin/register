import React, { PropTypes } from 'react';

const CourseBlock = ({
  title,
  registrarId,
  completed,
  connectDragSource,
}) => {
  const textColor = completed ? 'gray' : 'black';
  return connectDragSource(
    <li
      style={{
        color: textColor,
        fontStyle: 'italic',
      }}
    >
      {registrarId}:{title}
    </li>,
  );
};

CourseBlock.propTypes = {
  title: PropTypes.string.isRequired,
  registrarId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired, // for styling?
  connectDragSource: PropTypes.func.isRequired,
};

export default CourseBlock;
