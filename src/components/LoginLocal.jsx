import React, { PropTypes } from 'react';

const LoginLocal = ({ username, password, updateNewUser, updatePassword }) => (
  <div>
    <form id="local-login" className="form-signin">
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
  updatePassword: PropTypes.func.isRequired,
};

export default LoginLocal;
