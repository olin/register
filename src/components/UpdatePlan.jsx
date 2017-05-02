import React, { PropTypes } from 'react';

const UpdatePlan = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    Save
  </button>
);

UpdatePlan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UpdatePlan;
