import { connect } from 'react-redux';
import SemesterList from '../components/SemesterList';

const shortenYear = (year) => {
  const shortYearNumber = year % 100;
  const shortYearString = shortYearNumber.toString();
  if (shortYearString.length < 2) {
    return '0' + shortYearString;
  }
  return shortYearString;
};

const makeSemesterList = (entryYear) => {
  const semesterList = [];
  for (let i = 0; i < 4; i += 1) {
    semesterList.push('Fall' + shortenYear(entryYear + i));
    semesterList.push('Spring' + shortenYear(entryYear + i + 1));
  }
  return semesterList;
};

const mapStateToProps = state => ({
  semesters: makeSemesterList(state.LoginReducer.entryYear),
});

const SemesterListContainer = connect(
  mapStateToProps,
)(SemesterList);

export default SemesterListContainer;
