import React from 'react';
import $ from 'jquery';
import styles from './../../public/stylesheets/login-local.css';

export default class LoginLocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.updateNewUser = this.updateNewUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);
  }
  updateNewUser(e) {
    this.setState({
      username: e.target.value,
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
      username: this.state.username,
      password: this.state.password,
    };
    $.post('/login', formData)
      .fail((err, status) => {
        console.error(status);
      });
  }
  render() {
    return (
      <div className={styles.loginblock}>
        <form id="local-login" onSubmit={this.login} className="form-signin">
          <h2>Login</h2>
          <input
            placeholder="Email"
            type="text"
            value={this.state.username}
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
