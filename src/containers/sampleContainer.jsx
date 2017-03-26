import React from 'react';
import { connect } from 'react-redux';

let SampleContainerComponent = ({ dispatch }) => {
  return (
    <div>
      <p>Sub Component</p>
    </div>
  )
};

// Connect with Presentational Component
SampleContainerComponent = connect()(SampleContainerComponent);

export default SampleContainerComponent;
