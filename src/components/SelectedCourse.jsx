import React, { PropTypes } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';
import styles from '../../public/stylesheets/selected-course.css';

const SelectedCourse = ({ courseCode, title, onDelete }) => (
  <li>
    <Panel id={courseCode} className={styles.course}>
      {title}
      <button onClick={onDelete} className={styles.quitbutton}>
        <Glyphicon glyph="remove" />
      </button>
    </Panel>
  </li>
);

SelectedCourse.propTypes = {
  courseCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SelectedCourse;
