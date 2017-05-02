// The page that holds the semester list.
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SemesterListContainer from '../containers/SemesterListContainer';
import NavPanel from './NavPanel';
import styles from '../../public/stylesheets/pages.css';

const SemesterPlanPage = () => (
  <Row>
    {/* col attributes resize/reorder for different size screens */}
    <Col sm={3} lg={2}>
      <NavPanel />
    </Col>
    <Col sm={9} lg={10}>
      <ul className={styles.mainbody}>
        <SemesterListContainer />
      </ul>
    </Col>
  </Row>
);

export default SemesterPlanPage;
