import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NavbarComp from '../components/Navbar';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Signin() {
  const router = useRouter();

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
          <h3 style={{ color: '#0ff' }}>Your email has been verified</h3>
          <br />
          <br />
          <h5>
            You can now sign in with your new account!{' '}
            <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
              {' '}
              <Link href="/signin">Sign In</Link>
            </span>
          </h5>
        </div>
      </main>
    </div>
  );
}
export default Signin;
