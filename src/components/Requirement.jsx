// A single requirement rendered as an <li>. RequirementsList contains these.
import React, { PropTypes } from 'react';

const Requirement = ({ requirement }) => (
  <li>
    {requirement}
  </li>
);

Requirement.propTypes = {
  requirement: PropTypes.string.isRequired,
};

export default Requirement;
