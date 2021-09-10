import React from 'react';
import { AnimatedSocialIcon } from 'react-animated-social-icons';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = ({ sticky }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      style={{
        textAlign: 'center',
        marginTop: '3em',
        position: sticky ? 'absolute' : '',
      }}
      className={styles.align_items_center + ' ' + styles.footer}
    >
      <Row>
        <Col
          style={{
            textAlign: 'center',
          }}
          className={styles.footer_copyright}
        >
          <a target="_blank" href="#">
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
          </a>
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
  );
};

export default Footer;
