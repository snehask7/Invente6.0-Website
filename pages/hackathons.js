import axios from 'axios';
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
        console.log(err);
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
        console.log(profileDetails.data);
      }
    }
    fetchProfile();
  }, [currentUser]);
  return (
    <>
      <div className={styles.container}>
        <NavbarComp />
        <main>
          <div
            className={
              !navbarToggle ? styles.mainContainer : styles.hideMainContainer
            }
          >
            <h1 className={styles.pageHeading}>Hackathon</h1>
            <Row className={styles.wrapper}>
              {/* <Col
                lg={12}
                xl={12}
                md={12}
                sm={12}
                className={styles.eventsContainer}
              >
                <Row>
                  {events.map((event, id) => {
                    return (
                      <Link
                        key={`event${id}`}
                        href={`/department/${department}/${id}`}
                        passHref
                      >
                        <Col>
                          <div
                            className={
                              styles.eventCard +
                              ' ' +
                              (id == parseInt(router.query.id)
                                ? styles.eventSelected
                                : '')
                            }
                          >
                            <span></span>
                            <div className={styles.content}>
                              <div className={styles.content}>
                                <p>{event.name}</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Link>
                    );
                  })}
                </Row>
              </Col> */}
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <p className={styles.headerWrapper}>
                    <span className={styles.eventHeading}>Devathlon</span>
                    {/* <span
                      className={
                        events[id].category == 'tech' ||
                          events[id].category == 'hackathon'
                          ? styles.techbadge
                          : styles.nontechbadge
                      }
                    >
                      {events[id].category == 'tech'
                        ? 'Tech'
                        : events[id].category == 'hackathon'
                          ? 'Hackathon'
                          : 'Non-Tech'}
                    </span> */}
                  </p>
                  <br></br>
                  Deevathlon is a one week long hackathon. The problem statement
                  will be released on 1st of October. The participants get a
                  week’s time to build a solution for the given problem
                  statement. The participants solution will be evaluated during
                  invente and depending on the viability of the product, the
                  product will be considered for piloting and may be funded. The
                  developers of best solutions get the chance to intern and work
                  in world class companies. The detailed description will be
                  released soon.{' '}
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
                      {/* {events[id].prizes.map((prize, id) => {
                        return (
                          <div key={`organiser${id}`}>
                            {id == 0 ? (
                              <>
                                <FaTrophy></FaTrophy>
                                <br></br>
                              </>
                            ) : null}
                            {prize}
                          </div>
                        );
                      })} */}
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
