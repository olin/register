import { connect } from 'react-redux';
import { updateNewUsername, updateNewPassword, updateConfirmPassword, register } from '../actions/actions';
import RegisterNewUser from '../components/RegisterNewUser';

const mapStateToProps = state => ({
  username: state.RegisterReducer.username,
  password: state.RegisterReducer.password,
  confirmPassword: state.RegisterReducer.confirmPassword,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { username, password } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    updateNewUsername: (e) => {
      dispatch(updateNewUsername(e.target.value));
    },
    updateNewPassword: (e) => {
      dispatch(updateNewPassword(e.target.value));
    },
    updateConfirmPassword: (e) => {
      dispatch(updateConfirmPassword(e.target.value));
    },
    onRegister: (e) => {
      e.preventDefault();
      dispatch(register(username, password));
    },
  };
};

const RegisterContainer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(RegisterNewUser);

export default RegisterContainer;
