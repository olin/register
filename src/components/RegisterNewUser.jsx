/* The form that a new user fills out to register a new account.
The user provides their name, an email, and a password. */
import React, { PropTypes } from 'react';
import styles from './../../public/stylesheets/login.css';
import Note from './Note';

const RegisterNewUser = ({
  username,
  password,
  updateRegisterUser,
  updateRegisterPwd,
  onRegister,
}) => (
  <div className={styles.registerblock}>
    <form id="register" className="form-signin" onSubmit={onRegister}>
      <h2>Register a New Account</h2>
      {/* registerError ? <Note text={registerError} /> : null */}
      <input
        placeholder="Email"
        type="text"
        value={username}
        onChange={updateRegisterUser}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={updateRegisterPwd}
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
  updateRegisterUser: PropTypes.func.isRequired,
  updateRegisterPwd: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default RegisterNewUser;
