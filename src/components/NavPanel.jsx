// A panel that allows the user to navigate around with react-router.
import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import styles from './../../public/stylesheets/navpanel.css';

const NavPanel = ({ active }) => (
  <div className={styles.navpanel}>
    <Nav className={styles.pills} stacked activeKey={active} >
      <IndexLinkContainer to="/">
        <NavItem eventKey={1} className={styles.item}>Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/plan">
        <NavItem eventKey={2} className={styles.item}>Create/Edit Plan of Study</NavItem>
      </LinkContainer>
      <LinkContainer to="#">
        <NavItem eventKey={3} className={styles.item} disabled>Other Stuff</NavItem>
      </LinkContainer>
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
