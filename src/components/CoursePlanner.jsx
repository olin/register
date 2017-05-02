import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddCourseDropdown from './AddCourseDropdown';
import SelectedCourse from './SelectedCourse';
import SearchFieldContainer from '../containers/SearchFieldContainer';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const CoursePlanner = ({ categories, otherCourses, onCourseSelect, onCourseRemove }) => (
  <Row>
    <Col sm={3} lg={2}>
      <NavPanel active={2} />
    </Col>
    <Col sm={9} lg={10}>
      <div className={styles.mainbody}>
        <h2>Edit Your Plan of Study</h2>
        <hr />
        <h4>Specific Requirements</h4>
        <ul>
          {categories.map(category =>
            <AddCourseDropdown
              {...category}
              key={category.catId}
              onSelect={e => onCourseSelect(category.catId, e.target.value)}
            />,
          )}
        </ul>
        <hr />
        <h4>Other Courses</h4>
        <ul>
          {otherCourses.map(course =>
            <SelectedCourse
              {...course}
              key={course.registrarId}
              onDelete={() => onCourseRemove(course.registrarId)}
            />,
          )}
        </ul>
        <h4>Search All Courses</h4>
        <SearchFieldContainer />
      </div>
    </Col>
  </Row>
);

CoursePlanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    catId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
      registrarId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    selected: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  otherCourses: PropTypes.arrayOf(PropTypes.shape({
    registrarId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onCourseSelect: PropTypes.func.isRequired,
  onCourseRemove: PropTypes.func.isRequired,
};

export default CoursePlanner;
