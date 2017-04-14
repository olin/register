import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
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
    <Header />
    <StudentHome />
  </div>
);

const Settings = () => (
  <div>
    <Header />
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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
