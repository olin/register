import React, { PropTypes } from 'react';

// This component is for displaying a student's plan of study.
// It will have a block of general requirements and a block of 
// major-specific requirements 
const PlanOfStudy = () => (
  <div>
    <p>Plan of Study</p>
    {/* This will contain major and general 
    requirements once those components are made*/}
  </div>
);

WelcomeMessage.propTypes = {
  student: PropTypes.string.isRequired,
};

export default WelcomeMessage;