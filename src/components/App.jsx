import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import StudentHome from './StudentHome';
import Login from '../components/Login';



const Home = () => (
  <div>
    <StudentHome />
  </div>
);

const Account = () => (
  <div>
    <AccountPageContainer />
  </div>
);

const NotFound = () => (
  <div>
    <h1>404: Nothing to see here.</h1>
  </div>
);

const LoginPage = () => (
  <div>
    <Login />
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
