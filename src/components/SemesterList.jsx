import React from 'react';
import SemesterContainer from '../containers/SemesterContainer';

const SemesterList = () => (
  <div>
    <ul>
      {() => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8];
        return nums.map(num =>
          <SemesterContainer
            key={'semester' + num.toString()}
            num={num} // ownProps will grab this
          />,
        );
      }}
    </ul>
  </div>
);

export default SemesterList;
