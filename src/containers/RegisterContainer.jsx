import { connect } from 'react-redux';
import { updateRegisterUsername, updateRegisterPassword, register } from '../actions/actions';
import RegisterNewUser from '../components/RegisterNewUser';

const mapStateToProps = state => ({
  username: state.Student.registerUsername,
  password: state.Student.registerPassword,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateRegisterUser: (e) => {
    dispatch(updateRegisterUsername(e.target.value));
  },
  updateRegisterPwd: (e) => {
    dispatch(updateRegisterPassword(e.target.value));
  },
});

const mergeProps = (stateProps, dispatchProps) => {
  const { username, password } = stateProps;
  const { dispatch, updateRegisterUser, updateRegisterPwd } = dispatchProps;

  return {
    username,
    password,
    updateRegisterUser,
    updateRegisterPwd,
    onRegister: (e) => {
      e.preventDefault();
      dispatch(register(username, password));
    },
  };
};

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(RegisterNewUser);

export default RegisterContainer;
