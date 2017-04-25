import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { resetReq, updateGenReq, updateMajorReq, getCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGenreqs = this.handleGenreqs.bind(this);
    this.handleMajorreqs = this.handleMajorreqs.bind(this);
    this.backReq = this.backReq.bind(this);
  }

  componentWillMount() {
    const { dispatch, genreqs, majorreqs } = this.props;
    dispatch(getCourses(genreqs, majorreqs));
  }

  handleGenreqs(e) {
    const { dispatch, isGenReq } = this.props;
    e.preventDefault();
    dispatch(updateGenReq(isGenReq));
  }

  handleMajorreqs(e) {
    const { dispatch, isMajorReq } = this.props;
    e.preventDefault();
    dispatch(updateMajorReq(isMajorReq));
  }

  backReq(e) {
    const { dispatch, isGenReq, isMajorReq } = this.props;
    e.preventDefault();
    dispatch(resetReq(isGenReq));
  }

  render() {
    const { genreqs, majorreqs, isGenReq, isMajorReq } = this.props;
    return (
      <ProgressTracker
        genreqs={genreqs}
        majorreqs={majorreqs}
        handleGenreqs={this.handleGenreqs}
        handleMajorreqs={this.handleMajorreqs}
        backReq={this.backReq}
        isGenReq={isGenReq}
        isMajorReq={isMajorReq}
      />
    );
  }
}

ProgressTrackerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  genreqs: PropTypes.string.isRequired,
  majorreqs: PropTypes.string.isRequired,
  isGenReq: PropTypes.bool.isRequired,
  isMajorReq: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  genreqs: state.ProgressTrackerReducer.genreqs,
  majorreqs: state.ProgressTrackerReducer.majorreqs,
  isGenReq: state.ReqsReducer.isGenReq,
  isMajorReq: state.ReqsReducer.isMajorReq,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
