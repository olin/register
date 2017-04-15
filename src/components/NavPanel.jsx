import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import styles from './../../public/stylesheets/nav.css';


const NavPanel = ({ active }) => (
  <div className={styles.navpanel}>
    <Nav bsStyle="pills" stacked activeKey={active} >
      <NavItem eventKey={1} className={styles.item} >Home</NavItem>
      <NavItem eventKey={2} className={styles.item} href="#">Create/Edit Plan of Study</NavItem>
      <NavItem eventKey={3} className={styles.item} disabled>Other Stuff</NavItem>
    </Nav>
  </div>
);

NavPanel.propTypes = {
  active: PropTypes.number,
};

NavPanel.defaultProps = {
  active: null,
};

export default NavPanel;
