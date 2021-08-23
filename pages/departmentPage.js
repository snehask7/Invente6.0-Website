import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCalendarAlt, FaPhoneAlt, FaRegBuilding, FaUserAlt } from 'react-icons/fa';
import styles from '../styles/DepartmentPage.module.css';
const departmentPage = () => {
  const [state, setState] = useState({});
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.pageHeading}>Department of CSE</h1>
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <Row className={styles.eventsContainer}>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
                <Col>
                  <div className={styles.eventCard}>
                    <p>Devathlon</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <div className={styles.eventDetails}>
                <h1 className={styles.eventHeading}>App-Off</h1><br></br>
                <p className={styles.eventDesc}>A coding competition based purely on Data structures and Algorithms.Participants will contest against each other in a competitive programming style contest.</p>
                <hr></hr>
                <Row>
                  <Col md={3}>
                    <Row className={styles.iconContainer}>
                      <Col className={styles.iconStyling} sm={12} md={12} lg={12}><FaPhoneAlt></FaPhoneAlt>&nbsp;+91-4884898492</Col>
                      <Col className={styles.iconStyling} sm={12} md={12} lg={12}><FaUserAlt></FaUserAlt>&nbsp;2 per team</Col>
                      <Col className={styles.iconStyling} sm={12} md={12} lg={12}><FaCalendarAlt></FaCalendarAlt>&nbsp;Oct 7th, 9:00 AM</Col>
                      <Col className={styles.iconStyling} sm={12} md={12} lg={12}><FaRegBuilding></FaRegBuilding>&nbsp;Any department</Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <div className={styles.roundCard}>
                      Round 1<br></br>Shortlist based on MCQs<br></br>
                    </div>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={4}>
                    <div className={styles.roundCard}>Round 1</div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default departmentPage;
