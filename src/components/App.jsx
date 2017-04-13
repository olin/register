import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import StudentHome from './StudentHome';
import SettingsPageContainer from '../containers/SettingsPageContainer';

const Login = () => (
  <div>
    <LoginPage />
  </div>
);

const Home = () => (
  <div>
    <StudentHome />
  </div>
);

const Settings = () => (
  <div>
    <SettingsPageContainer />
  </div>
);

const NotFound = () => (
  <div>
    <h1>404: Nothing to see here.</h1>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
