import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
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
          <div
            id="sponsors"
            className={styles3.spons_section}
            style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className={styles3.sponsors2}>
              <Row className={styles3.sponsorsSpaced}>
                <Col>
                  <a
                    href="https://facilio.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/facilio.webp"
                      alt="facilio"
                      width="200"
                      height="140"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.saama.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/saama.svg"
                      alt="saama"
                      width="250"
                      height="80"
                      style={{ marginTop: '4vw' }}
                    />{' '}
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a
                    href="http://leankloud.com//"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/leankloud.png"
                      alt="leankloud"
                      width="220"
                      height="60"
                    />{' '}
                  </a>
                </Col>
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
                      width="200"
                      height="60"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.mrcoopergroup.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/cooper.png"
                      alt="mr cooper"
                      width="250"
                      height="50"
                    />{' '}
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a
                    href="http://cosmicin.com/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/cosmic.webp"
                      alt="cosmic"
                      width="140"
                      height="100"
                      style={{ marginTop: '-1vh' }}
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://motorq.com/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/motorq.png"
                      alt="motorq"
                      width="180"
                      height="40"
                      style={{ marginTop: '4vh' }}
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.emids.com/ "
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/emids.svg"
                      alt="emids"
                      width="200"
                      height="60"
                      style={{ marginTop: '3vh' }}
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://typesense.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/typesense.svg"
                      alt="typesense"
                      width="250"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://m.youtube.com/channel/UCaz-Sy2xHZWtFhu72GVAFrQ?sub_confirmation=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/gr.png"
                      alt="gowtham raj"
                      width="200"
                      height="70"
                    />{' '}
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://microcode-inc.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/microcode.jpeg"
                      alt="Microcode"
                      width="180"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="http://www.orono.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/orono.jpg"
                      alt="orono"
                      width="180"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.shankarabuildpro.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/shankara.jfif"
                      alt="Shankara"
                      width="180"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://cmti.co.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/cmti.png"
                      alt="CMTI"
                      width="150"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.deepwoodsgreen.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/deepwoods.webp"
                      alt="deepwoods"
                      width="150"
                      height="80"
                    />{' '}
                  </a>
                </Col>

                <Col>
                  {/* eslint-disable-next-line */}
                  <img
                    src="/sponsors/jeyam.png"
                    alt="Jeyam"
                    width="180"
                    height="80"
                  />{' '}
                </Col>
                <Col>
                  {/* eslint-disable-next-line */}
                  <img
                    src="/sponsors/rajam.jpg"
                    alt="Rajam"
                    width="280"
                    height="70"
                  />{' '}
                </Col>

                <Col>
                  <a
                    href="http://www.roca.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/ROCA.jpg"
                      alt="Roca"
                      width="150"
                      height="80"
                    />{' '}
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://www.dalmiabharat.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/dalmia.png"
                      alt="dalmia"
                      width="130"
                      height="70"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/school/ssn-alumni-association/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/ssnaa.jfif"
                      alt="SSNAA"
                      width="100"
                      height="100"
                    />{' '}
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://felixpilottraining.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/FELIX.jpg"
                      alt="Felix"
                      width="150"
                      height="70"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  {/* eslint-disable-next-line */}
                  <img
                    src="/sponsors/srimurugan.jpg"
                    alt="FSri Murugan"
                    width="150"
                    height="100"
                  />{' '}
                </Col>
                <Col>
                  <a
                    href="https://www.emveetech.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/emvee.jpg"
                      alt="emvee"
                      width="200"
                      height="70"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="http://thinaiorganics.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/sana.jpg"
                      alt="Thinai"
                      width="160"
                      height="70"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  {/* eslint-disable-next-line */}
                  <img
                    src="/sponsors/mj.png"
                    alt="MJ"
                    width="180"
                    height="120"
                  />{' '}
                </Col>
                <Col>
                  <a
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/gfg.png"
                      alt="gfg"
                      width="100"
                      height="70"
                    />{' '}
                  </a>
                </Col>

                <Col>
                  <a
                    href="https://www.yoode.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/ycode.JPG"
                      alt="yoode"
                      width="250"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.isaca-chennai.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/ISACA.jpg"
                      alt="saama"
                      width="190"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://uzhavarbumi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/ub.jpg"
                      alt="UB"
                      width="190"
                      height="80"
                    />{' '}
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://basement.redbull.com/en-in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src="/sponsors/redbull_basement.jpeg"
                      alt="RB"
                      width="190"
                      height="80"
                    />{' '}
                  </a>
                </Col>
              </Row>
            </div>
          </div>
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
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://crm.infysec.com/admin/recruitment/recruitment_campaign#2"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Login
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
                  alt="cmti1"
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
                src="/sponsors/cosmic_info2.jpg"
                alt="Cosmic info"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />{' '}
            </Col>
          </Row>
          <br />
          <Row>
            <Col style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                className={styles.poster}
                src="/sponsors/cosmic_info1.jpg"
                alt="Cosmic info"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />{' '}
            </Col>
          </Row>

          {/* <Row style={{ textAlign: 'center' }}>
            <a href="/cosmic.pdf" target="_blank">
              <button className={styles.registerButton}>
                Download Brochure
              </button>
            </a>
          </Row> */}
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
    else if (company == 6)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://m.youtube.com/channel/UCaz-Sy2xHZWtFhu72GVAFrQ?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/gr.png"
                  alt="GowthamRaj"
                  style={{ width: '28vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm="12" md="5" style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line */}
              <img
                src="/sponsors/gr_info.jpg"
                alt="GowthamRaj"
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
                  height="345"
                  src="https://www.youtube.com/embed/7Ea6hBzEa4o"
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
                href="https://www.youtube.com/channel/UCaz-Sy2xHZWtFhu72GVAFrQ"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Youtube Channel
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gowthamrajceg"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                gowthamrajceg{' '}
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaInstagram style={{ fontSize: '1.5rem' }}></FaInstagram>
              <a
                target="_blank"
                href="https://www.instagram.com/gowthamraj_ceg/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                @gowthamraj_ceg
              </a>
            </div>
          </div>
        </>
      );
    else if (company == 7)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://www.isaca-chennai.org/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/ISACA.jpg"
                  alt="isaca"
                  width="190"
                  height="80"
                  style={{ width: '26vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row className={styles.singleVideoSection}>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/8Wa9jqzCGkk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.isaca-chennai.org/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.isaca-chennai.org/
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaYoutube style={{ fontSize: '1.5rem' }}></FaYoutube>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCuukFVdnX5F64d8l4u25kYQ"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                YouTube
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaLinkedin style={{ fontSize: '1.5rem' }}></FaLinkedin>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/isaca-chennai-chapter/?trk=top_nav_home"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaFacebook style={{ fontSize: '1.5rem' }}></FaFacebook>
              <a
                target="_blank"
                href="https://www.facebook.com/IsacaChennai/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Facebook
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaInstagram style={{ fontSize: '1.5rem' }}></FaInstagram>
              <a
                target="_blank"
                href="https://www.instagram.com/isacachennai/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Instagram
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaTwitter style={{ fontSize: '1.5rem' }}></FaTwitter>
              <a
                target="_blank"
                href="https://twitter.com/isacachennai"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Twitter
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 8)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://felixpilottraining.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/FELIX.jpg"
                  alt="felix"
                  width="190"
                  height="80"
                  style={{ width: '26vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row className={styles.singleVideoSection}>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/ZEYQhQTHtOA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://felixpilottraining.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                felixpilottraining.com
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 9)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a href="https://www.yoode.com/" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/ycode.JPG"
                  alt="yoode"
                  width="190"
                  height="80"
                  style={{ width: '26vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row className={styles.singleVideoSection}>
            <iframe
              width="460"
              height="315"
              src="https://www.youtube.com/embed/qRHtoYmN7CI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.yoode.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.yoode.com/
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 10)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://www.typesense.org/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/typesense.svg"
                  alt="typesense"
                  width="190"
                  height="80"
                  style={{ width: '26vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <Row style={{ textAlign: 'center' }}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className={styles.poster}
              src="/sponsors/typesense_poster.jpg"
              alt="typesense_poster"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1em',
              }}
            />{' '}
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.typesense.org/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.typesense.org/
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 11)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className={styles.poster}
              src="/sponsors/builder.jpg"
              alt="builder"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1em',
              }}
            />{' '}
          </Row>
        </>
      );
    else if (company == 12)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className={styles.poster}
              src="/sponsors/kavithai.jpg"
              alt="kavithai"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1em',
              }}
            />{' '}
          </Row>
        </>
      );
    else if (company == 13)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://business.stayflexi.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/sf.webp"
                  alt="Stayflexi"
                  width="190"
                  height="80"
                  style={{ width: '30vh' }}
                />{' '}
              </a>
            </Col>
          </Row>
          <br />
          <div style={{ textAlign: 'center' }}>
            <h4>All-in-one property management and automation platform</h4>
            <h6>
              Stayflexi automates every aspect of your hotel or vacation rental
              management and upsells unsold rooms and amenities
            </h6>
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf1.png"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf2.png"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            <h4>
              MODERN OPERATING SYSTEM FOR HOSPITALITY. SALES, OPERATIONS AND
              MANAGEMENT IN A SINGLE PLATFORM
            </h4>
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf3.jpg"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf4.png"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf5.jpg"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf6.png"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            {/* eslint-disable-next-line */}
            <img
              className={styles.poster}
              src="/sponsors/sf7.png"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
              }}
            />{' '}
            <h3>CEO & Co-Founder</h3>
            {/* eslint-disable-next-line */}
            <img
              src="/sponsors/sf8.jpg"
              alt="Infysec"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '2em',
                width: '35vh',
              }}
            />{' '}
            <a href="https://www.linkedin.com/in/venkatsakamuri/">
              <h6>Venkatesh Sakamuri</h6>
            </a>
            <p>
              Venkatesh Sakamuri is the Co-Founder & CEO at Stayflexi (YC W21).
              Previously, Venkatesh was a Senior Member Of the Technical Staff
              at Oracle. Venkatesh holds a Master&apos;s degree from Carnegie
              Mellon University. He is also an alumnus of SSN College of
              Engineering.
            </p>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://business.stayflexi.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://business.stayflexi.com/
              </a>
              <br></br>
            </div>
            <div className={styles.col}>
              {' '}
              <FaLinkedinIn style={{ fontSize: '1.5rem' }}></FaLinkedinIn>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/stayflex/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                Stayflexi
              </a>
              <br></br>
            </div>
          </div>
        </>
      );
    else if (company == 14)
      return (
        <>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <a
                href="https://www.dalmiabharat.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/sponsors/dalmia.png"
                  alt="Dalmia"
                  width="190"
                  height="80"
                  style={{ width: '26vh' }}
                />{' '}
              </a>
            </Col>
          </Row>

          <Row>
            <h4 style={{ textAlign: 'left', marginTop: '2em' }}>
              About Dalmia Bharat:
            </h4>
            <p style={{ textAlign: 'justify' }}>
              <em>
                <u>1939</u>
              </em>
              <br />
              It was in the year 1939, during the pre-independence era, the
              company started its cement unit as a venture towards Building up a
              self-reliant India with respect to one of the country’s essential
              commodities / Core Sectors. Of the four units so started, one was
              located at Dalmiapuram, which was later incorporated as “DALMIA
              CEMENT (BHARAT) LIMITED” (whilst two units got absorbed in
              Pakistan due to partition). In 1939, a 250 Tonnes per day kiln was
              started by the Company to manufacture cement by Semi-dry process.
              The machinery was supplied by M/s. POLYSIUS , GERMANY.
              <br />
              <br />
              <em>
                <u>1939-1942</u>
              </em>
              <br />
              In 1949, a 500 Tonnes per day Wet Process Unax Kiln supplied by
              M/s. F.L.SMIDTH, DENMARK was installed. Again in 1959, expansion
              was undertaken with the installation of another 500 Tonnes per day
              wet process Folax Kiln supplied by M/s. F.L.SMIDTH, DENMARK. In
              1982, a 200 Tonnes per day Vertical Shaft Kiln (First of its kind
              in India) was installed using fuel as Coal Slurry Process.
              <br />
              <br />
              <em>
                <u>1983-1993</u>
              </em>
              <br />
              Decontrol of Cement – Partial Decontrol (1983) – Full Decontrol
              (1984) In the year 1983, Captive Power Gensets supplied by M/s
              Wartsila were installed.
              <br />
              <br /> In the year 1984, Oil well cement production was started
              and in 1986 the prestigious API Monogram certification was
              received from American Petroleum Institute, USA. <br />
              <br />
              With rising costs of fuel, major modernization programme was
              undertaken in line with policy of the Government of India to
              switch over from Wet Process to Dry Process. Consequently, a 1500
              Tonnes per day pre-calcinator kiln supplied by M/s. KHD HUMBOLDT
              WEDAG AG, WEST GERMANY was commissioned in 1987 and both the Wet
              Process kilns were stopped. This is a modern Dry Process Kiln
              First of its kind in TAMILNADU with Computerised Controls. The New
              Plant includes Stacker Reclaimer and ‘X’ RAY Analyser to ensure
              uniform Quality.
              <br />
              <br />
              In the year 1990, we have installed state of the art Electronic
              Roto Packer - I with 8 spouts for packing cement. In the year
              1991, we have introduced a new technology “Auto Kiln Control
              System” for smooth operation of Kiln. Also, in the year 1991, a
              Regional Training Centre sponsored by World Bank DANIDA is started
              at our Plant to cater to all South Indian Cement Plants. This is a
              recognition of our Plant as center for excellence for transfer of
              Technology.
              <br />
              <br />
              In the year 1993, we have been awarded ISO 9002 certification for
              our Quality Management System (First cement company in South
              India) from BIS.
              <br />
              <br />
              <em>
                <u>1994-2004</u>
              </em>
              <br />
              In the year 1994, we have installed state of the art Electronic
              Roto Packer-II (12 spout) for packing cement.
              <br />
              <br />
              In the year 1997, Cement grinding was modernized by introducing
              Vertical Roller Mill.
              <br />
              <br />
              The Central control room has been upgraded with latest fuzzy logic
              controls for improved energy efficiency and productivity.
              <br />
              <br />
              We have upgraded the Kiln Cooler with the latest IKN technology
              for improved thermal efficiency.
              <br />
              <br />A substantial expansion project was completed in 2002 with
              up gradation of our KHD Kiln, enhancing the capacity to 3300 TPD,
              by installing energy efficient low pressure cyclones and the Kiln
              Cooler with the latest CFG technology for improved thermal
              efficiency.
              <br />
              <br />
              In the year 2004, we have received ISO 14001 certification for our
              Environmental Management System from BIS.
              <br />
              <br />
              <em>
                <u>2005 Onwards</u>
              </em>
              <br />
              A major capacity expansion project is commissioned during the year
              2006 to enhance the total cement capacity by putting up a most
              modern & energy efficient 3800 TPD Plant.
              <br />
              <br />
              Also to meet the increased power requirement at optimum cost, a 27
              MW Captive Thermal Power Plant is put up during the year 2005.
              <br />
              <br />
              Additional Captive Thermal Power Plant of Capacity 18 MW is
              commissioned in the year 2008.
              <br />
              <br />
              In the year 2010, we have received IS 18001:2007 certification for
              our OH&MS (Occupational Health and Safety Management System) from
              BIS.
              <br />
              <br />
              <em>
                <u>2015 Onwards</u>
              </em>
              <br />
              In The year 2015, we have received IS/ISO 50001:2011 Certification
              for Energy Management System from BIS. And further Dalmia Cement
              Bharat Limited, Dalmiapuram has strengthened its Quality
              Management system by obtaining API Spec Q1 from American Petroleum
              Institute in 2016.
              <br />
              <br />
              <em>
                <u>2016 Onwards</u>
              </em>
              <br />
              Dalmia Cement Bharat Limited, Dalmiapuram also obtained the Green
              Pro Certification from CII for the PPC Product in the year 2016.
              <br />
              <br />
              Also, Certified for 5S from QCFI as Par Excellence and Platinum
              Award by ABK AOTS.
              <br />
              <br />
              <em>
                <u>2017 Onwards</u>
              </em>
              <br />
              In the year 2017, we have changeover and received IS/ISO 9001:2015
              certification for our Quality Management System first in Cement
              from BIS.
              <br />
              <br />
              <em>
                <u>2018 Onwards</u>
              </em>
              <br />
              In the year 2018, we have changeover and received IS/ISO
              14001:2015 certification for our Environment Management System
              first in Cement from BIS.
              <br />
              <br />
              Certified for 5S Excellence Award by CII.
              <br />
              <br />
              <em>
                <u>2019 Onwards</u>
              </em>
              <br />
              Green Pro Certification from CII for the PPC Product Renewed upto
              December 2020.
              <br />
              <br />
            </p>
          </Row>
          <div className={styles.row}>
            <div className={styles.col}>
              {' '}
              <FaLink style={{ fontSize: '1.5rem' }}></FaLink>
              <a
                target="_blank"
                href="https://www.dalmiabharat.com/"
                style={{ fontSize: '1rem', marginLeft: '1rem' }}
                rel="noreferrer"
              >
                https://www.dalmiabharat.com/
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
        <main style={{ marginBottom: '15em' }}>
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
                      (company == 0 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(0);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>All</p>
                      </div>
                    </div>
                  </div>
                </Col>
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
                      (company == 13 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(13);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Stayflexi</p>
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
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 10 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(10);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Typesense</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 8 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(8);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Felix Pilot Training</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 9 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(9);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Yoode</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 6 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(6);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>GowthamRaj</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 7 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(7);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>ISACA - Chennai Chapter</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 11 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(11);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Chandrasekhar Builders Pvt Ltd</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 12 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(12);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Kavidhai Uravu</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className={
                      styles.eventCard +
                      ' ' +
                      (company == 14 ? styles.eventSelected : '')
                    }
                    onClick={() => {
                      clickCompany(14);
                    }}
                  >
                    <span></span>
                    <div className={styles.content}>
                      <div className={styles.content}>
                        <p>Dalmia Bharat</p>
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
