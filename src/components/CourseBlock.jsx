// A draggable course block that users can move around in their plans.
import React, { PropTypes } from 'react';

const CourseBlock = ({
  title,
  registrarId,
  completed,
  connectDragSource,
}) => {
  const textColor = completed ? 'gray' : 'black';
  // Mark element as draggable node
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
  completed: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default CourseBlock;
