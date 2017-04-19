import React, { PropTypes } from 'react';
import styles from '../../public/stylesheets/setting.css';

const Setting = ({ onClick, checked, name }) => (
  <li className={styles.setting}>
    <input name={name} id={name} type="checkbox" checked={checked} onClick={onClick} />
    <label htmlFor={name} /><h4>{name}</h4>
  </li>
);

Setting.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Setting;
