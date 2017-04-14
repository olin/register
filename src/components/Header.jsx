import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

const Header = () => (
  <Navbar bsStyle="inverse" staticTop fluid >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Register.js</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/settings"><Glyphicon glyph="cog" /></NavItem>
        <NavItem eventKey={2} href="#"><Glyphicon glyph="log-out" /></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
