import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles2 from '../styles/Auth.module.css';
import styles from '../styles/Unverified.module.css';

function Unverified() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { navbarToggle, toggleNavbar, resetNavbar } = useNav();

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
        <div className={navbarToggle ? styles.hide : styles.signinCard}>
          <h1 className={styles.mailBoxText}>
            Check your mailbox to verify your identity.
            <br /> If you have verified your mail, logout and sign in again!
          </h1>
        </div>
      </main>
    </div>
  );
}
export default Unverified;
