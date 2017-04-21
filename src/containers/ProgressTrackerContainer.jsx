import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { getCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGenreqs = this.handleGenreqs.bind(this);
  }

  componentWillMount() {
    const { dispatch, genreqs, majorreqs } = this.props;
    dispatch(getCourses(genreqs, majorreqs));
  }

  handleGenreqs(e) {
    e.preventDefault();
    console.log('test');
    return (
      <div>
        <p>test</p>
      </div>
    );
  }

  render() {
    const { genreqs, majorreqs } = this.props;
    return (
      <ProgressTracker
        genreqs={genreqs}
        majorreqs={majorreqs}
        handleGenreqs={this.handleGenreqs}
      />
    );
  }
}

ProgressTrackerContainer.PropTypes = {
  handleGenreqs: PropTypes.func.isRequired,
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  genreqs: state.ProgressTrackerReducer.genreqs,
  majorreqs: state.ProgressTrackerReducer.majorreqs,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
