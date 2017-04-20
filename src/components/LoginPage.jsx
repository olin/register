import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

const LoginPage = () =>
  <div className="wrapper">
    <LoginContainer />
    <br />
    <RegisterContainer />
  </div>;

export default LoginPage;
