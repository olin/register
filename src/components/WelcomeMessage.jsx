/* This component renders a welcome message to the logged in student.
It does not yet take into account if no one is logged in. */
import React, { PropTypes } from 'react';

const WelcomeMessage = ({ name }) => (
  <div>
    <p>
      Welcome, {name}
    </p>
  </div>
);

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default WelcomeMessage;
