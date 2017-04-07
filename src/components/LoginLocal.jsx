import React, { PropTypes } from 'react';

const LoginLocal = ({ username, password, updateUser, updatePassword }) => (
  <div>
    <form id="local-login" classname="form-signin">
      <h2>Login with email and password</h2>
      <input
        placeholder="Email"
        type="text"
        value={username}
        onChange={updateNewUser}
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
  updateNewUser: PropTypes.func.isRequired,
  updatePassword: propTypes.func.isRequired,
};

export default LoginLocal;