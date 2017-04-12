import { connect } from 'react-redux';
import { updateNewUsername, updateNewPassword, updateConfirmPassword, register } from '../actions/actions';
import RegisterNewUser from '../components/RegisterNewUser';

const mapStateToProps = state => ({
  username: state.RegisterReducer.username,
  password: state.RegisterReducer.password,
  confirmPassword: state.RegisterReducer.confirmPassword,
});

// const mapDispatchToProps = dispatch => ({
//   updateNewUsername: (e) => {
//     dispatch(updateNewUsername(e.target.value));
//   },
//   updateNewPassword: (e) => {
//     dispatch(updateNewPassword(e.target.value));
//   },
//   updateConfirmPassword: (e) => {
//     dispatch(updateConfirmPassword(e.target.value));
//   },
// });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { username, password, confirmPassword } = stateProps;
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
      console.log(username, password, 'register');
      dispatch(register(username, password));
    },
  };

}

const RegisterContainer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(RegisterNewUser);

export default RegisterContainer;
