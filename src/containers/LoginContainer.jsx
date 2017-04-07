import { connect } from 'react-redux';
import { login } from '../actions/actions';
import Login from '../components/Login';

// Connect with Presentational Component
const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (e) => {
  	dispatch(updateUser(e.target.value));
  },
  updatePassword: (e) => {
  	dispatch(updatePassword(e.target.value));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLocal);

export default LoginContainer;