import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddCourseDropdown from './AddCourseDropdown';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const CoursePlanner = ({ categories, onCourseSelect }) => (
  <Row>
    <Col sm={3} lg={2}>
      <NavPanel active={2} />
    </Col>
    <Col sm={9} lg={10}>
      <ul className={styles.mainbody}>
        <h2>Plan Your Study</h2>
        <hr />
        {categories.map(category =>
          <AddCourseDropdown
            {...category}
            key={category.catId}
            onSelect={e => onCourseSelect(category.catId, e.target.value)}
          />,
        )}
      </ul>
    </Col>
  </Row>
);

CoursePlanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    catId: PropTypes.string.isRequired,
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
