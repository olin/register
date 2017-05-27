// A list containing Semester components.
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import SemesterContainer from '../containers/SemesterContainer';
import SemesterReserveContainer from '../containers/SemesterReserveContainer';

const SemesterList = ({ fallSemesters, springSemesters }) => (
  <div>
    <h1>Plan by Semester</h1>
    <ul>
      <Row>
        {/* col attributes resize/reorder for different size screens */}
          <Col sm={4} lg={6}>
          {fallSemesters.map(semester =>
          <SemesterContainer
            key={semester}
            semester={semester} // ownProps will grab this
          />,
        )}
      </Col>
    
      <Col sm={4} lg={6}>
        <hr />
        {springSemesters.map(semester =>
        <SemesterContainer
          key={semester}
          semester={semester} // ownProps will grab this
        />,
      )}
     </Col>
  </Row>

      <SemesterReserveContainer />

    </ul>
  </div>
);

SemesterList.propTypes = {
  semesters: PropTypes.arrayOf(PropTypes.string).isRequired,
  fallSemesters: PropTypes.arrayOf(PropTypes.string).isRequired,
  springSemesters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SemesterList;
