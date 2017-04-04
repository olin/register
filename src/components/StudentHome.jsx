import React, { PropTypes } from 'react';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';
// The wrapper for all components on a student home page
const StudentHome = ({ user }) => (
  <div>
    <h2>
      Student Home
    </h2>
    <WelcomeMessage name={user.name} />
    <PlanOfStudy />
  </div>
);

StudentHome.propTypes = {
  user: PropTypes.object.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    olinId: PropTypes.string,
    entryYear: PropTypes.number,
    major: PropTypes.string,
    completedCourses: PropTypes.arrayOf(PropTypes.string),
    plannedCourses: PropTypes.arrayOf(PropTypes.string),
    _id: PropTypes.string,
  }).isRequired,
};

export default StudentHome;
