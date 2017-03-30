import React, { PropTypes } from 'react';

// A single major requirement rendered as a list item
// MajorRequirementsList will contain these li's
const MajorRequirement = ({ requirement }) => (
  <li>
    {requirement}
  </li>
);

MajorRequirement.propTypes = {
  requirement: PropTypes.string.isRequired,
};

export default MajorRequirement;