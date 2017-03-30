import React, { PropTypes } from 'react';
import GeneralRequirement from './GeneralRequirement';

// A list containing all of the general requirements a
// student needs to graduate
const GeneralRequirementsList = ({ requirements }) => (
  <ul>
    {requirements.map(req =>
      <GeneralRequirement
        key={req.toString()}
        requirement={req}
      />
    )}
  </ul>
);

GeneralRequirementsList.propTypes = {
  requirements: PropTypes.array.isRequired,
};

export default GeneralRequirementsList;
