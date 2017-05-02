import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProgressTracker from '../components/ProgressTracker';
import { resetReq, updateGenReq, updateMajorReq, updateMathsci, updateAhse, updateEngr, getCourses } from '../actions/actions';
import styles from '../../public/stylesheets/progress-tracker.css';

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
    const { genreqs,
      majorreqs,
      isGenReq,
      isMajorReq,
      isMathsci,
      isAhse,
      isEngr,
      mathTotal,
      engrTotal,
      sciTotal,
      ahseTotal,
      engrPercent,
      ahsePercent,
      mathSciPercent,
      genreqsPercent,
      majorreqsPercent,
      mathCourses,
      engrCourses,
      sciCourses,
      ahseCourses,
    } = this.props;

    if (isGenReq) {
      const genreqItems = genreqs.map(req => <li>{req}</li>);
      return (
        <div className={styles.trackerComponent}>
          <a onClick={this.backReq} href=""> ← back</a>
          <p className={styles.progressRatio}>{genreqs.length}/16 courses</p>
          <ul className={styles.classList}>{genreqItems}</ul>
        </div>
      );
    } else if (isMajorReq) {
      const majorreqItems = majorreqs.map(req => <li>{req}</li>);
      return (
        <div className={styles.trackerComponent}>
          <a onClick={this.backReq} href=""> ← back</a>
          <p className={styles.progressRatio}>{majorreqs.length}/7 courses</p>
          <ul className={styles.classList}>{majorreqItems}</ul>
        </div>
      );
    } else if (isMathsci) {
      const mathvalues = mathCourses.map(a => <li>{a.title}: {a.credits} Math credits</li>);
      const scivalues = sciCourses.map(a => <li>{a.title}: {a.credits} Sci credits</li>);
      return (
        <div className={styles.trackerComponent}>
          <a onClick={this.backReq} href=""> ← back</a>
          <p className={styles.progressRatio}>{mathTotal + sciTotal}/30 credits</p>
          <ul className={styles.classList}>{mathvalues}{scivalues}</ul>
        </div>
      );
    } else if (isAhse) {
      const ahsevalues = ahseCourses.map(a => <li>{a.title}: {a.credits} AHSE credits</li>);
      return (
        <div className={styles.trackerComponent}>
          <a onClick={this.backReq} href=""> ← back</a>
          <p className={styles.progressRatio}>{ahseTotal}/28 credits</p>
          <ul className={styles.classList}>{ahsevalues}</ul>
        </div>
      );
    } else if (isEngr) {
      const engrvalues = engrCourses.map(a => <li>{a.title}: {a.credits} Engr credits</li>);
      return (
        <div className={styles.trackerComponent}>
          <a onClick={this.backReq} href=""> ← back</a>
          <p className={styles.progressRatio}>{engrTotal}/46 credits</p>
          <ul className={styles.classList}>{engrvalues}</ul>
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
        engrPercent={engrPercent}
        ahsePercent={ahsePercent}
        mathSciPercent={mathSciPercent}
        genreqsPercent={genreqsPercent}
        majorreqsPercent={majorreqsPercent}
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
  engrPercent: PropTypes.string.isRequired,
  ahsePercent: PropTypes.string.isRequired,
  mathSciPercent: PropTypes.string.isRequired,
  genreqsPercent: PropTypes.string.isRequired,
  majorreqsPercent: PropTypes.string.isRequired,
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
  genreqs: state.Progress.completedGeneralRequirements.courses,
  majorreqs: state.Progress.completedMajorRequirements.courses,
  mathCourses: state.Progress.mathSciCourses.mathCourses,
  engrCourses: state.Progress.engrCourses.courses,
  sciCourses: state.Progress.mathSciCourses.sciCourses,
  ahseCourses: state.Progress.ahseCourses.courses,
  mathTotal: state.Progress.mathSciCourses.mathTotal,
  engrTotal: state.Progress.engrCourses.creditTotal,
  sciTotal: state.Progress.mathSciCourses.sciTotal,
  ahseTotal: state.Progress.ahseCourses.creditTotal,
  engrPercent: state.Progress.engrCourses.percentString,
  ahsePercent: state.Progress.ahseCourses.percentString,
  mathSciPercent: state.Progress.mathSciCourses.percentString,
  genreqsPercent: state.Progress.completedGeneralRequirements.percentString,
  majorreqsPercent: state.Progress.completedMajorRequirements.percentString,
  isGenReq: state.Progress.progressFilter.isGenReq,
  isMajorReq: state.Progress.progressFilter.isMajorReq,
  isMathsci: state.Progress.progressFilter.isMathSci,
  isAhse: state.Progress.progressFilter.isAhse,
  isEngr: state.Progress.progressFilter.isEngr,
});

export default connect(mapStateToProps)(ProgressTrackerContainer);
