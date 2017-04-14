import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';


const NavPanel = ({ active }) => (
  <Nav bsStyle="pills" stacked activeKey={active} >
    <NavItem eventKey={1} href="/">Home</NavItem>
    <NavItem eventKey={2} href="#">Create/Edit Plan of Study</NavItem>
    <NavItem eventKey={3} disabled>Other Stuff</NavItem>
  </Nav>
);

NavPanel.propTypes = {
  active: PropTypes.number,
};

NavPanel.defaultProps = {
  active: null,
};

export default NavPanel;
