import React, { PropTypes } from 'react';
import MajorRequirement from './MajorRequirement';

// A list containing all of the Major requirements a
// student needs to graduate
const MajorRequirementsList = ({ requirements }) => (
  <ul>
    {requirements.map(req =>
      <MajorRequirement
        key={req.toString()}
        requirement={req}
      />,
    )}
  </ul>
);

MajorRequirementsList.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MajorRequirementsList;
