import React, { Component, PropTypes } from 'react';

export default class ProgressTracker extends Component {
  render() {
    const { genreqs, majorreqs, handleGenreqs, handleMajorreqs, backReq, isGenReq, isMajorReq } = this.props;
    if (this.props.isGenReq) {
      return (
        <div>
          <a onClick={backReq} href=""> ← back</a>
        </div>
      );
    } else if (this.props.isMajorReq) {
      return (
        <div>
          <a onClick={backReq} href=""> ← back</a>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li><a onClick={handleGenreqs} href="">General Requirements</a><p>{genreqs}/16 courses</p></li>
          <li><a onClick={handleMajorreqs} href="">Major Requirements</a><p>{majorreqs}/7 courses</p></li>
          <li><a href="">Math/Sci Requirements</a></li>
          <li><a href="">AHS Requirements</a></li>
          <li><a href="">Electives</a></li>
        </ul>
      </div>
    );
  }
}

ProgressTracker.propTypes = {
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired,
  handleGenreqs: PropTypes.func.isRequired,
  handleMajorreqs: PropTypes.func.isRequired,
  backReq: PropTypes.func.isRequired,
  isGenReq: PropTypes.bool.isRequired,
  isMajorReq: PropTypes.bool.isRequired,
};
