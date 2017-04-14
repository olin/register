import React, { PropTypes } from 'react';

const RegisterNewUser = ({
  username,
  password,
  updateNewUsername,
  updateNewPassword,
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
  updateNewUsername: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default RegisterNewUser;
