import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../../public/stylesheets/header.css';

const Header = () => (
  <div className={styles.header}>
    <Navbar bsStyle="inverse" staticTop fluid >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Register.js</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/settings">
            <NavItem eventKey={1}><Glyphicon glyph="cog" /></NavItem>
          </LinkContainer>
          <LinkContainer to="/logout">
            <NavItem eventKey={2}><Glyphicon glyph="log-out" /></NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
