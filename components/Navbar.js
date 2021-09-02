import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../lib/hooks';
import styles from '../styles/Navbar.module.css';

export default function NavbarComp() {
  const { currentUser, logout } = useAuth();

  const [profClicked, setProfClicked] = useState(false);
  const onSignOut = async (event) => {
    try {
      await logout();
      console.log('SignOut success');
      router.push('/');
    } catch (err) {
      console.log('Failed to logout', err);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.inventeLogo}>
        <Link href="/" passHref>
          <Image
            src="/icons/logo.png"
            width={100}
            height={25}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className={currentUser ? styles.centerTab : styles.centerTabMore}>
        <div className={styles.authBar}>
          <Link href="/#departments">
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
          <div className={styles.dropDown}>
            <button
              className={
                profClicked
                  ? styles.userPic + ' ' + styles.userPicOnDropDown
                  : styles.userPic
              }
              onClick={() => setProfClicked(!profClicked)}
            >
              <Image
                src={
                  currentUser.photoURL
                    ? currentUser.photoURL
                    : '/icons/hacker.png'
                }
                alt="profile"
                width={40}
                height={40}
              />
            </button>
            <div
              className={
                profClicked ? styles.dropDownShown : styles.dropDownHidden
              }
            >
              <div>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </div>
              <div>
                <a href="#" onClick={() => onSignOut()}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
