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

const makeFallSemesterList = (entryYear) => {
  const fallSemesterList = [];
  for (let i = 0; i < 4; i += 1) {
    fallSemesterList.push('Fall' + shortenYear(entryYear + i));
  }
  return fallSemesterList;
};

const makeSpringSemesterList = (entryYear) => {
  const springSemesterList = [];
  for (let i = 0; i < 4; i += 1) {
    springSemesterList.push('Spring' + shortenYear(entryYear + i + 1));
  }
  return springSemesterList;
};

const mapStateToProps = state => ({
  semesters: makeSemesterList(state.Student.entryYear),
  fallSemesters: makeFallSemesterList(state.Student.entryYear),
  springSemesters: makeSpringSemesterList(state.Student.entryYear),
});

const SemesterListContainer = connect(
  mapStateToProps,
)(SemesterList);

export default SemesterListContainer;
