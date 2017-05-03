// A list containing Semester components.
import React, { PropTypes } from 'react';
import SemesterContainer from '../containers/SemesterContainer';
import SemesterReserveContainer from '../containers/SemesterReserveContainer';

const SemesterList = ({ semesters }) => (
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
  </div>
);

SemesterList.propTypes = {
  semesters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SemesterList;
