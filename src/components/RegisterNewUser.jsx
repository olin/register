/*
The form that a new user fills out to register a new account.
The user provides their name, an email, a password, and confirms
their password.
*/
import React, { PropTypes } from 'react';
import $ from 'jquery';
import styles from './../../public/stylesheets/register-new-user.css';

const RegisterNewUser = ({
  username,
  password,
  confirmPassword,
  updateNewUsername,
  updateNewPassword,
  updateConfirmPassword,
  onRegister,
}) => (
  <div>
    <form id="register" className="form-signin" onSubmit={onRegister}>
      <h2>Register an account</h2>
      <br />
      <input
        placeholder="Email"
        type="text"
        value={username}
        onChange={updateNewUsername}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={updateNewPassword}
      />
      <br />
      <input
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={updateConfirmPassword}
      />
      <br />
      <button
        type="submit"
        value="Register"
      >Register</button>
    </form>
  </div>
);

RegisterNewUser.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  updateNewUsername: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  updateConfirmPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default RegisterNewUser;

