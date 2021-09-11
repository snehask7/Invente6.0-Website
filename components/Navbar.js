import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../lib/hooks';
import { useNav } from '../lib/navbarstate';
import styles from '../styles/Navbar.module.css';

export default function NavbarComp() {
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { navbarToggle, toggleNavbar } = useNav();

  const [profClicked, setProfClicked] = useState(false);
  const onSignOut = async (event) => {
    try {
      await logout();
      router.push('/');
    } catch (err) {
      console.log('Failed to logout', err);
    }
  };

  const updateNav = () => {
    if (!isOpen) {
      document.getElementById('navbar').style.right = '0px';
    } else {
      document.getElementById('navbar').style.right = '10px';
    }
  };

  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.inventeLogo}>
        <Link href="https://www.ssn.edu.in/" passHref>
          <Image
            src="/icons/ssn.webp"
            className={styles.ssnlogo}
            width={80}
            height={25}
            alt="logo"
          ></Image>
        </Link>
        <Link href="/" passHref>
          <Image
            src="/icons/logo.webp"
            className={styles.ssnlogo}
            width={100}
            height={25}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div
        className={styles.hamburger}
        onClick={() => {
          updateNav();
          setIsOpen(!isOpen);
          toggleNavbar();
        }}
      >
        {navbarToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        )}
      </div>
      <div className={currentUser ? styles.centerTab : styles.centerTabMore}>
        <div className={styles.authBar}>
          <Link href="/#departments">
            <a className={styles.centerNavLink}>Departments</a>
          </Link>
          <Link href="/workshop">
            <a className={styles.centerNavLink}>Workshops</a>
          </Link>
          <Link href="/hackathons">
            <a className={styles.centerNavLink}>Hackathon</a>
          </Link>
          <Link href="/#sponsors">
            <a className={styles.centerNavLink}>Sponsors</a>
          </Link>
          {/* <Link href="/workshops">
            <a className={styles.centerNavLink}>Workshops</a>
          </Link> */}
          {/* <Link href="/schedule">
            <a className={styles.centerNavLink}>Schedule</a>
          </Link> */}
          <Link href="/passes">
            <a className={styles.centerNavLink}>Passes</a>
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div className={styles.sideBar}>
          <div className={styles.inventeLogoSide}>
            <Link href="https://www.ssn.edu.in/" passHref>
              <Image
                src="/icons/ssn.webp"
                className={styles.ssnlogo}
                width={80}
                height={25}
                alt="logo"
              ></Image>
            </Link>
            <Link href="/" passHref>
              <Image
                src="/icons/logo.webp"
                className={styles.ssnlogo}
                width={100}
                height={25}
                alt="logo"
              ></Image>
            </Link>
          </div>
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
          <Link href="/workshop">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Workshops
            </a>
          </Link>
          <Link href="/hackathons">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Hackathon
            </a>
          </Link>
          <Link href="/#sponsors">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Sponsors
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
          {/* <Link href="/schedule">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Schedule
            </a>
          </Link> */}

          <Link href="/passes">
            <a
              onClick={() => {
                toggleNavbar();
                setIsOpen(!isOpen);
              }}
              className={styles.sideBarNavLink}
            >
              Passes
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
                src={
                  currentUser.photoURL
                    ? currentUser.photoURL
                    : '/icons/hacker.webp'
                }
                alt="profile"
                width={40}
                height={40}
              />
            </button>
            <div
              className={
                profClicked && !navbarToggle
                  ? styles.dropDownShown
                  : styles.dropDownHidden
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
