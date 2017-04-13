import { connect } from 'react-redux';
import { updateUsername, updatePassword, login } from '../actions/actions';
import LoginLocal from '../components/LoginLocal';

// Connect with Presentational Component
const mapStateToProps = state => ({
  username: state.LoginReducer.username,
  password: state.LoginReducer.password,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { username, password } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    updateUser: (e) => {
      dispatch(updateUsername(e.target.value));
    },
    updatePassword: (e) => {
      dispatch(updatePassword(e.target.value));
    },
    onLogin: (e) => {
      e.preventDefault();
      console.log(username, password);
      dispatch(login(username, password));
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(LoginLocal);

export default LoginContainer;
