// A list containing Requirement components, divided into general and major.
import React, { PropTypes } from 'react';
import Requirement from './Requirement';

const RequirementsList = ({ generalRequirements, majorRequirements }) => (
  <div>
    <p>Plan of Study</p>
    <p>General Requirements</p>
    <ul>
      {generalRequirements.map(req =>
        <Requirement
          key={req.toString()}
          requirement={req}
        />,
      )}
    </ul>
    <p>Major Requirements</p>
    <ul>
      {majorRequirements.map(req =>
        <Requirement
          key={req.toString()}
          requirement={req}
        />,
      )}
    </ul>
  </div>
);

RequirementsList.propTypes = {
  generalRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  majorRequirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RequirementsList;
