import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import LoginPage from './LoginPage';
import StudentHomeContainer from '../containers/StudentHomeContainer';
import SettingsPageContainer from '../containers/SettingsPageContainer';

const Login = () => (
  <div>
    <LoginPage />
  </div>
);

const Home = () => (
  <div>
    <Header />
    <StudentHomeContainer />
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

const App = ({ loggedIn }) => (
  <Router>
    <div>
      <Switch>
        <Route
          exact path="/"
          render={Home}
        />
        <Route
          path="/settings"
          component={Settings}
        />
        <Route
          path="/login"
          render={() => (
            loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default App;
