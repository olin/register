import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { getCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, genreqs, majorreqs } = this.props;
    dispatch(getCourses(genreqs, majorreqs));
  }

  render() {
    const { genreqs, majorreqs } = this.props;
    return (
      <ProgressTracker gen = { genreqs }
      major = { majorreqs } />
    );
  }
}

ProgressTrackerContainer.PropTypes = {
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  genreqs: state.genreqs,
  majorreqs: state.majorreqs,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
