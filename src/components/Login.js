import React from 'react';
import LoginLocal from './LoginLocal';
import RegisterNewUser from './RegisterNewUser';

const Login = () => {
  return (
    <div className="wrapper">
      <LoginLocal />
      <br />
      <RegisterNewUser />
    </div>
  );
};

export default Login;
