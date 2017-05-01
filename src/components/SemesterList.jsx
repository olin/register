import React, { PropTypes } from 'react';
import SemesterContainer from '../containers/SemesterContainer';
import SemesterReserveContainer from '../containers/SemesterReserveContainer';

const SemesterList = ({ semesters, onSavePlan }) => (
  <div>
    <h1>Plan by Semester</h1>
    <ul>
      <hr />
      {semesters.map(semester =>
        <SemesterContainer
          key={semester}
          semester={semester} // ownProps will grab this
        />,
      )}
      <SemesterReserveContainer />
    </ul>
    <form onSubmit={onSavePlan}>
      <button type="submit" value="UpdatePlan">
        Save Plan of Study
      </button>
    </form>
  </div>
);

SemesterList.propTypes = {
  semesters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSavePlan: PropTypes.func.isRequired,
};

export default SemesterList;
