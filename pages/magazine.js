import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarComp from '../components/Navbar';
import styles from '../styles/Magazine.module.css';

function Plans() {
  const router = useRouter();
  const [hide, setHide] = useState(true);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function drawCurtains() {
    document.getElementById('curtainRight').classList.add(styles.curtainRight);
    document.getElementById('curtainLeft').classList.add(styles.curtainLeft);
    document.getElementById('launchbutton').style.display = 'none';
    await timeout(3500).then(hidecurtain);
  }
  async function hidecurtain() {
    document.getElementById('curtainRight').classList.add(styles.hidecurtain);
    document.getElementById('curtainLeft').classList.add(styles.hidecurtain);
    await timeout(30).then(setHide(false));
  }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Head>
          <title>Magazine Launch</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavbarComp />
        <main>
          <div className={styles.mainContainer} style={{ marginTop: '6em' }}>
            <h1 className={styles.pageHeading2}>
              Techvibe Magazine
              <br />
            </h1>
            <section>
              <Row>
                <Col md="4" sm="12" style={{ textAlign: 'center' }}>
                  <a href="/TechVibe2021.pdf" target="_blank">
                    {/* eslint-disable-next-line */}
                    <img
                      className={styles.poster}
                      src="/mag1.JPG"
                      alt="Magazine 1"
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />{' '}
                  </a>
                </Col>
                <Col md="4" sm="12" style={{ textAlign: 'center' }}>
                  <a href="/TechVibe2020.pdf" target="_blank">
                    {/* eslint-disable-next-line */}
                    <img
                      className={styles.poster}
                      src="/mag2.JPG"
                      alt="Magazine 2"
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />{' '}
                  </a>
                </Col>
                <Col md="4" sm="12" style={{ textAlign: 'center' }}>
                  <a href="/TechVibe2019.pdf" target="_blank">
                    {/* eslint-disable-next-line */}
                    <img
                      className={styles.poster}
                      src="/mag3.JPG"
                      alt="Magazine 3"
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />{' '}
                  </a>
                </Col>
              </Row>
              {/* <button
                rel="noreferrer"
                className={styles.noselect}
                style={{ marginTop: '5%', marginBottom: '5%' }}
                onClick={drawCurtains}
                id="launchbutton"
              >
                <span className={styles.paytext}>Launch </span>
                <span className={styles.icon}>
                  <GrArticle
                    style={{ textColor: 'white' }}
                    className={styles.payIcon}
                  ></GrArticle>
                </span>
              </button> */}
              {/* {hide ? (
                <div className={styles.curtainContainer}>
                  <div id="curtainLeft" className={styles.curtain}>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                  </div>
                  <div id="curtainRight" className={styles.curtain}>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                    <div className={styles.curtainElement}></div>
                  </div>
                </div>
              ) : null} */}

              {/* <div id="magazine-iframe" style={{ paddingTop: '1%' }}>
                <iframe src="/mag.pdf" className={styles.pdf} width="100%" height="800px" />
              </div> */}
            </section>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Plans;
