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
  FaTrophy,
  FaUserAlt,
} from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles2 from '../styles/Blink.module.scss';
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
              <Row style={{ textAlign: 'center', maxWidth: '500px' }}>
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
                    page to purchase passes for the hackathons you wish to
                    participate in!
                  </p>
                </div>
              </Col>
              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <Row style={{ textAlign: 'right' }}>
                    <Col>
                      <a
                        href="https://business.stayflexi.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* eslint-disable-next-line */}
                        <img
                          src="/sponsors/sf.webp"
                          alt="stayflexi"
                          style={{ width: '15vh' }}
                        />{' '}
                      </a>
                    </Col>
                  </Row>
                  <p className={styles.headerWrapper}>
                    <span
                      className={styles.eventHeading}
                      style={{ marginLeft: '0' }}
                    >
                      Devathlon
                    </span>
                  </p>
                  <div className={styles2.blinkbox} data-aos="zoom-in">
                    <div className={styles2.light}></div>
                    <div className={styles2.blink}>
                      <span>Registrations Closed!</span>
                    </div>
                  </div>
                  <br></br>
                  In this first of its kind cross-department hackathon sponsored
                  by{' '}
                  <a
                    href="https://business.stayflexi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    StayFlexi Inc, USA
                  </a>
                  , we look forward to meeting skilled individuals from domains
                  spread across engineering and technology, business strategy
                  and marketing. <br />
                  <br />
                  Have a game-changing Idea and a Skilled Team?
                  <br />
                  Have a great Team that is looking to actualize any Idea?
                  <br />
                  Have a brilliant Idea but need domain experts?
                  <br />
                  Looking for that right opportunity to put your skills to use?
                  <br />
                  <br />
                  {/* eslint-disable-next-line */}
                  It's all the same here at Devathlon!
                  <br />
                  <br />
                  <b>
                    Come Ideate. Pitch. Develop. Hack your Startup in a Week.
                  </b>
                  <br />
                  <br />
                  <Row>
                    <div className={styles.roundCard}>
                      <b>1st October</b> <hr></hr>
                      <p>
                        The 1st of October will start off with a{' '}
                        <b>1-minute pitch</b> of ideas by teams and individuals.
                        After a first-level of scrutiny, the <b>top 10 ideas</b>{' '}
                        will be published after a <b>voting</b> by the
                        participants.
                        <br />
                        <br />
                        This will be followed by a <b>team formation session</b>
                        . While teams with a selected idea are all set to go,
                        participants entering individually and teams looking for
                        ideas to work on will be allowed to collaborate with
                        already registered like-minded individuals or even join
                        registered teams that are looking to collaborate. While
                        there is{' '}
                        <b>
                          no limit on the team size, participants can maximize
                          their winnings by contesting with a smaller one
                        </b>
                        . Participants must submit their final teams at the end
                        of this session.
                        <br />
                        <br />
                        This will be followed by a <b>
                          team-wise mentorship
                        </b>{' '}
                        session. Teams can interact with a panel of{' '}
                        <b>industry experts and entrepreneurs</b> brought in by
                        Devathlon to devise and refine their work plan for the
                        week to come.
                      </p>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.roundCard}>
                      <b>2nd and 3rd October</b> <hr></hr>
                      <p>
                        Teams will work on formulating a{' '}
                        <b>
                          business model, marketing strategy, organization
                          structure
                        </b>{' '}
                        and developing a <b>proof-of-concept or prototype</b> of
                        their product or service.
                      </p>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.roundCard}>
                      <b>4th October</b> <hr></hr>
                      <p>
                        A <b>new set of mentors</b> will be brought in for teams
                        to personally evaluate their work progress. Teams can
                        further get their business as well as technical models
                        assessed by domain experts, refine their course of
                        action accordingly and imbibe their industrial wisdom.
                      </p>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.roundCard}>
                      <b>5th, 6th and 7th October</b> <hr></hr>
                      <p>
                        Teams will continue to work on the business model and
                        marketing research. They must complete their
                        demonstrable proof of concept by the end of the 7th
                        october.
                      </p>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.roundCard}>
                      <b>8th October</b> <hr></hr>
                      <p>
                        Each team is given an opportunity to make a{' '}
                        <b>15-minute final presentation</b> of their
                        full-fledged idea along with their week’s work and proof
                        of concept to a panel of <b>esteemed judges</b> whom
                        they will be meeting for the first time! Judges will
                        then announce the winning teams.
                      </p>
                    </div>
                  </Row>
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
                    <Row>
                      <div className={styles.roundCard}>
                        Other perks!
                        <hr />
                        In this sponsored event,{' '}
                        <b>
                          individuals may be offered a chance to intern at
                          leading companies and startups
                        </b>
                        . Viable and impressive ideas may even be considered for{' '}
                        <b>piloting and funding</b>.
                      </div>
                    </Row>
                    <Row>
                      <div className={styles.roundCard}>
                        This is a team event and each person in the team must
                        register individually through this website and must also
                        obtain a pass in order to participate.
                      </div>
                    </Row>
                    <div className={styles.col}>
                      {' '}
                      <FaPhoneAlt></FaPhoneAlt>
                      <br></br>
                      Likhitha : 6383688836 <br></br> Nivedhitha : 9445502654
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaUserAlt></FaUserAlt>
                      <br></br>
                      1-5 per team
                    </div>
                    <div className={styles.col}>
                      {' '}
                      <FaCalendarAlt></FaCalendarAlt>
                      <br></br>October 1st-8th
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
                      <button className={styles.registerButton} disabled>
                        Registered
                      </button>
                    ) : (
                      <button className={styles.registerClosed} disabled={true}>
                        Closed
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
