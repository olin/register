import React, { PropTypes } from 'react';

const RegisterNewUser = ({
  username,
  password,
  confirmPassword,
  updateNewUser,
  updateNewPassword,
  updateConfirmPassword,
}) => (
  <div>
    <form id="register" className="form-signin">
      <h2>Register an account</h2>
      <br />
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
        onChange={updateNewPassword}
      />
      <br />
      <input
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={updateConfirmPassword}
      />
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
  updateNewUser: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  updateConfirmPassword: PropTypes.func.isRequired,
};

export default RegisterNewUser;
