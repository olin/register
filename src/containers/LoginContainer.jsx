import { connect } from 'react-redux';
import { updateUsername, updatePassword, login } from '../actions/actions';
import LoginLocal from '../components/LoginLocal';

// Connect with Presentational Component
const mapStateToProps = state => ({
  username: state.Student.username,
  password: state.Student.password,
  loginError: state.Student.loginError,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateUser: (e) => {
    dispatch(updateUsername(e.target.value));
  },
  updatePwd: (e) => {
    dispatch(updatePassword(e.target.value));
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const { username, password, loginError } = stateProps;
  const { dispatch, updateUser, updatePwd } = dispatchProps;

  return {
    username,
    password,
    loginError,
    updateUser,
    updatePwd,
    onLogin: (e) => {
      e.preventDefault();
      dispatch(login(username, password));
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(LoginLocal);

export default LoginContainer;
