import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import LoginPage from './LoginPage';
import StudentHome from './StudentHome';
import SettingsPageContainer from '../containers/SettingsPageContainer';
import CoursePlannerContainer from '../containers/CoursePlannerContainer';
import SemesterPlanPage from './SemesterPlanPage';
import LogoutContainer from '../containers/LogoutContainer';

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

const CoursePlanner = () => (
  <div>
    <Header />
    <CoursePlannerContainer />
  </div>
);

const SemesterPlan = () => (
  <div>
    <Header />
    <SemesterPlanPage />
  </div>
);

const NotFound = () => (
  <div>
    <h1>404: Nothing to see here.</h1>
  </div>
);

// the app structure. react-router sends users between pages properly.
const App = ({ loggedIn }) => (
  <Router>
    <div>
      <Switch>
        <Route
          exact path="/"
          component={() => (
            loggedIn ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            )
          )}
        />
        <Route
          path="/settings"
          component={Settings}
        />
        <Route
          path="/plan"
          component={CoursePlanner}
        />
        <Route
          path="/semesterplan"
          component={SemesterPlan}
        />
        <Route
          path="/logout"
          component={LogoutContainer}
        />
        <Route
          path="/login"
          // ternary operator to redirect logged-in users to home page
          component={() => (
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
