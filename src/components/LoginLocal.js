import React from 'react';

export default class LoginLocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.updateNewUser = this.updateNewUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);
  }
  updateNewUser(e) {
    this.setState({
      email: e.target.value,
    });
  }
  updatePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  login(e) {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    $.post('/login', formData)
      .error((err, status) => {
        console.error(status);
      });
  }
  render() {
    return(
      <div>
        <form id="local-login" onSubmit={this.login} className="form-signin">
          <h2>Login with email and password</h2>
          <input
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.updateNewUser}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.updatePassword}
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
  }
}
