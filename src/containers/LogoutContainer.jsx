import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../actions/actions';

class LogoutContainer extends Component {
  componentWillMount() {
    const { dispatch, history } = this.props;
    dispatch(logout());
    console.log(history);
    history.push('/login');
  }

  render() {
    return null;
  }
}
LogoutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired).isRequired,
};

export default withRouter(connect()(LogoutContainer));
