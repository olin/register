import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { resetMajorReq, updateMajorReq, resetGenReq, updateGenReq, getCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGenreqs = this.handleGenreqs.bind(this);
    this.backGenReq = this.backGenReq.bind(this);
    this.handleMajorreqs = this.handleMajorreqs.bind(this);
    this.backMajorReq = this.backMajorReq.bind(this);
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

  backGenReq(e) {
    const { dispatch, isGenReq } = this.props;
    e.preventDefault();
    dispatch(resetGenReq(isGenReq));
  }

  handleMajorreqs(e) {
    const { dispatch, isMajorReq } = this.props;
    e.preventDefault();
    dispatch(updateMajorReq(isMajorReq));
  }

  backMajorReq(e) {
    const { dispatch, isMajorReq } = this.props;
    e.preventDefault();
    dispatch(resetMajorReq(isMajorReq));
  }

  render() {
    const { genreqs, majorreqs, isGenReq, isMajorReq } = this.props;
    return (
      <ProgressTracker
        genreqs={genreqs}
        majorreqs={majorreqs}
        handleGenreqs={this.handleGenreqs}
        backGenReq={this.backGenReq}
        isGenReq={isGenReq}
        isMajorReq={isMajorReq}
        handleMajorreqs={this.handleMajorreqs}
        backMajorReq={this.backMajorReq}
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
  isGenReq: state.GenReqsReducer.isGenReq,
  isMajorReq: state.MajorReqsReducer.isMajorReq,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
