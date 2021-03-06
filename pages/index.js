import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import { useNav } from '../lib/navbarstate';
import styles3 from '../styles/Blink.module.scss';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/Particles.module.scss';

export default function Home() {
  AOS.init();
  const [loadAnimation, setLoadAnimation] = useState('');
  const router = useRouter();
  const { navbarToggle, toggleNavbar, resetNavbar } = useNav();
  useEffect(() => {
    setLoadAnimation('active');
  }, []);
  const handleNavbarToggle = () => {
    setNavbarToggle(!navbarToggle);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Invente 6.0</title>
        <meta
          name="description"
          content="The sixth edition of SSN College of Engineering's annual, intercollegiate techfest is back with a bang! October 8, 9: Save the dates to reinvent yourself in this Realm of Virtuality."
        />
        <meta name="robots" />
        <link rel="icon" href="/favicon.ico" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="text/javascript" src="..."></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type="text/javascript" src="/js/timer.js"></script>
      </Head>
      <div className={styles2.animation_wrapper}>
        <div
          className={styles2['particle'] + ' ' + styles2['particle-1']}
        ></div>
        <div
          className={styles2['particle'] + ' ' + styles2['particle-4']}
        ></div>
      </div>

      <main className={styles.main}>
        <NavbarComp />
        <div className={styles.home_section}>
          <Row className={styles.headerRow}>
            <Col md={12} lg={12} className={styles.centerLogo}>
              <div className={styles.logo}>
                <svg
                  className={loadAnimation}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 515.15 164.29"
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <text
                        className="cls-1"
                        transform="translate(209.44 162.88)"
                      >
                        8
                      </text>
                      <text
                        className="cls-1"
                        transform="translate(219.67 156.8) scale(0.58)"
                      >
                        th
                      </text>
                      <text
                        className="cls-1"
                        transform="translate(229.13 162.88)"
                      >
                        , 9
                      </text>
                      <text
                        className="cls-1"
                        transform="translate(247.45 156.8) scale(0.58)"
                      >
                        th
                      </text>
                      <path
                        className="cls-1 svg-elem-8"
                        d="M272,156.28a8.6,8.6,0,0,1-1.07,4.89c-.72,1-2,1.52-3.92,1.52s-3.2-.52-3.92-1.55a8.72,8.72,0,0,1-1.08-4.89,8.94,8.94,0,0,1,1.1-4.95c.73-1.08,2-1.61,3.89-1.61s3.16.53,3.9,1.6A8.91,8.91,0,0,1,272,156.28Zm-8.54,0a8.08,8.08,0,0,0,.73,4,3.89,3.89,0,0,0,5.63,0,8.09,8.09,0,0,0,.72-4,8.37,8.37,0,0,0-.75-4.07,3.7,3.7,0,0,0-5.59,0A8.25,8.25,0,0,0,263.41,156.24Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-9"
                        d="M282.16,162.31a17.45,17.45,0,0,1-3.37.38,6.06,6.06,0,0,1-2.42-.41,3,3,0,0,1-1.43-1.28,5.86,5.86,0,0,1-.69-2,16.84,16.84,0,0,1-.19-2.8,17.4,17.4,0,0,1,.19-2.83,5.9,5.9,0,0,1,.69-2,3,3,0,0,1,1.42-1.28,5.91,5.91,0,0,1,2.37-.4,17.31,17.31,0,0,1,3.43.4l-.05,1.19a18.94,18.94,0,0,0-3.29-.33,2.77,2.77,0,0,0-2.66,1.19,9.3,9.3,0,0,0-.64,4.09,20,20,0,0,0,.11,2.31,5,5,0,0,0,.47,1.58,2.07,2.07,0,0,0,1,1,5,5,0,0,0,2,.3,16.75,16.75,0,0,0,3-.33Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-10"
                        d="M282.92,151.29v-1h9v1h-4v11h-1v-11Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-11"
                        d="M303.19,156.28a8.59,8.59,0,0,1-1.08,4.89c-.72,1-2,1.52-3.92,1.52s-3.2-.52-3.92-1.55a8.82,8.82,0,0,1-1.07-4.89,9,9,0,0,1,1.09-4.95c.73-1.08,2-1.61,3.89-1.61s3.17.53,3.9,1.6A8.9,8.9,0,0,1,303.19,156.28Zm-8.55,0a8.08,8.08,0,0,0,.73,4,3.9,3.9,0,0,0,5.64,0,8.09,8.09,0,0,0,.72-4,8.37,8.37,0,0,0-.75-4.07,3,3,0,0,0-2.81-1.28,2.94,2.94,0,0,0-2.79,1.27A8.37,8.37,0,0,0,294.64,156.24Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-12"
                        d="M305.92,149.29h4.71a4.42,4.42,0,0,1,2.9.8,3.05,3.05,0,0,1,1,2.51,3.64,3.64,0,0,1-.42,1.9,2.83,2.83,0,0,1-1.25,1.08,2.92,2.92,0,0,1,2.06,3.06,3.4,3.4,0,0,1-1,2.8,4.56,4.56,0,0,1-3,.85h-5Zm3.86,2h-2.86v4h3a2.1,2.1,0,0,0,1.57-.51,2.14,2.14,0,0,0,.49-1.54,1.89,1.89,0,0,0-.52-1.49A2.46,2.46,0,0,0,309.78,151.29Zm.72,5h-3.58v5h3.68a3.22,3.22,0,0,0,2.06-.57,2.43,2.43,0,0,0,.71-2,2.63,2.63,0,0,0-.28-1.28,1.76,1.76,0,0,0-.77-.74A4.33,4.33,0,0,0,310.5,156.29Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-13"
                        d="M316.92,162.29v-12h8v1h-6v4h5v1h-5v5h6v1Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-14"
                        d="M327.92,157.29v5h-1v-13h4.87a11.21,11.21,0,0,1,3,1.51,3.75,3.75,0,0,1,1,2.9c0,2-.77,3.18-2.32,3.68l2.43,4.91h-2l-2.36-5Zm4.09-1a2.5,2.5,0,0,0,0-5h-3.07v5Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-15"
                        d="M349.92,162.29h-8v-1l3.7-3.71c.61-.63,1.05-1.11,1.33-1.44a6.06,6.06,0,0,0,.76-1.17,2.94,2.94,0,0,0,.34-1.35,1.89,1.89,0,0,0-.64-1.64,3.33,3.33,0,0,0-2-.48,12.64,12.64,0,0,0-2.65.31l-.48.09-.11-1.17a13,13,0,0,1,3.58-.49,4.3,4.3,0,0,1,2.79.78,3,3,0,0,1,.94,2.45,4.32,4.32,0,0,1-.56,2.23,12,12,0,0,1-2,2.29l-3.21,3.27h6.16Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-16"
                        d="M356.16,150.25a4.6,4.6,0,0,1,2.43.57q2,1.17,2,5.84c0,2.21-.37,3.76-1.1,4.67a4,4,0,0,1-3.28,1.36,4,4,0,0,1-3.3-1.34c-.74-.9-1.11-2.49-1.11-4.79s.37-3.92,1.09-4.87A3.87,3.87,0,0,1,356.16,150.25Zm0,1.26a2.76,2.76,0,0,0-1.65.44c-.86.6-1.29,2.17-1.29,4.73a7,7,0,0,0,.71,3.74,2.91,2.91,0,0,0,4.45,0,7.31,7.31,0,0,0,.72-3.87,7.91,7.91,0,0,0-.69-3.92A2.45,2.45,0,0,0,356.18,151.51Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-17"
                        d="M369.92,162.29h-8v-1l4.16-3.71c.6-.63,1.05-1.11,1.33-1.44a6.06,6.06,0,0,0,.76-1.17,3.07,3.07,0,0,0,.34-1.35,1.92,1.92,0,0,0-.64-1.64,3.33,3.33,0,0,0-2-.48,12.56,12.56,0,0,0-2.65.31l-.48.09-.11-1.17a13,13,0,0,1,3.58-.49,4.3,4.3,0,0,1,2.79.78,3,3,0,0,1,.94,2.45,4.23,4.23,0,0,1-.57,2.23,12.25,12.25,0,0,1-1.95,2.29l-3.22,3.27h5.71Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-18"
                        d="M378.92,150.29v12h-1V152l-3.81,2-.64-1.06,3.84-2.72Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-19"
                        d="M29.33,153.77l17.59,7.57v-36l-19.58.14,1.32,4.79a49.23,49.23,0,0,1,.9,22.35Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-20"
                        d="M71.49,125.29l-19.57-.14v36l17.58-7.57-.23-1.2a49.23,49.23,0,0,1,.9-22.35Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-21"
                        d="M49.71,40.1a9.41,9.41,0,1,0,9.41,9.41A9.42,9.42,0,0,0,49.71,40.1Zm0,14.56a5.16,5.16,0,1,1,5.16-5.15A5.16,5.16,0,0,1,49.71,54.66Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-22"
                        d="M45.86.14a49.57,49.57,0,0,0-35.24,80.1c2.06,2.61,4.08,5.31,6,8.07,6.56,9.2,10.07,32,10.07,32H42.27L28.4,64.14,35,66.65a41.11,41.11,0,0,0,14.68,2.72A41.42,41.42,0,0,0,64.5,66.62L71,64.14,56.91,120.29H72.25s3.29-21.81,9.59-30.84c2.27-3.26,4.58-6.4,6.79-9.2A49.58,49.58,0,0,0,45.86.14ZM49.71,64A14.54,14.54,0,1,1,64.25,49.51,14.54,14.54,0,0,1,49.71,64ZM71.94,44a24,24,0,0,0-44.53.11l-4.77-1.88a29.08,29.08,0,0,1,54.06-.14Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-23"
                        d="M49.72,74a46.42,46.42,0,0,1-14-2.18l10.73,43.48h6.31l10.9-43.46A46.15,46.15,0,0,1,49.72,74Zm-.26,29.06-4.69-8.6,2.71-17.16h4.08l3.07,17.16Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-24"
                        d="M446.16,52.21A104.36,104.36,0,0,0,431.27,51q-12,0-11.95,13l1.77-.5a33.8,33.8,0,0,1,8.83-1.6q9.51,0,14.31,4.37T449,79.77q0,9.21-5.38,13.92T428,98.41q-10.21,0-15.44-7.45T407.37,69q0-14.46,6-21.33t17.16-6.85a58.34,58.34,0,0,1,14.05,1.85l2.61.59ZM428.91,71.9a26.14,26.14,0,0,0-8.24,1.43l-1.43.42q0,14.56,9.42,14.56a8.33,8.33,0,0,0,6.23-2.23,8.58,8.58,0,0,0,2.19-6.27Q437.08,71.91,428.91,71.9Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-25"
                        d="M477.5,47.76q5.43-6.9,16.11-6.9t16.12,6.9q5.41,6.9,5.42,22.17T509.77,91.8q-5.38,6.61-16.16,6.61T477.46,91.8q-5.38-6.6-5.39-21.87T477.5,47.76Zm25.71,21.91c0-6.92-.74-11.78-2.19-14.55S497.1,51,493.66,51a7.75,7.75,0,0,0-7.41,4.21Q484,59.36,484,69.72t2.27,14.47a7.82,7.82,0,0,0,7.41,4.12q5.13,0,7.32-4.12C502.47,81.44,503.21,76.6,503.21,69.67Z"
                      ></path>
                      <circle
                        className="cls-1 svg-elem-26"
                        cx="460.81"
                        cy="90.11"
                        r="7.22"
                      ></circle>
                      <path
                        className="cls-1 svg-elem-27"
                        d="M154.92,97.29h-11v-42h11v2.35q5.64-3.36,10.38-3.36,8.3,0,11.46,5t3.16,15.28V97.29h-11V74.82c0-3.58-.43-6.24-1.27-7.95s-2.53-2.56-5.06-2.56a19,19,0,0,0-6.66,1.18l-1,.33Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-28"
                        d="M186,55.29h11.87l6.63,32h2.32l7-32h11.53l-10.08,42H196Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-29"
                        d="M242.5,86.88a8.39,8.39,0,0,0,5.68,1.73q7.83,0,14-.51l2.35-.25.17,8.33a74.68,74.68,0,0,1-17.5,2.36q-9.51,0-13.8-5.05t-4.29-16.41q0-22.63,18.6-22.63,18.33,0,18.34,19l-.84,7.83H240.44C240.49,83.87,241.18,85.74,242.5,86.88Zm12.41-14.59q0-5.06-1.6-7c-1.06-1.31-2.93-2-5.59-2s-4.55.68-5.64,2.06-1.67,3.69-1.72,6.94Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-30"
                        d="M284.92,97.29h-11v-42h12v2.35q5.64-3.36,10.38-3.36,8.29,0,11.46,5t3.16,15.28V97.29h-12V74.82c0-3.58-.43-6.24-1.27-7.95s-2.53-2.56-5.06-2.56a19,19,0,0,0-6.66,1.18l-1,.33Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-31"
                        d="M343.92,65.29h-10V82.54q0,2.52.12,3.57a2.91,2.91,0,0,0,.9,1.81,3.35,3.35,0,0,0,2.42.76l6.24-.17.49,9a40.94,40.94,0,0,1-8.37,1.27q-7.38,0-10.1-3.41t-2.7-12.58V65.29h-6v-10h6v-12h11v12h10Z"
                      ></path>
                      <path
                        className="cls-1 svg-elem-32"
                        d="M362.56,86.88a8.39,8.39,0,0,0,5.68,1.73q7.83,0,14-.51l2.35-.25.17,8.33a74.68,74.68,0,0,1-17.5,2.36q-9.51,0-13.8-5.05t-4.29-16.41q0-22.63,18.6-22.63,18.33,0,18.34,19l-.84,7.83H360.5C360.56,83.87,361.24,85.74,362.56,86.88ZM375,72.29q0-5.06-1.6-7c-1.06-1.31-2.93-2-5.59-2s-4.54.68-5.64,2.06-1.67,3.69-1.72,6.94Z"
                      ></path>
                      <circle
                        className="cls-1 svg-elem-33"
                        cx="125.99"
                        cy="46.69"
                        r="7.22"
                      ></circle>
                      <polygon
                        className="cls-1 svg-elem-34"
                        points="125.6 99.31 118.14 85.62 122.45 58.29 128.96 58.29 133.85 85.62 125.6 99.31"
                      ></polygon>
                      <g className="cls-2">
                        <path
                          className="cls-1 svg-elem-35"
                          d="M334.92,132.29h-2v-6h2Z"
                        ></path>
                        <g id="_15-wifi" data-name=" 15-wifi">
                          <g id="glyph">
                            <circle
                              className="cls-1 svg-elem-36"
                              cx="333.96"
                              cy="124.35"
                              r="0.79"
                            ></circle>
                            <path
                              className="cls-1 svg-elem-37"
                              d="M338.82,119.49a6.86,6.86,0,0,0-9.72,0,.13.13,0,0,0,0,.18l.58.58a.13.13,0,0,0,.18,0,5.79,5.79,0,0,1,8.19,0h0a.13.13,0,0,0,.18,0h0l.59-.58a.15.15,0,0,0,0-.18Z"
                            ></path>
                            <path
                              className="cls-1 svg-elem-38"
                              d="M336.72,121.7a.12.12,0,0,0,.09,0l.59-.59a.13.13,0,0,0,0-.18,4.88,4.88,0,0,0-6.89,0h0a.13.13,0,0,0,0,.18l.59.59a.13.13,0,0,0,.18,0,3.79,3.79,0,0,1,5.36,0A.11.11,0,0,0,336.72,121.7Z"
                            ></path>
                            <path
                              className="cls-1 svg-elem-39"
                              d="M335.31,123.12a.11.11,0,0,0,.09,0l.59-.59a.11.11,0,0,0,0-.17h0a2.87,2.87,0,0,0-4.07,0,.11.11,0,0,0,0,.17h0l.59.59a.13.13,0,0,0,.18,0h0a1.79,1.79,0,0,1,2.53,0h0a.12.12,0,0,0,.09,0Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g className="cls-2">
                        <path
                          className="cls-1 svg-elem-40"
                          d="M158.92,127.29v5h-2v-14h4.68q4.18,0,4.19,4.45c0,2-.68,3.34-2,4.05l2,5.5h-1.56l-2-5Zm5.36-4.53c0-1.65-.79-2.47-2.37-2.47h-3v5h3a2.16,2.16,0,0,0,1.77-.69A2.88,2.88,0,0,0,164.28,122.76Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-41"
                          d="M175.92,132.29v-14h9v2h-6v4h5v2h-5v4h6v2Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-42"
                          d="M193.16,132.29l3.45-14h4.52l3.47,14h-2.29l-.76-3h-5.36l-.76,3Zm5.22-12-1.72,7h4.42l-1.7-7Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-43"
                          d="M220.92,132.29h-7v-14h2v12h5Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-44"
                          d="M229.92,132.29v-14h3.88l3.06,10.48,3.06-10.48h4v14h-3v-12h-.29l-3.1,11H235.3l-3.1-11h-.28v12Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-45"
                          d="M274.65,130.31q-1.23,1.68-4.33,1.68c-2.07,0-3.51-.56-4.34-1.69s-1.24-2.89-1.24-5.31a9.39,9.39,0,0,1,1.25-5.38c.83-1.17,2.28-1.76,4.33-1.76s3.49.59,4.32,1.75a9.39,9.39,0,0,1,1.24,5.39Q275.88,128.64,274.65,130.31Zm-6.93-1.44a3.46,3.46,0,0,0,5.19,0,8.2,8.2,0,0,0,.67-3.89,8.57,8.57,0,0,0-.69-4,3.29,3.29,0,0,0-5.15,0,8.39,8.39,0,0,0-.7,4A8.23,8.23,0,0,0,267.72,128.87Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-46"
                          d="M285.92,132.29v-14h8v2h-6v4h5v2h-5v6Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-47"
                          d="M322.09,118.29h2.37l-3.43,14h-4.46l-3.43-14h2.37l2.78,12h1Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-48"
                          d="M346.92,127.29v5h-2v-14h4.68c2.78,0,4.18,1.48,4.18,4.45q0,3-2,4.05l2,5.5h-1.56l-2-5Zm5.36-4.53c0-1.65-.79-2.47-2.37-2.47h-3v5h3a2.13,2.13,0,0,0,1.76-.69A2.83,2.83,0,0,0,352.28,122.76Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-49"
                          d="M362.92,120.29v-2h10v2h-4v12h-2v-12Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-50"
                          d="M383.92,127.61c0,1.77,1,2.66,3,2.66s3-.89,3-2.66v-9.32h2v9.28a4.51,4.51,0,0,1-1.26,3.53,5.54,5.54,0,0,1-3.75,1.11,5.48,5.48,0,0,1-3.74-1.11,4.48,4.48,0,0,1-1.25-3.53v-9.28h2Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-51"
                          d="M400.1,132.29l3.45-14h4.52l3.47,14h-2.29l-.76-3h-5.37l-.75,3Zm5.21-12-1.71,7H408l-1.7-7Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-52"
                          d="M427.92,132.29h-7v-14h2v12h5Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-53"
                          d="M436.92,132.29v-14h2v14Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-54"
                          d="M447.92,120.29v-2h10v2h-4v12h-2v-12Z"
                        ></path>
                        <path
                          className="cls-1 svg-elem-55"
                          d="M471.92,132.29h-2v-6.16l-4.64-7.84h2.5l2.9,5.66,2.92-5.66h2.48l-4.16,7.84Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Col>
          </Row>
          <div className={styles3.blinkbox} data-aos="zoom-in">
            <div className={styles3.light}></div>
            <div className={styles3.blink}>
              <span>
                Thank you all for making Invente 6.0 a grand success! Looking
                forward to seeing you all again next year!!
              </span>
              <br />
            </div>
          </div>
          <div data-aos="zoom-in" id="timer" className={styles.timer}>
            <div id="days" className={styles.days}>
              <div id="days_num" className={styles.numbers}></div>
              <div>days</div>
            </div>
            <div id="hours" className={styles.hours}>
              <div id="hours_num" className={styles.numbers}></div>
              <div>hours</div>
            </div>
            <div id="minutes" className={styles.minutes}>
              <div id="minutes_num" className={styles.numbers}></div>
              <div>minutes</div>
            </div>
            <div id="seconds" className={styles.seconds}>
              <div id="seconds_num" className={styles.numbers}></div>
              <div>seconds</div>
            </div>
          </div>
        </div>
        <Container className={styles.about_section}>
          <Row>
            <Col s={12} md={12} lg={2}>
              <div className={navbarToggle ? styles.hide : styles.astronaut}>
                <Image
                  src="/icons/astronaut.webp"
                  alt="astronaut"
                  width={200}
                  height={200}
                />
              </div>
            </Col>
            <Col sm={12} md={12} lg={8}>
              <div className={navbarToggle ? styles.hide : styles.sub_title}>
                <h2>ABOUT&nbsp; INVENTE</h2>
                <h2>ABOUT&nbsp; INVENTE</h2>
              </div>
              <p className={styles.about_content}>
                While the present can be considered as unprecedented at its
                best, SSN offers a platform to showcase your talents as a
                surety. Presenting to you the 6th edition of the annual techfest
                - Invente.
                <br />
                <br />
                Invente - a nexus of Innovation, Creativity and Entertainment,
                is a 2-day Intercollegiate ONLINE technical fest which aims to
                encourage students to think beyond academics and helps them
                discover their hidden passions and talents. This technical
                extravaganza gives space for students to flaunt their skills in
                various domains and caters to their adrenaline surges.
                <br />
                <br />
                October 8 & 9 - Save the dates, reinvent yourself in this Realm
                of Virtuality!
              </p>
            </Col>
            <Col sm={12} md={12} lg={2}>
              <div className={navbarToggle ? styles.hide : styles.astronaut2}>
                <Image
                  src="/icons/astronaut2.webp"
                  alt="astronaut"
                  width={250}
                  height={250}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className={navbarToggle ? styles.hide : styles.dept_section}
          id="departments"
        >
          <div className={styles.sub_title}>
            <h2>EVENTS</h2>
            <h2>EVENTS</h2>
          </div>
          <Container className={styles.dept_cards}>
            <Row>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/CSE/0',
                  }}
                  passHref
                >
                  <div className={styles['card'] + ' ' + styles['card_top']}>
                    <div className={styles.card_image}>
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/cse.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>CSE</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/IT/0',
                  }}
                  passHref
                >
                  <div className={styles['card'] + ' ' + styles['card_top']}>
                    <div className={styles.card_image}>
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/it.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>IT</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/ECE/0',
                  }}
                  passHref
                >
                  <div className={styles['card'] + ' ' + styles['card_top']}>
                    <div className={styles.card_image}>
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/ece.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>ECE</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/EEE/0',
                  }}
                  passHref
                >
                  <div className={styles['card'] + ' ' + styles['card_top']}>
                    <div className={styles.card_image}>
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/eee.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>EEE</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/BME/0',
                  }}
                  passHref
                >
                  <div className={styles.card}>
                    <div className={styles.card_image}>
                      {' '}
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/bme.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />{' '}
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>BME</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/Civil/0',
                  }}
                  passHref
                >
                  <div className={styles.card}>
                    <div className={styles.card_image}>
                      {' '}
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/civil.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />{' '}
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>Civil</p>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/Mechanical/0',
                  }}
                  passHref
                >
                  <div className={styles.card}>
                    <div className={styles.card_image}>
                      {' '}
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/mech.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />{' '}
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>Mechanical</p>
                    </div>
                  </div>
                </Link>
              </Col>

              <Col xs={6} sm={6} md={4} lg={3}>
                <Link
                  href={{
                    pathname: '/department/Chemical/0',
                  }}
                  passHref
                >
                  <div className={styles.card}>
                    <div className={styles.card_image}>
                      {' '}
                      {/* eslint-disable-next-line */}
                      <img
                        src="/icons/chem.webp"
                        alt="cse"
                        width={200}
                        height={200}
                        className={styles.img}
                      />{' '}
                    </div>
                    <div
                      className={
                        styles['card_title'] + ' ' + styles['title-white']
                      }
                    >
                      <p>Chemical</p>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          id="chief guest"
          className={styles.spons_section}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <div className={styles.sub_title}>
            <h2>Chief Guest</h2>
            <h2>Chief Guest</h2>
          </div>
          {/* eslint-disable-next-line */}
          <img
            style={{
              marginTop: '5em',
              marginBottom: '2em',
            }}
            className={styles.bioImage}
            src="/cg.jpg"
          ></img>
          <Container style={{ textAlign: 'left', padding: '1em' }}>
            <div style={{ textAlign: 'center' }}>
              <h1>S Sunil Kumar</h1>
              <h5>
                President,{' '}
                <span style={{ color: 'orange' }}>Henkel - India</span>
              </h5>
            </div>
            <br />
            <p style={{ textAlign: 'justify' }}>
              Sunil Kumar was appointed President of Henkel in India, effective
              October 01, 2020, responsible for steering the company through its
              next growth phase. In addition, he is the Regional Business
              Director ??? Packaging SBU for India, Middle East &amp; Africa,
              Henkel Adhesive Technologies. This is a role he has been essaying
              since January 2020. He joined Henkel in January 2015 as Business
              Director - Packaging &amp; Consumer Goods, South Asia. In this
              role, he was responsible for Flexible Packaging, Packaging and
              Labelling, Paper, Tapes, Labels, Personal Hygiene, Building,
              Construction and Sports and Fashion businesses in the country.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Sunil started his career in 1990 with the Carborundum Universal
              Ltd., a division of the Murugappa Group.He has also worked with
              Castrol between 1992 and January 2015 in various sales and
              marketing positions in the Industrial segments of Automotive,
              Metals amongst others.Sunil holds a Bachelor???s in Technology
              degree (B.Tech) in Chemical Engineering from Coimbatore Institute
              of Technology, CIT Coimbatore.He has also completed an Executive
              Certificate Program in Business Management, Indian Institute of
              Management, Kolkata.
            </p>
          </Container>
        </div>
        <div id="sponsors" className={styles.spons_section}>
          <div className={styles.sub_title}>
            <h2>SPONSORS</h2>
            <h2>SPONSORS</h2>
          </div>
          <Container className={styles.sponsors}>
            <Row className={styles.sponsorsSpaced}>
              <Col>
                <a href="https://facilio.com/" target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line */}
                  <img
                    src="/sponsors/facilio.webp"
                    alt="facilio"
                    width="300"
                    height="160"
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
                    width="350"
                    height="70"
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
                <a href="https://motorq.com/ " target="_blank" rel="noreferrer">
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
                    alt="gautham raj"
                    width="200"
                    height="70"
                  />{' '}
                </a>
              </Col>
            </Row>
            <Row>
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
                <a href="http://www.orono.in/" target="_blank" rel="noreferrer">
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
                <a href="https://cmti.co.in/" target="_blank" rel="noreferrer">
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
            </Row>
            <Row>
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
                <a href="http://www.roca.in/" target="_blank" rel="noreferrer">
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
            </Row>
            <Row>
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
            </Row>
            <Row>
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
                    alt="ISACA"
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
          </Container>
        </div>
        <div className={styles.org_section}>
          <div className={styles.sub_title}>
            <h2>ORGANISERS</h2>
            <h2>ORGANISERS</h2>
          </div>
          <Container className={styles.org_cards}>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/cse.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/vigneshb2704/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Vignesh B.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>CSE</p>
                      <p className={styles.org_card_phone}>+91 9841114252</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/it.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>
                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/alfrin-aj/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Alfrin A.J.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>IT</p>
                      <p className={styles.org_card_phone}>+91 9791394453</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/ece.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/nikhil-viswanath/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Nikhil V.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>ECE</p>
                      <p className={styles.org_card_phone}>+91 9176875101</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/eee.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/somnath-thilak-3b5a531b5/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Somnath T.V.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>EEE</p>
                      <p className={styles.org_card_phone}>+91 7550191192</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/civil.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/sidharath-shah-696278188/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Sidharath K.S.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>Civil</p>
                      <p className={styles.org_card_phone}>+91 9445892891</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/bme.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/lokesh-kumar-457511112/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lokesh K.M.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>BME</p>
                      <p className={styles.org_card_phone}>+91 8072233516</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/mech.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/cynthia-joy-070684196/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Cynthia J.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>Mechanical</p>
                      <p className={styles.org_card_phone}>+91 9480038164</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className={styles.org_cols}>
                <div className={styles.org_container}>
                  <div className={styles.org_card}>
                    <div className={styles.org_card_image_container}>
                      {/* eslint-disable-next-line */}
                      <img
                        className={styles.org_card_image}
                        src="/presidents/chem.webp"
                        alt=""
                        width="230"
                        height="200"
                      ></img>
                    </div>

                    <svg className={styles.org_card_svg} viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="rgba(144, 53, 172)"
                      />
                      <path
                        className={styles.card_line}
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="#03e9f4"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className={styles.org_card_content}>
                      <h6 className={styles.org_card_title}>
                        <a
                          href="https://www.linkedin.com/in/achsha-israel-482857154/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Achsha I.
                        </a>
                      </h6>
                      <p className={styles.org_card_dept}>Chemical</p>
                      <p className={styles.org_card_phone}>+91 9445610075</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.videoSection} style={{ marginTop: '8rem' }}>
          <div className={styles.sub_title}>
            <h2>WALKTHROUGH</h2>
            <h2>WALKTHROUGH</h2>
          </div>
          <br />
          <iframe
            width="560"
            height="315"
            className={styles.video}
            src="https://www.youtube.com/embed/4HN2JoihCfQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
