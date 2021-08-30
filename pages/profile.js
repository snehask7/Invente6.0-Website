import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';
import { useAuth } from '../lib/hooks';
import { Col, Container, Row } from 'react-bootstrap';

import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegBuilding,
  FaUniversity,
  FaUserGraduate,
  FaRegCalendarAlt,
  FaTimesCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import NavbarComp from '../components/Navbar';

function Profile() {
  const [profile, setProfile] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setProfile();
      return;
    }
    getProfile();
  }, [currentUser]);

  async function getProfile() {
    const profileRes = {
      fname: 'Murray',
      lname: 'Reeve',
      department: 'CSE',
      college: 'SSNCE',
      regnum: '123455',
      phno: '1234567890',
      email: 'a@b.com',
      events: ['webItOut', 'Sports Quiz', 'Devathlon'],
    };
    console.log(profileRes);
    setProfile(profileRes);
  }
  function renderEvents() {
    return profile.events.map((event, i) => {
      return (
        <li key={i} className={styles.eventCard}>
          {event}

          <FaTimesCircle className={styles.delete}></FaTimesCircle>
          <br></br>
          <span className={styles.tag}>Event</span>
          <span className={styles.verified}>Not paid</span>
        </li>
      );
    });
  }

  return (
    <div className={styles.container}>
      <NavbarComp />
      <div className={styles.card}>
        {profile ? (
          <div>
            <div className={styles.ticket}>
              <p className={styles.eventTitle}>EVENT PASS</p>
              <span className={styles.admit}>
                <FaCheckCircle className={styles.icon_check}></FaCheckCircle>
                Tech
              </span>
              <br></br>
              <span className={styles.admit}>
                <FaTimesCircle className={styles.icon_cross}></FaTimesCircle>
                Non-tech
              </span>
            </div>
            <div className={styles.image}></div>
            <h1 className={styles.name}>
              {profile.fname} {profile.lname}
            </h1>
            <Container className={styles.details}>
              <Row>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegBuilding className={styles.icon}></FaRegBuilding>
                    </span>
                    <p>Computer Science and Engineering</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaUniversity className={styles.icon}></FaUniversity>
                    </span>
                    <p>SSN College of Engineering</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaUserGraduate className={styles.icon}></FaUserGraduate>
                    </span>
                    <p>185001170</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegEnvelope className={styles.icon}></FaRegEnvelope>
                    </span>
                    <p>ssn@ssn.com</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaPhoneAlt className={styles.icon}></FaPhoneAlt>
                    </span>
                    <p>1234567890</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegCalendarAlt
                        className={styles.icon}
                      ></FaRegCalendarAlt>
                    </span>
                    <p>Year 4</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <div>
            <h2 className={styles.error}>You must be signed in. </h2>
          </div>
        )}

        {profile ? (
          <div>
            <hr className={styles.hr_line}></hr>
            <h3 className={styles.name}>REGISTRATIONS</h3>
          </div>
        ) : (
          currentUser && null
        )}

        {profile ? renderEvents() : currentUser && null}
      </div>
    </div>
  );
}

export default Profile;
