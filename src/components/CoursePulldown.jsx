import React, { PropTypes } from 'react';

// A single general requirement rendered as a list item
// GeneralRequirementsList will contain these li's
const CoursePulldown = ({ requirement, courses=[] }) => (
  {requirment}
  <select>
    {courses.map(course =>
    	<option
    		key={course.id}
    		value={course.name}
		>
		{course.name}
		</option>,
	)}
  </select>
);

CoursePulldown.propTypes = {
  requirement: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoursePulldown;
