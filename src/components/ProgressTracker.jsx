import React, { PropTypes } from 'react';

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
  handleGenReqs,
  handleMajorReqs,
  handleMathsci,
  handleAhse,
  handleEngr }) => (
    <div>
      <ul>
        <li>
          <a onClick={handleEngr} href="">Engineering</a>
          <p>{engrTotal}/46 credits</p>
        </li>

        <div className="progress">
          <div className="progress-bar"
            role="progressbar" 
            style={{ width: engrPerc }} />
        </div>

        <li>
          <a onClick={handleMathsci} href="">Math and Science</a>
          <p>{mathTotal + sciTotal}/30 credits</p>
        </li>
        <div className="progress">
          <div className="progress-bar"
            role="progressbar" 
            style={{width: mathSciPerc}}>
            <span className="sr-only">70% Complete</span>
          </div>
        </div>


        <li>
          <a onClick={handleAhse} href="">AHS and Entrepreneurship</a>
          <p>{ahseTotal}/28 credits</p>
        </li>
        <div className="progress">
          <div className="progress-bar"
            role="progressbar" 
            style={{width: ahsePerc}}>
            <span className="sr-only">70% Complete</span>
          </div>
        </div>

        <li>
          <a onClick={handleGenReqs} href="">General Requirements</a>
          <p>{genreqs.length}/16 courses</p>
        </li>
        <li>
          <a onClick={handleMajorReqs} href="">Major Requirements</a>
          <p>{majorreqs.length}/7 courses</p>
        </li>


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
};

export default ProgressTracker;
