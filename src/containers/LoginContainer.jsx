import { connect } from 'react-redux';
import { updateUsername, updatePassword, toggleLoggedIn } from '../actions/actions';
import LoginLocal from '../components/LoginLocal';

// Connect with Presentational Component
const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (e) => {
    dispatch(updateUsername(e.target.value));
  },
  updatePassword: (e) => {
    dispatch(updatePassword(e.target.value));
  },
  onLogin: (data) => {
    dispatch(onLogin(data));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginLocal);

export default LoginContainer;
