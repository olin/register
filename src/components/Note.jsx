import React, { PropTypes } from 'react';
import { Alert, Glyphicon } from 'react-bootstrap';
import styles from '../../public/stylesheets/note.css';

const Note = ({ text }) => (
  <li className={styles.note}>
    <Alert bsStyle="danger">
      <Glyphicon glyph="exclamation-sign" /> {text}
    </Alert>
  </li>
);

Note.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Note;
