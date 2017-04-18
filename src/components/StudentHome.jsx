import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WelcomeMessage from './WelcomeMessage';
import PlanOfStudy from './PlanOfStudy';
import NavPanel from './NavPanel';
import Note from './Note';
import styles from '../../public/stylesheets/pages.css';

// The wrapper for all components on a student home page
const StudentHome = () => (
  <Row>
    {/* Col attributes resize/reorder for different size screens */}
    <Col sm={3} lg={2}>
      <NavPanel active={1} />
    </Col>
    <Col sm={3} smPush={6} lg={2} lgPush={8}>
      <ul>
        <Note text="do yer course plan" />
      </ul>
    </Col>
    <Col sm={6} smPull={3} lg={8} lgPull={2} className={styles.mainbody}>
      <h2>
        Student Home
      </h2>
      <WelcomeMessage student="Ariana Olson" />
      <PlanOfStudy />
    </Col>
  </Row>
);

export default StudentHome;
