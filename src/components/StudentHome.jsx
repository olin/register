import React from 'react';
import WelcomeMessage from './WelcomeMessage';

// This will be the wrapper for all components of a studen home page
const StudentHome = () => (
  <div>
    <h2>
      StudentHome
    </h2>
    <WelcomeMessage student="Ariana Olson" />
  </div>
);

export default StudentHome;
