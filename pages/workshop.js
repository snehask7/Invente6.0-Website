import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
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
    <>
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
            <Row className={styles.wrapper}>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span className={styles.eventHeading}>AI/ML Workshop</span>
                  </p>
                  <br></br>A 3 hour workshop exploring the recent technical
                  advancements in the field of AI/ML conducted by the best
                  people in the industry. The speakers and agenda of the
                  workshop will be revealed soon!!
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

                    {/* <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>Oct 8, 9:00 AM
                    </div> */}
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
              <Col lg={12} xl={12} md={12} sm={12} style={{ marginTop: '2em' }}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span className={styles.eventHeading}>Civil Workshop</span>
                  </p>
                  <br></br>
                  <p>
                    Invente in collaboration with a famous construction company
                    is set to organize a 3 hour workshop which will present an
                    opportunity to learn from the professionals with years of
                    experience in technology and management in the field of
                    civil engineering.The speakers and the agenda of the
                    workshop will be revealed soon so stay tuned!
                  </p>{' '}
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
                    {/* <div className={styles.col}>
                      {' '}
                      <FaUserAlt></FaUserAlt>
                      <br></br>
                      {events[id].min_team_size == events[id].max_team_size
                        ? events[id].min_team_size + ' '
                        : events[id].min_team_size +
                        ' - ' +
                        events[id].max_team_size +
                        ' '}
                      per team
                    </div> */}
                    {/* <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>Oct 8, 9: 00 AM
                    </div> */}
                    <div className={styles.col}>
                      {' '}
                      {/* <FaRegBuilding></FaRegBuilding>
                      <br></br>Open to any Department{' '} */}
                      {/* {events[id].open_to == 'All'
                        ? 'any Department'
                        : events[id].open_to.join()} */}
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    {profile && profile.events.includes('91') ? (
                      <button className={styles.registeredButton} disabled>
                        Registered
                      </button>
                    ) : (
                      <button
                        className={styles.registerButton}
                        onClick={() => {
                          currentUser
                            ? currentUser.emailVerified
                              ? register('91')
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
    </>
  );
}
