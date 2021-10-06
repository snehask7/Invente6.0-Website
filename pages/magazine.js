import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GrArticle } from 'react-icons/gr';
import styles from '../styles/Passes.module.css';

const PDFViewer = dynamic(() => import('../components/pdfViewer'), {
  ssr: false,
});

function Plans() {
  const router = useRouter();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Magazine Launch</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <main>
          <div className={styles.mainContainer}>
            <Row>
              <Col>
                <Link href="https://www.ssn.edu.in/" passHref>
                  <div style={{ paddingTop: '0.5em' }}>
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
              <Col className={styles.inventeHide}>
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
              SSN Invente 6.0 Magazine
              <br />
            </h1>
            <section>
              {/* <div>
                <iframe src="/cosmic.pdf" width="200%" height="800px" style={{ marginLeft: '-50%' }} />
              </div> */}
              <button
                rel="noreferrer"
                className={styles.noselect}
                style={{ marginTop: '40%' }}
              >
                <span className={styles.paytext}>Launch </span>
                <span className={styles.icon}>
                  <GrArticle
                    style={{ textColor: 'white' }}
                    className={styles.payIcon}
                  ></GrArticle>
                </span>
              </button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
export default Plans;
