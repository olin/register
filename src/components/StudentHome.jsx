import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';
import ProgressTrackerContainer from '../containers/ProgressTrackerContainer'

// The wrapper for all components on a student home page
const StudentHome = () => (
  <div>
    <h2>
      Student Home
    </h2>
    <WelcomeMessage student="Ariana Olson" />
    <PlanOfStudy />
    <ProgressTrackerContainer />
  </div>
);

export default StudentHome;
