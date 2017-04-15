import React, { PropTypes } from 'react';
import Requirement from './Requirement';

// A list containing Requirement components
const RequirementsList = ({ requirements }) => (
  <ul>
    {requirements.map(req =>
      <Requirement
        key={req.toString()}
        requirement={req}
      />,
    )}
  </ul>
);

RequirementsList.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequirementsList;
