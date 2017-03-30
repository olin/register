import React, { PropTypes } from 'react';

// A single general requirement rendered as a list item
// GeneralRequirementsList will contain these li's
const GeneralRequirement = ({ requirement }) => (
  <li>
    {requirement}
  </li>
);

GeneralRequirement.propTypes = {
  requirement: PropTypes.string.isRequired,
};

export default GeneralRequirement;
