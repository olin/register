import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddCourseDropdown from './AddCourseDropdown';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const CoursePlanner = ({ requirements, onCourseSelect }) => (
  <Row>
    <Col sm={3} lg={2}>
      <NavPanel />
    </Col>
    <Col sm={9} lg={10}>
      <ul className={styles.mainbody}>
        {requirements.map(requirement =>
          <AddCourseDropdown
            {...requirement}
            key={requirement.id}
            onSelect={() => onCourseSelect(requirement.id)}
          />,
        )}
      </ul>
    </Col>
  </Row>
);

CoursePlanner.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      courseId: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    selected: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onCourseSelect: PropTypes.func.isRequired,
};

export default CoursePlanner;
