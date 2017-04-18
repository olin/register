import React, { PropTypes } from 'react';

// A single requirement rendered as a list item
// RequirementsList will contain these li's
const Requirement = ({ requirement }) => (
  <li>
    {requirement}
  </li>
);

Requirement.propTypes = {
  requirement: PropTypes.string.isRequired,
};

export default Requirement;
