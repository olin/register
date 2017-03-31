import React from 'react';
import { connect } from 'react-redux';

const SamplePresentationalComponent = () => (
  <div>
    <p>Sub Component</p>
  </div>
);


// Connect with Presentational Component
const SampleContainerComponent = connect()(SamplePresentationalComponent);

export default SampleContainerComponent;
