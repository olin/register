import { connect } from 'react-redux';
import StudentHome from '../components/StudentHome';

// Connect with Presentational Component
const mapStateToProps = state => ({
  user: state.user,
});

const StudentHomeContainer = connect(
  mapStateToProps,
)(StudentHome);

export default StudentHomeContainer;