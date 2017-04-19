import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Setting from './Setting';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const SettingsPage = ({ settings, onSettingToggle }) => (
  <Row>
    <Col sm={3} lg={2}>
      <NavPanel />
    </Col>
    <Col sm={9} lg={10}>
      <ul className={styles.mainbody}>
        {settings.map(setting =>
          <Setting
            name={setting.name}
            key={setting.name}
            {...setting}
            onClick={() => onSettingToggle(setting.name)}
          />,
        )}
      </ul>
    </Col>
  </Row>
);

SettingsPage.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onSettingToggle: PropTypes.func.isRequired,
};

export default SettingsPage;
