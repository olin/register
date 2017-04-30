import React, { PropTypes } from 'react';

const CourseBlock = ({
  title,
  registrarId,
  completed,
  connectDragSource,
  isDragging,
}) => {
  const textColor = completed ? 'red' : 'black';
  return connectDragSource(
    <li
      style={{
        color: textColor,
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
  isDragging: PropTypes.bool.isRequired,
};

export default CourseBlock;
