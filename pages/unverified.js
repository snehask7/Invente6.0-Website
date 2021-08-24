import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-typist';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Unverified() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser?.emailVerified) router.push('/');
  }, [currentUser, router]);

  return (
    <div className={styles.container}>
      <div className={styles2.animation_wrapper}>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_3']}
        ></div>
        <div
          className={styles2['particle'] + ' ' + styles2['particle_4']}
        ></div>
      </div>
      <NavbarComp />
      <main className={styles2.page_wrapper}>
        <div className={styles.signinCard}>
          <h1 className={styles.mailBoxText}>
              Check your mailbox to verify your identity.
          </h1>
        </div>
      </main>
    </div>
  );
}
export default Unverified;
