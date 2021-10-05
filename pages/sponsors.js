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
    else if (company == 2)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://www.mrcooper.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/cooper.png"
                  alt="Mr Cooper"
                  className={styles.longLogo}
                />{' '}
              </a>
            </Col>
          </Row>

          <Row>
            <h3 style={{ textAlign: 'left' }}>About Us</h3>
            <p style={{ textAlign: 'justify' }}>
              We are Mr. Cooper Group, America’s largest non-bank mortgage
              service provider, a leading mortgage lender, a comprehensive
              real-estate services and technology company. And we’re here to
              keep the dream of home ownership alive. <br />
              <br />
              We live and breathe this mission because we are never content with
              the status quo. Mr. Cooper Group India was born in 2015 around the
              idea that every customer should have a memorable home-buying
              experience. To ensure the best customer experience possible, we
              need to make every transaction simple and smooth, using
              leading-edge technology and increasing efficiency across various
              business operations. Today, we are creating real estate solutions
              serving mortgage servicers, originators, real estate
              professionals, financial institutions, and homebuyers and sellers.
              While Mr. Cooper focuses on business operations in Originations,
              Servicing, and Corporate groups including IT, Finance, Risk &amp;
              Compliance, Legal and Internal Audit, Xome offers Asset
              Management, Property Disposition, Title Services, Valuations, Data
              &amp; Analytics, Portfolio Recapture Solutions, and Field Services
              through an integrated technology driven platform. Over the last
              five years, our intensely committed and culturally diverse team
              have embraced the digital disruption to create a far-reaching
              online experience for our consumers. <br />
              <br />
              We have offices in Chennai and Bengaluru, India and our
              headquarters are in Dallas, Texas. We’re Great Place to
              Work-Certified™ twice in a row both in India and the U.S., and one
              of HousingWire’s Tech 100 Real Estate companies in 2020. At Mr.
              Cooper Group, we live by our three core values. We are Challengers
              of Convention, Champions for our Customers and Cheerleaders for
              our Team. <br />
              <br />
              You can visit{' '}
              <a
                href="https://careers.mrcooper.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://careers.mrcooper.com/
              </a>
              for current job openings.
            </p>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.mrcooper.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.mrcooper.com/
              </a>
              <br></br>
            </div>

            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/showcase/mr.-cooper---india/?viewAsMember=true"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Mr Cooper
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/showcase/xome-india/?viewAsMember=true"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Xome
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 3)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://www.infysec.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/infy_logo.png"
                  alt="Infysec"
                  style={{ width: '28vh' }}
                />{' '}
              </a>
            </Col>
          </Row>

          <Row>
            <Col style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                className={styles.poster}
                src="/sponsors/infysec_info.jpeg"
                alt="Infysec"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  padding: '2em',
                }}
              />{' '}
            </Col>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.infysec.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.infysec.com/
              </a>
              <br></br>
            </div>

            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/infysec/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                infysec
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 4)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a href="https://cmti.co.in/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/cmti.png"
                  alt="Infysec"
                  style={{ width: '28vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="12" md="6" style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                className={styles.poster}
                src="/sponsors/cmti_info1.jpg"
                alt="CMTI"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '1em',
                }}
              />{' '}
            </Col>
            <Col style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                className={styles.poster}
                src="/sponsors/cmti_info2.jpg"
                alt="CMTI"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />{' '}
            </Col>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://cmti.co.in/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://cmti.co.in/
              </a>
              <br></br>
            </div>

            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cmtionline/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                cmtionline
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 5)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a href="http://cosmicin.com/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/cosmic.webp"
                  alt="Cosmic"
                  style={{ width: '28vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                className={styles.poster}
                src="/sponsors/cosmic_info.jpg"
                alt="Cosmic info"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />{' '}
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <a href="/cosmic.pdf" target="_blank">
              <button className={styles.registerButton}>
                Download Brochure
              </button>
            </a>
          </Row>
          <br />
          <br />
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="http://cosmicin.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                http://cosmicin.com/
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
              <Row style={{ textAlign: 'center' }}>
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
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 2 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(2);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Mr Cooper</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 5 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(5);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Cosmic</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 3 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(3);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Infysec</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 4 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(4);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>CMTI</p>
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
