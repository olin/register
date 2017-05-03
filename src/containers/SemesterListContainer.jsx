import { connect } from 'react-redux';
import SemesterList from '../components/SemesterList';

const shortenYear = (year) => {
  const yearString = year.toString();
  return yearString.slice(2);
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
  semesters: makeSemesterList(state.Student.entryYear),
});

const SemesterListContainer = connect(
  mapStateToProps,
)(SemesterList);

export default SemesterListContainer;
