/*
The form that a new user fills out to register a new account.
The user provides their name, an email, a password, and confirms
their password.
*/
import React, { PropTypes } from 'react';
import styles from './../../public/stylesheets/register-new-user.css';

const RegisterNewUser = ({
  username,
  password,
  updateRegisterUsername,
  updateRegisterPassword,
  onRegister,
}) => (
  <div className={styles.registerblock}>
    <form id="register" className="form-signin" onSubmit={onRegister}>
      <h2>Register an account</h2>
      <br />
      <input
        placeholder="Email"
        type="text"
        value={username}
        onChange={updateRegisterUsername}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={updateRegisterPassword}
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
  updateRegisterUsername: PropTypes.func.isRequired,
  updateRegisterPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default RegisterNewUser;

