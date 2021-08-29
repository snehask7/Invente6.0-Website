import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavbarComp from '../components/Navbar';
import { useAuth } from '../lib/hooks';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { logout } = useAuth();
  const router = useRouter();

  const { currentUser } = useAuth();
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
    <div className={styles.container}>
      <Head>
        <title>Invente 6.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComp />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Invente 6.0</h1>
        {currentUser ? (
          <>
            <h3>Successfully Logged In as {currentUser.displayName}</h3>
            <button onClick={() => onSignOut()} className={styles.card}>
              <h2>Signout</h2>
            </button>
          </>
        ) : null}
        <Link
          href={{
            pathname: '/department/ECE',
          }}
        >
          <a className={styles.card}>
            <h2>ECE</h2>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/department/BME',
          }}
        >
          <a className={styles.card}>
            <h2>BME</h2>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/department/EEE',
          }}
        >
          <a className={styles.card}>
            <h2>EEE</h2>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/department/IT',
          }}
        >
          <a className={styles.card}>
            <h2>IT</h2>
          </a>
        </Link>
        <Link
          href={{
            pathname: '/department/Chemical',
          }}
        >
          <a className={styles.card}>
            <h2>Chemical</h2>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
