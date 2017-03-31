import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AccountPageContainer from '../containers/AccountPageContainer';


const Home = () => (
  <div>
    <h1>Register</h1>
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

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>

      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
