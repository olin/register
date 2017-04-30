import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import LoginPage from './LoginPage';
import StudentHomeContainer from '../containers/StudentHomeContainer';
import SettingsPageContainer from '../containers/SettingsPageContainer';
import CoursePlannerContainer from '../containers/CoursePlannerContainer';
import ProgressTrackerContainer from '../containers/ProgressTrackerContainer';
import SemesterPlanPage from './SemesterPlanPage';


const Login = () => (
  <div>
    <LoginPage />
  </div>
);

const Home = () => (
  <div>
    <Header />
    <StudentHomeContainer />
    <ProgressTrackerContainer />
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
          path="/plan"
          component={CoursePlanner}
        />
        <Route
          path="/semesterplan"
          component={SemesterPlan}
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
