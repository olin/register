import React, { Component, PropTypes } from 'react';

export default class ProgressTracker extends Component {
  render() {
    const { genreqs, majorreqs, handleGenreqs, backGenReq, isGenReq, isMajorReq, handleMajorreqs, backMajorReq } = this.props;
    if (this.props.isGenReq) {
      return (
        <div>
          <a onClick={backGenReq} href=""> ← back</a>
        </div>
      );
    } else if (this.props.isMajorReq) {
      return (
        <div>
          <a onClick={backMajorReq} href=""> ← back</a>
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li><a onClick={handleGenreqs} href="">General Requirements</a><p>{genreqs}</p></li>
          <li><a onClick={handleMajorreqs} href="">Major Requirements</a><p>{majorreqs}</p></li>
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
  backGenReq: PropTypes.func.isRequired,
  isGenReq: PropTypes.bool.isRequired,
  isMajorReq: PropTypes.bool.isRequired,
  handleMajorreqs: PropTypes.func.isRequired,
  backMajorReq: PropTypes.func.isRequired,
};
