import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import {
  FaCalendarAlt,
  FaRegBuilding,
  FaTrophy,
  FaUserAlt,
} from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/DepartmentPage.module.css';

export default function Department({ data }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  var department = router.query.dept;
  var id = parseInt(router.query.id);
  var events = data;
  const [profile, setProfile] = useState();
  const { navbarToggle, toggleNavbar } = useNav();

  async function register(id) {
    axios({
      baseURL: window.location.origin,
      method: 'POST',
      url: '/api/register',
      data: {
        username: profile.username,
        eventid: '80',
      },
    })
      .then(() => {
        toast.success('Registered Successfully');
      })
      .catch((err) => {
        toast.error('Unable register. Please try again later.');
      });
  }

  useEffect(() => {
    async function fetchProfile() {
      if (currentUser?.emailVerified) {
        const userDetails = await axios.get('/api/username', {
          params: { uid: currentUser.uid },
        });
        const profileDetails = await axios.get('/api/user', {
          params: { username: userDetails.data.username },
        });
        setProfile(profileDetails.data);
      }
    }
    fetchProfile();
  }, [currentUser]);
  return (
    <>
      <Head>
        <title>Hackathons</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <NavbarComp />
        <main>
          <div
            className={
              !navbarToggle ? styles.mainContainer : styles.hideMainContainer
            }
          >
            <h1 className={styles.pageHeading}>Hackathons</h1>
            <Row className={styles.wrapper}>
              <Row style={{ width: '50%' }}>
                <Col>
                  <a href="/department/ECE/0">
                    <div className={styles.eventCard}>
                      <span></span>
                      <div className={styles.content}>
                        <div className={styles.content}>
                          <p>Hackinfinity</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col>
                  <a href="/department/BME/4">
                    <div className={styles.eventCard}>
                      <span></span>
                      <div className={styles.content}>
                        <div className={styles.content}>
                          <p>Biomedicathon</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span className={styles.eventHeading}>Devathlon</span>
                  </p>
                  <br></br>
                  Devathlon is a one week long hackathon. The problem statement
                  will be released on 1st of October. The participants get a
                  week to build a solution for the given problem statement. The
                  solution will be evaluated during Invente and depending on the
                  viability of the product, the solution will be considered for
                  piloting and may be funded. The developers of best solutions
                  get the chance to intern and work in world class companies.
                  The detailed description will be released soon. <br />
                  <br />
                  <hr />
                  <div className={styles.row}>
                    {/* <div className={styles.col}>
                      {events[id].organisers.map((organiser, id) => {
                        return (
                          <div key={`organiser${id}`}>
                            {id == 0 ? (
                              <>
                                <FaPhoneAlt></FaPhoneAlt>
                                <br></br>
                              </>
                            ) : null}
                            {organiser.name + ' : ' + organiser.phone}
                          </div>
                        );
                      })}
                    </div> */}
                    <div className={styles.col}>
                      {' '}
                      <FaUserAlt></FaUserAlt>
                      <br></br>
                      1-4 per team
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>Problem Statement release: October 1st<br></br>
                      1st Review: October 4th
                      <br />
                      Judging: October 8th
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaRegBuilding></FaRegBuilding>
                      <br></br>Open to any Department{' '}
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaTrophy></FaTrophy>
                      <br></br>
                      Winner - Rs.15000
                      <br />
                      1st Runner - Rs.10000
                      <br />
                      2nd Runner - Rs.5000
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    {profile && profile.events.includes('80') ? (
                      <button className={styles.registeredButton} disabled>
                        Registered
                      </button>
                    ) : (
                      <button
                        className={styles.registerButton}
                        onClick={() => {
                          currentUser
                            ? currentUser.emailVerified
                              ? register('80')
                              : router.push('/unverified')
                            : router.push('/signin');
                        }}
                      >
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
