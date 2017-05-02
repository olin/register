// The component that allows students to add courses to their plan of study.
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddCourseDropdown from './AddCourseDropdown';
import UpdatePlanContainer from '../containers/UpdatePlanContainer';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const CoursePlanner = ({ categories, onCourseSelect }) => (
  <Row>
    {/* col attributes resize/reorder for different size screens */}
    <Col sm={3} lg={2}>
      <NavPanel active={2} />
    </Col>
    <Col sm={9} lg={10}>
      <div className={styles.mainbody}>
        <h2>Plan Your Study</h2>
        <hr />
        <ul>
          {categories.map(category =>
            <AddCourseDropdown
              {...category}
              key={category.catId}
              onSelect={e => onCourseSelect(category.catId, e.target.value)}
            />,
          )}
        </ul>
        <UpdatePlanContainer />
      </div>
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
