import React, { PropTypes } from 'react';
import styles from '../../public/stylesheets/progress-tracker.css';

const ProgressTracker = ({
  genreqs,
  majorreqs,
  mathTotal,
  engrTotal,
  sciTotal,
  ahseTotal,
  mathSciPerc,
  engrPerc,
  ahsePerc,
  genReqsPerc,
  majorReqsPerc,
  handleGenReqs,
  handleMajorReqs,
  handleMathsci,
  handleAhse,
  handleEngr }) => (
    <div className={styles.trackerComponent}>
      <ul>
        <li>
          <a onClick={handleEngr} href="">Engineering Credits</a>
          <p>{engrTotal}/46 credits</p>
        </li>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: engrPerc }}
          >
            <span className="sr-only">Percent Complete</span>
          </div>
        </div>


        <li>
          <a onClick={handleMathsci} href="">Math and Science Credits</a>
          <p>{mathTotal + sciTotal}/30 credits</p>
        </li>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: mathSciPerc }}
          >
            <span className="sr-only">Percent Complete</span>
          </div>
        </div>

        <li>
          <a onClick={handleAhse} href="">AHS and Entrepreneurship Credits</a>
          <p>{ahseTotal}/28 credits</p>
        </li>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: ahsePerc }}
          >
            <span className="sr-only">Percent Complete</span>
          </div>
        </div>

        <li>
          <a onClick={handleGenReqs} href="">General Course Requirements</a>
          <p>{genreqs.length}/16 courses</p>
        </li>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: genReqsPerc }}
          >
            <span className="sr-only">Percent Complete</span>
          </div>
        </div>


        <li>
          <a onClick={handleMajorReqs} href="">Major Course Requirements</a>
          <p>{majorreqs.length}/7 courses</p>
        </li>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: majorReqsPerc }}
          >
            <span className="sr-only">Percent Complete</span>
          </div>
        </div>


      </ul>
    </div>
);

ProgressTracker.propTypes = {
  genreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  majorreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGenReqs: PropTypes.func.isRequired,
  handleMajorReqs: PropTypes.func.isRequired,
  handleMathsci: PropTypes.func.isRequired,
  handleAhse: PropTypes.func.isRequired,
  handleEngr: PropTypes.func.isRequired,
  mathTotal: PropTypes.number.isRequired,
  engrTotal: PropTypes.number.isRequired,
  sciTotal: PropTypes.number.isRequired,
  ahseTotal: PropTypes.number.isRequired,
  mathSciPerc: PropTypes.string.isRequired,
  engrPerc: PropTypes.string.isRequired,
  ahsePerc: PropTypes.string.isRequired,
  genReqsPerc: PropTypes.string.isRequired,
  majorReqsPerc: PropTypes.string.isRequired,
};

export default ProgressTracker;
