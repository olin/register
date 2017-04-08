import { connect } from 'react-redux';
import { updateNewUsername, updateNewPassword, updateConfirmPassword } from '../actions/actions'
import RegisterNewUser from '../components/RegisterNewUser';

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  confirmPassword: state.confirmPassword,
});

const mapDispatchToProps = dispatch => ({
  updateNewUsername: (e) => {
    dispatch(updateNewUsername(e.target.value));
  },
  updateNewPassword: (e) => {
    dispatch(updateNewPassword(e.target.value));
  },
  updateConfirmPassword: (e) => {
    dispatch(updateConfirmPassword(e.target.value));
  },
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterNewUser);

export default RegisterNewUser;
