import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import StudentHome from './StudentHome';
import AccountPageContainer from '../containers/AccountPageContainer';
import Planner from './Planner';
import LoginPage from './LoginPage';


const Home = () => (
  <div>
    <StudentHome />
  </div>
);

const Login = () => (
  <div>
    <LoginPage />
  </div>
);

const Account = () => (
  <div>
    <AccountPageContainer />
  </div>
);

const Plan = () => (
  <div>
    <Planner />
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
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/planner">Create Plan of Study</Link></li>
      </ul>

      <hr />
      <Switch>
        <Route
          exact path="/"
          render={() => (
            !loggedIn ? (
              <Redirect to="/login" />
            ) : (
              <Home />
            )
          )}
        />
        <Route
          path="/account"
          render={() => (
            !loggedIn ? (
              <Redirect to="/login" />
            ) : (
              <Account />
            )
          )}
        />
        <Route
          path="/planner"
          render={() => (
            !loggedIn ? (
              <Redirect to="/login" />
            ) : (
              <Plan />
            )
          )}
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
