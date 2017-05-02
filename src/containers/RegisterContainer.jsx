import { connect } from 'react-redux';
import { updateRegisterUsername, updateRegisterPassword, register } from '../actions/actions';
import RegisterNewUser from '../components/RegisterNewUser';

const mapStateToProps = state => ({
  username: state.Student.registerUsername,
  password: state.Student.registerPassword,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { username, password } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    updateRegisterUsername: (e) => {
      dispatch(updateRegisterUsername(e.target.value));
    },
    updateRegisterPassword: (e) => {
      dispatch(updateRegisterPassword(e.target.value));
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
