import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../actions/actions';

class LogoutPage extends Component {

  componentWillMount() {
    // persistStore(store, config, callback).purge()
    this.props.dispatch(logout);
  }

  render() {
    return null;
  }
}
LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(withRouter(LogoutPage));
