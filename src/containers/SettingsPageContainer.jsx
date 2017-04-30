import { connect } from 'react-redux';
import { toggleSetting } from '../actions/actions';
import SettingsPage from '../components/SettingsPage';

// Connect with Presentational Component
const mapStateToProps = state => ({
  settings: state.SettingsPageReducer.settings,
});

const mapDispatchToProps = dispatch => ({
  onSettingToggle: (name) => {
    dispatch(toggleSetting(name));
  },
});

const SettingsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage);

export default SettingsPageContainer;
