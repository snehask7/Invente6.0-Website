import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
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
import NavbarComp from '../components/Navbar';
import eventsInfo from '../eventsInfo.json';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Profile.module.css';

function Profile() {
  const [profile, setProfile] = useState();
  const { currentUser } = useAuth();
  const router = useRouter();
  const { navbarToggle, toggleNavbar } = useNav();

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
          console.log(profileDetails);
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
        // <li key={i} className={styles.eventCard}>
        //   {eventsInfo[event].name}
        //   <FaTimesCircle className={styles.delete}></FaTimesCircle>
        //   <br></br>
        //   <span className={styles.tag}>
        //     {eventsInfo[event].category == 'tech' ||
        //     eventsInfo[event].category == 'non-tech'
        //       ? 'Event'
        //       : 'Hackathon'}
        //   </span>
        //   <span className={styles.verified}>Not paid</span>
        // </li>
        <div key={i} className={styles.event_card}>
          <div className={styles.event_bg}>
            <Image
              width="400"
              height="350"
              src="/Plans/purple.svg"
              alt="plan background"
            />
          </div>

          <div className={styles.event}>
            <div className={styles.event_title}>Combo</div>
            <div className={styles.plan_description}>
              <span>Devathlon</span>
            </div>
            <div className={styles.event_dept}>CSE</div>
            
          </div>
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <NavbarComp />
      <div className={!navbarToggle ? styles.card : styles.hideCard}>
        {profile ? (
          <div>
            <div className={styles.image}></div>
            <h1 className={styles.name}>{profile.fullName}</h1>
            <Container className={styles.details}>
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
          </section>
        ) : (
          currentUser && null
        )}
      </div>
    </div>
  );
}

export default Profile;
