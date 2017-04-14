import React, { PropTypes } from 'react';
import { Alert, Glyphicon } from 'react-bootstrap';

const Note = ({ text }) => (
  <Alert bsStyle="danger">
    <Glyphicon glyph="exclamation-sign" /> {text}
  </Alert>
);

Note.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Note;
