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
      <div className={styles.centerTab}>Center Tab</div>
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
