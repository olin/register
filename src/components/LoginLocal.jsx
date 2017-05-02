/* The form that a user fills out to log in with an existing account.
The user provides their email and password. */
import React, { PropTypes } from 'react';
import styles from './../../public/stylesheets/login.css';

const LoginLocal = ({ username, password, updateUser, updatePassword, onLogin }) => (
  <div className={styles.loginblock}>
    <form id="local-login" className="form-signin" onSubmit={onLogin}>
      <h2>Log In to an Existing Account</h2>
      <input
        placeholder="Email"
        type="text"
        value={username}
        onChange={updateUser}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={updatePassword}
      />
      <br />
      <button
        type="submit"
        value="Login"
      >
      Login
      </button>
    </form>
  </div>
);

LoginLocal.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginLocal;
