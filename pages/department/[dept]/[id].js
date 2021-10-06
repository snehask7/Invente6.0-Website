import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaRegBuilding,
  FaRegClock,
  FaTrophy,
  FaUserAlt,
} from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import Footer from '../../../components/Footer';
import NavbarComp from '../../../components/Navbar';
import data from '../../../data.json';
import { useAuth } from '../../../lib/hooks';
import { useNav } from '../../../lib/navbarstate';
import styles from '../../../styles/DepartmentPage.module.css';

export default function Department({ data }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  var department = router.query.dept;
  var id = parseInt(router.query.id);
  var events = data;
  const [profile, setProfile] = useState();
  const { navbarToggle, toggleNavbar } = useNav();
  const [disableReg, setDisableReg] = useState(true);

  async function register(id) {
    if (profile?.username) {
      let toastId;
      toastId = toast.loading('Registering..');
      setDisableReg(true);
      axios({
        baseURL: window.location.origin,
        method: 'POST',
        url: '/api/register',
        data: {
          username: profile.username,
          eventid: events[id].eventid,
        },
      })
        .then((res) => {
          toast.dismiss(toastId);
          toast.success(
            'Registered Successfully! Make sure to get your pass to complete the registration!'
          );
          router.push('/profile');
          setDisableReg(false);
        })
        .catch((err) => {
          toast.dismiss(toastId);
          toast.error('Unable register. Please try again later.');
          setDisableReg(false);
        });
    } else {
      toast.error('Please refresh the page');
    }
  }
  async function getProfile() {
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
    setDisableReg(false);
  }, [currentUser]);
  return (
    <React.Fragment>
      <Head>
        <title>{department}</title>
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
            <Row>
              <Col style={{ textAlign: 'center' }}>
                <h1 className={styles.pageHeading}>
                  <u>
                    Department of {department}
                    {department == 'Chemical' ||
                    department == 'Mechanical' ||
                    department == 'Civil'
                      ? ' Engineering'
                      : ' '}
                  </u>
                </h1>
              </Col>
            </Row>
            {department == 'CSE' ? (
              <Row style={{ justifyContent: 'center' }}>
                <Col
                  xs="6"
                  md="2"
                  lg="1"
                  style={{ textAlign: 'center', marginTop: '-0.5vw' }}
                >
                  <a
                    href="https://facilio.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/facilio.webp"
                      alt="facilio"
                      width="90vw"
                    />{' '}
                  </a>
                </Col>
                <Col
                  xs="6"
                  md="2"
                  lg="1"
                  style={{ textAlign: 'center', alignItems: 'flex-end' }}
                >
                  <a
                    href="https://www.saama.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/saama.png"
                      alt="saama"
                      width="100vw"
                    />{' '}
                  </a>
                </Col>
              </Row>
            ) : null}

            <Row className={styles.wrapper}>
              <Col
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
              </Col>
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
                    page to purchase passes for the event categories you wish to
                    participate in! Only after you get a pass, the registration
                    becomes valid and you will receive further details about the
                    event.
                  </p>
                </div>
              </Col>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  {department === 'CSE' && id == 0 ? (
                    <Row className={styles.motorqLogo}>
                      <Col>
                        <a
                          href="https://motorq.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* eslint-disable-next-line */}
                            <img
                            src="/sponsors/motorq.png"
                            alt="stayflexi"
                            style={{ width: '18vh' }}
                          />{' '}
                        </a>
                      </Col>
                    </Row>
                  ) : null}

                  <div className={styles.eventHeader}>
                    <p className={styles.headerWrapper}>
                      <span className={styles.eventHeading}>
                        {events[id].name}
                      </span>
                      <span
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
                      </span>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      className={styles.prizesvg}
                    >
                      <defs>
                        <filter id="gooey">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="5"
                            result="blur"
                          />
                          <feColorMatrix
                            in="blur"
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="highContrastGraphic"
                          />
                          <feComposite
                            in="SourceGraphic"
                            in2="highContrastGraphic"
                            operator="atop"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className={styles.gooey_button}>
                    <span className={styles.prizes_text}>
                      Prizes Worth {events[id].prizepool}
                    </span>

                    <span className={styles.bubbles}>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                      <span className={styles.bubble}></span>
                    </span>
                  </div>
                  <br></br>
                  {events[id].description.summary ? (
                    <>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: events[id].description.summary,
                        }}
                        className={styles.eventDesc}
                      ></p>
                    </>
                  ) : null}
                  {events[id].description.rounds == 0 ? <hr></hr> : null}
                  {events[id].description.round_description.map((round, id) => {
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
                  })}
                  {events[id].max_team_size != 1 &&
                  events[id].eventid != '69' ? (
                    <Row>
                      <div className={styles.roundCard}>
                        This is a team event and each person in the team must
                        register individually through this website and must also
                        obtain a pass in order to participate.
                      </div>
                    </Row>
                  ) : null}
                  {events[id].eventid == '69' ? (
                    <Row>
                      <div className={styles.roundCard}>
                        This is a team event and any 2 out of 5 people in the
                        team must register individually through this website and
                        must also obtain a pass in order to participate.
                      </div>
                    </Row>
                  ) : null}
                  <div className={styles.row}>
                    <div className={styles.col}>
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
                    </div>
                    <div className={styles.col}>
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
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>
                      {events[id].date}
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaRegBuilding></FaRegBuilding>
                      <br></br>Open to{' '}
                      {events[id].open_to == 'All'
                        ? 'any Department'
                        : events[id].open_to.join()}
                      <br />{' '}
                      {events[id].category == 'tech' && events[id].ssn == false
                        ? 'Not open to SSNites'
                        : ''}
                    </div>
                    <div className={styles.col}>
                      {' '}
                      {events[id].prizes.map((prize, id) => {
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
                      })}
                    </div>
                  </div>
                  <div className={styles.buttonWrapper}>
                    {profile && profile.events.includes(events[id].eventid) ? (
                      <button className={styles.registeredButton} disabled>
                        Registered
                      </button>
                    ) : (
                      <>
                        <button
                          className={styles.registerButton}
                          disabled={disableReg}
                          onClick={() => {
                            currentUser
                              ? currentUser.emailVerified
                                ? register(id)
                                : router.push('/unverified')
                              : router.push('/signin');
                          }}
                        >
                          Register
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export function getStaticPaths() {
  let paths = [];

  data['ECE'].map((event, i) =>
    paths.push({ params: { dept: 'ECE', id: i.toString() } })
  );
  data['BME'].map((event, i) =>
    paths.push({ params: { dept: 'BME', id: i.toString() } })
  );
  data['EEE'].map((event, i) =>
    paths.push({ params: { dept: 'EEE', id: i.toString() } })
  );
  data['IT'].map((event, i) =>
    paths.push({ params: { dept: 'IT', id: i.toString() } })
  );
  data['CSE'].map((event, i) =>
    paths.push({ params: { dept: 'CSE', id: i.toString() } })
  );
  data['Chemical'].map((event, i) =>
    paths.push({ params: { dept: 'Chemical', id: i.toString() } })
  );
  data['Civil'].map((event, i) =>
    paths.push({ params: { dept: 'Civil', id: i.toString() } })
  );
  data['Mechanical'].map((event, i) =>
    paths.push({ params: { dept: 'Mechanical', id: i.toString() } })
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { dept } = context.params;
  const res = data[dept];
  return {
    props: {
      data: res,
    },
  };
}
