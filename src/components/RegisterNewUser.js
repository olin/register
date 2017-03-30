/*
The form that a new user fills out to register a new account. 
The user provides their name, a username, a password, and confirms 
their password.
*/
import React from 'react';

// component for registering as a new user
export default class RegisterNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      passwordMatch: false,
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.matchPasswords = this.matchPasswords.bind(this);
    this.register = this.register.bind(this);
  }
  // updates current state to value of username field
  updateUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  // updates current state to value of password field
  updatePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  // updates current state to value of confirm password field
  // and determines whether or not the passwords match
  matchPasswords(event) {
    this.setState({
      confirmPassword: event.target.value,
    });
    if (event.target.value === this.state.password) {
      this.setState({
        passwordMatch: true,
      });
    } else {
      this.setState({
        passwordMatch: false,
      });
    }
  }
  register(event) {
    // if a password is provided and correctly verified
    // the new user account information is sent to the user
    // database and the account is created
    event.preventDefault();
    if (this.state.passwordMatch === false) {
      alert('Passwords do not match, please try again');
    } else if (this.state.username === '') {
      alert('A username must be provided');
    } else {
      const formData = {
        username: this.state.username,
        password: this.state.password,
      };

      $.post('/register', formData)
        .done(function (data) {
        })
        .error(function (err, status) {
          console.error(err, status);
        });
    }
  }
  render() {
    return (
      <div>
        <form id="register" onSubmit={this.register}>
          <h2 >Register an account</h2>
          <br />
          <input
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.updateUsername}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <br />
          <input
            placeholder="Confirm Password"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.matchPasswords}
          />
          <br />
          <button
            type="submit"
            value="Register"
          >Register</button>
        </form>
      </div>
    );
  }
}
