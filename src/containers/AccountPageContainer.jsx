import { connect } from 'react-redux';
import { toggleSetting } from '../actions/actions';
import AccountPage from '../components/AccountPage';

// Connect with Presentational Component
const mapStateToProps = state => ({
  settings: state.AccountPageReducer.settings,
});

const mapDispatchToProps = dispatch => ({
  onSettingToggle: (name) => {
    dispatch(toggleSetting(name));
  },
});

const AccountPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountPage);

export default AccountPageContainer;
