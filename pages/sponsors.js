import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaInstagram, FaLink, FaLinkedinIn } from 'react-icons/fa';
import 'react-responsive-modal/styles.css';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles2 from '../styles/Blink.module.scss';
import styles from '../styles/DepartmentPage.module.css';
import styles3 from '../styles/Home.module.css';

export default function Department({ data }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  var department = router.query.dept;
  var id = parseInt(router.query.id);
  var events = data;
  const [profile, setProfile] = useState();
  const { navbarToggle, toggleNavbar } = useNav();
  const [company, setCompany] = useState(0);
  function clickCompany(id) {
    setCompany(id);
    console.log(id);
  }
  const CompanyData = () => {
    if (company == 0) {
      return (
        <>
          <div className={styles2.blinkbox} data-aos="zoom-in">
            <div className={styles2.light}></div>
            <div className={styles2.blink}>
              <span style={{ fontSize: '3rem' }}>
                Thanks to all our sponsors!
              </span>
            </div>
          </div>
          <h5 style={{ textAlign: 'center' }}>
            Click on a sponsor above to learn more about them
          </h5>
        </>
      );
    } else if (company == 1)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a href="https://facilio.com/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/facilio.webp"
                  alt="Facilio"
                  style={{ width: '28vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <p>
            Facilio’s AI-driven property operations platform helps real estate
            owners and operators aggregate hard-to-access building data,
            optimize performance, and control portfolio operations - all from
            one place.
            <br />
            <br />
            Facilio gives O&amp;M teams real-time visibility into their
            operations, to automate manual processes, exceed sustainability
            goals, and improve building performance.
            <br />
            <br />
            Leading enterprises in the commercial office, healthcare, and retail
            categories use Facilio across 40million square feet globally to
            reduce operations costs, increase net asset value, and de-risk
            operational liability.
          </p>
          <Row>
            <Col sm="12" md="5" style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                src="/sponsors/facilio_info.jpg"
                alt="Facilio"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  padding: '2em',
                }}
              />{' '}
            </Col>
            <Col sm="12" md="7">
              <div className={styles3.videoSection2}>
                <iframe
                  className={styles3.video2}
                  width="500"
                  height="315"
                  src="https://www.youtube.com/embed/AgrOOwP6JjA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
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
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://facilio.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://facilio.com/
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaInstagram style={{ fontSize: '1.5rem' }}></FaInstagram>
              <a
                target="_blank"
                href="https://instagram.com/facilioinc"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                @facilioinc
              </a>
            </div>

            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/facilio-inc/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                facilio-inc
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else return <></>;
  };
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
        <title>Sponsors</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <NavbarComp />
        <main style={{ marginBottom: '10em' }}>
          <div
            className={
              !navbarToggle ? styles.mainContainer : styles.hideMainContainer
            }
          >
            <h1 className={styles.pageHeading}>
              <u>Sponsors</u>
            </h1>
            <Row className={styles.wrapper}>
              <Row style={{ textAlign: 'center', maxWidth: '500px' }}>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 1 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(1);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Facilio</p>
                      </div>
                    </div>
                  </div>
                </Col>
                {/* <Col>
                  <div className={
                    styles.eventCard +
                    ' ' +
                    (company == 2
                      ? styles.eventSelected
                      : '')
                  } onClick={() => { clickCompany(2) }}>
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Cosmic</p>
                      </div>
                    </div>
                  </div>
                </Col> */}
              </Row>

              <Col lg={12} xl={12} md={12} sm={12}>
                <div className={styles.eventDetails}>
                  <CompanyData />
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
