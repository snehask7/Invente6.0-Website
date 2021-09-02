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
          {/* <Link href="/workshops">
            <a className={styles.centerNavLink}>Workshops</a>
          </Link> */}

          <Link href="/schedule">
            <a className={styles.signupBtn}>Schedule</a>
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div className={styles.sideBar}>
          <Link href="/">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Home
            </a>
          </Link>
          <Link href="/#departments">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Departments
            </a>
          </Link>
          {/* <Link href="/workshops">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Workshops
            </a>
          </Link> */}
          <Link href="/schedule">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Schedule
            </a>
          </Link>

          {!currentUser ? (
            <>
              <Link href="/signin">
                <a
                  onClick={() => {
                    toggleNavbar();
                    setIsOpen(!isOpen);
                  }}
                  className={styles.sideBarNavLink}
                >
                  Log In
                </a>
              </Link>
              <Link href="/signup">
                <a
                  onClick={() => {
                    toggleNavbar();
                    setIsOpen(!isOpen);
                  }}
                  className={styles.sideBarNavLink}
                >
                  Sign Up
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <a
                  onClick={() => {
                    toggleNavbar();
                    setIsOpen(!isOpen);
                  }}
                  className={styles.sideBarNavLink}
                >
                  Profile
                </a>
              </Link>
              <Link href="/">
                <a
                  onClick={() => {
                    toggleNavbar();
                    setIsOpen(!isOpen);
                    logout();
                  }}
                  className={styles.sideBarNavLink}
                >
                  Log out
                </a>
              </Link>
            </>
          )}
        </div>
      ) : null}

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
                src="/icons/hacker.png"
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
