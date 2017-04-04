import React, { PropTypes } from 'react';

const Setting = ({ onClick, checked, name }) => (
  <li>
    <label htmlFor={name}>{name}
      <input name={name} id={name} type="checkbox" checked={checked} onClick={onClick} />
    </label>
  </li>
);

Setting.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Setting;
