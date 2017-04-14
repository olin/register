import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { getCourses } from '../actions/actions';

const mapStateToProps = state => ({
  genreqs: state.data,
  majorreqs: state.data,
});

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, genreqs, majorreqs } = this.props;
    dispatch(getCourses(genreqs, majorreqs));
  }

  render() {
    return (
      <ProgressTracker />
    );
  }
}

ProgressTrackerContainer.PropTypes = {
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ProgressTrackerContainer);
