import React, { PropTypes } from 'react';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';
// The wrapper for all components on a student home page
const StudentHome = ({ username }) => (
  <div>
    <h2>
      Student Home
    </h2>
    <WelcomeMessage username={username} />
    <PlanOfStudy />
  </div>
);

StudentHome.propTypes = {
  username: PropTypes.string.isRequired,
};

export default StudentHome;
