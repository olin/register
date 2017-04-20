import { connect } from 'react-redux';
import App from '../components/App';

// Connect with Presentational Component
const mapStateToProps = state => ({
  loggedIn: state.LoginReducer.loggedIn,
});

const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;
