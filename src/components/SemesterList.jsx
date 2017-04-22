import React from 'react';
import SemesterContainer from '../containers/SemesterContainer';

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const SemesterList = () => (
  <div>
    <h1>Plan by Semester</h1>
    <ul>
      {nums.map(num =>
        <SemesterContainer
          key={'semester' + num.toString()}
          num={num} // ownProps will grab this
        />,
      )}
    </ul>
  </div>
);

export default SemesterList;
