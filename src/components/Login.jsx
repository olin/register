import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import RegisterNewUser from './RegisterNewUser';

const Login = () =>
  <div className="wrapper">
    <LoginContainer />
    <br />
    <RegisterNewUser />
  </div>;

export default Login;
