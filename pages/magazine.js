import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GrArticle } from 'react-icons/gr';
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
        <main>
          <div className={styles.mainContainer} style={{ marginBottom: '3em' }}>
            <Row>
              <Col md="5" style={{ textAlign: 'right' }}>
                <Link href="https://www.ssn.edu.in/" passHref>
                  <div style={{ paddingTop: '3vh', marginRight: '2vh' }}>
                    <Image
                      src="/icons/ssn.webp"
                      className={styles.ssnlogo}
                      width={100}
                      height={50}
                      alt="logo"
                    ></Image>
                  </div>
                </Link>
              </Col>
              <Col md="7" className={styles.inventeHide}>
                <Link href="/" passHref>
                  <Image
                    src="/icons/invente.png"
                    width={300}
                    height={100}
                    alt="logo"
                  ></Image>
                </Link>
              </Col>
            </Row>
            <h1 className={styles.pageHeading2}>
              SSN Invente 6.0 Magazine Launch by Mr.Sunil Kumar
              <br />
            </h1>
            <section>
              <button
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
              </button>
              {hide ? (
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
              ) : null}

              <div id="magazine-iframe" style={{ paddingTop: '1%' }}>
                <iframe src="/mag.pdf" width="100%" height="800px" />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Plans;
