import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../lib/hooks';
import styles from '../styles/Navbar.module.css';

export default function NavbarComp() {
  const { currentUser } = useAuth();

  return (
    <div className={styles.navbar}>
      <div className={styles.inventeLogo}>
        <Link href="/" passHref>
          <a>Logo</a>
        </Link>
      </div>
      <div className={styles.centerTab}>
        <div className={styles.authBar}>
          <Link href="/departments">
            <a className={styles.loginBtn}>Departments</a>
          </Link>
          <Link href="/workshops">
            <a className={styles.signupBtn}>Workshops</a>
          </Link>
          <Link href="/schedule">
            <a className={styles.signupBtn}>Schedule</a>
          </Link>
          <Link href="/contact">
            <a className={styles.signupBtn}>Contact Us</a>
          </Link>
        </div>
      </div>
      <div className={styles.profile}>
        {!currentUser ? (
          <div className={styles.authBar}>
            <Link href="/signin" passHref>
              <a className={styles.loginBtn}>Log In</a>
            </Link>
            <Link href="/signup" passHref>
              <a className={styles.signupBtn}>Sign Up</a>
            </Link>
          </div>
        ) : (
          <button>
            <Image
              src="/icons/hacker.png"
              alt="profile"
              width={40}
              height={40}
            />
          </button>
        )}
      </div>
    </div>
  );
}
