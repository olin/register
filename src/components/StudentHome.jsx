import React from 'react';
import { Row, Col, Alert, Glyphicon } from 'react-bootstrap';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';
import NavPanel from './NavPanel';

// The wrapper for all components on a student home page
const StudentHome = () => (
  <Row>
    <Col sm={3} lg={2}>
      <NavPanel active={1} />
    </Col>
    <Col sm={3} smPush={6} lg={2} lgPush={8}>
      <Alert bsStyle="danger">
        <Glyphicon glyph="exclamation-sign" />  do yer course plan
      </Alert>
    </Col>
    <Col sm={6} smPull={3} lg={8} lgPull={2}>
      <h2>
        Student Home
      </h2>
      <WelcomeMessage student="Ariana Olson" />
      <PlanOfStudy />
    </Col>
  </Row>
);

export default StudentHome;
