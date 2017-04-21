import React, { Component, PropTypes } from 'react';

export default class ProgressTracker extends Component {
  render() {
    const { genreqs, majorreqs, handleGenreqs } = this.props;

    return (
      <div>
        <ul>
          <li><a onClick={handleGenreqs} href="">General Requirements</a><p>{genreqs}</p></li>
          <li><a href="">Major Requirements</a><p>{majorreqs}</p></li>
          <li><a href="">Math/Sci Requirements</a></li>
          <li><a href="">AHS Requirements</a></li>
          <li><a href="">Electives</a></li>
        </ul>
      </div>
    );
  }
}

ProgressTracker.PropTypes = {
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired,
  handleGenreqs: PropTypes.func.isRequired,
};
