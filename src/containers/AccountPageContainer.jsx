import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleSetting } from '../actions/actions';
import Setting from '../components/Setting';

const AccountPage = ({ settings, onSettingToggle }) => (
  <ul>
    {settings.map(setting =>
      <Setting
        name={setting.name}
        key={setting.name}
        {...setting}
        onClick={() => onSettingToggle(setting.name)}
      />,
    )}
  </ul>
);

AccountPage.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onSettingToggle: PropTypes.func.isRequired,
};

// Connect with Presentational Component
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSettingToggle: (name) => {
      dispatch(toggleSetting(name));
    },
  };
};

const AccountPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountPage);

export default AccountPageContainer;
