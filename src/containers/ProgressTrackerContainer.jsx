import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { resetReq, updateGenReq, updateMajorReq, updateMathsci, updateAhse, updateEngr, getCourses } from '../actions/actions';

class ProgressTrackerContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGenReqs = this.handleGenReqs.bind(this);
    this.handleMajorReqs = this.handleMajorReqs.bind(this);
    this.handleMathsci = this.handleMathsci.bind(this);
    this.handleAhse = this.handleAhse.bind(this);
    this.handleEngr = this.handleEngr.bind(this);
    this.backReq = this.backReq.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getCourses());
  }

  handleGenReqs(e) {
    const { dispatch, isGenReq } = this.props;
    e.preventDefault();
    dispatch(updateGenReq(isGenReq));
  }

  handleMajorReqs(e) {
    const { dispatch, isMajorReq } = this.props;
    e.preventDefault();
    dispatch(updateMajorReq(isMajorReq));
  }

  handleMathsci(e) {
    const { dispatch, isMathsci } = this.props;
    e.preventDefault();
    dispatch(updateMathsci(isMathsci));
  }

  handleAhse(e) {
    const { dispatch, isAhse } = this.props;
    e.preventDefault();
    dispatch(updateAhse(isAhse));
  }

  handleEngr(e) {
    const { dispatch, isEngr } = this.props;
    e.preventDefault();
    dispatch(updateEngr(isEngr));
  }

  backReq(e) {
    const { dispatch, isGenReq, isMajorReq, isMathsci, isAhse, isEngr } = this.props;
    e.preventDefault();
    dispatch(resetReq(isGenReq, isMajorReq, isMathsci, isAhse, isEngr));
  }

  render() {
    const { genreqs, majorreqs, isGenReq, isMajorReq, isMathsci, isAhse, isEngr,
      mathTotal,
      engrTotal,
      sciTotal,
      ahseTotal,
      mathCourses, engrCourses, sciCourses, ahseCourses } = this.props;
    if (isGenReq) {
      const genreqItems = genreqs.map(req => <li>{req}</li>);
      return (
        <div>
          <a onClick={this.backReq} href=""> ← back</a>
          <p>{genreqs.length}/16 courses</p>
          <ul>{genreqItems}</ul>
        </div>
      );
    } else if (isMajorReq) {
      const majorreqItems = majorreqs.map(req => <li>{req}</li>);
      return (
        <div>
          <a onClick={this.backReq} href=""> ← back</a>
          <p>{majorreqs.length}/7 courses</p>
          <ul>{majorreqItems}</ul>
        </div>
      );
    } else if (isMathsci) {
      const mathvalues = mathCourses.map(a => <li>{a.title}: {a.credits} Math credits</li>);
      const scivalues = sciCourses.map(a => <li>{a.title}: {a.credits} Sci credits</li>);
      return (
        <div>
          <a onClick={this.backReq} href=""> ← back</a>
          <p>{mathTotal + sciTotal}/30 credits</p>
          <ul>{mathvalues}{scivalues}</ul>
        </div>
      );
    } else if (isAhse) {
      const ahsevalues = ahseCourses.map(a => <li>{a.title}: {a.credits} AHSE credits</li>);
      return (
        <div>
          <a onClick={this.backReq} href=""> ← back</a>
          <p>{ahseTotal}/28 credits</p>
          <ul>{ahsevalues}</ul>
        </div>
      );
    } else if (isEngr) {
      const engrvalues = engrCourses.map(a => <li>{a.title}: {a.credits} Engr credits</li>);
      return (
        <div>
          <a onClick={this.backReq} href=""> ← back</a>
          <p>{engrTotal}/46 credits</p>
          <ul>{engrvalues}</ul>
        </div>
      );
    }
    return (
      <ProgressTracker
        genreqs={genreqs}
        majorreqs={majorreqs}
        mathTotal={mathTotal}
        engrTotal={engrTotal}
        sciTotal={sciTotal}
        ahseTotal={ahseTotal}
        handleGenReqs={this.handleGenReqs}
        handleMajorReqs={this.handleMajorReqs}
        handleMathsci={this.handleMathsci}
        handleAhse={this.handleAhse}
        handleEngr={this.handleEngr}
      />
    );
  }
}

ProgressTrackerContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  genreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  majorreqs: PropTypes.arrayOf(PropTypes.string).isRequired,
  isGenReq: PropTypes.bool.isRequired,
  isMajorReq: PropTypes.bool.isRequired,
  isMathsci: PropTypes.bool.isRequired,
  isAhse: PropTypes.bool.isRequired,
  isEngr: PropTypes.bool.isRequired,
  mathTotal: PropTypes.number.isRequired,
  engrTotal: PropTypes.number.isRequired,
  sciTotal: PropTypes.number.isRequired,
  ahseTotal: PropTypes.number.isRequired,
  mathCourses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  engrCourses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  sciCourses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  ahseCourses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = state => ({
  genreqs: state.ProgressTrackerReducer.genreqs,
  majorreqs: state.ProgressTrackerReducer.majorreqs,
  mathCourses: state.ProgressTrackerReducer.mathCourses,
  engrCourses: state.ProgressTrackerReducer.engrCourses,
  sciCourses: state.ProgressTrackerReducer.sciCourses,
  ahseCourses: state.ProgressTrackerReducer.ahseCourses,
  mathTotal: state.ProgressTrackerReducer.mathTotal,
  engrTotal: state.ProgressTrackerReducer.engrTotal,
  sciTotal: state.ProgressTrackerReducer.sciTotal,
  ahseTotal: state.ProgressTrackerReducer.ahseTotal,
  isGenReq: state.ReqsReducer.isGenReq,
  isMajorReq: state.ReqsReducer.isMajorReq,
  isMathsci: state.ReqsReducer.isMathsci,
  isAhse: state.ReqsReducer.isAhse,
  isEngr: state.ReqsReducer.isEngr,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
