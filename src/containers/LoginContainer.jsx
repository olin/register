import { connect } from 'react-redux';
import { updatePassword, updateUsername } from '../actions/actions';
import LoginLocal from '../components/LoginLocal';

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  updateNewUser: (e) => {
    dispatch(updateUsername(e.target.value));
  },
  updatePassword: (e) => {
    dispatch(updatePassword(e.target.value));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginLocal);

export default LoginContainer;
