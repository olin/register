import React, { PropTypes } from 'react';

const ProgressTracker = ({
  genreqs,
  majorreqs,
  mathTotal,
  engrTotal,
  sciTotal,
  ahseTotal,
  handleGenreqs,
  handleMajorreqs,
  handleMathsci,
  handleAhse,
  handleEngr }) => (
    <div>
      <ul>
        <li>
          <a onClick={handleGenreqs} href="">General Requirements</a>
          <p>{genreqs.length}/16 courses</p>
        </li>
        <li>
          <a onClick={handleMajorreqs} href="">Major Requirements</a>
          <p>{majorreqs.length}/7 courses</p>
        </li>
        <li>
          <a onClick={handleMathsci} href="">Math and Science</a>
          <p>{mathTotal + sciTotal}/30 credits</p>
        </li>
        <li>
          <a onClick={handleAhse} href="">AHS and Entrepreneurship</a>
          <p>{ahseTotal}/28 credits</p>
        </li>
        <li>
          <a onClick={handleEngr} href="">Engineering</a>
          <p>{engrTotal}/46 credits</p>
        </li>
      </ul>
    </div>
);

ProgressTracker.propTypes = {
  genreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  majorreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGenreqs: PropTypes.func.isRequired,
  handleMajorreqs: PropTypes.func.isRequired,
  handleMathsci: PropTypes.func.isRequired,
  handleAhse: PropTypes.func.isRequired,
  handleEngr: PropTypes.func.isRequired,
  mathTotal: PropTypes.number.isRequired,
  engrTotal: PropTypes.number.isRequired,
  sciTotal: PropTypes.number.isRequired,
  ahseTotal: PropTypes.number.isRequired,
};

export default ProgressTracker;
