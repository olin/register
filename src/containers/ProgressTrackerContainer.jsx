import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { resolvedGetCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	const { dispatch } = this.props
    dispatch(resolvedGetCourses())
  }

  render() {
    return (
      <ProgressTracker />
    );
  }
}
const mapStateToProps = state => ({
  genreqs: state.genreqs,
  majorreqs: state.majorreqs,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
