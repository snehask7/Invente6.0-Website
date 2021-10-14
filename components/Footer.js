import React from 'react';
import { AnimatedSocialIcon } from 'react-animated-social-icons';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = ({ sticky }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div
      fluid
      style={{
        textAlign: 'center',
        marginTop: '3em',
        position: sticky ? 'absolute' : '',
      }}
      className={styles.align_items_center + ' ' + styles.footer}
    >
      <p>Developed By</p>
      <Container
        style={{
          marginBottom: '1em',
        }}
      >
        <Row>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sneha-sriram-/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Sneha Sriram (CSE)
            </a>
          </Col>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sruthibijoyr/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Sruthi Bijoy (CSE)
            </a>
          </Col>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/siddharth-sriraman/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Siddharth Sriraman (CSE)
            </a>
          </Col>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vanathi-g/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Vanathi Ganeshraj (CSE)
            </a>
          </Col>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/harisaran-g/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Harisaran G (IT)
            </a>
          </Col>
          <Col xs={6} sm={6} md={4} lg={2}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sabeshbharathi/"
              className={styles.devLink}
              rel="noreferrer"
            >
              Sabesh Bharathi (IT)
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            style={{
              textAlign: 'center',
            }}
            className={styles.footer_copyright}
          >
            {/* <a target="_blank" href="#">
            <AnimatedSocialIcon
              width="1em"
              className={styles.icon}
              animation="bounce"
              brandName="linkedin"
              hoverColor="#0e76a8"
            />
          </a>
          <a target="_blank" href="#">
            <AnimatedSocialIcon
              width="1em"
              className={styles.icon}
              animation="bounce"
              brandName="facebook"
              hoverColor="#3b5998"
            />
          </a> */}
            <a
              target="_blank"
              href="https://www.instagram.com/ssn_invente6.0/"
              rel="noreferrer"
            >
              <AnimatedSocialIcon
                width="1em"
                className={styles.icon}
                animation="bounce"
                brandName="instagram"
                hoverColor="#E1306C"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: 'center',
            }}
            className={styles.footer_copyright}
          >
            <h4>Copyright © {year} SSN</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
