import React, { PropTypes } from 'react';

// This component renders a welcome message to the logged in student.
// It does not yet take into account if no one is logged in
const WelcomeMessage = ({ username }) => (
  <div>
    <p>
      Welcome, {username}
    </p>
  </div>
);

WelcomeMessage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default WelcomeMessage;
