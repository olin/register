import React, { PropTypes } from 'react';
import Setting from './Setting';

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

export default AccountPage;
