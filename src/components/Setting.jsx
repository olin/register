// A single requirement rendered as an <li>. SettingsPage contains these.
import React, { PropTypes } from 'react';
import styles from '../../public/stylesheets/setting.css';

const Setting = ({ onChange, checked, name }) => (
  <li className={styles.setting}>
    <input name={name} id={name} type="checkbox" checked={checked} onChange={onChange} />
    <label htmlFor={name} /><h4>{name}</h4>
  </li>
);

Setting.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Setting;
