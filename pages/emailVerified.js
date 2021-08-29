import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import NavbarComp from '../components/Navbar';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Signin.module.css';

function Signin() {
  const router = useRouter();
  const { query } = useRouter();
  console.log(query);
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
            <h4>Your email has been verified</h4>
            <br />
            You can now sign in with your new account!{' '}
            <span style={{ color: 'rgba(0, 225, 255, 0.87)' }}>
              {' '}
              <Link href="/signin">Sign In</Link>
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
export default Signin;
