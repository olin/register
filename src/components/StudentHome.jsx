// The home page for logged-in students.
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import WelcomeMessageContainer from '../containers/WelcomeMessageContainer';
import ProgressTrackerContainer from '../containers/ProgressTrackerContainer';
import NavPanel from './NavPanel';
import Note from './Note';
import styles from '../../public/stylesheets/pages.css';

const StudentHome = () => (
  <Row>
    {/* col attributes resize/reorder for different size screens */}
    <Col sm={3} lg={2}>
      <NavPanel active={1} />
    </Col>
    <Col sm={3} smPush={6} lg={2} lgPush={8}>
      <ul>
        <Note text="You haven't finished your plan of study! A draft is due November 4." />
      </ul>
    </Col>
    <Col sm={6} smPull={3} lg={8} lgPull={2} className={styles.mainbody}>
      <h2>
        Student Home
      </h2>
      <WelcomeMessageContainer />
      <ProgressTrackerContainer />
    </Col>
  </Row>
);

export default StudentHome;
