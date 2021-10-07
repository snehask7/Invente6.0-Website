import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
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
        eventid: id,
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
    <body>
      <div className={styles.container}>
        <Head>
          <title>Workshops</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavbarComp />
        <main>
          <div
            className={
              !navbarToggle ? styles.mainContainer : styles.hideMainContainer
            }
          >
            <h1 className={styles.pageHeading}>Workshops</h1>
            <Col lg={12} xl={12} md={12} sm={12}>
              <div className={styles.passDetails}>
                <p
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Head over to the
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: 'cyan',
                    }}
                  >
                    <Link href={'/passes'}> Passes </Link>
                  </span>
                  page to purchase passes for the workshops you wish to attend!
                </p>
              </div>
            </Col>
            <Row className={styles.wrapper}>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span
                      className={styles.eventHeading}
                      style={{ marginLeft: '0' }}
                    >
                      AI/ML Workshop
                    </span>
                  </p>
                  <br></br>Have you ever wondered how Youtube, Netflix and
                  Spotify have just the right suggestions for you? Have you been
                  awestruck by the way Google Photos can organize your memories?
                  Well thanks to Artificial Intelligence and Machine Learning,
                  our devices have become much more smarter and efficient! In
                  this workshop, you will have an opportunity to learn about the
                  basics and roots behind such a radical technological bloom.
                  <br />
                  <br />
                  Here’s what the speakers have in store for you!
                  <br />
                  <br />
                  <ul>
                    <li>Industry X.0</li>
                    <li>Machine Learning foundations for beginners</li>
                    <li>Traditional method of statistics </li>
                    <li>Recent trends in Analytics and Machine Learning </li>
                    <li>
                      About powerful tools R and Python which transformed the ML
                      journey and accessibility{' '}
                    </li>
                    <li>Choosing your specifics on your ML journey </li>
                    <li>Breaking the Myth of the ML complications</li>
                    <li>Importance of Data</li>
                    <li>The latest ML automations</li>
                  </ul>
                  <Row>
                    <Col style={{ textAlign: 'center' }}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.poster}
                        src="/aiml1.png"
                        alt="CMTI"
                        style={{
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: '1em',
                        }}
                      />{' '}
                    </Col>
                  </Row>
                  {/* {events[id].description.summary ? (
                    <>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: events[id].description.summary,
                        }}
                        className={styles.eventDesc}
                      ></p>
                    </>
                  ) : null} */}
                  {/* {events[id].description.rounds == 0 ? <hr></hr> : null} */}
                  {/* {events[id].description.round_description.map((round, id) => {
                    return (
                      <Row key={`round${id}`}>
                        <div className={styles.roundCard}>
                          <b> {round.name}</b>{' '}
                          {round.duration ? (
                            <>
                              &nbsp;<FaRegClock></FaRegClock>&nbsp;
                              {round.duration}
                            </>
                          ) : null}
                          <hr></hr>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: round.description,
                            }}
                          ></p>
                        </div>
                      </Row>
                    );
                  })} */}
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <div key={`organiser${id}`}>
                        <FaPhoneAlt></FaPhoneAlt>
                        <br></br>
                        Aishwarya : 7338935634
                        <br />B Vignesh : 9841114252
                      </div>
                    </div>

                    <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>Oct 9th, 9.30 AM - 11.30 AM
                    </div>
                    {/* <div className={styles.col}>
                      {' '}
                      <FaRegBuilding></FaRegBuilding>
                      <br></br>Open to any Department{' '}
                    </div> */}
                  </div>
                  <div className={styles.buttonWrapper}>
                    {profile && profile.events.includes('90') ? (
                      <button className={styles.registeredButton} disabled>
                        Registered
                      </button>
                    ) : (
                      <button
                        className={styles.registerButton}
                        onClick={() => {
                          currentUser
                            ? currentUser.emailVerified
                              ? register('90')
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
        <Footer></Footer>
      </div>
    </body>
  );
}
