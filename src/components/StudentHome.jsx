import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';

// This will be the wrapper for all components of a studen home page
const StudentHome = () => (
  <div>
    <h2>
      Student Home
    </h2>
    <WelcomeMessage student="Ariana Olson" />
    <PlanOfStudy />
  </div>
);

export default StudentHome;
