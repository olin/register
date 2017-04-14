import React, { PropTypes } from 'react';

const ProgressTracker = ({ genreqs, majorreqs }) => (
  <div>
    <ul>
      <li><a href="#">General Requirements</a><p>{genreqs}</p></li>
      <li><a href="#">Major Requirements</a><p>{majorreqs}</p></li>
      <li><a href="#">Math/Sci Requirements</a></li>
      <li><a href="#">AHS Requirements</a></li>
      <li><a href="#">Electives</a></li>
    </ul>
  </div>
);

ProgressTracker.PropTypes = {
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired,
};

export default ProgressTracker;
