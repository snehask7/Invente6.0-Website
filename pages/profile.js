import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaRegBuilding,
  FaRegCalendarAlt,
  FaRegEnvelope,
  FaTimesCircle,
  FaUniversity,
  FaUserGraduate,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import eventsInfo from '../eventsInfo.json';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Profile.module.css';

function Profile() {
  const [profile, setProfile] = useState();
  const [pass, setPass] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();
  const { navbarToggle, toggleNavbar } = useNav();
  const passNames = {
    bmeHack: 'Biomedicathon',
    cseHack: 'Devathlon',
    eceHack: 'Hackinfinity',
    nonTech: 'Non-Tech',
    tech: 'Tech',
    wsCentral: 'AI/ML Workshop',
    wsCivil: 'Civil Workshop',
  };
  useEffect(() => {
    async function getProfile() {
      const userDetails = await axios.get('/api/username', {
        params: { uid: currentUser.uid },
      });
      if (userDetails?.data?.username) {
        const profileDetails = await axios.get('/api/user', {
          params: { username: userDetails.data.username },
        });
        if (profileDetails?.data) {
          setProfile(profileDetails.data);
          if (profileDetails.data.paid) {
            var count = 0;

            Object.keys(profileDetails.data.paid).forEach((pass, id) => {
              if (profileDetails.data.paid[pass] == true) {
                count += 1;
              }
            });
            if (count == 0) setPass(false);
            else setPass(true);
          }
        } else {
          toast.error('Could not fetch profile');
          router.push('/');
        }
      } else {
        toast.error('Could not fetch profile');
        router.push('/');
      }
    }
    if (currentUser?.emailVerified) {
      getProfile();
    } else {
      if (currentUser) router.push('/unverified');
      else router.push('/');
    }
  }, [currentUser, router]);

  function renderEvents() {
    return profile.events.map((event, i) => {
      return (
        <div key={i} className={styles.event_card}>
          <div className={styles.event}>
            <div className={styles.event_title}>
              {eventsInfo[event].category == 'tech'
                ? 'Tech Event '
                : eventsInfo[event].category == 'non-tech'
                ? 'Non-tech Event '
                : eventsInfo[event].category == 'centralWorkshop' ||
                  eventsInfo[event].category == 'civilWorkshop'
                ? 'Workshop '
                : 'Hackathon '}
              - {eventsInfo[event].department} <br></br>
              {eventsInfo[event].category == 'tech' ? (
                profile.paid && profile.paid.tech == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'non-tech' ? (
                profile.paid && profile.paid.nonTech == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'centralWorkshop' ? (
                profile.paid && profile.paid.wsCentral == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'civilWorkshop' ? (
                profile.paid && profile.paid.wsCivil == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'cseHack' ? (
                profile.paid && profile.paid.cseHack == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'bmeHack' ? (
                profile.paid && profile.paid.bmeHack == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
              {eventsInfo[event].category == 'eceHack' ? (
                profile.paid && profile.paid.eceHack == true ? (
                  <>
                    <span className={styles.title}>
                      <FaCheckCircle className={styles.payIcon}></FaCheckCircle>
                    </span>
                    {'Paid'}
                  </>
                ) : (
                  <>
                    <span className={styles.title}>
                      <FaTimesCircle className={styles.payIcon}></FaTimesCircle>
                    </span>
                    {'Not Paid'}
                  </>
                )
              ) : null}
            </div>
            <div className={styles.plan_description}>
              <span>{eventsInfo[event].name}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarComp />
      <div className={!navbarToggle ? styles.card : styles.hideCard}>
        {profile ? (
          <div>
            <div className={styles.image}>
              <Image
                className={styles.image}
                src={currentUser?.photoURL}
                width={130}
                height={130}
                alt={profile.username}
              ></Image>
            </div>
            <h1 className={styles.name}>{profile.fullName}</h1>
            {/* <div className={styles.planetHolder}>
              <div className={styles.planet}>
                <div className={styles.cloud} />
                <div className={styles.cloud} />
                <div className={styles.cloud} />
                <div className={styles.cloud} />
                <div className={styles.cloud} />
                <div className={styles.cloud} />
              </div>
              <div className={styles.text}>{profile.fullName}</div>
            </div> */}
            <Container className={styles.details}>
              <Row>
                <Col xs={12} sm={12} md={12} className={styles.ticketCol}>
                  <div className={styles.ticket}>
                    <p className={styles.eventTitle}>Event Passes Obtained</p>
                    <hr />
                    <span className={styles.admit}>
                      {profile.paid && pass ? (
                        Object.keys(profile.paid).map((pass, id) => {
                          return profile.paid[pass] == true ? (
                            <>
                              <FaCheckCircle
                                className={styles.icon_check}
                              ></FaCheckCircle>
                              &nbsp;
                              {passNames[pass]}
                              <br />
                            </>
                          ) : null;
                        })
                      ) : (
                        <b>No pass obtained yet</b>
                      )}
                    </span>
                    <br></br>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegBuilding className={styles.icon}></FaRegBuilding>
                    </span>
                    <p>{profile.department}</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaUniversity className={styles.icon}></FaUniversity>
                    </span>
                    <p>{profile.collegeName}</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaUserGraduate className={styles.icon}></FaUserGraduate>
                    </span>
                    <p>{profile.registerNumber}</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegEnvelope className={styles.icon}></FaRegEnvelope>
                    </span>
                    <p>{profile.email}</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaPhoneAlt className={styles.icon}></FaPhoneAlt>
                    </span>
                    <p>{profile.phone}</p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.cols}>
                  <div>
                    <span className={styles.title}>
                      <FaRegCalendarAlt
                        className={styles.icon}
                      ></FaRegCalendarAlt>
                    </span>
                    <p>Year {profile.year}</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : // <div>
        //   <h2 className={styles.error}>You must be signed in. </h2>
        // </div>
        null}

        {profile ? (
          <div>
            <hr className={styles.hr_line}></hr>
            <h3 className={styles.name}>REGISTRATIONS</h3>
          </div>
        ) : (
          currentUser && null
        )}

        {profile ? (
          <section className={styles.price_section} id="pricing">
            <div className={styles.feature}>{renderEvents()}</div>
            {console.log(profile.events)}
            {profile.events?.length === 0 ? (
              <h5 style={{ textAlign: 'center' }}>
                You have not registered for any events yet!
              </h5>
            ) : null}
          </section>
        ) : (
          currentUser && null
        )}
      </div>
      {profile ? <Footer /> : null}
    </div>
  );
}

export default Profile;
