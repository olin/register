/* The form that a user fills out to log in with an existing account.
The user provides their email and password. */
import React, { PropTypes } from 'react';
import { Alert, Glyphicon } from 'react-bootstrap';
import styles from './../../public/stylesheets/login.css';

const LoginLocal = ({ username, password, loginError, updateUser, updatePwd, onLogin }) => (
  <div className={styles.loginblock}>
    <form id="local-login" className="form-signin" onSubmit={onLogin}>
      <h2>Log In to an Existing Account</h2>
      { loginError ?
        <div>
          <Alert className={styles.alert} bsStyle="danger">
            <Glyphicon glyph="exclamation-sign" /> {loginError}!
          </Alert>
          <br />
        </div>
        : null }
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
        onChange={updatePwd}
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
  loginError: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
  updatePwd: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginLocal;
